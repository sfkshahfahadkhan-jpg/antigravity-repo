import { initializeApp } from 'firebase/app';
import { initializeAuth, indexedDBLocalPersistence, browserPopupRedirectResolver, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeFirestore, doc, getDocFromServer } from 'firebase/firestore';
const firebaseConfig = {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  firestoreDatabaseId: import.meta.env.VITE_FIREBASE_FIRESTORE_DATABASE_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, firebaseConfig.firestoreDatabaseId);

export const auth = initializeAuth(app, {
  persistence: indexedDBLocalPersistence,
  popupRedirectResolver: browserPopupRedirectResolver,
});

export const googleProvider = new GoogleAuthProvider();

async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firestore connection successful");
  } catch (error) {
    console.error("Firestore initialization error:", error);
    if (error instanceof Error) {
      if (error.message.includes('the client is offline')) {
        console.error("Please check your Firebase configuration or network.");
      }
      if (error.message.includes('not-found') || error.message.includes('NOT_FOUND')) {
        console.warn("Database or connection document may not exist, but backend reached.");
      }
    }
  }
}
testConnection();

export const signInWithGoogle = async () => {
  console.log("Attempting Google Sign In...");
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Login successful:", result.user.email);
    return result;
  } catch (error) {
    console.error("Login Error Details:", error);
    if (error instanceof Error) {
      if (error.message.includes('auth/unauthorized-domain')) {
        alert("Domain Unauthorized: Add " + window.location.hostname + " to Firebase Authorized Domains.");
      } else if (error.message.includes('auth/popup-blocked')) {
        alert("Popup Blocked: Please allow popups for this site in your browser settings.");
      } else {
        alert("Login failed: " + error.message);
      }
    } else {
      alert("An unknown error occurred during login.");
    }
    throw error;
  }
};
