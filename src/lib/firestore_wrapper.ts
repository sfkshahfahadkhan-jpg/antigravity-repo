import { 
  addDoc as originalAddDoc, 
  setDoc as originalSetDoc, 
  updateDoc as originalUpdateDoc, 
  deleteDoc as originalDeleteDoc, 
  getDocs as originalGetDocs, 
  getDoc as originalGetDoc,
  onSnapshot as originalOnSnapshot,
  getDocFromServer as originalGetDocFromServer,
  CollectionReference, DocumentReference, Query, DocumentSnapshot, QuerySnapshot
} from 'firebase/firestore';
import { auth } from '@/src/lib/firebase';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

function getPath(ref: any): string {
  if (!ref) return 'unknown';
  if (ref.path) return ref.path;
  if (ref.id) return ref.id; // query doesn't have direct path easily but id might be collection name
  return 'unknown';
}

export const setDoc = async (ref: DocumentReference, data: any, options?: any) => {
  try {
    return options ? await originalSetDoc(ref, data, options) : await originalSetDoc(ref, data);
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, getPath(ref));
  }
};

export const addDoc = async (ref: CollectionReference, data: any) => {
  try {
    return await originalAddDoc(ref, data);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, getPath(ref));
  }
};

export const updateDoc = async (ref: DocumentReference, data: any) => {
  try {
    return await originalUpdateDoc(ref, data);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, getPath(ref));
  }
};

export const deleteDoc = async (ref: DocumentReference) => {
  try {
    return await originalDeleteDoc(ref);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, getPath(ref));
  }
};

export const getDoc = async (ref: DocumentReference) => {
  try {
    return await originalGetDoc(ref);
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, getPath(ref));
  }
};

export const getDocFromServer = async (ref: DocumentReference) => {
  try {
    return await originalGetDocFromServer(ref);
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, getPath(ref));
  }
};

export const getDocs = async (ref: Query | CollectionReference) => {
  try {
    return await originalGetDocs(ref);
  } catch (error) {
    handleFirestoreError(error, ref instanceof CollectionReference ? OperationType.LIST : OperationType.LIST, getPath(ref));
  }
};

export const onSnapshot = (ref: any, observerOrOnNext: any, onError?: any, onCompletion?: any) => {
  let onNext = observerOrOnNext;
  if (typeof observerOrOnNext === 'object') {
     onNext = observerOrOnNext.next;
     onError = observerOrOnNext.error;
     onCompletion = observerOrOnNext.complete;
  }
  return originalOnSnapshot(ref, (snapshot: any) => {
    if (onNext) onNext(snapshot);
  }, (error: any) => {
    try {
      handleFirestoreError(error, OperationType.LIST, getPath(ref));
    } catch (e) {
      if (onError) onError(e);
      else throw e;
    }
  }, onCompletion);
};
