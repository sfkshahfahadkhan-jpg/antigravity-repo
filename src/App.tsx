import { useState, useEffect, useMemo, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  RotateCcw, 
  Trophy, 
  XCircle,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Cpu,
  Star,
  FileText,
  Timer,
  Users,
  LogOut,
  Mail,
  User as UserIcon,
  ShieldCheck,
  Search,
  History,
  Zap,
  Target,
  Activity,
  UserCheck,
  Clock,
  Beaker,
  Microscope,
  Brain,
  Dna,
  Leaf,
  Dog,
  Coffee,
  Wind,
  Heart,
  Thermometer,
  Sun,
  Moon,
  BarChart2,
  Medal,
  Award,
  TrendingUp,
  BrainCircuit,
  Sparkles,
  Flame,
  Flag,
  LayoutGrid,
  Lock,
  Unlock,
  BookOpen,
  Video,
  HelpCircle,
  Key,
  FolderOpen,
  FolderPlus,
  Eye,
  FileSliders,
  Briefcase,
  Globe,
  Youtube,
  Quote,
  Upload,
  BarChart,
  Settings,
  Database,
  Terminal,
  Settings2,
  Trash2,
  Edit,
  ClipboardList,
  Plus,
  MoreVertical,
  Check,
  AlertTriangle,
  History as HistoryIcon,
  FileJson,
  FileSpreadsheet,
  Type,
  PieChart,
  Download,
  Printer,
  Filter,
  ArrowDownAz,
  ChevronLeft,
  AlertCircle,
  X,
  ArrowDownToLine
} from 'lucide-react';
import { 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as ReTooltip, 
  ResponsiveContainer, 
  Cell,
  PieChart as RePieChart,
  Pie,
  AreaChart,
  Area,
  Tooltip
} from 'recharts';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { 
  onAuthStateChanged, 
  signOut, 
  User 
} from 'firebase/auth';
import { collection, query, orderBy, Timestamp, doc, where, limit } from 'firebase/firestore';
import { getDocFromServer } from './lib/firestore_wrapper';
import { addDoc, getDocs, setDoc, getDoc, updateDoc, onSnapshot, deleteDoc } from './lib/firestore_wrapper';
import { auth, db, signInWithGoogle } from './lib/firebase';
import { Question, QuizState, UserProgress, QuizSubmission, StudentProfile, AccessCode } from './types';
import { quizRegistry } from './quizRegistry';

import founderImage from './assets/images/regenerated_image_1778922687893.jpg';

import { Scale } from 'lucide-react';




export type Chapter = {
  id: string;
  name: string;
  subtitle: string;
  icon: any;
  questions: Question[]; // This will stay Question[] but CURRICULUM will use empty arrays initially
  timePerQuestion: number;
};


export const CURRICULUM = {
  physics: {
    id: 'physics',
    name: 'Physics',
    icon: Zap,
    grades: {
      '11': {
        name: 'Grade 11 (FSc Part 1)',
        chapters: [
          { id: 'phy-measurements', name: 'Measurements', subtitle: 'Chapter 1: Units and Errors', icon: FileText, questions: [], timePerQuestion: 60 },
          { id: 'phy-vectors', name: 'Vectors and Equilibrium', subtitle: 'Chapter 2: Vector Algebra', icon: Target, questions: [], timePerQuestion: 60 },
          { id: 'force-motion', name: 'Force and Motion', subtitle: 'Chapter 3: Dynamics', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'work', name: 'Work and Energy', subtitle: 'Chapter 4: Work and Energy', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'p-circular', name: 'Rotational & Circular Motion', subtitle: 'Chapter 5: Angular Motion & Satellites', icon: RotateCcw, questions: [], timePerQuestion: 60 },
          { id: 'fluid-dynamics', name: 'Fluid Dynamics', subtitle: 'Chapter 6: Fluid Dynamics', icon: FileText, questions: [], timePerQuestion: 60 },
          { id: 'oscillations', name: 'Oscillations', subtitle: 'Chapter 7: Oscillations', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'waves', name: 'Waves', subtitle: 'Chapter 8: Waves', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'physical-optics', name: 'Physical Optics', subtitle: 'Chapter 9: Physical Optics', icon: Star, questions: [], timePerQuestion: 60 },
          { id: 'optical-instruments', name: 'Optical Instruments', subtitle: 'Chapter 10: Optical Instruments', icon: Search, questions: [], timePerQuestion: 60 },
          { id: 'thermodynamics', name: 'Heat and Thermodynamics', subtitle: 'Chapter 11: Heat and Thermodynamics', icon: Activity, questions: [], timePerQuestion: 60 },


        ] as Chapter[]
      },
      '12': {
        name: 'Grade 12 (FSc Part 2)',
        chapters: [
          { id: 'p-electrostatics', name: 'Electrostatics', subtitle: 'Chapter 12: Electrostatics', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'current-electricity', name: 'Current Electricity', subtitle: 'Chapter 13: Current Electricity', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'electromagnetism', name: 'Electromagnetism', subtitle: 'Chapter 14: Electromagnetism', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'electromagnetic-induction', name: 'Electromagnetic Induction', subtitle: 'Chapter 15: Electromagnetic Induction', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'alternating-current', name: 'Alternating Current', subtitle: 'Chapter 16: Alternating Current', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'physics-of-solids', name: 'Physics of Solids', subtitle: 'Chapter 17: Physics of Solids', icon: Target, questions: [], timePerQuestion: 60 },
          { id: 'electronics', name: 'Electronics', subtitle: 'Chapter 18: Semiconductors and Systems', icon: Cpu, questions: [], timePerQuestion: 60 },
          { id: 'modern-physics', name: 'Dawn of Modern Physics', subtitle: 'Chapter 19: Relativistic and Quantum Phenomena', icon: Star, questions: [], timePerQuestion: 60 },
          { id: 'atomic-spectra', name: 'Atomic Spectra', subtitle: 'Chapter 20: Hydrogen Spectrum and Lasers', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'nuclear-physics', name: 'Nuclear Physics', subtitle: 'Chapter 21: Radioactivity and Nuclear Energy', icon: Target, questions: [], timePerQuestion: 60 },


        ] as Chapter[]
      }
    }
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    icon: Beaker,
    grades: {
      '11': {
        name: 'Grade 11 (FSc Part 1)',
        chapters: [
          { id: 'ch-basic-concepts', name: 'Basic Concepts', subtitle: 'Chapter 1: Stoichiometry and Moles', icon: FileText, questions: [], timePerQuestion: 60 },
          { id: 'ch-experimental-tech', name: 'Experimental Techniques', subtitle: 'Chapter 2: Purification and Analysis', icon: Search, questions: [], timePerQuestion: 60 },
          { id: 'ch-gases', name: 'Gases', subtitle: 'Chapter 3: Kinetic Molecular Theory', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'ch-liquids-solids', name: 'Liquids and Solids', subtitle: 'Chapter 4: Intermolecular Forces', icon: Target, questions: [], timePerQuestion: 60 },
          { id: 'ch-atomic-structure', name: 'Atomic Structure', subtitle: 'Chapter 5: Quantum Numbers and Orbitals', icon: Star, questions: [], timePerQuestion: 60 },
          { id: 'ch-chemical-bonding', name: 'Chemical Bonding', subtitle: 'Chapter 6: Molecular Geometry', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'ch-thermochemistry', name: 'Thermochemistry', subtitle: 'Chapter 7: Thermochemistry', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'chem-equilibrium', name: 'Chemical Equilibrium', subtitle: 'Chapter 8: Equilibrium', icon: Scale, questions: [], timePerQuestion: 60 },
          { id: 'ch-solutions', name: 'Solutions', subtitle: 'Chapter 9: Concentration and Colligative Properties', icon: FileText, questions: [], timePerQuestion: 60 },
          { id: 'ch-electrochemistry', name: 'Electrochemistry', subtitle: 'Chapter 10: Electrochemistry', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'ch-kinetics', name: 'Reaction Kinetics', subtitle: 'Chapter 11: Kinetics', icon: Clock, questions: [], timePerQuestion: 60 },


        ] as Chapter[]
      },
      '12': {
        name: 'Grade 12 (FSc Part 2)',
        chapters: [
          { id: 'ch-periodic-class', name: 'Periodic Classification', subtitle: 'Chapter 1: Periodicity', icon: FileText, questions: [], timePerQuestion: 60 },
          { id: 'ch-s-block', name: 's-Block Elements', subtitle: 'Chapter 2: Alkali and Alkaline Earth Metals', icon: Zap, questions: [], timePerQuestion: 60 },


          { id: 'ch-group-3a-4a', name: 'Group III-A and IV-A', subtitle: 'Chapter 3: Boron and Carbon Families', icon: Star, questions: [], timePerQuestion: 60 },
          { id: 'ch-group-5a-6a', name: 'Group V-A and VI-A', subtitle: 'Chapter 4: Nitrogen and Oxygen Families', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'ch-halogens-noble', name: 'Halogens & Noble Gases', subtitle: 'Chapter 5: Group VII-A and VIII', icon: Search, questions: [], timePerQuestion: 60 },
          { id: 'ch-transition-elements', name: 'Transition Elements', subtitle: 'Chapter 6: d-Block and f-Block', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'ch-organic-principles', name: 'Organic Principles', subtitle: 'Chapter 7: Fundamentals of Organic Chemistry', icon: Brain, questions: [], timePerQuestion: 60 },
          { id: 'ch-aliphatic-hydrocarbons', name: 'Aliphatic Hydrocarbons', subtitle: 'Chapter 8: Alkanes, Alkenes, Alkynes', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'ch-aromatic-hydrocarbons', name: 'Aromatic Hydrocarbons', subtitle: 'Chapter 9: Benzene and its derivatives', icon: Star, questions: [], timePerQuestion: 60 },
          { id: 'ch-alkyl-halides', name: 'Alkyl Halides', subtitle: 'Chapter 10: SN1 and SN2 Mechanisms', icon: Target, questions: [], timePerQuestion: 60 },
          { id: 'ch-alcohols-phenols', name: 'Alcohols, Phenols, Ethers', subtitle: 'Chapter 11: Functional Groups', icon: Beaker, questions: [], timePerQuestion: 60 },
          { id: 'ch-aldehydes-ketones', name: 'Aldehydes and Ketones', subtitle: 'Chapter 12: Carbonyl Compounds', icon: FileText, questions: [], timePerQuestion: 60 },
          { id: 'ch-carboxylic-acids', name: 'Carboxylic Acids', subtitle: 'Chapter 13: Acid derivatives', icon: Target, questions: [], timePerQuestion: 60 },
          { id: 'ch-macromolecules', name: 'Macromolecules', subtitle: 'Chapter 14: Polymers and Proteins', icon: Dna, questions: [], timePerQuestion: 60 },
          { id: 'ch-industries', name: 'Chemical Industries', subtitle: 'Chapter 15: Industrial Processes in Pakistan', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'ch-environmental', name: 'Environmental Chemistry', subtitle: 'Chapter 16: Air and Water Pollution', icon: Microscope, questions: [], timePerQuestion: 60 },


        ] as Chapter[]
      }
    }
  },
  biology: {
    id: 'biology',
    name: 'Biology',
    icon: Microscope,
    grades: {
      '11': {
        name: 'Grade 11 (FSc Part 1)',
        chapters: [
          { id: 'bio-intro', name: 'Introduction', subtitle: 'Chapter 1: Levels of Organization', icon: FileText, questions: [], timePerQuestion: 60 },
          { id: 'bio-molecules', name: 'Biological Molecules', subtitle: 'Chapter 2: Carbohydrates, Lipids, Proteins', icon: Dna, questions: [], timePerQuestion: 60 },
          { id: 'bio-enzymes', name: 'Enzymes', subtitle: 'Chapter 3: Kinetics and Inhibition', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'bio-cell', name: 'The Cell', subtitle: 'Chapter 4: Organelles and Functions', icon: Microscope, questions: [], timePerQuestion: 60 },
          { id: 'bio-variety-life', name: 'Variety of Life', subtitle: 'Chapter 5: Virus and Classification', icon: Star, questions: [], timePerQuestion: 60 },
          { id: 'bio-prokaryotes', name: 'Kingdom Prokaryotae', subtitle: 'Chapter 6: Bacteria and Cyanobacteria', icon: Microscope, questions: [], timePerQuestion: 60 },
          { id: 'bio-protists', name: 'Kingdom Protista', subtitle: 'Chapter 7: Protozoa and Algae', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'bio-fungi', name: 'Kingdom Fungi', subtitle: 'Chapter 8: Lifecycle and Classification', icon: Target, questions: [], timePerQuestion: 60 },
          { id: 'bio-plantae', name: 'Kingdom Plantae', subtitle: 'Chapter 8: Kingdom Plantae', icon: Leaf, questions: [], timePerQuestion: 60 },
          { id: 'bio-animalia', name: 'Kingdom Animalia', subtitle: 'Chapter 9: Kingdom Animalia', icon: Dog, questions: [], timePerQuestion: 60 },
          { id: 'bio-bioenergetics', name: 'Bioenergetics', subtitle: 'Chapter 10: Bioenergetics', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'bio-nutrition', name: 'Nutrition', subtitle: 'Chapter 12: Nutrition', icon: Coffee, questions: [], timePerQuestion: 60 },
          { id: 'bio-exchange', name: 'Gaseous Exchange', subtitle: 'Chapter 13: Gaseous Exchange', icon: Wind, questions: [], timePerQuestion: 60 },
          { id: 'bio-transport', name: 'Transport', subtitle: 'Chapter 14: Transport', icon: Heart, questions: [], timePerQuestion: 60 },


        ] as Chapter[]
      },
      '12': {
        name: 'Grade 12 (FSc Part 2)',
        chapters: [
          { id: 'bio-homeostasis', name: 'Homeostasis', subtitle: 'Chapter 15: Homeostasis', icon: Thermometer, questions: [], timePerQuestion: 60 },
          { id: 'bio-support', name: 'Support and Movement', subtitle: 'Chapter 16: Support and Movement', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'bio-coordination', name: 'Coordination and Control', subtitle: 'Chapter 17: Coordination and Control', icon: Brain, questions: [], timePerQuestion: 60 },
          { id: 'bio-reproduction', name: 'Reproduction', subtitle: 'Chapter 18: Reproduction', icon: Microscope, questions: [], timePerQuestion: 60 },
          { id: 'bio-growth', name: 'Growth and Development', subtitle: 'Chapter 19: Growth and Development', icon: Clock, questions: [], timePerQuestion: 60 },
          { id: 'bio-dna', name: 'Chromosomes and DNA', subtitle: 'Chapter 20: Hereditary Material', icon: Dna, questions: [], timePerQuestion: 60 },
          { id: 'bio-cell-cycle', name: 'Cell Cycle', subtitle: 'Chapter 21: Mitosis and Meiosis', icon: Microscope, questions: [], timePerQuestion: 60 },
          { id: 'bio-genetics', name: 'Variation and Genetics', subtitle: 'Chapter 22: Variation and Genetics', icon: Star, questions: [], timePerQuestion: 60 },
          { id: 'bio-biotech', name: 'Biotechnology', subtitle: 'Chapter 23: Biotechnology', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'bio-evolution', name: 'Evolution', subtitle: 'Chapter 24: Evolution', icon: Target, questions: [], timePerQuestion: 60 },
          { id: 'bio-ecosystem', name: 'Ecosystem', subtitle: 'Chapter 25: Ecosystem', icon: FileText, questions: [], timePerQuestion: 60 },
          { id: 'bio-major-eco', name: 'Major Ecosystems', subtitle: 'Chapter 26: Major Ecosystems', icon: Search, questions: [], timePerQuestion: 60 },
          { id: 'bio-environment', name: 'Man and Environment', subtitle: 'Chapter 27: Man and Environment', icon: Microscope, questions: [], timePerQuestion: 60 },


        ] as Chapter[]
      }
    }
  },
  reasoning: {
    id: 'reasoning',
    name: 'AKU Elite Reasoning',
    icon: BrainCircuit,
    grades: {
      '1': {
        name: 'AKU Logic & IQ Vault',
        chapters: [
          { id: 'lr-critical', name: 'Critical Thinking', subtitle: 'Analyzing Arguments & Assumptions', icon: Brain, questions: [], timePerQuestion: 60 },
          { id: 'lr-series', name: 'Pattern Intelligence', subtitle: 'Complex Series & Matrices', icon: Target, questions: [], timePerQuestion: 60 },
          { id: 'lr-quantitative', name: 'AKU Quantitative Drills', subtitle: 'Fast Math & Logic Passages', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'lr-analytical', name: 'Analytical Reasoning', subtitle: 'Scenario Mapping & Setup', icon: Microscope, questions: [], timePerQuestion: 60 },
          { id: 'lr-decision', name: 'Course of Action', subtitle: 'Ethical & Policy Decisions', icon: UserCheck, questions: [], timePerQuestion: 60 },
        ] as Chapter[]
      }
    }
  }
};


enum OperationType {
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
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  // Only alert on write/update failures to avoid intrusive popups for guest users on read-only areas
  if (operationType !== OperationType.GET && operationType !== OperationType.LIST) {
    alert(`Action Failed (${operationType} at ${path}): ${errInfo.error}`);
  }
  throw new Error(JSON.stringify(errInfo));
}

async function startConnectionTest() {
  try {
    const docRef = doc(db, 'test', 'connection');
    await getDocFromServer(docRef);
  } catch (error) {
    if (error instanceof Error && error.message.includes('offline')) {
      console.error("Firebase connection test failed: client is offline");
    }
  }
}
startConnectionTest();

interface LiveProgress {
  studentEmail: string;
  studentName: string;
  sectionName: string;
  currentQuestionIndex: number;
  totalQuestions: number;
  score: number;
  lastUpdated: number;
  isFinished: boolean;
}

const INTERVIEW_PREP_VIDEOS = [
  {
    id: "-mO7KgyjaV8",
    title: "AKU Interview Prep - Part 1",
    subtitle: "Strategic Guidance & Ethical Foundations",
    thumbnail: "https://img.youtube.com/vi/-mO7KgyjaV8/maxresdefault.jpg"
  },
  {
    id: "vkkh2puVh28",
    title: "AKU Interview Prep - Part 2",
    subtitle: "Advanced MMI Scenarios & Critical Thinking",
    thumbnail: "https://img.youtube.com/vi/vkkh2puVh28/maxresdefault.jpg"
  }
];

const PRACTICE_RESOURCES_LIST = [
  { id: 'math-pract', name: 'Math Reasoning Practice', type: 'INTERACTIVE', subject: 'Mathematics', category: 'Reasoning', action: 'quiz_direct_math_pract' },
  { id: 'sci-pract', name: 'Science Reasoning Practice', type: 'INTERACTIVE', subject: 'Science', category: 'Reasoning', action: 'quiz_direct_sci_pract' },
  { id: 'interview-prep-module', name: 'Interview Mastery Masterclass', type: 'INTERACTIVE', subject: 'Interview', category: 'Topic Wise', action: 'interview-prep' },
  { id: 'global-vanguard-module', name: 'Global Vanguard Leaderboard', type: 'SOCIAL', subject: 'Rankings', category: 'Topic Wise', action: 'leaderboard' },
  { id: 'aku-2009-full', name: 'AKU 2009 Consolidated', type: 'EXAM', subject: 'AKU Past Papers', category: 'AKU Past Papers', action: 'quiz_direct_aku_2009_full' },
  { id: 'aku-2012-full', name: 'AKU 2012 Full Paper', type: 'EXAM', subject: 'AKU Past Papers', category: 'AKU Past Papers', action: 'quiz_direct_aku_2012_full' },
];

const PORTFOLIO_DATA = {
  name: "Dr. Shah Fahad Khan",
  title: "Doctor of Medicine | Professional Educator",
  profile: "Highly qualified and dedicated educator with over 6 years of experience teaching IGCSE/IB/A-LEVEL Sciences (Chemistry, Biology, Physics) and Mathematics at both local and international schools. Seeking to leverage my expertise in active learning methodologies and technology-driven teaching to inspire and guide students in achieving academic excellence as an A-Level tutor.",
  education: [
    { degree: "Doctor of Medicine (M.B.B.S)", institution: "Dow University of Health Sciences, Karachi", period: "2019 - 2025", details: "Graduation: 2025" },
    { degree: "GCE A Levels (CAIE)", institution: "Nixor College, Karachi", period: "2017 - 2019", details: "Subjects: Chemistry, Biology, Physics, Mathematics" },
    { degree: "GCE O Levels (CAIE)", institution: "Happy Home School, Karachi", period: "2017", details: "Graduation: 2017" }
  ],
  experience: [
    { role: "CEO and Founder", company: "SFK Academy", period: "2019 - Present" },
    { role: "IGCSE/A-Level and IB Sciences Tutor", company: "Cana Elite Education Academy, Hong Kong", period: "Present" },
    { role: "IGCSE/A-Level and IB Sciences Tutor", company: "ToppTutors Hong Kong", period: "Present" },
    { role: "IGCSE/A-Level and IB Sciences Tutor", company: "For You Education Academy, Hong Kong", period: "Sep 2024 - Present" },
    { role: "A Level Teacher", company: "Nixor College, Karachi", period: "2021 - 2023" }
  ],
  skills: ["Technology Integration", "Student-Centered Approach", "Communication", "Active Learning Methodologies"]
};

const VIDEO_PLAYLIST = {
  id: "PLDgKaUqENeyZqnsdw2v9ZDYLpTXS-CGrv",
  title: "Elite Science & AKU Preparation",
  description: "Comprehensive lecture series covering Biology, Chemistry, Physics, and Reasoning for AKU & MDCAT",
  url: "https://youtube.com/playlist?list=PLDgKaUqENeyZqnsdw2v9ZDYLpTXS-CGrv&si=-JvrkR8PP1jVsN7p"
};

import { AKU_2009_DATA } from './data/aku2009_dataset';
import { AKU_2012_DATA } from './data/aku2012_dataset';
import { AKU_2020_DATA } from './data/aku2020_dataset';
import { AKU_2021_DATA } from './data/aku2021_dataset';
import { AKU_2022_DATA } from './data/aku2022_dataset';
import { AKU_2023_DATA } from './data/aku2023_dataset';
import { AKU_2024_DATA } from './data/aku2024_dataset';
import { AKU_2025_DATA } from './data/aku2025_dataset';
import { MIXED_SUBJECTS_DATA } from './data/mixed_subjects';

export default function App() {
  const [state, setState] = useState<QuizState>('welcome');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [studentInfo, setStudentInfo] = useState<StudentProfile | null>(null);
  const [activeSection, setActiveSection] = useState<Chapter | null>(null);
  const [browseStep, setBrowseStep] = useState<'subject' | 'grade' | 'chapter'>('subject');
  const [selectedSubject, setSelectedSubject] = useState<keyof typeof CURRICULUM | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<'11' | '12' | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [submissions, setSubmissions] = useState<QuizSubmission[]>([]);
  const [liveMonitor, setLiveMonitor] = useState<LiveProgress[]>([]);
  const [adminTab, setAdminTab] = useState<'home' | 'quizzes' | 'questions' | 'import' | 'results' | 'settings'>('home');
  const [adminPIN, setAdminPIN] = useState('admin2024');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  
  const [localQuizzes, setLocalQuizzes] = useState<any[]>([]);
  const [localAttempts, setLocalAttempts] = useState<any[]>([]);
  const [appSettings, setAppSettings] = useState({
    title: 'AKU Quiz Platform',
    defaultTimeLimit: 30,
    passingScore: 70,
    showExplanations: true,
    requireName: true,
  });

  const [importPreview, setImportPreview] = useState<any[]>([]);
  const [showImportModal, setShowImportModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [siteConfig, setSiteConfig] = useState<any>({
    academyName: 'SFK Elite Academy',
    heroTitle: 'Excellence in Medical Entry Prep',
    heroSubtitle: 'Master the AKU-Style Assessment with Precision',
    missionStatement: 'Providing elite resources for Pakistan\'s future medical leaders.',
    founderBio: 'Dedicated to education for over a decade.',
    videoLink: 'https://youtube.com/embed/dQw4w9WgXcQ',
    founderImage: '/src/assets/images/regenerated_image_1778922687893.jpg'
  });
  const [adminSettings, setAdminSettings] = useState<any>({
    guestEntry: true,
    autoTimer: true,
    showExplanations: true
  });
  const [accessCodeInput, setAccessCodeInput] = useState('');
  const [redeeming, setRedeeming] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dynamicQuizzes, setDynamicQuizzes] = useState<any[]>([]);
  const [accessCodes, setAccessCodes] = useState<any[]>([]);
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [pastedText, setPastedText] = useState('');
  
  // Student flow state
  const [studentName, setStudentName] = useState('');
  const [currentQuiz, setCurrentQuiz] = useState<any | null>(null);
  const [currentAnswers, setCurrentAnswers] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [quizStartTime, setQuizStartTime] = useState<number>(0);
  const [quizResults, setQuizResults] = useState<any | null>(null);

  // Persistence logic
  useEffect(() => {
    const savedData = localStorage.getItem('aku_quiz_data');
    let initialQuizzes = [
      ...AKU_2009_DATA, 
      ...AKU_2012_DATA, 
      ...AKU_2020_DATA, 
      ...AKU_2021_DATA, 
      ...AKU_2022_DATA, 
      ...AKU_2023_DATA, 
      ...AKU_2024_DATA, 
      ...AKU_2025_DATA,
      ...MIXED_SUBJECTS_DATA
    ];

    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.quizzes) {
          const existingIds = new Set(initialQuizzes.map(q => q.id));
          const userQuizzes = parsed.quizzes.filter((q: any) => !existingIds.has(q.id));
          initialQuizzes = [...initialQuizzes, ...userQuizzes];
        }
        setLocalQuizzes(initialQuizzes);
        if (parsed.attempts) setLocalAttempts(parsed.attempts);
        if (parsed.settings) {
          setAppSettings(parsed.settings);
          if (parsed.settings.adminPIN) setAdminPIN(parsed.settings.adminPIN);
        }
      } catch (e) {
        console.error('Failed to load local storage data', e);
        setLocalQuizzes(initialQuizzes);
      }
    } else {
      setLocalQuizzes(initialQuizzes);
    }
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      const dataToSave = {
        quizzes: localQuizzes,
        attempts: localAttempts,
        settings: { ...appSettings, adminPIN }
      };
      localStorage.setItem('aku_quiz_data', JSON.stringify(dataToSave));
    }, 1000); // Debounce saves by 1s

    return () => clearTimeout(handler);
  }, [localQuizzes, localAttempts, appSettings, adminPIN]);
  const [cbQuestions, setCbQuestions] = useState([{ text: '', options: ['', '', '', ''], correctAnswer: '' }]);
  const [showCourseBuilder, setShowCourseBuilder] = useState(false);
  const [cbTitle, setCbTitle] = useState('');
  const [cbCourse, setCbCourse] = useState('');
  const [cbSubCourse, setCbSubCourse] = useState('');
  const [cbIsPremium, setCbIsPremium] = useState(false);

  const handleSaveBuiltCourse = async () => {
    if (!cbTitle || !cbCourse || cbQuestions.some(q => !q.text || !q.correctAnswer || q.options.some(o => !o))) {
      alert('Please fill out all fields. Ensure questions have text, options, and a correct answer.');
      return;
    }
    const data = {
      title: cbTitle,
      subject: cbCourse,
      subCourse: cbSubCourse,
      questions: cbQuestions.map((q, i) => ({ id: 'q-' + i, ...q })),
      uploadedAt: Date.now(),
      isPremium: cbIsPremium
    };
    try {
      await addDoc(collection(db, 'quizzes'), data);
      alert('Course successfully saved!');
      setShowCourseBuilder(false);
      setCbTitle('');
      setCbCourse('');
      setCbSubCourse('');
      setCbIsPremium(false);
      setCbQuestions([{ text: '', options: ['', '', '', ''], correctAnswer: '' }]);
    } catch (e) {
      alert('Error saving course: ' + e);
    }
  };

  const [personalStats, setPersonalStats] = useState<{
    totalSubmissions: number;
    averageScore: number;
    totalPossible: number;
    highestScore: number;
    history: QuizSubmission[];
  } | null>(null);
  const [leaderboard, setLeaderboard] = useState<{
    studentName: string;
    studentEmail: string;
    totalScore: number;
    quizzesTaken: number;
    accuracy: number;
    prestige: number;
  }[]>([]);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sfk-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });
  const [isChatOpen, setIsChatOpen] = useState(false);

  const isPremiumActive = useMemo(() => {
    if (!studentInfo?.isPremium) return false;
    if (!studentInfo.premiumUntil) return true;
    return studentInfo.premiumUntil > Date.now();
  }, [studentInfo]);

  const isAdminUser = useMemo(() => {
    if (studentInfo && (studentInfo.role === 'admin' || studentInfo.role === 'editor')) return true;
    const email = currentUser?.email;
    return email === 'sfkshahfahadkhan@gmail.com' || email === 'fshah8133@gmail.com';
  }, [currentUser, studentInfo]);

  const adminStats = useMemo(() => {
    const totalQuizzes = localQuizzes.length;
    const totalQuestions = localQuizzes.reduce((acc, q) => acc + (q.questions?.length || 0), 0);
    const totalAttempts = localAttempts.length;
    const totalScores = localAttempts.reduce((acc, at) => acc + (at.score || 0), 0);
    const totalQuestionsAsked = localAttempts.reduce((acc, at) => acc + (at.total || 0), 0);
    const avgSuccess = totalQuestionsAsked > 0 ? Math.round((totalScores / totalQuestionsAsked) * 100) : 0;

    return { totalQuizzes, totalQuestions, totalAttempts, avgSuccess };
  }, [localQuizzes, localAttempts]);

  const [eliteAnalysis, setEliteAnalysis] = useState<string | null>(null);

  const generateEliteAnalysis = (stats: any) => {
    const accuracy = stats.totalPossible > 0 ? (stats.averageScore / stats.totalPossible) * 100 : 0;
    if (accuracy >= 90) return "Exceptional performance! You're operating at a professional master level. Focus on speed to further sharpen your edge.";
    if (accuracy >= 75) return "Strong command of the material. Review the few missed concepts to reach the elite 90th percentile.";
    if (accuracy >= 50) return "Good progress. Consistency is key now. Try retaking recent modules to solidify your foundation.";
    return "The path to mastery is built on persistence. SFK Academy suggests revisiting the foundational concepts before the next advance track.";
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('sfk-theme', theme);
  }, [theme]);
  
  const [progress, setProgress] = useState<UserProgress>({
    currentQuestionIndex: 0,
    answers: {},
    isFinished: false,
    score: 0,
    flaggedQuestions: []
  });

  const toggleFlag = (idx: number) => {
    setProgress(prev => ({
      ...prev,
      flaggedQuestions: prev.flaggedQuestions.includes(idx) 
        ? prev.flaggedQuestions.filter(i => i !== idx)
        : [...prev.flaggedQuestions, idx]
    }));
  };

  // Auth & Student Info Sync
  useEffect(() => {
    let unsubStudent: (() => void) | undefined;
    
    // Load Site Config
    const loadSiteConfig = async () => {
      try {
        const docRef = doc(db, 'site_configs', 'main');
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          setSiteConfig(snap.data());
        }
      } catch (err) {
        handleFirestoreError(err, OperationType.GET, 'site_configs/main');
      }
    };
    loadSiteConfig();

    // Load Dynamic Quizzes
    const unsubQuizzes = onSnapshot(collection(db, 'quizzes'), (snap) => {
      const qList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setDynamicQuizzes(qList);
    }, (err) => {
      handleFirestoreError(err, OperationType.GET, 'quizzes');
    });

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user && user.email) {
        try {
          unsubStudent = onSnapshot(doc(db, 'students', user.email), (snapshot) => {
            if (snapshot.exists()) {
              setStudentInfo(snapshot.data() as StudentProfile);
            } else {
              setState('register');
            }
          });
        } catch (error) {
          console.error("Error setting up student listener:", error);
        }
      } else {
        setStudentInfo(null);
        if (unsubStudent) unsubStudent();
      }
      setLoading(false);
    });
    
    return () => {
      unsubscribe();
      if (unsubStudent) unsubStudent();
    };
  }, []);

  // Timer logic
  useEffect(() => {
    let timer: number;
    if (state === 'quiz' && timeLeft > 0 && !progress.isPaused) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            submitQuiz(progress.answers, progress.score);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state, timeLeft, progress.isPaused]);

  const startQuiz = async (section: Chapter | any, mode: 'practice' | 'exam' = 'exam') => {
    if (!currentUser) {
      signInWithGoogle();
      return;
    }
    if (!studentInfo) {
      setState('register');
      return;
    }

    setLoading(true);
    try {
      let loadedQuestions: Question[] = [];
      let timePerQuestion = 60;

      if (section.questions) {
        // Dynamic Quiz
        loadedQuestions = section.questions;
        timePerQuestion = 60; // Standard for custom quizzes
        setActiveSection({ 
          id: section.id, 
          name: section.title, 
          timePerQuestion: 60,
          description: `Custom ${section.subject} track` 
        } as any);
      } else {
        // Static Curriculum Quiz
        if (!quizRegistry[section.id]) {
          alert("This chapter's questions are coming soon!");
          setLoading(false);
          return;
        }
        const module = await quizRegistry[section.id]();
        loadedQuestions = Object.values(module).find(val => Array.isArray(val)) as Question[];
        timePerQuestion = section.timePerQuestion;
        setActiveSection(section);
      }
      
      if (!loadedQuestions || loadedQuestions.length === 0) {
        alert("Error loading questions.");
        setLoading(false);
        return;
      }

      setQuestions(loadedQuestions);
      setTimeLeft(loadedQuestions.length * timePerQuestion);
      
      const initialProgress: UserProgress = {
        currentQuestionIndex: 0,
        answers: {},
        isFinished: false,
        score: 0,
        startTime: Date.now(),
        flaggedQuestions: [],
        mode
      };
      setProgress(initialProgress);
      setState('quiz');

      updateLiveProgress(initialProgress, section.questions ? { id: section.id, name: section.title } as any : section, false, loadedQuestions.length);
    } catch (error) {
      console.error("Failed to load quiz:", error);
      alert("Failed to load quiz content. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const updateLiveProgress = async (currentProgress: UserProgress, section: Chapter, finished: boolean, totalOverride?: number) => {
    if (!studentInfo || !currentUser?.email) return;
    
    try {
      const liveData: LiveProgress = {
        studentEmail: studentInfo.email,
        studentName: studentInfo.name,
        sectionName: section.name,
        currentQuestionIndex: currentProgress.currentQuestionIndex,
        totalQuestions: totalOverride || questions.length || section.questions.length,
        score: currentProgress.score,
        lastUpdated: Date.now(),
        isFinished: finished
      };
      await setDoc(doc(db, 'live_progress', studentInfo.email), liveData);
    } catch (error) {
      console.error("Error updating live progress:", error);
    }
  };

  const handleAnswer = (answer: string) => {
    const currentQuestion = questions[progress.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    // Only count score if they haven't answered this yet
    const hasAnswered = progress.answers[currentQuestion.id] !== undefined;
    const newAnswers = { ...progress.answers, [currentQuestion.id]: answer };
    const newScore = (!hasAnswered && isCorrect) ? progress.score + 1 : progress.score;

    if (progress.mode === 'practice') {
      const newProgress = {
        ...progress,
        answers: newAnswers,
        score: newScore,
      };
      setProgress(newProgress);
      if (activeSection) {
        updateLiveProgress(newProgress, activeSection, false);
      }
    } else {
      if (progress.currentQuestionIndex < questions.length - 1) {
        const newProgress = {
          ...progress,
          answers: newAnswers,
          score: newScore,
          currentQuestionIndex: progress.currentQuestionIndex + 1,
        };
        setProgress(newProgress);
        if (activeSection) {
          updateLiveProgress(newProgress, activeSection, false);
        }
      } else {
        submitQuiz(newAnswers, newScore);
      }
    }
  };

  const calculateLevel = (xp: number) => Math.floor(Math.sqrt(xp / 100)) + 1;

  const submitQuiz = async (finalAnswers: Record<string, string>, finalScore: number) => {
    const finalProgress = {
      ...progress,
      answers: finalAnswers,
      score: finalScore,
      isFinished: true,
    };
    setProgress(finalProgress);
    setState('results');

    if (studentInfo && activeSection) {
      // Mark as finished in live progress
      updateLiveProgress(finalProgress, activeSection, true);

      const xpGained = finalScore * 15 + (finalScore === questions.length ? 100 : 0); // Bonus for perfect score
      const newXp = (studentInfo.xp || 0) + xpGained;
      const newLevel = calculateLevel(newXp);

      const submission: Omit<QuizSubmission, 'id'> = {
        studentEmail: studentInfo.email,
        studentName: studentInfo.name,
        score: finalScore,
        total: questions.length,
        sectionName: activeSection.name,
        submittedAt: Date.now(),
        flaggedQuestions: finalProgress.flaggedQuestions
      };
      try {
        await addDoc(collection(db, 'submissions'), submission);
        
        // Save to local attempts for admin dashboard visibility
        const localSubmission = {
          ...submission,
          id: `local-${Date.now()}`,
          quizTitle: activeSection.name
        };
        setLocalAttempts(prev => [...prev, localSubmission]);

        const today = new Date().toISOString().split('T')[0];
        let newStreak = studentInfo?.streak || 0;
        
        if (studentInfo?.lastActiveDate !== today) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          const yesterdayStr = yesterday.toISOString().split('T')[0];
          
          if (studentInfo?.lastActiveDate === yesterdayStr) {
            newStreak += 1;
          } else if (!studentInfo?.lastActiveDate) {
            newStreak = 1;
          } else {
            newStreak = 1; // Reset if gap exists
          }
        }

        // Update topic mastery
        const currentMastery = studentInfo.topicMastery?.[activeSection.id] || 0;
        const potentialMastery = Math.round((finalScore / questions.length) * 100);
        const newMastery = Math.max(currentMastery, potentialMastery);

        await updateDoc(doc(db, 'students', studentInfo.email), {
          streak: newStreak,
          lastActiveDate: today,
          xp: newXp,
          level: newLevel,
          [`topicMastery.${activeSection.id}`]: newMastery
        });
        
        setStudentInfo(prev => prev ? ({ 
          ...prev, 
          streak: newStreak, 
          lastActiveDate: today,
          xp: newXp,
          level: newLevel,
          topicMastery: {
            ...(prev.topicMastery || {}),
            [activeSection.id]: newMastery
          }
        }) : null);
      } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, 'submissions');
      }
    }
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentUser || !currentUser.email) return;
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = currentUser.email;

    const newStudent: StudentProfile = { 
      name, 
      email, 
      registeredAt: Date.now(),
      streak: 0,
      lastActiveDate: '',
      achievements: [],
      xp: 0,
      level: 1,
      topicMastery: {}
    };
    try {
      await setDoc(doc(db, 'students', email), newStudent, { merge: true });
      setStudentInfo(newStudent);
      setState('welcome');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `students/${email}`);
    }
  };

  const loadAdminData = async () => {
    if (!isAdminUser) return;
    setLoading(true);
    try {
      const q = query(collection(db, 'submissions'), orderBy('submittedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const results: QuizSubmission[] = [];
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() } as QuizSubmission);
      });
      setSubmissions(results);
      loadAccessCodes();
      loadAllUsers();
      setState('admin');

      // Set up live monitor listener
      const liveQuery = query(collection(db, 'live_progress'), orderBy('lastUpdated', 'desc'));
      const unsubscribe = onSnapshot(liveQuery, (snapshot) => {
        const liveResults: LiveProgress[] = [];
        snapshot.forEach((doc) => {
          liveResults.push(doc.data() as LiveProgress);
        });
        setLiveMonitor(liveResults);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, 'live_progress');
      });

      return () => unsubscribe();
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, 'submissions');
    } finally {
      setLoading(false);
    }
  };

  const loadAllUsers = async () => {
    try {
      const q = query(collection(db, 'students'), orderBy('registeredAt', 'desc'));
      const snapshot = await getDocs(q);
      const users = snapshot.docs.map(doc => ({ ...doc.data() } as StudentProfile));
      setAllUsers(users);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const loadAccessCodes = async () => {
    try {
      const q = query(collection(db, 'access_codes'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const codes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AccessCode));
      setAccessCodes(codes);
    } catch (error) {
      console.error("Error loading codes:", error);
    }
  };

  const redeemAccessCode = async () => {
    if (!accessCodeInput || !currentUser?.email) return;
    const cleanCode = accessCodeInput.trim().toUpperCase();
    setRedeeming(true);
    console.log("Attempting to redeem code:", cleanCode, "for user:", currentUser.email);
    try {
      const q = query(collection(db, 'access_codes'), where('code', '==', cleanCode), where('active', '==', true));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        console.warn("No active code found matching input");
        alert("Invalid or inactive access code. Please check your spelling.");
        setRedeeming(false);
        return;
      }

      const codeDoc = snapshot.docs[0].data() as AccessCode;
      const codeId = snapshot.docs[0].id;
      console.log("Valid code found in DB:", codeDoc, "ID:", codeId);
      
      // Calculate duration
      let durationMs = 30 * 24 * 60 * 60 * 1000; // Default 1 month
      if (codeDoc.duration === '3m') durationMs = 90 * 24 * 60 * 60 * 1000;
      else if (codeDoc.duration === '6m') durationMs = 180 * 24 * 60 * 60 * 1000;
      else if (codeDoc.duration === '1y') durationMs = 365 * 24 * 60 * 60 * 1000;

      const now = Date.now();
      const currentExpiry = studentInfo?.premiumUntil || now;
      const baseTime = currentExpiry > now ? currentExpiry : now;
      const newExpiry = baseTime + durationMs;
      
      // Update student record
      const studentRef = doc(db, 'students', currentUser.email);
      if (codeDoc.section === 'premium') {
        const updateData = { 
          isPremium: true,
          premiumUntil: newExpiry,
          email: currentUser.email,
          name: studentInfo?.name || currentUser.displayName || 'Student'
        };
        console.log("Updating premium status:", updateData);
        await setDoc(studentRef, updateData, { merge: true });
        setStudentInfo(prev => prev ? { ...prev, isPremium: true, premiumUntil: newExpiry } : { 
          name: updateData.name, 
          email: updateData.email, 
          registeredAt: now, 
          isPremium: true, 
          premiumUntil: newExpiry, 
          unlockedSections: [], 
          xp: 0, 
          level: 1, 
          topicMastery: {} 
        });
      } else {
        const currentUnlocked = studentInfo?.unlockedSections || [];
        if (!currentUnlocked.includes(codeDoc.section)) {
          const newUnlocked = [...currentUnlocked, codeDoc.section];
          const updateData = { 
            unlockedSections: newUnlocked,
            email: currentUser.email,
            name: studentInfo?.name || currentUser.displayName || 'Student'
          };
          await setDoc(studentRef, updateData, { merge: true });
          setStudentInfo(prev => prev ? { ...prev, unlockedSections: newUnlocked } : { 
            name: updateData.name, 
            email: updateData.email, 
            registeredAt: now, 
            isPremium: false, 
            unlockedSections: newUnlocked, 
            xp: 0, 
            level: 1, 
            topicMastery: {} 
          });
        }
      }
      
      // Deactivate the code after use
      console.log("Deactivating code...");
      await setDoc(doc(db, 'access_codes', codeId), { 
        active: false, 
        redeemedBy: currentUser.email, 
        redeemedAt: now 
      }, { merge: true });
      
      setAccessCodeInput('');
      alert(`Success! You have unlocked: ${codeDoc.section.toUpperCase().replace('_', ' ')} until ${new Date(newExpiry).toLocaleDateString()}`);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `redeem/${currentUser.email}`);
    } finally {
      setRedeeming(false);
    }
  };

  const createAccessCode = async (code: string, section: AccessCode['section'], duration: AccessCode['duration']) => {
    try {
      await addDoc(collection(db, 'access_codes'), {
        code: code.trim().toUpperCase(),
        section,
        duration,
        active: true,
        createdAt: Date.now()
      });
      alert('Access code created successfully!');
      loadAccessCodes();
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'access_codes');
    }
  };

  const toggleAccessCode = async (id: string, active: boolean) => {
    try {
      if (!id) return;
      await updateDoc(doc(db, 'access_codes', id), { active });
      loadAccessCodes();
    } catch (error) {
      console.error("Error toggling code:", error);
    }
  };

  const deleteAccessCode = async (id: string) => {
    if (!id || !confirm("Are you sure you want to delete this access code?")) return;
    try {
      await deleteDoc(doc(db, 'access_codes', id));
      loadAccessCodes();
    } catch (error) {
       console.error("Error deleting code:", error);
    }
  };

  // ...
  useEffect(() => {
    if (currentUser?.email) {
      loadPersonalStats();
    }
  }, [currentUser]);

  const loadPersonalStats = async () => {
    if (!currentUser?.email) return;
    setLoading(true);
    try {
      const q = query(
        collection(db, 'submissions'), 
        where('studentEmail', '==', currentUser.email),
        orderBy('submittedAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const history: QuizSubmission[] = [];
      let totalScore = 0;
      let totalPossible = 0;
      let highest = 0;

      const aggregation: Record<string, { score: number; total: number; count: number }> = {};
      
      querySnapshot.forEach((doc) => {
        const data = doc.data() as QuizSubmission;
        history.push({ id: doc.id, ...data });
        totalScore += data.score;
        totalPossible += data.total;
        if (data.score > highest) highest = data.score;

        // Simple subject detection (assuming sectionName or we can use ID prefix)
        // For simplicity, let's just use the score here
      });

      setPersonalStats({
        totalSubmissions: history.length,
        averageScore: totalScore,
        totalPossible,
        highestScore: highest,
        history
      });
      setEliteAnalysis(generateEliteAnalysis({ totalPossible, averageScore: totalScore }));
      setState('performance');
    } catch (error) {
      console.error("Error loading stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadLeaderboard = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'submissions'), orderBy('submittedAt', 'desc'), limit(100));
      const querySnapshot = await getDocs(q);
      
      const aggregation: Record<string, { name: string; score: number; total: number; count: number }> = {};
      
      querySnapshot.forEach((doc) => {
        const data = doc.data() as QuizSubmission;
        if (!aggregation[data.studentEmail]) {
          aggregation[data.studentEmail] = { name: data.studentName, score: 0, total: 0, count: 0 };
        }
        aggregation[data.studentEmail].score += data.score;
        aggregation[data.studentEmail].total += data.total;
        aggregation[data.studentEmail].count += 1;
      });

      const sorted = Object.entries(aggregation)
        .map(([email, data]) => ({
          studentEmail: email,
          studentName: data.name,
          totalScore: data.score,
          quizzesTaken: data.count,
          accuracy: (data.score / data.total) * 100,
          prestige: Math.floor(Math.sqrt(data.score * 15 / 100)) + 1
        }))
        .sort((a, b) => b.totalScore - a.totalScore)
        .slice(0, 10);

      setLeaderboard(sorted);
      setState('leaderboard');
    } catch (error) {
      console.error("Error loading leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearFinishedProgress = async (email: string) => {
    try {
      await deleteDoc(doc(db, 'live_progress', email));
    } catch (error) {
      console.error("Error clearing progress:", error);
    }
  };

  const handleSettingsUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updates: any = {
      academyName: formData.get('academyName'),
      heroHeading1: formData.get('heroHeading1'),
      heroHeading2: formData.get('heroHeading2'),
      missionStatement: formData.get('missionStatement'),
      founderBio: formData.get('founderBio'),
      founderImageUrl: formData.get('founderImageUrl'),
      videoTitle: formData.get('videoTitle'),
      videoUrl: formData.get('videoUrl'),
    };
    
    // Parse the advanced JSON fields
    try {
      const mediaSectionsStr = formData.get('mediaSectionsJson');
      if (mediaSectionsStr) {
        updates.mediaSections = JSON.parse(mediaSectionsStr.toString());
      }
    } catch (err) {
      alert("Invalid JSON format for Media Labs Advanced Configuration.");
      return;
    }
  
    try {
      await setDoc(doc(db, 'site_configs', 'main'), updates, { merge: true });
      setSiteConfig(updates);
      alert('Settings updated successfully!');
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, 'site_configs/main');
    }
  };

  const parseMCQText = (text: string) => {
    const questions: any[] = [];
    // Split by question number pattern instead of just double newlines
    // Looks for patterns like "1.", "1)", "Q1:", "[1]" at start of lines
    const blocks = text.split(/\n(?=\d+[\.\)\:\s])|(?=\[?\d+\]?\s+)/);
    
    const optRegex = /^([A-D])[\.\)]\s*(.*)/i;
    const ansRegex = /^(?:Answer|Correct|Ans|Ans:)\s*[:\s]*([A-D])/i;
    const expRegex = /^(?:Explanation|Exp)\s*[:\s]*(.*)/i;

    blocks.forEach((block, index) => {
      const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
      if (lines.length < 2) return;

      let qText = '';
      const options: any = { A: '', B: '', C: '', D: '' };
      let answer = '';
      let explanation = '';
      
      // First line is usually the question
      const firstLine = lines[0];
      const qMatch = firstLine.match(/^\d+[\.\)\:\s]*(.*)/);
      qText = qMatch ? qMatch[1] : firstLine;

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];

        const ansMatch = line.match(ansRegex);
        if (ansMatch) {
          answer = ansMatch[1].toUpperCase();
          continue;
        }

        const expMatch = line.match(expRegex);
        if (expMatch) {
          explanation = expMatch[1];
          continue;
        }

        const optMatch = line.match(optRegex);
        if (optMatch) {
          options[optMatch[1].toUpperCase()] = optMatch[2];
          continue;
        }

        // If it's not any of the above, append it to the question text or explanation
        if (!Object.values(options).some(o => o !== '')) {
          qText += ' ' + line;
        } else if (explanation) {
          explanation += ' ' + line;
        }
      }

      if (qText && (options.A || options.B)) {
        questions.push({
          id: `pasted-${Date.now()}-${index}`,
          text: qText.trim(),
          options: [options.A, options.B, options.C, options.D].filter(Boolean),
          correctAnswer: options[answer] || answer,
          explanation: explanation.trim(),
          subject: 'Mixed',
          status: 'ready'
        });
      }
    });
    return questions;
  };

  const handleQuizUpload = async (e: ChangeEvent<HTMLInputElement>, format: 'json' | 'csv') => {
    const target = e.target;
    const file = target.files?.[0];
    if (!file) {
      target.value = '';
      return;
    }
    setLoading(true);

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const content = event.target?.result as string;
        let parsedQuestions: any[] = [];
        
        if (file.name.toLowerCase().endsWith('.json')) {
          const data = JSON.parse(content);
          const raw = Array.isArray(data) ? data : (data.questions || data.quizzes || [data]);
          parsedQuestions = raw.flatMap((q: any) => {
            if (q.questions && Array.isArray(q.questions)) return q.questions;
            return [q];
          }).map((q: any) => ({
            id: q.id || `json-${Math.random()}`,
            text: q.question || q.text,
            options: q.options ? (Array.isArray(q.options) ? q.options : Object.values(q.options)) : [],
            correctAnswer: q.correct_answer || q.correctAnswer,
            explanation: q.explanation || '',
            subject: q.subject || 'Mixed',
            status: 'ready'
          }));
        } else if (file.name.toLowerCase().endsWith('.csv')) {
          const lines = content.split('\n');
          const headers = lines[0].toLowerCase().split(',');
          parsedQuestions = lines.slice(1).filter(l => l.trim()).map((line, idx) => {
            // Regex to split by comma but ignore commas inside double quotes
            const cells = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const clean = (str: string) => (str || '').replace(/^"|"$/g, '').replace(/""/g, '"').trim();
            
            // Expected format: id, subject, question, option_A, option_B, option_C, option_D, correct_answer, explanation, notes
            return {
              id: clean(cells[0]) || `csv-${idx}`,
              subject: clean(cells[1]) || 'Mixed',
              text: clean(cells[2]),
              options: [clean(cells[3]), clean(cells[4]), clean(cells[5]), clean(cells[6])].filter(Boolean),
              correctAnswer: clean(cells[7]),
              explanation: clean(cells[8]),
              status: 'ready'
            };
          });
        }
        
        if (parsedQuestions.length > 0) {
          setImportPreview(parsedQuestions);
          setShowImportModal(true);
        } else {
          alert('No valid questions found in file. Please ensure it follows the correct format.');
        }
      } catch (err: any) {
        alert('Failed to parse: ' + err.message);
      } finally {
        setLoading(false);
        target.value = '';
      }
    };
    reader.readAsText(file);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isAdmin = currentUser?.email === 'sfkshahfahadkhan@gmail.com';

  if (loading) {
    return (
      <div className="min-h-screen bg-sfk-cream dark:bg-slate-950 flex items-center justify-center transition-colors">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sfk-green-dark"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-brand-gold/20 relative overflow-x-hidden transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 h-16 md:h-24 flex items-center px-4 md:px-12 transition-all shadow-sm">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <button 
            onClick={() => setState('welcome')}
            className="flex items-center gap-2 md:gap-4 group hover:scale-105 transition-all outline-none flex-shrink-0"
          >
            <div className="p-1 md:p-3 bg-brand-green text-brand-gold rounded-lg md:rounded-2xl shadow-lg group-hover:rotate-12 transition-all">
               <GraduationCap className="w-5 h-5 md:w-8 md:h-8" />
            </div>
            <div className="flex flex-col text-left">
              <h1 className="font-black text-sm md:text-3xl text-brand-green dark:text-brand-gold tracking-tight md:tracking-tighter uppercase leading-none truncate max-w-[120px] sm:max-w-none">
                {siteConfig.academyName || 'SFK Elite Academy'}
              </h1>
              <span className="text-[7px] md:text-[10px] font-black text-slate-400 dark:text-slate-500 tracking-[0.1em] md:tracking-[0.3em] uppercase">Elite Excellence</span>
            </div>
          </button>

          <div className="flex items-center gap-2 md:gap-6">
            {isAdminUser && (
              <button 
                onClick={() => setState('admin')}
                className="p-1.5 md:p-3 bg-white dark:bg-slate-900 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-lg md:rounded-2xl transition-all text-rose-500 group h-9 w-12 md:h-12 md:w-auto flex items-center justify-center border border-slate-100 dark:border-slate-700 shadow-sm"
              >
                <span className="hidden md:inline font-black text-[10px] uppercase tracking-widest mr-2">Admin</span>
                <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            )}
            <button 
              className="p-1.5 md:p-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg md:rounded-2xl transition-all text-brand-green dark:text-brand-gold group h-9 w-9 md:h-12 md:w-12 flex items-center justify-center border border-slate-100 dark:border-slate-700 shadow-sm"
              onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 md:w-6 md:h-6" /> : <Moon className="w-4 h-4 md:w-6 md:h-6" />}
            </button>
            
            {currentUser ? (
              <div className="flex items-center gap-2 md:gap-4 bg-slate-50 dark:bg-slate-800/50 p-1 md:p-1.5 pl-2 md:pl-5 rounded-lg md:rounded-2xl border border-slate-100 dark:border-slate-700">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-[10px] md:text-[12px] font-black text-brand-green dark:text-brand-gold leading-none">{studentInfo?.name || currentUser.displayName}</span>
                  <span className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">{currentUser.email?.split('@')[0]}</span>
                </div>
                <button 
                  onClick={() => { console.log("Signing out..."); signOut(auth); }}
                  className="p-2 md:p-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-700 text-red-500 rounded-lg md:rounded-xl transition-all hover:bg-red-500 hover:text-white shadow-sm"
                >
                  <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => { console.log("Login initiated..."); signInWithGoogle(); }}
                className="bg-brand-green text-brand-gold px-4 md:px-8 py-2 md:py-4 rounded-lg md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl whitespace-nowrap"
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </header>


      <div className="max-w-7xl mx-auto px-6 mb-8 pt-40">
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 backdrop-blur-sm bg-white/30 dark:bg-slate-900/30 w-fit px-4 py-2 rounded-full border border-slate-100 dark:border-slate-800">
          <button onClick={() => setState('welcome')} className="hover:text-brand-green transition-colors">SFK Home</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-brand-green dark:text-brand-gold">{state === 'welcome' ? 'Excellence Hub' : state.replace('-', ' ')}</span>
        </div>
      </div>

      <main className="pb-24 px-6 max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {state === 'welcome' && (
            <motion.div key="welcome" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="space-y-24">
              
              {/* Massive Hero Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                  <div className="flex flex-wrap items-center gap-4">
                    <motion.div 
                       initial={{ x: -20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ delay: 0.2 }}
                       className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green text-brand-gold rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl"
                    >
                      <Sparkles className="w-4 h-4 animate-pulse" />
                      {siteConfig.academyName || 'SFK Elite Academy'}
                    </motion.div>
                    {isAdminUser && (
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-500 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-lg">
                        <ShieldCheck className="w-4 h-4" />
                        Admin Access
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <h1 className="heading-serif text-5xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-black text-brand-green dark:text-brand-gold tracking-tighter leading-[0.85] md:leading-[0.8] overflow-hidden">
                      <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="block break-words whitespace-normal"
                      >
                        {siteConfig.heroHeading1}
                      </motion.span>
                      <motion.span 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "circOut" }}
                        className="block text-slate-800 dark:text-white break-words whitespace-normal"
                      >
                        {siteConfig.heroHeading2}
                      </motion.span>
                    </h1>
                  </div>

                  <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-bold max-w-2xl leading-relaxed">
                    {siteConfig.missionStatement}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
                    <button 
                      onClick={() => setState('academic-library')}
                      className="flex-1 md:flex-none px-6 md:px-8 py-4 md:py-5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-2 border-slate-100 dark:border-slate-700 rounded-2xl md:rounded-[24px] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:border-brand-gold transition-all flex items-center justify-center gap-3"
                    >
                      <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                      Archives
                    </button>
                    <button 
                      onClick={() => { loadPersonalStats(); setState('performance'); }}
                      className="flex-1 md:flex-none px-6 md:px-8 py-4 md:py-5 bg-brand-gold text-brand-green rounded-2xl md:rounded-[24px] font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3"
                    >
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                      Scholarly Analytics
                    </button>
                  </div>

                </div>

                <div className="relative group">
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="aspect-[4/5] bg-brand-gold/10 dark:bg-brand-gold/5 rounded-[60px] border-4 border-brand-green/20 dark:border-brand-gold/30 overflow-hidden relative flex flex-col group/img"
                  >
                    <img 
                      src="src/assets/images/regenerated_image_1778922486683.jpg"
                      alt="Academy Institutional Focus"
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 via-brand-green/20 to-transparent pointer-events-none" />
                    
                    <div className="relative z-20 flex-1 flex flex-col justify-end p-8">
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold text-brand-green rounded-full font-black text-[9px] uppercase tracking-widest shadow-xl">
                          Certified Excellence
                        </div>
                        <h3 className="text-3xl font-black text-brand-gold heading-serif leading-tight">
                          Clinical <br/>Mastery
                        </h3>
                        <p className="text-white/70 font-bold text-xs max-w-[200px]">Institutional grade preparation for the next generation of physicians.</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Assessment Tracks Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <button 
                  onClick={() => setState('portfolio')}
                  className="p-10 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[48px] hover:border-brand-gold hover:shadow-2xl transition-all flex flex-col items-start group text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="p-5 bg-indigo-500/10 text-indigo-500 rounded-3xl group-hover:scale-110 transition-all mb-8">
                    <UserIcon className="w-10 h-10" />
                  </div>
                  <h3 className="font-black text-2xl text-slate-800 dark:text-white uppercase tracking-tighter leading-none mb-4">Founder <br/>Profile</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-bold text-sm leading-relaxed mb-6">Explore the academic journey and expertise of Dr. Shah Fahad Khan.</p>
                  <div className="mt-auto flex items-center gap-2 text-indigo-500 font-black text-[10px] uppercase tracking-widest">
                    View Portfolio <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                <button 
                  onClick={() => setState('video-lectures')}
                  className="p-10 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[48px] hover:border-brand-gold hover:shadow-2xl transition-all flex flex-col items-start group text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="p-5 bg-red-500/10 text-red-500 rounded-3xl group-hover:scale-110 transition-all mb-8">
                    <Youtube className="w-10 h-10" />
                  </div>
                  <h3 className="font-black text-2xl text-slate-800 dark:text-white uppercase tracking-tighter leading-none mb-4">Video <br/>Lectures</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-bold text-sm leading-relaxed mb-6">Direct access to the elite SFK lecture series on YouTube.</p>
                  <div className="mt-auto flex items-center gap-2 text-red-500 font-black text-[10px] uppercase tracking-widest">
                    Open Playlist <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                <button 
                  onClick={() => setState('academic-library')}
                  className="p-10 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[48px] hover:border-brand-gold hover:shadow-2xl transition-all flex flex-col items-start group text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="p-5 bg-brand-gold/10 text-brand-gold rounded-3xl group-hover:scale-110 transition-all mb-8">
                    <BookOpen className="w-10 h-10" />
                  </div>
                  <h3 className="font-black text-2xl text-slate-800 dark:text-white uppercase tracking-tighter leading-none mb-4">Academic <br/>Library</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-bold text-sm leading-relaxed mb-6">Subject specific PDFs, curriculum guides, and study roadmaps.</p>
                  <div className="mt-auto flex items-center gap-2 text-brand-gold font-black text-[10px] uppercase tracking-widest">
                    Access Archive <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>

              {/* Mixed Subjects Section */}
              {localQuizzes.some(q => q.subject === 'Mixed Subjects') && (
                <div className="space-y-12">
                   <div className="flex items-end justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-8">
                      <div className="space-y-2">
                         <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">Full Spectrum Mastery</span>
                         <h2 className="heading-serif text-5xl font-black text-brand-green dark:text-brand-gold tracking-tight">Mixed Subject Drills</h2>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest">Multi-Topic Exposure</span>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {localQuizzes.filter(q => q.subject === 'Mixed Subjects').map((quiz) => (
                        <motion.div 
                          key={quiz.id} 
                          whileHover={{ y: -8, scale: 1.02 }}
                          className="group relative p-10 bg-white dark:bg-slate-900 rounded-[56px] border-2 border-slate-50 dark:border-slate-800 hover:border-blue-500 transition-all shadow-xl hover:shadow-blue-500/10 overflow-hidden"
                        >
                          <div className={`absolute top-0 left-0 w-full h-2 bg-blue-500`} />
                          <div className="mb-8 flex items-center justify-between">
                            <div className="p-4 bg-blue-500/5 text-blue-500 rounded-[24px]">
                              <Star className="w-8 h-8" />
                            </div>
                            <span className="px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-[9px] font-black uppercase tracking-widest">Composite Challenge</span>
                          </div>
                          <h3 className="heading-serif text-3xl font-black text-slate-800 dark:text-white mb-3 group-hover:text-brand-green transition-colors">{quiz.title}</h3>
                          <div className="flex gap-4 mb-8">
                             <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest"><BookOpen className="w-3 h-3" /> Mixed</div>
                             <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Timer className="w-3 h-3" /> {quiz.timeLimit}m</div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <button 
                              onClick={() => startQuiz(quiz, 'exam')}
                              className="w-full flex items-center justify-between px-8 py-5 bg-brand-green text-brand-gold rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-green transition-all shadow-lg"
                            >
                              Exam Mode <ArrowRight className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => startQuiz(quiz, 'practice')}
                              className="w-full flex items-center justify-between px-8 py-5 bg-slate-100 text-slate-500 rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all border border-slate-200"
                            >
                              Review Mode <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                   </div>
                </div>
              )}

              {/* AKU Past Papers Section */}
              {localQuizzes.some(q => q.subject === 'AKU Past Papers') && (
                <div className="space-y-12">
                   <div className="flex items-end justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-8">
                      <div className="space-y-2">
                         <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">Institutional Archives</span>
                         <h2 className="heading-serif text-5xl font-black text-brand-green dark:text-brand-gold tracking-tight">AKU Past Papers</h2>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-brand-gold animate-pulse" />
                        <span className="text-[10px] font-black uppercase text-brand-gold tracking-widest">Official Modules</span>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {localQuizzes.filter(q => q.subject === 'AKU Past Papers').map((quiz) => (
                        <motion.div 
                          key={quiz.id} 
                          whileHover={{ y: -8, scale: 1.02 }}
                          className="group relative p-10 bg-white dark:bg-slate-900 rounded-[56px] border-2 border-slate-50 dark:border-slate-800 hover:border-brand-gold transition-all shadow-xl hover:shadow-brand-gold/10 overflow-hidden"
                        >
                          <div className={`absolute top-0 left-0 w-full h-2 bg-brand-gold`} />
                          <div className="mb-8 flex items-center justify-between">
                            <div className="p-4 bg-brand-gold/5 text-brand-gold rounded-[24px]">
                              <Database className="w-8 h-8" />
                            </div>
                            <span className="px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-[9px] font-black uppercase tracking-widest">Premium Archive</span>
                          </div>
                          <h3 className="heading-serif text-3xl font-black text-slate-800 dark:text-white mb-3 group-hover:text-brand-green transition-colors">{quiz.title}</h3>
                          <div className="flex gap-4 mb-8">
                             <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest"><BookOpen className="w-3 h-3" /> {quiz.subject}</div>
                             <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest"><Timer className="w-3 h-3" /> {quiz.timeLimit}m</div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <button 
                              onClick={() => startQuiz(quiz, 'exam')}
                              className="w-full flex items-center justify-between px-8 py-5 bg-brand-green text-brand-gold rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-green transition-all shadow-lg"
                            >
                              Exam Mode <ArrowRight className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => startQuiz(quiz, 'practice')}
                              className="w-full flex items-center justify-between px-8 py-5 bg-slate-100 text-slate-500 rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-slate-200 transition-all border border-slate-200"
                            >
                              Practice Mode <BookOpen className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                   </div>
                </div>
              )}

              {/* Assessment Tracks Section */}
              <div className="space-y-12">
                 <div className="flex items-end justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-8">
                    <div className="space-y-2">
                       <span className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em]">Evaluation Center</span>
                       <h2 className="heading-serif text-5xl font-black text-brand-green dark:text-brand-gold tracking-tight">Practice Tracks</h2>
                    </div>
                 </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    <button 
                      onClick={() => { setState('mcq-banks'); setBrowseStep('subject'); }}
                      className="p-6 md:p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[24px] md:rounded-[40px] hover:border-brand-green transition-all group flex flex-col items-start gap-4 md:gap-6 shadow-sm text-left"
                    >
                      <div className="p-4 md:p-6 bg-brand-green/10 text-brand-green rounded-xl md:rounded-3xl group-hover:rotate-12 transition-all">
                        <LayoutGrid className="w-8 h-8 md:w-12 md:h-12" />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <h3 className="font-black text-xl md:text-3xl text-slate-800 dark:text-white tracking-widest flex items-center gap-3">
                          MCQ BANKS <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </h3>
                        <p className="text-slate-400 font-bold text-[9px] md:text-[12px] uppercase tracking-widest">Physics, Chemistry & Biology</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => setState('practice-bank')}
                      className="p-6 md:p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[24px] md:rounded-[40px] hover:border-brand-gold transition-all group flex flex-col items-start gap-4 md:gap-6 shadow-sm text-left"
                    >
                      <div className="p-4 md:p-6 bg-brand-gold/10 text-brand-gold rounded-xl md:rounded-3xl group-hover:rotate-12 transition-all">
                        <Flame className="w-8 h-8 md:w-12 md:h-12" />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <h3 className="font-black text-xl md:text-3xl text-slate-800 dark:text-white tracking-widest flex items-center gap-3">
                          ELITE VAULT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </h3>
                        <p className="text-slate-400 font-bold text-[9px] md:text-[12px] uppercase tracking-widest">Past Exams & Archives</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => { setState('reasoning'); setBrowseStep('subject'); }}
                      className="p-6 md:p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[24px] md:rounded-[40px] hover:border-brand-green transition-all group flex flex-col items-start gap-4 md:gap-6 shadow-sm text-left"
                    >
                      <div className="p-4 md:p-6 bg-brand-green/10 text-brand-green rounded-xl md:rounded-3xl group-hover:rotate-12 transition-all">
                        <Scale className="w-8 h-8 md:w-12 md:h-12" />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <h3 className="font-black text-xl md:text-3xl text-slate-800 dark:text-white tracking-widest flex items-center gap-3">
                          REASONING <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </h3>
                        <p className="text-slate-400 font-bold text-[9px] md:text-[12px] uppercase tracking-widest">AKU Reasoning & Stats</p>
                      </div>
                    </button>
                  </div>
                </div>

               {/* Premium Unlock (Inline) */}
               {!isPremiumActive && currentUser && (
                <div className="p-8 md:p-16 bg-brand-gold text-brand-green rounded-[32px] md:rounded-[64px] shadow-2xl relative overflow-hidden group mb-12">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:scale-125 transition-transform duration-1000" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                     <div className="space-y-4 md:space-y-6 max-w-xl text-center md:text-left">
                        <h2 className="heading-serif text-4xl md:text-7xl font-black tracking-tight leading-loose md:leading-none">Unlock Premium Scholarship.</h2>
                        <p className="text-brand-green/80 font-black text-[10px] md:text-sm uppercase tracking-widest leading-relaxed">Enter your institutional access code to unlock the full academy experience including the AKU Archives.</p>
                     </div>
                     <div className="w-full max-w-md bg-white/20 backdrop-blur-2xl p-2 md:p-4 rounded-[24px] md:rounded-[40px] border border-white/30">
                        <div className="flex flex-col sm:flex-row items-center gap-2">
                           <input 
                              type="text"
                              placeholder="ACCESS CODE..."
                              value={accessCodeInput}
                              onChange={(e) => setAccessCodeInput(e.target.value.toUpperCase())}
                              className="w-full sm:flex-1 bg-transparent border-none font-black text-sm md:text-lg placeholder:text-brand-green/30 outline-none px-4 md:px-6 py-4 sm:py-0 uppercase tracking-widest"
                           />
                           <button 
                             onClick={redeemAccessCode}
                             disabled={redeeming}
                             className="w-full sm:w-auto px-6 md:px-8 py-4 md:py-5 bg-brand-green text-brand-gold rounded-xl md:rounded-[28px] font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl disabled:opacity-50"
                           >
                             {redeeming ? 'VALIDATING...' : 'ACTIVATE'}
                           </button>
                        </div>
                     </div>
                  </div>
                </div>
               )}

            </motion.div>
          )}

          {state === 'mcq-banks' && (
            <motion.div key="mcq-banks" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="space-y-12">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-10 gap-6">
                <div className="space-y-3">
                  <h2 className="heading-serif text-5xl md:text-6xl font-black text-brand-green dark:text-brand-gold tracking-tight">MCQ Banks</h2>
                  <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Physics, Chemistry & Biology</p>
                </div>
                <button onClick={() => setState('welcome')} className="p-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl text-brand-green dark:text-brand-gold hover:scale-110 transition-transform shrink-0">
                  <ArrowLeft className="w-8 h-8" />
                </button>
              </div>
              {browseStep !== 'subject' && (
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto mb-8">
                  <button 
                    onClick={() => {
                      if (browseStep === 'chapter') setBrowseStep('grade');
                      else if (browseStep === 'grade') setBrowseStep('subject');
                      setSearchQuery('');
                    }}
                    className="flex items-center gap-2 text-brand-green dark:text-brand-gold font-bold hover:translate-x-[-4px] transition-transform"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>

                  {browseStep === 'chapter' && (
                    <div className="relative group w-full md:w-80">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-green transition-colors" />
                      <input 
                        type="text"
                        placeholder="Search chapter..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-xl font-bold text-sm focus:border-brand-green outline-none shadow-sm transition-all"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {browseStep === 'subject' && Object.values(CURRICULUM).filter((s) => s.id !== 'reasoning').map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => {
                      setSelectedSubject(subject.id as keyof typeof CURRICULUM);
                      setBrowseStep('grade');
                    }}
                    className="group relative p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl hover:border-brand-green dark:hover:border-brand-gold hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex items-center gap-8 shadow-sm overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-brand-green dark:bg-brand-gold group-hover:bg-brand-gold dark:group-hover:bg-white transition-colors" />
                    <div className="bg-brand-green/5 dark:bg-brand-gold/10 text-brand-green dark:text-brand-gold w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green dark:group-hover:bg-brand-gold group-hover:text-white dark:group-hover:text-brand-green transition-all shadow-inner">
                      <subject.icon className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-serif font-black text-3xl text-brand-green dark:text-brand-gold">{subject.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mt-1">Select subject to view curriculum</p>
                    </div>
                    <ChevronRight className="w-8 h-8 text-brand-gold group-hover:translate-x-2 transition-all" />
                  </button>
                ))}

                {browseStep === 'grade' && selectedSubject && Object.entries((CURRICULUM[selectedSubject] as any).grades).map(([gradeKey, gradeData]: [string, any]) => (
                  <button
                    key={gradeKey}
                    onClick={() => {
                      setSelectedGrade(gradeKey as '11' | '12');
                      setBrowseStep('chapter');
                    }}
                    className="group relative p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl hover:border-brand-green dark:hover:border-brand-gold hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex items-center gap-8 shadow-sm overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-brand-gold group-hover:bg-brand-green transition-colors" />
                    <div className="bg-brand-gold/10 text-brand-gold w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all shadow-inner">
                      <GraduationCap className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-serif font-black text-2xl text-brand-green dark:text-brand-gold">{gradeData.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mt-1">{gradeData.chapters.length} Chapters</p>
                    </div>
                    <ChevronRight className="w-8 h-8 text-brand-green dark:text-brand-gold group-hover:translate-x-2 transition-all" />
                  </button>
                ))}

                {browseStep === 'chapter' && selectedSubject && selectedGrade && ((CURRICULUM[selectedSubject] as any).grades[selectedGrade] as any)?.chapters?.filter((ch: any) => ch.name.toLowerCase().includes(searchQuery.toLowerCase()) || ch.subtitle.toLowerCase().includes(searchQuery.toLowerCase())).map((chapter: any) => (
                  <button
                    key={chapter.id}
                    onClick={() => startQuiz(chapter)}
                    className="group relative p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl hover:border-brand-green dark:hover:border-brand-gold hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex items-center gap-8 shadow-sm overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-brand-green group-hover:bg-brand-gold transition-colors" />
                    <div className="bg-brand-green/5 dark:bg-brand-green/10 text-brand-green dark:text-brand-gold w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all shadow-inner">
                      <chapter.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-serif font-black text-xl text-brand-green dark:text-brand-gold">{chapter.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mt-1">{chapter.subtitle}</p>
                      
                      {studentInfo?.topicMastery?.[chapter.id] !== undefined && (
                        <div className="mt-3 space-y-1">
                          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                            <span>Chapter Mastery</span>
                            <span className="text-brand-gold">{studentInfo.topicMastery[chapter.id]}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${studentInfo.topicMastery[chapter.id]}%` }}
                              className={`h-full ${studentInfo.topicMastery[chapter.id] >= 90 ? 'bg-emerald-500' : studentInfo.topicMastery[chapter.id] >= 70 ? 'bg-brand-gold' : 'bg-orange-500'}`}
                            />
                          </div>
                        </div>
                      )}

                      <div className="mt-4 flex items-center gap-2">
                        {quizRegistry[chapter.id] ? (
                          <>
                            <span className="flex items-center gap-1 px-2 py-1 bg-brand-gold/10 text-brand-gold rounded font-black text-[10px] uppercase tracking-tighter">
                              <Timer className="w-3 h-3" /> Exam Prep
                            </span>
                            {(!studentInfo?.topicMastery?.[chapter.id] || studentInfo.topicMastery[chapter.id] < 50) && (
                              <span className="flex items-center gap-1 px-2 py-1 bg-brand-green text-brand-gold rounded font-black text-[10px] uppercase tracking-tighter animate-pulse">
                                <Sparkles className="w-3 h-3" /> High Yield
                              </span>
                            )}
                          </>
                        ) : (
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded font-black text-[10px] uppercase tracking-widest">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-brand-gold group-hover:translate-x-2 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {state === 'reasoning' && (
            <motion.div key="reasoning-banks" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} className="space-y-12">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-10 gap-6">
                <div className="space-y-3">
                  <h2 className="heading-serif text-5xl md:text-6xl font-black text-brand-green dark:text-brand-gold tracking-tight">AKU Elite Reasoning</h2>
                  <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Analytical, Logical & Quantitative Tracks</p>
                </div>
                <button onClick={() => setState('welcome')} className="p-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl text-brand-green dark:text-brand-gold hover:scale-110 transition-transform shrink-0">
                  <ArrowLeft className="w-8 h-8" />
                </button>
              </div>
              {browseStep !== 'subject' && (
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto mb-8">
                  <button 
                    onClick={() => {
                      if (browseStep === 'chapter') setBrowseStep('grade');
                      else if (browseStep === 'grade') setBrowseStep('subject');
                      setSearchQuery('');
                    }}
                    className="flex items-center gap-2 text-brand-green dark:text-brand-gold font-bold hover:translate-x-[-4px] transition-transform"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>

                  {browseStep === 'chapter' && (
                    <div className="relative group w-full md:w-80">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-green transition-colors" />
                      <input 
                        type="text"
                        placeholder="Search chapter..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-xl font-bold text-sm focus:border-brand-green outline-none shadow-sm transition-all"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {browseStep === 'subject' && Object.values(CURRICULUM).filter((s) => s.id === 'reasoning').map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => {
                      setSelectedSubject(subject.id as keyof typeof CURRICULUM);
                      setBrowseStep('grade');
                    }}
                    className="group relative p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl hover:border-brand-green dark:hover:border-brand-gold hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex items-center gap-8 shadow-sm overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-brand-green dark:bg-brand-gold group-hover:bg-brand-gold dark:group-hover:bg-white transition-colors" />
                    <div className="bg-brand-green/5 dark:bg-brand-gold/10 text-brand-green dark:text-brand-gold w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green dark:group-hover:bg-brand-gold group-hover:text-white dark:group-hover:text-brand-green transition-all shadow-inner">
                      <subject.icon className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-serif font-black text-3xl text-brand-green dark:text-brand-gold">{subject.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mt-1">Select subject to view curriculum</p>
                    </div>
                    <ChevronRight className="w-8 h-8 text-brand-gold group-hover:translate-x-2 transition-all" />
                  </button>
                ))}

                {browseStep === 'grade' && selectedSubject && Object.entries((CURRICULUM[selectedSubject] as any).grades).map(([gradeKey, gradeData]: [string, any]) => (
                  <button
                    key={gradeKey}
                    onClick={() => {
                      setSelectedGrade(gradeKey as '11' | '12');
                      setBrowseStep('chapter');
                    }}
                    className="group relative p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl hover:border-brand-green dark:hover:border-brand-gold hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex items-center gap-8 shadow-sm overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-brand-gold group-hover:bg-brand-green transition-colors" />
                    <div className="bg-brand-gold/10 text-brand-gold w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all shadow-inner">
                      <GraduationCap className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-serif font-black text-2xl text-brand-green dark:text-brand-gold">{gradeData.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mt-1">{gradeData.chapters.length} Chapters</p>
                    </div>
                    <ChevronRight className="w-8 h-8 text-brand-green dark:text-brand-gold group-hover:translate-x-2 transition-all" />
                  </button>
                ))}

                {browseStep === 'chapter' && selectedSubject && selectedGrade && ((CURRICULUM[selectedSubject] as any).grades[selectedGrade] as any)?.chapters?.filter((ch: any) => ch.name.toLowerCase().includes(searchQuery.toLowerCase()) || ch.subtitle.toLowerCase().includes(searchQuery.toLowerCase())).map((chapter: any) => (
                  <button
                    key={chapter.id}
                    onClick={() => startQuiz(chapter)}
                    className="group relative p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl hover:border-brand-green dark:hover:border-brand-gold hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex items-center gap-8 shadow-sm overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-brand-green group-hover:bg-brand-gold transition-colors" />
                    <div className="bg-brand-green/5 dark:bg-brand-green/10 text-brand-green dark:text-brand-gold w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all shadow-inner">
                      <chapter.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-serif font-black text-xl text-brand-green dark:text-brand-gold">{chapter.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mt-1">{chapter.subtitle}</p>
                      
                      {studentInfo?.topicMastery?.[chapter.id] !== undefined && (
                        <div className="mt-3 space-y-1">
                          <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                            <span>Chapter Mastery</span>
                            <span className="text-brand-gold">{studentInfo.topicMastery[chapter.id]}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${studentInfo.topicMastery[chapter.id]}%` }}
                              className={`h-full ${studentInfo.topicMastery[chapter.id] >= 90 ? 'bg-emerald-500' : studentInfo.topicMastery[chapter.id] >= 70 ? 'bg-brand-gold' : 'bg-orange-500'}`}
                            />
                          </div>
                        </div>
                      )}

                      <div className="mt-4 flex items-center gap-2">
                        {quizRegistry[chapter.id] ? (
                          <>
                            <span className="flex items-center gap-1 px-2 py-1 bg-brand-gold/10 text-brand-gold rounded font-black text-[10px] uppercase tracking-tighter">
                              <Timer className="w-3 h-3" /> Exam Prep
                            </span>
                            {(!studentInfo?.topicMastery?.[chapter.id] || studentInfo.topicMastery[chapter.id] < 50) && (
                              <span className="flex items-center gap-1 px-2 py-1 bg-brand-green text-brand-gold rounded font-black text-[10px] uppercase tracking-tighter animate-pulse">
                                <Sparkles className="w-3 h-3" /> High Yield
                              </span>
                            )}
                          </>
                        ) : (
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded font-black text-[10px] uppercase tracking-widest">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-brand-gold group-hover:translate-x-2 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {state === 'register' && (
            <motion.div key="register" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto bg-white dark:bg-slate-900 p-12 rounded-[40px] shadow-2xl border-4 border-slate-50 dark:border-slate-800">
              <div className="text-center space-y-6">
                <div className="inline-flex p-5 bg-brand-gold/20 text-brand-gold rounded-full">
                  <UserIcon className="w-10 h-10" />
                </div>
                <h2 className="heading-serif text-4xl font-black text-brand-green dark:text-brand-gold">Student Bio-Data</h2>
                <p className="text-slate-500 dark:text-slate-400 font-bold">Complete your profile to track your academic progress across modules.</p>
                <form onSubmit={handleRegister} className="space-y-6 pt-6">
                  <div className="space-y-2 text-left">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-400 px-2">Academic Name</label>
                    <input name="name" required className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl focus:border-brand-green dark:focus:border-brand-gold outline-none font-bold placeholder:text-slate-300 dark:text-white" placeholder="e.g. Abdullah S." />
                  </div>
                  <div className="space-y-2 text-left opacity-50">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-400 px-2">Verified Email</label>
                    <input disabled value={currentUser?.email || ''} className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold cursor-not-allowed dark:text-slate-300" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-brand-green dark:bg-brand-gold text-brand-gold dark:text-brand-green rounded-2xl font-black text-lg hover:bg-brand-green-hover dark:hover:bg-white transition-all shadow-xl">
                    Create Academic Record
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {state === 'quiz' && (
            <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-[1fr_300px] gap-8 items-start relative">
              {progress.isPaused && (
                <div className="absolute inset-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center rounded-[40px]">
                  <div className="text-center space-y-6 bg-white dark:bg-slate-900 p-12 rounded-[40px] shadow-2xl border-4 border-slate-100 dark:border-slate-800">
                    <h2 className="heading-serif text-5xl font-black text-brand-green dark:text-brand-gold">Quiz Paused</h2>
                    <p className="font-bold text-slate-500">Your timer and progress are saved.</p>
                    <button 
                      onClick={() => setProgress(p => ({ ...p, isPaused: false }))}
                      className="px-8 py-4 bg-brand-green text-brand-gold rounded-2xl font-black shadow-xl hover:scale-105 transition-all text-xl"
                    >
                      RESUME ACADEMY
                    </button>
                  </div>
                </div>
              )}
              <div className="space-y-8">
              <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border-b-4 border-brand-gold relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-2 bg-brand-green dark:bg-brand-gold" />
                <div className="flex items-center gap-6 flex-wrap">
                  <button 
                    onClick={() => toggleFlag(progress.currentQuestionIndex)}
                    className={`p-3 rounded-xl transition-all ${progress.flaggedQuestions.includes(progress.currentQuestionIndex) ? 'bg-orange-500 text-white' : 'bg-slate-50 dark:bg-slate-800 text-slate-400'}`}
                    title="Flag for Review"
                  >
                    <Flag className={`w-5 h-5 ${progress.flaggedQuestions.includes(progress.currentQuestionIndex) ? 'fill-current' : ''}`} />
                  </button>
                  <button 
                    onClick={() => setProgress(p => ({ ...p, isPaused: true }))}
                    className="p-3 bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-brand-green rounded-xl transition-colors"
                    title="Pause"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  </button>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold ${timeLeft < 60 ? 'bg-red-50 dark:bg-red-900/20 text-red-500 animate-pulse' : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                    <Timer className="w-5 h-5" />
                    <span className="tabular-nums text-xl">{formatTime(timeLeft)}</span>
                  </div>
                  <div className="h-10 w-px bg-slate-100 dark:bg-slate-800 hidden sm:block" />
                  <div className="hidden sm:block">
                    <p className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Track</p>
                    <p className="font-bold text-brand-green dark:text-brand-gold truncate max-w-[150px]">{activeSection?.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="heading-serif text-2xl font-black text-brand-green dark:text-brand-gold leading-none">
                    {progress.currentQuestionIndex + 1} 
                    <span className="text-slate-200 dark:text-slate-700 text-base mx-2">OF</span> 
                    <span className="text-brand-gold">{questions.length}</span>
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-10 rounded-[40px] shadow-2xl border-2 border-slate-100 dark:border-slate-800">
                <div className="mb-10">
                  <h3 className="heading-serif text-3xl md:text-4xl font-black text-slate-800 dark:text-slate-100 leading-tight">
                    {questions[progress.currentQuestionIndex].text}
                  </h3>
                  
                  {questions[progress.currentQuestionIndex].diagram && (
                    <div className="mt-8 p-1 bg-slate-50 dark:bg-slate-800/50 rounded-[32px] border-2 border-slate-100 dark:border-slate-800 overflow-hidden">
                       <div className="bg-white rounded-[28px] p-8 flex justify-center items-center overflow-x-auto min-h-[200px]">
                          {questions[progress.currentQuestionIndex].diagram?.startsWith('<svg') ? (
                            <div 
                              dangerouslySetInnerHTML={{ __html: questions[progress.currentQuestionIndex].diagram || '' }} 
                              className="w-full flex justify-center text-slate-800 dark:text-slate-100 [&_svg]:w-full [&_svg]:max-w-[400px] [&_svg]:h-auto [&_svg]:max-h-[300px]"
                            />
                          ) : (
                            <div className="flex flex-col items-center gap-4 text-slate-300 dark:text-slate-600">
                               <Database className="w-12 h-12 opacity-30" />
                               <span className="font-black uppercase tracking-[0.2em] text-[10px] italic">
                                 Academic Archive: Diagram {questions[progress.currentQuestionIndex].id}
                               </span>
                            </div>
                          )}
                       </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {questions[progress.currentQuestionIndex].options.map((option, idx) => {
                    const currentQuestion = questions[progress.currentQuestionIndex];
                    const isSelected = progress.answers[currentQuestion.id] === option;
                    
                    let bgClasses = 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-brand-green';
                    let badgeClasses = 'bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700';
                    
                    if (progress.mode === 'practice' && progress.answers[currentQuestion.id]) {
                      const isCorrectOption = currentQuestion.correctAnswer === option;
                      if (isCorrectOption) {
                        bgClasses = 'bg-emerald-500 border-emerald-500 text-white shadow-xl';
                        badgeClasses = 'bg-emerald-600 text-white';
                      } else if (isSelected) {
                        bgClasses = 'bg-red-500 border-red-500 text-white shadow-xl';
                        badgeClasses = 'bg-red-600 text-white';
                      }
                    } else if (isSelected) {
                      bgClasses = 'bg-brand-green border-brand-green text-brand-gold shadow-xl';
                      badgeClasses = 'bg-brand-gold text-brand-green';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option)}
                        className={`w-full p-6 text-left rounded-3xl border-2 font-bold text-xl transition-all flex items-center group ${bgClasses}`}
                      >
                        <span className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 shrink-0 transition-colors ${badgeClasses}`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        {option}
                      </button>
                    );
                  })}
                  {progress.mode === 'practice' && progress.answers[questions[progress.currentQuestionIndex].id] && questions[progress.currentQuestionIndex].explanation && (
                    <div className="mt-6 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg text-blue-900 font-medium">
                      <div className="flex items-center gap-2 mb-2 font-bold text-blue-700 uppercase tracking-wider text-sm"><BookOpen className="w-4 h-4" /> Academic Explanation</div>
                      {questions[progress.currentQuestionIndex].explanation}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mt-12 pt-10 border-t-2 border-slate-50 dark:border-slate-800">
                  <button
                    onClick={() => {
                      if (progress.currentQuestionIndex > 0) {
                        const newProgress = { ...progress, currentQuestionIndex: progress.currentQuestionIndex - 1 };
                        setProgress(newProgress);
                        if (activeSection) updateLiveProgress(newProgress, activeSection, false);
                      }
                    }}
                    disabled={progress.currentQuestionIndex === 0}
                    className="flex items-center gap-2 font-black text-brand-green dark:text-brand-gold disabled:opacity-30 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" /> PREV
                  </button>
                  
                  {progress.currentQuestionIndex === questions.length - 1 ? (
                    <button
                      onClick={() => submitQuiz(progress.answers, progress.score)}
                      className="px-8 py-4 bg-brand-gold text-brand-green rounded-2xl font-black shadow-xl hover:scale-105 transition-all text-lg"
                    >
                      SUBMIT
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const newProgress = { ...progress, currentQuestionIndex: progress.currentQuestionIndex + 1 };
                        setProgress(newProgress);
                        if (activeSection) updateLiveProgress(newProgress, activeSection, false);
                      }}
                      className="flex items-center gap-2 font-black text-brand-green dark:text-brand-gold transition-all"
                    >
                      NEXT <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
              </div>

              {/* Navigation Grid */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] shadow-xl border-2 border-slate-100 dark:border-slate-800 sticky top-32">
                <h4 className="heading-serif text-xl font-black text-brand-green dark:text-brand-gold mb-6 flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5" /> Map
                </h4>
                <div className="grid grid-cols-5 gap-3">
                  {questions.map((_, idx) => {
                    const isAnswered = progress.answers[idx] !== undefined;
                    const isCurrent = progress.currentQuestionIndex === idx;
                    const isFlagged = progress.flaggedQuestions.includes(idx);
                    
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          const newProgress = { ...progress, currentQuestionIndex: idx };
                          setProgress(newProgress);
                          if (activeSection) updateLiveProgress(newProgress, activeSection, false);
                        }}
                        className={`aspect-square rounded-xl text-sm font-black transition-all flex items-center justify-center relative ${
                          isCurrent 
                            ? 'bg-brand-green text-brand-gold shadow-lg ring-2 ring-brand-gold/50 scale-110' 
                            : isAnswered 
                              ? 'bg-brand-gold/20 text-brand-green dark:text-brand-gold font-black' 
                              : 'bg-slate-50 dark:bg-slate-800 text-slate-400 hover:bg-slate-100'
                        }`}
                      >
                        {idx + 1}
                        {isFlagged && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white dark:border-slate-900" />
                        )}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-50 dark:border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-black uppercase text-slate-400">
                    <div className="w-3 h-3 bg-brand-green rounded-full" /> Current
                  </div>
                  <div className="flex items-center gap-2 text-sm font-black uppercase text-slate-400">
                    <div className="w-3 h-3 bg-brand-gold/30 rounded-full" /> Answered
                  </div>
                  <div className="flex items-center gap-2 text-sm font-black uppercase text-slate-400">
                    <div className="w-3 h-3 bg-orange-500 rounded-full" /> Flagged
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {state === 'results' && (
            <motion.div key="results" className="max-w-4xl mx-auto space-y-16" id="quiz-results-id">
              <div className="bg-brand-green dark:bg-slate-900 p-12 rounded-[50px] text-white dark:text-brand-gold shadow-2xl relative overflow-hidden transition-colors">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <Trophy className="w-64 h-64 text-brand-gold" />
                </div>
                <div className="text-center space-y-8 relative z-10">
                  <div className="inline-flex p-6 bg-brand-gold dark:bg-white text-brand-green rounded-full shadow-2xl animate-bounce">
                    <Trophy className="w-16 h-16" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="heading-serif text-5xl font-black tracking-tight">Report Logged</h2>
                    <p className="text-brand-gold dark:text-white text-xl font-bold uppercase tracking-[6px]">{studentInfo?.name}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-12 py-8 border-y border-white/10">
                    <div className="text-center">
                      <p className="text-sm font-black text-brand-gold uppercase tracking-widest mb-3">Module Score</p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-7xl font-black tabular-nums">{progress.score}</span>
                        <span className="text-white/30 text-xl font-black">/ {questions.length}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-black text-brand-gold uppercase tracking-widest mb-3">Efficiency</p>
                      <p className="text-7xl font-black tabular-nums">
                        {Math.round((progress.score / questions.length) * 100)}%
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-black text-brand-gold uppercase tracking-widest mb-3">XP Earned</p>
                      <div className="flex items-center justify-center gap-2">
                        <Zap className="w-8 h-8 text-brand-gold" />
                        <span className="text-7xl font-black tabular-nums">{progress.score * 15 + (progress.score === questions.length ? 100 : 0)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button onClick={() => activeSection && startQuiz(activeSection)} className="flex-1 py-4 bg-brand-gold text-brand-green rounded-2xl font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-xl">
                      <RotateCcw className="w-6 h-6" /> Retake Track
                    </button>
                    <button 
                      onClick={() => {
                        const element = document.getElementById('quiz-results-id');
                        if (element) {
                          html2canvas(element, { backgroundColor: '#ffffff' }).then((canvas) => {
                            const imgData = canvas.toDataURL('image/png');
                            const pdf = new jsPDF('p', 'mm', 'a4');
                            const imgProps = pdf.getImageProperties(imgData);
                            const pdfWidth = pdf.internal.pageSize.getWidth();
                            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                            pdf.save(`SFK_Academy_Report_${studentInfo?.name || 'Student'}.pdf`);
                          });
                        }
                      }}
                      className="flex-1 py-4 bg-brand-green text-brand-gold rounded-2xl font-black text-lg hover:brightness-110 transition-all border-2 border-brand-green flex items-center justify-center gap-3 shadow-xl"
                    >
                      <Download className="w-6 h-6" /> Export Report
                    </button>
                    <button onClick={() => setState('welcome')} className="flex-1 py-4 bg-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/20 transition-all border-2 border-white/20">
                      Academy Portal
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-slate-900 dark:bg-slate-800 p-8 rounded-[40px] border-l-[12px] border-brand-gold shadow-2xl">
                  <div className="flex items-center gap-6 mb-4">
                    <div className="p-4 bg-brand-gold/20 text-brand-gold rounded-full">
                      <BrainCircuit className="w-8 h-8" />
                    </div>
                    <h3 className="heading-serif text-3xl font-black text-white">Elite AI Misconception Analysis</h3>
                  </div>
                  <p className="text-slate-300 font-bold italic leading-relaxed text-lg">
                    {progress.score === questions.length 
                      ? "Flawless execution. Your cognitive patterns match the elite bracket of AKU candidates. No misconceptions detected. Proceed to advanced modules."
                      : `Mastery gaps identified in ${activeSection?.name}. Our intelligence indicates potential logical oversights in ${questions.filter(q => progress.answers[q.id] !== q.correctAnswer).length} areas. Revisiting the 'Rationale' provided for each error is recommended for cognitive reinforcement.`}
                  </p>
                </div>

                <div className="flex items-center gap-4 px-2">
                  <div className="h-10 w-2 bg-brand-gold rounded-full" />
                  <h3 className="heading-serif text-3xl font-black text-brand-green dark:text-brand-gold">Academic Rationale</h3>
                </div>
                <div className="space-y-6">
                  {questions.map((q, idx) => {
                    const userAnswer = progress.answers[q.id];
                    const isCorrect = userAnswer === q.correctAnswer;
                    return (
                      <div key={q.id} className="p-8 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-lg rounded-[32px] space-y-4 relative overflow-hidden group transition-colors">
                        <div className={`absolute top-0 right-0 w-3 h-full ${isCorrect ? 'bg-emerald-500' : 'bg-red-500'}`} />
                        <div className="flex items-center justify-between">
                          <h4 className="heading-serif font-black text-xl text-slate-800 dark:text-slate-200">
                            <span className="text-brand-gold mr-3 opacity-40">#{idx + 1}</span> {q.text}
                          </h4>
                          {q.diagram && (
                            <div className="my-4 p-4 bg-white rounded-2xl border border-slate-100 dark:border-slate-800 inline-block w-full max-w-full overflow-hidden">
                               {q.diagram.startsWith('<svg') ? (
                                 <div 
                                   dangerouslySetInnerHTML={{ __html: q.diagram }} 
                                   className="w-full flex justify-center [&_svg]:w-full [&_svg]:max-w-[300px] [&_svg]:h-auto scale-90 origin-left"
                                 />
                               ) : (
                                 <div className="flex items-center gap-2 text-slate-300 dark:text-slate-600 text-[10px] font-black uppercase tracking-widest">
                                    <Database className="w-4 h-4" />
                                    Archive Reference: {q.id}
                                 </div>
                               )}
                            </div>
                          )}
                          {progress.flaggedQuestions.includes(idx) && (
                            <div className="flex items-center gap-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-xs font-black uppercase tracking-widest border border-orange-200 dark:border-orange-900/50">
                              <Flag className="w-3 h-3 fill-current" /> Flagged for Review
                            </div>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className={`p-4 rounded-2xl border-2 ${isCorrect ? 'bg-emerald-50/30 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-400' : 'bg-red-50/30 dark:bg-red-900/20 border-red-100 dark:border-red-900/40 text-red-900 dark:text-red-400'}`}>
                            <span className="text-xs font-black uppercase text-slate-400 dark:text-slate-500 block mb-2">My Answer</span>
                            <span className="font-bold">{userAnswer || 'Timed Out'}</span>
                          </div>
                          {!isCorrect && (
                            <div className="p-4 rounded-2xl bg-brand-green/5 dark:bg-brand-gold/5 border-2 border-brand-green/10 dark:border-brand-gold/10 text-brand-green dark:text-brand-gold">
                              <span className="text-xs font-black uppercase text-brand-green/40 dark:text-brand-gold/40 block mb-2">Verified Key</span>
                              <span className="font-bold">{q.correctAnswer}</span>
                            </div>
                          )}
                        </div>
                        {q.explanation && (
                          <p className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-slate-500 dark:text-slate-400 font-bold text-sm border-l-4 border-slate-200 dark:border-slate-700 transition-colors">
                            {q.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {state === 'performance' && personalStats && (
            <motion.div key="performance" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="heading-serif text-4xl font-black text-brand-green dark:text-brand-gold">Academic Analytics</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-bold mt-1">Detailed track record for {studentInfo?.name}</p>
                </div>
                <button onClick={() => setState('welcome')} className="flex items-center gap-2 text-brand-green dark:text-brand-gold font-bold hover:scale-105 transition-transform">
                  <ArrowLeft className="w-5 h-5" /> Back to Tracks
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 p-8 rounded-[40px] flex flex-col md:flex-row items-center gap-8 shadow-xl">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-8 border-slate-100 dark:border-slate-800 flex items-center justify-center">
                       <span className="text-4xl font-black text-brand-green dark:text-brand-gold">{studentInfo?.level || 1}</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-gold text-brand-green font-black text-[10px] rounded-full uppercase tracking-tighter">LEVEL</div>
                  </div>
                  <div className="flex-1 w-full space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="text-2xl font-black text-brand-green dark:text-brand-gold">Scholar Prestige</h4>
                        <p className="text-slate-400 font-bold text-sm tracking-widest uppercase">PROGRESS TO LEVEL {(studentInfo?.level || 1) + 1}</p>
                      </div>
                      <span className="font-black text-brand-gold">{(studentInfo?.xp || 0) % 100} / 100 XP</span>
                    </div>
                    <div className="h-4 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-1 shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${(studentInfo?.xp || 0) % 100}%` }}
                        className="h-full bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 bg-brand-green/5 dark:bg-brand-gold/5 border-2 border-brand-green/20 dark:border-brand-gold/20 p-8 rounded-[40px] flex items-center gap-6">
                  <div className="w-16 h-16 bg-brand-green text-brand-gold rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <BrainCircuit className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-brand-green dark:text-brand-gold font-black uppercase tracking-widest text-sm mb-1">Elite Analytic Insight</h4>
                    <p className="text-slate-700 dark:text-slate-300 font-bold italic">"{eliteAnalysis}"</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-xl border-b-4 border-brand-green text-center">
                  <div className="flex justify-center mb-4 text-brand-green">
                    <FileText className="w-8 h-8" />
                  </div>
                  <p className="text-3xl font-black text-brand-green dark:text-brand-gold">{personalStats.totalSubmissions}</p>
                  <p className="text-xs font-black uppercase text-slate-400 tracking-widest mt-1">Quizzes Taken</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-xl border-b-4 border-brand-gold text-center">
                  <div className="flex justify-center mb-4 text-brand-gold">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <p className="text-3xl font-black text-brand-green dark:text-brand-gold">
                    {personalStats.totalPossible > 0 ? Math.round((personalStats.averageScore / personalStats.totalPossible) * 100) : 0}%
                  </p>
                  <p className="text-xs font-black uppercase text-slate-400 tracking-widest mt-1">Average Accuracy</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-xl border-b-4 border-emerald-500 text-center">
                  <div className="flex justify-center mb-4 text-emerald-500">
                    <Award className="w-8 h-8" />
                  </div>
                  <p className="text-3xl font-black text-brand-green dark:text-brand-gold">{personalStats.highestScore}</p>
                  <p className="text-xs font-black uppercase text-slate-400 tracking-widest mt-1">Personal Best</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-xl border-b-4 border-brand-green text-center">
                  <div className="flex justify-center mb-4 text-brand-green">
                    <Target className="w-8 h-8" />
                  </div>
                  <p className="text-3xl font-black text-brand-green dark:text-brand-gold">{personalStats.averageScore}</p>
                  <p className="text-xs font-black uppercase text-slate-400 tracking-widest mt-1">Total Points</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-xl border-2 border-slate-100 dark:border-slate-800">
                  <h3 className="heading-serif text-2xl font-black text-brand-green dark:text-brand-gold mb-6">Scholastic Profile</h3>
                  <div className="space-y-6">
                    {['Physics', 'Chemistry', 'Biology', 'Logical Reasoning'].map(subj => {
                      const subjHistory = personalStats.history.filter(h => h.sectionName.includes(subj));
                      const subjAccuracy = subjHistory.length > 0 
                        ? Math.round((subjHistory.reduce((acc, curr) => acc + curr.score, 0) / subjHistory.reduce((acc, curr) => acc + curr.total, 0)) * 100) 
                        : 0;
                      return (
                        <div key={subj} className="space-y-2">
                          <div className="flex justify-between items-baseline">
                            <span className="font-bold text-slate-700 dark:text-slate-300">{subj}</span>
                            <span className="text-sm font-black text-brand-gold">{subjAccuracy}%</span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${subjAccuracy}%` }}
                              className="h-full bg-brand-gold"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-xl border-2 border-slate-100 dark:border-slate-800 flex flex-col justify-center text-center">
                  <div className="inline-flex mx-auto p-4 bg-brand-gold/10 text-brand-gold rounded-full mb-4">
                    <Star className="w-10 h-10 fill-current" />
                  </div>
                  <h3 className="heading-serif text-2xl font-black text-brand-green dark:text-brand-gold">Current Standing</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-bold mt-2">You are currently in the Top {(100 - (personalStats.averageScore / (personalStats.totalPossible || 1) * 100) / 2).toFixed(1)}% of all SFK candidates.</p>
                  <p className="text-xs font-black uppercase text-brand-gold tracking-widest mt-6">Estimated Prediction: EXCELLENT</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border-2 border-slate-100 dark:border-slate-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-brand-green dark:bg-slate-800 text-brand-gold">
                        <th className="px-8 py-5 text-xs font-black uppercase tracking-widest">Module Name</th>
                        <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-center">Score</th>
                        <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-center">Accuracy</th>
                        <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-right">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                      {personalStats.history.map((sub) => (
                        <tr key={sub.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <span className="font-black text-slate-800 dark:text-slate-200 text-lg">{sub.sectionName}</span>
                              {sub.flaggedQuestions && sub.flaggedQuestions.length > 0 && (
                                <div className="p-1.5 bg-orange-100 text-orange-600 rounded-lg" title={`${sub.flaggedQuestions.length} Questions Flagged`}>
                                  <Flag className="w-4 h-4 fill-current" />
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-8 py-6 text-center tabular-nums font-black text-slate-800 dark:text-slate-200">
                            {sub.score} <span className="text-slate-300 dark:text-slate-700">/</span> {sub.total}
                          </td>
                          <td className="px-8 py-6 text-center">
                            <div className="inline-flex items-center gap-2">
                              <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-brand-gold" 
                                  style={{ width: `${(sub.score / sub.total) * 100}%` }} 
                                />
                              </div>
                              <span className="text-xs font-black text-brand-gold">{Math.round((sub.score / sub.total) * 100)}%</span>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-right text-sm font-bold text-slate-400 dark:text-slate-500">
                            {new Date(sub.submittedAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {state === 'leaderboard' && (
            <motion.div key="leaderboard" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="heading-serif text-4xl font-black text-brand-green dark:text-brand-gold">Global Vanguard</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-bold mt-1">SFK Academy: Most Elite Performers</p>
                </div>
                <button onClick={() => setState('welcome')} className="flex items-center gap-2 text-brand-green dark:text-brand-gold font-bold hover:scale-105 transition-transform">
                  <ArrowLeft className="w-5 h-5" /> Back to Tracks
                </button>
              </div>

              <div className="bg-brand-gold p-8 rounded-[40px] text-brand-green flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sparkles className="w-32 h-32" />
                </div>
                <div className="space-y-2 relative z-10">
                  <h3 className="heading-serif text-3xl font-black">Rise to the Challenge</h3>
                  <p className="font-bold opacity-80">The top 1% of SFK scholars gain exclusive access to the Founders' Circle.</p>
                </div>
                <button 
                  onClick={() => setState('welcome')}
                  className="px-8 py-4 bg-brand-green text-brand-gold rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all whitespace-nowrap relative z-10"
                >
                  Start New Track
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {leaderboard.slice(0, 3).map((student, idx) => (
                  <div 
                    key={student.studentEmail} 
                    className={`relative p-8 rounded-[40px] text-center shadow-2xl border-4 ${
                      idx === 0 ? 'bg-brand-green border-brand-gold text-brand-gold ring-4 ring-brand-gold/20' : 
                      idx === 1 ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-brand-green dark:text-brand-gold' : 
                      'bg-white dark:bg-slate-900 border-brand-gold/20 dark:border-slate-800 text-brand-green dark:text-brand-gold'
                    }`}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-inherit border-inherit border-4 w-12 h-12 rounded-full flex items-center justify-center font-black">
                      {idx + 1}
                    </div>
                    <div className="flex justify-center mb-6">
                      <div className={`p-4 rounded-3xl ${idx === 0 ? 'bg-brand-gold text-brand-green' : 'bg-slate-50 dark:bg-slate-800 text-brand-gold'}`}>
                        {idx === 0 ? <Trophy className="w-10 h-10" /> : <Medal className="w-10 h-10" />}
                      </div>
                    </div>
                    <h3 className="heading-serif text-2xl font-black mb-2 truncate px-4">{student.studentName}</h3>
                    <div className="mb-4">
                      <span className={`px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest ${idx === 0 ? 'bg-white text-brand-green' : 'bg-brand-gold text-brand-green'}`}>
                        Prestige Level {student.prestige}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-black uppercase tracking-widest opacity-60">Cumulative Points</p>
                      <p className="text-4xl font-black">{student.totalScore}</p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-current/10 flex justify-between text-sm font-bold">
                      <span>{student.quizzesTaken} Quizzes</span>
                      <span>{Math.round(student.accuracy)}% Accuracy</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border-2 border-slate-100 dark:border-slate-800 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800 text-slate-400">
                      <th className="px-8 py-4 text-sm font-black uppercase tracking-widest">Rank</th>
                      <th className="px-8 py-4 text-sm font-black uppercase tracking-widest">Scholar</th>
                      <th className="px-8 py-4 text-sm font-black uppercase tracking-widest text-center">Prestige</th>
                      <th className="px-8 py-4 text-sm font-black uppercase tracking-widest text-center">Score</th>
                      <th className="px-8 py-4 text-sm font-black uppercase tracking-widest text-right">Efficiency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                      {leaderboard.slice(3).map((student, idx) => (
                        <tr key={student.studentEmail} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="px-8 py-6 font-black text-slate-300">{idx + 4}</td>
                          <td className="px-8 py-6">
                            <span className="font-black text-slate-800 dark:text-slate-200">{student.studentName}</span>
                          </td>
                          <td className="px-8 py-6 text-center">
                            <span className={`px-3 py-1 rounded-full font-black text-[10px] tracking-widest uppercase ${
                              student.prestige >= 10 ? 'bg-indigo-500 text-white' : 
                              student.prestige >= 5 ? 'bg-brand-gold text-brand-green' : 
                              'bg-slate-100 dark:bg-slate-800 text-slate-500'
                            }`}>
                              LVL {student.prestige}
                            </span>
                          </td>
                          <td className="px-8 py-6 text-center font-black text-brand-green dark:text-brand-gold">{student.totalScore}</td>
                        <td className="px-8 py-6 text-right">
                          <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full font-black text-sm uppercase">
                            {Math.round(student.accuracy)}% 
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {state === 'interview-prep' && (
            <motion.div key="interview-prep" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="heading-serif text-4xl font-black text-brand-green dark:text-brand-gold">Interview Mastery</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-bold mt-1">Founders' Circle Interview Prep & MMI Scenarios</p>
                </div>
                <button onClick={() => setState('welcome')} className="flex items-center gap-2 text-brand-green dark:text-brand-gold font-bold hover:scale-105 transition-transform">
                  <ArrowLeft className="w-5 h-5" /> Back to Tracks
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {INTERVIEW_PREP_VIDEOS.map((video) => (
                  <div key={video.id} className="bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[40px] overflow-hidden shadow-2xl transition-all hover:border-brand-gold group">
                    <div className="aspect-video relative overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-xl group-hover:bg-brand-gold group-hover:text-brand-green transition-all">
                          <Video className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-brand-green dark:text-brand-gold">{video.title}</h3>
                          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{video.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                        Master the complexities of the AKU Interview process with our expert-led guidance series. This module covers critical thinking, ethical reasoning, and strategic presentation.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="max-w-4xl mx-auto bg-brand-green p-10 rounded-[40px] text-brand-gold shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                  <Users className="w-48 h-48" />
                </div>
                <div className="relative z-10 space-y-6 text-center">
                  <h3 className="heading-serif text-3xl font-black">Join the Mock MMI Sessions</h3>
                  <p className="text-lg font-bold opacity-80 max-w-2xl mx-auto">
                    Live mock interview simulations are held weekly for registered students. Secure your slot via the SFK administrative portal.
                  </p>
                  <div className="pt-4">
                    <button className="px-8 py-4 bg-brand-gold text-brand-green rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all">
                      Schedule Mock Session
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {state === 'portfolio' && (
            <motion.div key="portfolio" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-16">
              <div className="flex items-center justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-10">
                <div className="space-y-3">
                  <h2 className="heading-serif text-5xl md:text-6xl font-black text-brand-green dark:text-brand-gold tracking-tight">Founder Profile</h2>
                  <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Academic Excellence & Leadership</p>
                </div>
                <button onClick={() => setState('welcome')} className="p-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl text-brand-green dark:text-brand-gold hover:scale-110 transition-transform">
                  <ArrowLeft className="w-8 h-8" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1 space-y-8">
                  <div className="aspect-square bg-brand-gold/10 rounded-[64px] border-4 border-brand-gold/20 overflow-hidden relative group">
                    <img 
                      src={siteConfig.founderImageUrl && !siteConfig.founderImageUrl.includes('db61ce') ? siteConfig.founderImageUrl : founderImage} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={PORTFOLIO_DATA.name} 
                    />
                  </div>
                  <div className="space-y-4 text-center lg:text-left px-4">
                    <h3 className="text-3xl font-black text-brand-green dark:text-brand-gold uppercase tracking-tighter leading-none">{PORTFOLIO_DATA.name}</h3>
                    <p className="text-brand-gold font-bold uppercase tracking-widest text-sm">{PORTFOLIO_DATA.title}</p>
                    <div className="flex flex-wrap gap-2 pt-4 justify-center lg:justify-start">
                      {PORTFOLIO_DATA.skills.map(skill => (
                        <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full font-black text-[10px] uppercase tracking-widest">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-12">
                   <div className="bg-white dark:bg-slate-900 p-12 rounded-[56px] border-2 border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
                     <Quote className="absolute top-8 right-8 w-16 h-16 text-brand-gold/10" />
                     <h4 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] mb-6">Profile Narrative</h4>
                     <p className="text-xl text-slate-600 dark:text-slate-300 font-bold leading-relaxed italic">
                       "{siteConfig.founderBio}"
                     </p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-8">
                        <h4 className="flex items-center gap-3 text-brand-green dark:text-brand-gold font-black uppercase tracking-widest text-sm border-b-2 border-brand-gold/20 pb-4">
                          <GraduationCap className="w-5 h-5" /> Academic Pedigree
                        </h4>
                        <div className="space-y-6">
                           {PORTFOLIO_DATA.education.map((edu, idx) => (
                             <div key={idx} className="relative pl-8 border-l-4 border-brand-gold/20 hover:border-brand-gold transition-colors py-2 group">
                               <div className="absolute top-2 -left-2 w-3 h-3 bg-brand-gold rounded-full group-hover:scale-150 transition-transform" />
                               <h5 className="font-black text-brand-green dark:text-brand-gold text-lg tracking-tight leading-none mb-1">{edu.degree}</h5>
                               <p className="text-slate-500 font-bold text-sm mb-1">{edu.institution}</p>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{edu.details}</p>
                             </div>
                           ))}
                        </div>
                      </div>

                      <div className="space-y-8">
                        <h4 className="flex items-center gap-3 text-brand-green dark:text-brand-gold font-black uppercase tracking-widest text-sm border-b-2 border-brand-gold/20 pb-4">
                          <Briefcase className="w-5 h-5" /> Professional Tenure
                        </h4>
                        <div className="space-y-6">
                           {PORTFOLIO_DATA.experience.map((exp, idx) => (
                             <div key={idx} className="relative pl-8 border-l-4 border-brand-green/20 hover:border-brand-green transition-colors py-2 group">
                               <div className="absolute top-2 -left-2 w-3 h-3 bg-brand-green rounded-full group-hover:scale-150 transition-transform" />
                               <h5 className="font-black text-brand-green dark:text-brand-gold text-lg tracking-tight leading-none mb-1">{exp.role}</h5>
                               <p className="text-slate-500 font-bold text-sm mb-1">{exp.company}</p>

                             </div>
                           ))}
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          )}

          {state === 'video-lectures' && (
            <motion.div key="video-lectures" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-16">
              <div className="flex items-center justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-10">
                <div className="space-y-3">
                  <h2 className="heading-serif text-5xl md:text-6xl font-black text-brand-green dark:text-brand-gold tracking-tight">SFK Media Lab</h2>
                  <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Elite Video Lecture Series</p>
                </div>
                <button onClick={() => setState('welcome')} className="p-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl text-brand-green dark:text-brand-gold hover:scale-110 transition-transform">
                  <ArrowLeft className="w-8 h-8" />
                </button>
              </div>

              {(!siteConfig.mediaSections || siteConfig.mediaSections.length === 0) ? (
                 <div className="bg-brand-green text-brand-gold p-16 rounded-[64px] shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
                   <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                      <div className="w-32 h-32 bg-brand-gold text-brand-green rounded-[40px] flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform">
                        <Youtube className="w-16 h-16" />
                      </div>
                      <div className="space-y-6 max-w-2xl text-center md:text-left">
                         <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">{siteConfig.videoTitle || VIDEO_PLAYLIST.title}</h3>
                         <p className="text-brand-gold/70 font-bold text-lg leading-relaxed">{VIDEO_PLAYLIST.description}</p>
                         <button 
                           onClick={() => window.open(siteConfig.videoUrl || VIDEO_PLAYLIST.url, '_blank')}
                           className="px-10 py-5 bg-brand-gold text-brand-green rounded-[24px] font-black text-xs uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-3 w-full md:w-fit justify-center"
                         >
                           Launch Full Playlist <Globe className="w-5 h-5" />
                         </button>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="space-y-12">
                   {siteConfig.mediaSections.map((section: any, sIdx: number) => (
                      <div key={sIdx} className="space-y-6">
                         <h3 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight">{section.title}</h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.videos.map((vid: any, vIdx: number) => {
                               // Extract YouTube ID safely
                               let ytId = '';
                               const match = vid.url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n\?\#]+)/);
                               if (match && match[1]) ytId = match[1];

                               return (
                                 <div key={vIdx} className="bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-brand-green hover:shadow-2xl transition-all">
                                    {ytId ? (
                                      <iframe
                                        className="w-full aspect-video"
                                        src={`https://www.youtube.com/embed/${ytId}`}
                                        title={vid.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                      ></iframe>
                                    ) : (
                                      <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-4 text-center text-slate-500 font-bold">
                                         Invalid Video URL
                                      </div>
                                    )}
                                    <div className="p-6">
                                       <h4 className="font-bold text-lg text-slate-800 dark:text-white line-clamp-2">{vid.title}</h4>
                                       {isAdminUser && (
                                         <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-brand-green font-bold text-center italic">
                                           Add comments logic or edit capabilities via Admin Site Settings.
                                         </div>
                                       )}
                                    </div>
                                 </div>
                               );
                            })}
                         </div>
                      </div>
                   ))}
                </div>
              )}
            </motion.div>
          )}

          {state === 'academic-library' && (
            <motion.div key="academic-library" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-16">
              <div className="flex items-center justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-10">
                <div className="space-y-3">
                  <h2 className="heading-serif text-5xl md:text-6xl font-black text-brand-green dark:text-brand-gold tracking-tight">Academic Library</h2>
                  <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Archival Scholarly Resources</p>
                </div>
                <button onClick={() => setState('welcome')} className="p-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl text-brand-green dark:text-brand-gold hover:scale-110 transition-transform">
                  <ArrowLeft className="w-8 h-8" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-12 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[56px] shadow-xl hover:border-brand-green transition-all group flex flex-col items-start">
                   <div className="p-6 bg-brand-green/10 text-brand-green rounded-[32px] group-hover:rotate-6 transition-all mb-8">
                     <FolderOpen className="w-12 h-12" />
                   </div>
                   <h3 className="text-3xl font-black text-brand-green dark:text-brand-gold uppercase tracking-tighter leading-none mb-4">Practice <br/>Resources</h3>
                   <p className="text-slate-500 font-bold text-lg leading-relaxed mb-10">Subject-wise PDF vaults containing curated practice materials for intensive preparation.</p>
                   <button 
                     onClick={() => setState('practice-bank')}
                     className="mt-auto px-8 py-4 bg-brand-green text-brand-gold rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all"
                   >
                     Open Practice Vault
                   </button>
                </div>

                <div className="p-12 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[56px] shadow-xl hover:border-brand-gold transition-all group flex flex-col items-start opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
                   <div className="p-6 bg-brand-gold/10 text-brand-gold rounded-[32px] group-hover:rotate-6 transition-all mb-8">
                     <FolderPlus className="w-12 h-12" />
                   </div>
                   <h3 className="text-3xl font-black text-brand-gold uppercase tracking-tighter leading-none mb-4">Curriculum <br/>Archives</h3>
                   <p className="text-slate-500 font-bold text-lg leading-relaxed mb-10">Institutional curriculum roadmaps and strategic study guides for various examination boards.</p>
                   <div className="mt-auto px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-full font-black text-[10px] uppercase tracking-widest border border-slate-200 dark:border-slate-700">
                     Content Uploading...
                   </div>
                </div>
              </div>
            </motion.div>
          )}

          {state === 'practice-bank' && (
            <motion.div key="practice-bank" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-16">
              <div className="flex items-center justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-10">
                <div className="space-y-3">
                  <h2 className="heading-serif text-5xl md:text-6xl font-black text-brand-green dark:text-brand-gold tracking-tight">Practice Bank</h2>
                  <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Multi-Tier Assessment Modules</p>
                </div>
                <button onClick={() => setState('welcome')} className="p-5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-3xl text-brand-green dark:text-brand-gold hover:scale-110 transition-transform">
                  <ArrowLeft className="w-8 h-8" />
                </button>
              </div>

               {['Topic Wise', 'Archive', 'Reasoning', 'AKU Past Papers'].map(category => (
                <div key={category} className="space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="h-0.5 flex-1 bg-slate-100 dark:bg-slate-800" />
                      <h4 className="text-[10px] font-black text-brand-gold uppercase tracking-[0.4em] px-6 py-2 border-2 border-brand-gold/20 rounded-full">{category}</h4>
                      <div className="h-0.5 flex-1 bg-slate-100 dark:bg-slate-800" />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {(category === 'AKU Past Papers' || category === 'Archive') ? (
                       localQuizzes.filter(q => {
                         // Robust subject matching
                         const subj = q.subject?.toLowerCase() || '';
                         const cat = category.toLowerCase();
                         return subj.includes(cat) || cat.includes(subj) || (cat === 'aku past papers' && subj === 'aku past paper');
                       }).map((quiz) => (
                         <button 
                           key={quiz.id}
                           onClick={() => startQuiz(quiz)}
                           className="p-10 bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-[48px] hover:border-brand-green hover:shadow-2xl transition-all flex flex-col items-start group text-left relative overflow-hidden"
                         >
                            <div className="p-5 rounded-3xl bg-brand-green/5 text-brand-green group-hover:bg-brand-green group-hover:text-brand-gold transition-all mb-8">
                               <ClipboardList className="w-10 h-10" />
                            </div>
                            <h3 className="font-black text-xl text-slate-800 dark:text-white uppercase tracking-tighter leading-[1.1] mb-2">{quiz.title}</h3>
                            <div className="flex items-center gap-3 mt-auto">
                               <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest px-2 py-1 bg-brand-gold/10 rounded-md">{quiz.subject}</span>
                               <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{quiz.questions.length} QUESTIONS</span>
                            </div>
                            <div className="absolute top-4 right-4 text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">
                               <ArrowRight className="w-6 h-6" />
                            </div>
                         </button>
                       ))
                     ) : (
                       PRACTICE_RESOURCES_LIST.filter(r => r.category === category).map((resource) => (
                         <button 
                           key={resource.id}
                           onClick={() => {
                             if (resource.action) {
                               if (resource.action === 'interview-prep') setState('interview-prep');
                               if (resource.action === 'analytics') { loadPersonalStats(); setState('performance'); }
                               if (resource.action === 'leaderboard') setState('leaderboard');
                               if (resource.action === 'academic-library') setState('academic-library');
                               if (resource.action.startsWith('quiz_direct_')) {
                                  const localMatch = localQuizzes.find(q => q.id === resource.id);
                                  if (localMatch) {
                                    startQuiz(localMatch);
                                  } else {
                                    startQuiz({
                                      id: resource.id,
                                      name: resource.name,
                                      description: `Interactive simulation for ${resource.name}`,
                                      subject: resource.subject
                                    } as any);
                                  }
                               }
                               return;
                             }
                             if (isPremiumActive) {
                               alert(`Access Granted to ${resource.name}. Preparing direct download link...`);
                             } else {
                               alert(`Limited Access: ${resource.name} is exclusive to enrolled students. Use your institutional code to unlock.`);
                             }
                           }}
                           className="p-10 bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-[48px] hover:border-brand-green hover:shadow-2xl transition-all flex flex-col items-start group text-left relative overflow-hidden"
                         >
                           {!isPremiumActive && <div className="absolute top-4 right-4 text-slate-300 dark:text-slate-700"><Lock className="w-5 h-5" /></div>}
                           <div className={`p-5 rounded-3xl transition-all mb-8 ${isPremiumActive || resource.action ? 'bg-brand-green/5 text-brand-green group-hover:bg-brand-green group-hover:text-brand-gold' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                             {resource.action === 'interview-prep' ? <GraduationCap className="w-10 h-10" /> :
                              resource.action === 'analytics' ? <TrendingUp className="w-10 h-10" /> :
                              resource.action === 'leaderboard' ? <Trophy className="w-10 h-10" /> :
                              resource.action === 'academic-library' ? <BookOpen className="w-10 h-10" /> :
                              <FileText className="w-10 h-10" />}
                           </div>
                           <h3 className="font-black text-xl text-slate-800 dark:text-white uppercase tracking-tighter leading-[1.1] mb-2">{resource.name}</h3>
                           <div className="flex items-center gap-3 mt-auto">
                              <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest px-2 py-1 bg-brand-gold/10 rounded-md">{resource.subject}</span>
                              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{resource.type} RESOURCE</span>
                           </div>
                           <div className="absolute top-4 right-4 text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">
                              <ArrowRight className="w-6 h-6" />
                           </div>
                         </button>
                       ))
                     )}
                   </div>
                </div>
              ))}
            </motion.div>
          )}

          {state === 'admin' && !isAdminAuthenticated && (
            <motion.div key="admin-auth" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 text-center">
              <div className="mb-6 inline-flex p-4 bg-brand-gold/10 text-brand-gold rounded-full">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="heading-serif text-3xl font-black text-brand-green dark:text-brand-gold mb-2">Admin Command</h2>
              <p className="text-slate-500 font-bold text-sm mb-6">Enter PIN to access institutional archives.</p>
              <input 
                type="password" 
                placeholder="••••••••" 
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && pinInput === adminPIN) {
                    setIsAdminAuthenticated(true);
                  }
                }}
                className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl mb-4 font-black tracking-widest text-center"
              />
              <button 
                onClick={() => {
                  if (pinInput === adminPIN) setIsAdminAuthenticated(true);
                  else alert('Invalid PIN');
                }}
                className="w-full py-4 bg-brand-green text-brand-gold rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
              >
                Unlock Dashboard
              </button>
            </motion.div>
          )}

          {state === 'admin' && isAdminAuthenticated && (
            <motion.div key="admin-dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col md:flex-row gap-8 items-start">
              {/* Admin Sidebar */}
              <aside className="w-full md:w-64 bg-white dark:bg-slate-900 p-6 rounded-[32px] border-2 border-slate-50 dark:border-slate-800 shadow-xl space-y-2 sticky top-24">
                <div className="flex items-center gap-3 mb-8 px-2">
                   <div className="p-2 bg-brand-green text-brand-gold rounded-lg">
                      <Settings2 className="w-5 h-5" />
                   </div>
                   <span className="font-black text-sm uppercase tracking-widest text-slate-800 dark:text-brand-gold">Dashboard</span>
                </div>
                
                {[
                  { id: 'home', icon: LayoutGrid, label: 'Overview' },
                  { id: 'quizzes', icon: ClipboardList, label: 'Quizzes' },
                  { id: 'questions', icon: Database, label: 'Question Bank' },
                  { id: 'import', icon: Upload, label: 'Import Center' },
                  { id: 'results', icon: BarChart, label: 'Results' },
                  { id: 'settings', icon: Settings, label: 'Settings' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setAdminTab(item.id as any)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                      adminTab === item.id 
                        ? 'bg-brand-green text-brand-gold shadow-lg shadow-brand-green/20' 
                        : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-600'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
                
                <div className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-800">
                  <button 
                    onClick={() => setIsAdminAuthenticated(false)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-500 font-black text-xs uppercase tracking-widest hover:bg-red-50 dark:hover:bg-red-900/10 rounded-2xl transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                    Lock Out
                  </button>
                </div>
              </aside>

              {/* Admin Main Content */}
              <div className="flex-1 space-y-8 min-w-0">
                <div className="flex items-center justify-between">
                  <h2 className="heading-serif text-4xl font-black text-brand-green dark:text-brand-gold capitalize">{adminTab} Center</h2>
                  <button onClick={() => setState('welcome')} className="flex items-center gap-2 text-brand-green dark:text-brand-gold font-bold hover:scale-105 transition-transform text-xs uppercase tracking-widest bg-brand-gold/10 px-4 py-2 rounded-full">
                    <ArrowLeft className="w-4 h-4" /> Portal Home
                  </button>
                </div>
                
                {/* Dynamic Admin View */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border-2 border-slate-50 dark:border-slate-800 shadow-2xl min-h-[600px] transition-all">
                  {adminTab === 'home' && (
                    <div className="space-y-8">
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {[
                            { label: 'Total Quizzes', value: adminStats.totalQuizzes, icon: ClipboardList, color: 'text-blue-500' },
                            { label: 'Questions', value: adminStats.totalQuestions, icon: Database, color: 'text-brand-green' },
                            { label: 'Total Attempts', value: adminStats.totalAttempts, icon: UserCheck, color: 'text-brand-gold' },
                            { label: 'Avg Success', value: `${adminStats.avgSuccess}%`, icon: Trophy, color: 'text-purple-500' }
                          ].map((stat, i) => (
                            <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm">
                               <div className="flex items-center justify-between mb-4">
                                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter self-start">Live Stat</span>
                               </div>
                               <div className="text-3xl font-black text-slate-800 dark:text-white tabular-nums">{stat.value}</div>
                               <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">{stat.label}</div>
                            </div>
                          ))}
                       </div>
                       
                       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="space-y-6">
                             <h3 className="font-black text-lg uppercase tracking-widest text-brand-green dark:text-brand-gold flex items-center gap-2">
                                <TrendingUp className="w-5 h-5" /> Recent Activity
                             </h3>
                             <div className="space-y-4">
                                {localAttempts.slice(-5).reverse().map((at, i) => (
                                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 text-sm">
                                     <div className={`p-3 rounded-xl ${at.score >= at.total*0.7 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                                        <UserIcon className="w-4 h-4" />
                                     </div>
                                     <div className="flex-1">
                                        <p className="font-black text-slate-800 dark:text-white">{at.studentName}</p>
                                        <p className="text-xs text-slate-400 font-bold">{at.quizTitle}</p>
                                     </div>
                                     <div className="text-right">
                                        <p className="font-black text-brand-green dark:text-brand-gold">{at.score}/{at.total}</p>
                                        <p className="text-[9px] text-slate-400 font-bold">{new Date(at.timestamp).toLocaleDateString()}</p>
                                     </div>
                                  </div>
                                ))}
                             </div>
                          </div>
                          
                          <div className="bg-brand-green/[0.02] p-8 rounded-[32px] border border-brand-green/5 flex flex-col items-center justify-center text-center">
                             <div className="p-8 bg-brand-gold/10 text-brand-gold rounded-full mb-6">
                                <Activity className="w-12 h-12" />
                             </div>
                             <h4 className="font-black text-xl text-slate-800 dark:text-white mb-2">Performance Analytics</h4>
                             <p className="text-sm font-bold text-slate-400 max-w-xs">Detailed trends and module-level distribution charts auto-update as students complete tracks.</p>
                          </div>
                       </div>
                    </div>
                  )}
                  
                   {adminTab === 'quizzes' && (
                    <div className="space-y-8">
                       <div className="flex flex-col md:flex-row justify-between items-center bg-slate-50 dark:bg-slate-800/80 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 gap-6">
                          <div>
                             <h3 className="heading-serif text-3xl font-black text-brand-green dark:text-brand-gold">Module Registry</h3>
                             <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Manage institutional assessment tracks</p>
                          </div>
                          <div className="flex flex-1 max-w-md relative">
                             <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                             <input 
                               type="text" 
                               placeholder="Search tracks..." 
                               value={searchQuery}
                               onChange={(e) => setSearchQuery(e.target.value)}
                               className="w-full pl-14 pr-6 py-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold transition-all focus:border-brand-gold outline-none"
                             />
                          </div>
                          <button 
                            onClick={() => setShowCourseBuilder(true)}
                            className="px-8 py-4 bg-brand-green text-brand-gold rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 whitespace-nowrap"
                          >
                             <Plus className="w-5 h-5" /> Construct New Module
                          </button>
                       </div>

                       <div className="bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-[40px] overflow-hidden shadow-xl">
                          <table className="w-full text-left border-collapse">
                             <thead>
                                <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest">Assessment Name</th>
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest">Subject</th>
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-center">Status</th>
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-right">Actions</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                {localQuizzes.filter(q => q.title.toLowerCase().includes(searchQuery.toLowerCase()) || q.subject.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 20).map((quiz) => (
                                  <tr key={quiz.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                     <td className="px-8 py-6">
                                        <p className="font-black text-slate-800 dark:text-white mb-1">{quiz.title}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{quiz.questions.length} Active Questions</p>
                                     </td>
                                     <td className="px-8 py-6">
                                        <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-[10px] font-black uppercase tracking-widest">{quiz.subject}</span>
                                     </td>
                                     <td className="px-8 py-6 text-center">
                                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${quiz.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                           {quiz.status || 'Draft'}
                                        </span>
                                     </td>
                                     <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2">
                                           <button 
                                             onClick={() => {
                                               setLocalQuizzes(prev => prev.filter(q => q.id !== quiz.id));
                                             }}
                                             className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                                           >
                                              <Trash2 className="w-5 h-5" />
                                           </button>
                                           <button className="p-2 text-slate-300 hover:text-brand-green transition-colors"><Edit className="w-5 h-5" /></button>
                                        </div>
                                     </td>
                                  </tr>
                                ))}
                                {localQuizzes.length > 20 && (
                                  <tr>
                                    <td colSpan={4} className="p-6 text-center text-slate-400 text-xs font-bold uppercase tracking-widest bg-slate-50/50">
                                      Showing first 20 modules. Use search to find specific tracks.
                                    </td>
                                  </tr>
                                )}
                                {localQuizzes.length === 0 && (
                                  <tr>
                                    <td colSpan={4} className="p-20 text-center text-slate-300 uppercase font-black tracking-widest">No custom modules active</td>
                                  </tr>
                                )}
                             </tbody>
                          </table>
                       </div>
                    </div>
                  )}
                  
                  {adminTab === 'import' && (
                    <div className="space-y-8">
                       <div className="flex gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                          <button 
                            className="px-6 py-2 bg-brand-gold/10 text-brand-gold rounded-xl font-black text-[10px] uppercase tracking-widest border border-brand-gold/20"
                            onClick={() => document.getElementById('json-upload')?.click()}
                          >
                             <div className="flex items-center gap-2">
                                <FileJson className="w-4 h-4" /> Import JSON
                                <input type="file" id="json-upload" accept=".json" className="hidden" onChange={(e) => handleQuizUpload(e, 'json')} />
                             </div>
                          </button>
                          <button 
                            className="px-6 py-2 bg-brand-green/10 text-brand-green rounded-xl font-black text-[10px] uppercase tracking-widest border border-brand-green/20"
                            onClick={() => document.getElementById('csv-upload')?.click()}
                          >
                             <div className="flex items-center gap-2">
                                <FileSpreadsheet className="w-4 h-4" /> Import CSV
                                <input type="file" id="csv-upload" accept=".csv" className="hidden" onChange={(e) => handleQuizUpload(e, 'csv')} />
                             </div>
                          </button>
                       </div>

                       <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
                          <div className="space-y-6">
                             <div className="flex items-center justify-between">
                                <h3 className="font-black text-lg uppercase tracking-widest text-slate-800 dark:text-brand-gold">Paste Text Parser</h3>
                                <span className="text-[10px] font-bold text-slate-400">AI-Powered Content Extraction</span>
                             </div>
                             <div className="relative">
                                <textarea 
                                  value={pastedText}
                                  onChange={(e) => setPastedText(e.target.value)}
                                  placeholder="Paste raw MCQ text here... (e.g. 1. Question? A. Opt1 B. Opt2 Answer: A)"
                                  rows={12}
                                  className="w-full p-6 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[32px] font-mono text-xs focus:border-brand-gold outline-none transition-all shadow-inner"
                                />
                                <button 
                                  disabled={loading}
                                  onClick={() => {
                                    setLoading(true);
                                    // Use timeout to let the UI show the loading state
                                    setTimeout(() => {
                                      const parsed = parseMCQText(pastedText);
                                      setLoading(false);
                                      if (parsed.length > 0) {
                                        setImportPreview(parsed);
                                        setShowImportModal(true);
                                      } else {
                                        alert('No valid questions found. Check format guidelines.');
                                      }
                                    }, 100);
                                  }}
                                  className="absolute bottom-6 right-6 px-6 py-3 bg-brand-green text-brand-gold rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-2 hover:scale-105 transition-all disabled:opacity-50"
                                >
                                   {loading ? <RotateCcw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />} 
                                   {loading ? 'Processing...' : 'Parse Questions'}
                                </button>
                             </div>
                          </div>
                          
                          <div className="bg-slate-50 dark:bg-slate-800/20 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 h-fit">
                             <h4 className="font-black text-sm uppercase tracking-widest text-slate-700 dark:text-brand-gold mb-4">Parsing Guide</h4>
                             <ul className="space-y-4 text-xs font-bold text-slate-500">
                                <li className="flex gap-2">
                                   <div className="p-1 bg-brand-gold/10 rounded"><CheckCircle2 className="w-3 h-3 text-brand-gold" /></div>
                                   <span>Use empty lines between questions</span>
                                </li>
                                <li className="flex gap-2">
                                   <div className="p-1 bg-brand-gold/10 rounded"><CheckCircle2 className="w-3 h-3 text-brand-gold" /></div>
                                   <span>Prefix options with A., B., C. or D.</span>
                                </li>
                                <li className="flex gap-2">
                                   <div className="p-1 bg-brand-gold/10 rounded"><CheckCircle2 className="w-3 h-3 text-brand-gold" /></div>
                                   <span>Indicate answer with "Answer: A"</span>
                                </li>
                                <li className="flex gap-2">
                                   <div className="p-1 bg-brand-gold/10 rounded"><CheckCircle2 className="w-3 h-3 text-brand-gold" /></div>
                                   <span>Math supported: $E=mc^2$</span>
                                </li>
                             </ul>
                          </div>
                       </div>
                    </div>
                  )}

                  {adminTab === 'questions' && (
                    <div className="space-y-8">
                       <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800">
                          <div className="relative flex-1 w-full">
                             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                             <input 
                               type="text"
                               placeholder="Search for questions, terms, or concepts..."
                               className="w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl font-bold text-sm focus:border-brand-gold outline-none transition-all shadow-sm"
                             />
                          </div>
                          <div className="flex gap-2">
                             <button className="px-6 py-4 bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-400 hover:text-brand-green transition-all shadow-sm flex items-center gap-2">
                                <Filter className="w-4 h-4" /> Filter Subject
                             </button>
                             <button className="px-6 py-4 bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-400 hover:text-brand-green transition-all shadow-sm flex items-center gap-2">
                                <ArrowDownAz className="w-4 h-4" /> Sort
                             </button>
                          </div>
                       </div>

                       <div className="bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-[40px] overflow-hidden shadow-xl">
                          <table className="w-full text-left border-collapse">
                             <thead>
                                <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest">Question Segment</th>
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest">Subject</th>
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-center">Variants</th>
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-right">Reference</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                {localQuizzes.flatMap(q => q.questions).slice(0, 10).map((qn, i) => (
                                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                     <td className="px-8 py-6 max-w-md">
                                        <p className="font-bold text-slate-700 dark:text-slate-200 line-clamp-2 group-hover:text-brand-green transition-colors">{qn.text}</p>
                                        <div className="flex gap-1 mt-2">
                                           {qn.options.slice(0, 3).map((o, j) => (
                                              <span key={j} className="text-[9px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-400">{o.substring(0, 10)}...</span>
                                           ))}
                                        </div>
                                     </td>
                                     <td className="px-8 py-6">
                                        <span className="px-3 py-1 bg-brand-green/5 text-brand-green rounded-full text-[10px] font-black uppercase tracking-widest border border-brand-green/10">Biology</span>
                                     </td>
                                     <td className="px-8 py-6 text-center tabular-nums font-black text-slate-400">{qn.options.length} Opts</td>
                                     <td className="px-8 py-6 text-right">
                                        <button className="p-2 text-slate-300 hover:text-brand-gold transition-colors"><MoreVertical className="w-5 h-5" /></button>
                                     </td>
                                  </tr>
                                ))}
                                {localQuizzes.length === 0 && (
                                  <tr>
                                    <td colSpan={4} className="p-20 text-center text-slate-300 uppercase font-black tracking-widest">Data pool empty</td>
                                  </tr>
                                )}
                             </tbody>
                          </table>
                          <div className="p-6 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                             <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Showing 10 of {localQuizzes.reduce((acc, q) => acc + (q.questions?.length || 0), 0)} Questions</p>
                             <div className="flex gap-2">
                                <button className="p-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg text-slate-400 hover:text-brand-green transition-all shadow-sm"><ChevronLeft className="w-4 h-4"/></button>
                                <button className="p-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-lg text-slate-400 hover:text-brand-green transition-all shadow-sm"><ChevronRight className="w-4 h-4"/></button>
                             </div>
                          </div>
                       </div>
                    </div>
                  )}

                  {adminTab === 'results' && (
                    <div className="space-y-8">
                       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          <div className="lg:col-span-2 space-y-6">
                             <h3 className="font-black text-lg uppercase tracking-widest text-slate-800 dark:text-brand-gold">Global Grade Distribution</h3>
                             <div className="bg-slate-50 dark:bg-slate-800/30 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 h-[300px] flex items-center justify-center">
                                <ResponsiveContainer width="100%" height="100%">
                                   <AreaChart data={localAttempts.slice(-20)}>
                                      <defs>
                                         <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#1e3a34" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#1e3a34" stopOpacity={0}/>
                                         </linearGradient>
                                      </defs>
                                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                      <XAxis dataKey="timestamp" hide />
                                      <YAxis hide />
                                      <Tooltip 
                                        contentStyle={{ backgroundColor: '#1e3a34', border: 'none', borderRadius: '16px', color: '#e8c170', fontWeight: 'bold' }}
                                        itemStyle={{ color: '#e8c170' }}
                                      />
                                      <Area type="monotone" dataKey="score" stroke="#1e3a34" fillOpacity={1} fill="url(#colorScore)" strokeWidth={3} />
                                   </AreaChart>
                                </ResponsiveContainer>
                             </div>
                          </div>
                          
                          <div className="space-y-6">
                             <h3 className="font-black text-lg uppercase tracking-widest text-slate-800 dark:text-brand-gold">Fast Metrics</h3>
                             <div className="grid grid-cols-1 gap-4">
                                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl border border-emerald-100 dark:border-emerald-900/20">
                                   <div className="flex items-center gap-3 mb-2">
                                      <div className="p-2 bg-emerald-500 text-white rounded-lg"><Trophy className="w-4 h-4" /></div>
                                      <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest">Highest Potential</span>
                                   </div>
                                   <p className="text-2xl font-black text-slate-800 dark:text-white">98.4%</p>
                                   <p className="text-[10px] font-bold text-slate-400">Peak student achievement</p>
                                </div>
                                <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-3xl border border-red-100 dark:border-red-900/20">
                                   <div className="flex items-center gap-3 mb-2">
                                      <div className="p-2 bg-red-500 text-white rounded-lg"><AlertTriangle className="w-4 h-4" /></div>
                                      <span className="text-[10px] font-black uppercase text-red-600 tracking-widest">Critical Modules</span>
                                   </div>
                                   <p className="text-2xl font-black text-slate-800 dark:text-white">Physics-III</p>
                                   <p className="text-[10px] font-bold text-slate-400">Lowest average score module</p>
                                </div>
                             </div>
                          </div>
                       </div>

                       <div className="bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-[40px] overflow-hidden shadow-xl">
                          <table className="w-full text-left border-collapse">
                             <thead>
                                <tr className="bg-slate-50 dark:bg-slate-800/80 text-slate-400 border-b border-slate-100 dark:border-slate-800">
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest">Student</th>
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest">Quiz Track</th>
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-center">Score</th>
                                   <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-right">Date</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                {localAttempts.slice(-10).reverse().map((at, i) => (
                                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                                     <td className="px-8 py-6">
                                        <p className="font-black text-slate-800 dark:text-slate-200">{at.studentName}</p>
                                        <p className="text-[10px] font-bold text-slate-400">{at.studentEmail}</p>
                                     </td>
                                     <td className="px-8 py-6">
                                        <span className="font-bold text-slate-600 dark:text-slate-400">{at.quizTitle}</span>
                                     </td>
                                     <td className="px-8 py-6 text-center tabular-nums font-black text-brand-green dark:text-brand-gold">
                                        {at.score} / {at.total}
                                     </td>
                                     <td className="px-8 py-6 text-right tabular-nums text-[10px] font-bold text-slate-400">
                                        {new Date(at.timestamp).toLocaleDateString()}
                                     </td>
                                  </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                    </div>
                  )}

                  {adminTab === 'settings' && (
                    <div className="space-y-12 p-8">
                       <form onSubmit={handleSettingsUpdate} className="space-y-12">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                               <h4 className="font-black text-sm uppercase tracking-widest text-brand-green dark:text-brand-gold">Identity & Branding</h4>
                               <div className="space-y-4">
                                  <div className="space-y-2">
                                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Academy Name</label>
                                     <input 
                                       name="academyName"
                                       type="text"
                                       defaultValue={siteConfig.academyName || 'SFK Elite Academy'}
                                       className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold"
                                     />
                                  </div>
                                  <div className="space-y-2">
                                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hero Primary Heading</label>
                                     <input 
                                       name="heroHeading1"
                                       type="text"
                                       defaultValue={siteConfig.heroTitle}
                                       className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold"
                                     />
                                  </div>
                                  <div className="space-y-2">
                                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hero Sub-Heading</label>
                                     <input 
                                       name="heroHeading2"
                                       type="text"
                                       defaultValue={siteConfig.heroSubtitle}
                                       className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold"
                                     />
                                  </div>
                               </div>
                            </div>

                            <div className="space-y-6">
                               <h4 className="font-black text-sm uppercase tracking-widest text-brand-green dark:text-brand-gold">Security & Access</h4>
                               <div className="space-y-4">
                                  <div className="space-y-2">
                                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System PIN</label>
                                     <div className="relative">
                                        <input 
                                          type="text"
                                          value={adminPIN}
                                          onChange={(e) => setAdminPIN(e.target.value)}
                                          className="w-full p-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold font-mono tracking-widest"
                                        />
                                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                     </div>
                                  </div>
                                  <label className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800 cursor-pointer">
                                     <div>
                                        <p className="font-black text-sm text-slate-800 dark:text-white">Guest Access</p>
                                        <p className="text-[10px] font-bold text-slate-400">Allow users to take quizzes without signup</p>
                                     </div>
                                     <input 
                                       type="checkbox"
                                       checked={adminSettings.allowGuest}
                                       onChange={(e) => setAdminSettings({...adminSettings, allowGuest: e.target.checked})}
                                       className="w-6 h-6 accent-brand-green"
                                     />
                                  </label>
                               </div>
                            </div>
                         </div>

                         <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-sm">
                            <p className="font-bold text-slate-400 italic">Core system sync with Institutional Cloud Firestore active.</p>
                            <button type="submit" className="px-10 py-4 bg-brand-green text-brand-gold rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all">Save Institutional Systems</button>
                         </div>
                       </form>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Course Builder Modal */}
      {showCourseBuilder && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" onClick={() => setShowCourseBuilder(false)} />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-[48px] shadow-2xl border-2 border-brand-gold/20 overflow-hidden flex flex-col max-h-[90vh]"
          >
             <div className="p-10 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                   <h3 className="heading-serif text-4xl font-black text-brand-green dark:text-brand-gold tracking-tight">Track Constructor</h3>
                   <p className="text-slate-500 font-bold mt-1 uppercase text-xs tracking-widest">Manual module engineering portal</p>
                </div>
                <button onClick={() => setShowCourseBuilder(false)} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-400 hover:text-red-500 transition-colors">
                   <X className="w-8 h-8" />
                </button>
             </div>

             <div className="flex-1 overflow-auto p-10 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Track Title</label>
                      <input 
                        type="text" 
                        value={cbTitle} 
                        onChange={(e) => setCbTitle(e.target.value)}
                        className="w-full p-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold"
                        placeholder="e.g. Molecular Genetics Exam"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject Vertical</label>
                      <select 
                        value={cbCourse} 
                        onChange={(e) => setCbCourse(e.target.value)}
                        className="w-full p-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold"
                      >
                         <option value="">Select Subject...</option>
                         <option>Biology</option>
                         <option>Physics</option>
                         <option>Chemistry</option>
                         <option>Logic</option>
                      </select>
                   </div>
                </div>

                <div className="space-y-8">
                   <div className="flex items-center justify-between">
                      <h4 className="font-black text-lg uppercase tracking-widest text-slate-800 dark:text-brand-gold">Questions Data ({cbQuestions.length})</h4>
                      <button 
                        onClick={() => setCbQuestions([...cbQuestions, { text: '', options: ['', '', '', ''], correctAnswer: '' }])}
                        className="px-6 py-3 bg-brand-gold/10 text-brand-gold rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-gold hover:text-brand-green transition-all"
                      >
                         Add Question Segment
                      </button>
                   </div>

                   <div className="space-y-6">
                      {cbQuestions.map((q, idx) => (
                        <div key={idx} className="p-8 bg-slate-50 dark:bg-slate-800/30 rounded-[32px] border border-slate-100 dark:border-slate-800 space-y-6">
                           <div className="flex justify-between items-start">
                              <span className="px-4 py-2 bg-brand-green text-brand-gold rounded-xl font-black text-xs">Segment #{idx + 1}</span>
                              <button 
                                onClick={() => setCbQuestions(cbQuestions.filter((_, i) => i !== idx))}
                                className="text-red-500 hover:scale-110 transition-transform"
                              >
                                 <Trash2 className="w-5 h-5" />
                              </button>
                           </div>
                           <textarea 
                             value={q.text}
                             onChange={(e) => {
                               const newQ = [...cbQuestions];
                               newQ[idx].text = e.target.value;
                               setCbQuestions(newQ);
                             }}
                             className="w-full p-6 bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-2xl font-bold italic"
                             placeholder="Enter Question Text..."
                           />
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {q.options.map((opt, oIdx) => (
                                <div key={oIdx} className="flex gap-2">
                                   <input 
                                     type="text" 
                                     value={opt}
                                     onChange={(e) => {
                                       const newQ = [...cbQuestions];
                                       newQ[idx].options[oIdx] = e.target.value;
                                       setCbQuestions(newQ);
                                     }}
                                     className="flex-1 p-4 bg-white dark:bg-slate-900 border-2 border-slate-50 dark:border-slate-800 rounded-xl text-sm"
                                     placeholder={`Option ${String.fromCharCode(65 + oIdx)}`}
                                   />
                                   <button 
                                     onClick={() => {
                                       const newQ = [...cbQuestions];
                                       newQ[idx].correctAnswer = opt;
                                       setCbQuestions(newQ);
                                     }}
                                     className={`p-4 rounded-xl border-2 transition-all ${q.correctAnswer === opt && opt ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white dark:bg-slate-900 border-slate-50 text-slate-300 hover:border-emerald-500'}`}
                                   >
                                      <CheckCircle2 className="w-5 h-5" />
                                   </button>
                                </div>
                              ))}
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             <div className="p-10 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button 
                  onClick={() => {
                    if (!cbTitle || !cbCourse || cbQuestions.some(q => !q.text || !q.correctAnswer)) {
                      alert('Incomplete module data detected.');
                      return;
                    }
                    const newQuiz = {
                      id: `cb-${Date.now()}`,
                      title: cbTitle,
                      subject: cbCourse,
                      timeLimit: 30,
                      questions: cbQuestions.map((q, i) => ({ id: `q-${i}`, ...q })),
                      status: 'Active',
                      isPremium: false
                    };
                    setLocalQuizzes(prev => [...prev, newQuiz]);
                    setShowCourseBuilder(false);
                    alert("Module successfully deployed to institution registry.");
                  }}
                  className="px-12 py-5 bg-brand-green text-brand-gold rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                >
                   <ArrowDownToLine className="w-6 h-6" /> Deploy Module
                </button>
             </div>
          </motion.div>
        </div>
      )}
      {showImportModal && importPreview.length > 0 && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 sm:p-12">
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" onClick={() => { setShowImportModal(false); setImportPreview([]); }} />
           <motion.div 
             initial={{ scale: 0.9, opacity: 0, y: 20 }}
             animate={{ scale: 1, opacity: 1, y: 0 }}
             className="relative w-full max-w-6xl bg-white dark:bg-slate-900 rounded-[48px] shadow-2xl border-2 border-brand-gold/20 overflow-hidden flex flex-col max-h-[90vh]"
           >
              <div className="p-10 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                 <div>
                    <h3 className="heading-serif text-4xl font-black text-brand-green dark:text-brand-gold">Import Intelligence</h3>
                    <p className="text-slate-500 font-bold mt-1 uppercase text-xs tracking-widest">Verify and ingest {importPreview.length} recognized data segments</p>
                 </div>
                 <button onClick={() => { setShowImportModal(false); setImportPreview([]); }} className="p-4 bg-white dark:bg-slate-900 rounded-2xl text-slate-400 hover:text-red-500 transition-colors shadow-sm">
                    <X className="w-8 h-8" />
                 </button>
              </div>

              <div className="flex-1 overflow-auto p-10">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="text-slate-400 border-b border-slate-100 dark:border-slate-800">
                          <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Quest.</th>
                          <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Options (Detected)</th>
                          <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-center">Reference</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                       {importPreview.slice(0, 50).map((q, i) => (
                         <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-6 font-bold text-slate-700 dark:text-slate-200">{q.text}</td>
                            <td className="px-6 py-6 font-bold text-slate-400 text-xs">
                               <div className="flex flex-wrap gap-2">
                                  {q.options.map((o: string, j: number) => (
                                    <span key={j} className={`px-2 py-1 rounded ${o === q.correctAnswer ? 'bg-emerald-100 text-emerald-600 border border-emerald-200' : 'bg-slate-100 dark:bg-slate-800'}`}>{o}</span>
                                  ))}
                               </div>
                            </td>
                            <td className="px-6 py-6 text-center">
                               {q.correctAnswer ? (
                                 <span className="p-2 bg-emerald-500 text-white rounded-lg"><CheckCircle2 className="w-4 h-4" /></span>
                               ) : (
                                 <span className="p-2 bg-red-500 text-white rounded-lg" title="Correct answer missing!"><AlertTriangle className="w-4 h-4" /></span>
                               )}
                            </td>
                         </tr>
                       ))}
                       {importPreview.length > 50 && (
                         <tr>
                            <td colSpan={3} className="px-6 py-12 text-center bg-slate-50 dark:bg-slate-800/50 border-t-2 border-dashed border-slate-200 dark:border-slate-700">
                               <p className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Plus {importPreview.length - 50} more segments ready for ingestion</p>
                               <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Preview limited for institutional performance</p>
                            </td>
                         </tr>
                       )}
                    </tbody>
                 </table>
              </div>

              <div className="p-10 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
                    <div className="space-y-1">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Module Title</label>
                       <input 
                         type="text"
                         id="import-title"
                         placeholder="e.g. Biology - Cell Nucleus"
                         className="w-full md:w-64 p-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold"
                       />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject Track</label>
                       <select id="import-subject" className="w-full md:w-48 p-4 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold">
                          <option>Biology</option>
                          <option>Physics</option>
                          <option>Chemistry</option>
                          <option>Mathematics Reasoning</option>
                          <option>Science Reasoning</option>
                          <option>AKU Past Papers</option>
                          <option>Mixed Subjects</option>
                          <option>Logical Reasoning</option>
                       </select>
                    </div>
                 </div>
                 <button 
                   onClick={() => {
                     const titleInput = document.getElementById('import-title') as HTMLInputElement;
                     const subjectInput = document.getElementById('import-subject') as HTMLSelectElement;
                     
                     if (!titleInput.value) {
                       alert("Module title is mandatory for ingestion.");
                       return;
                     }

                     const newQuiz = {
                       id: `imp-${Date.now()}`,
                       title: titleInput.value,
                       subject: subjectInput.value,
                       timeLimit: (subjectInput.value === 'AKU Past Papers' || subjectInput.value === 'Mixed Subjects') ? 120 : 30,
                       questions: importPreview.map(q => ({
                         ...q,
                         subject: q.subject === 'Mixed' ? 'General' : q.subject
                       })),
                       status: 'Active',
                       isPremium: false
                     };

                     setLocalQuizzes(prev => [...prev, newQuiz]);
                     setShowImportModal(false);
                     setImportPreview([]);
                     alert("Data ingested successfully. Track is now active in the Curriculum Portal.");
                   }}
                   className="w-full md:w-auto px-12 py-5 bg-brand-green text-brand-gold rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
                 >
                    <ArrowDownToLine className="w-6 h-6" /> Commit to Database
                 </button>
              </div>
           </motion.div>
        </div>
      )}

      <footer className="pt-24 pb-12 text-center space-y-4">
        <p className="text-slate-400 dark:text-slate-600 font-bold tracking-widest uppercase text-sm">
          &copy; {new Date().getFullYear()} Shah Fahad Khan Academy. All rights reserved.
        </p>
      </footer>

      {/* Contextual AI / Chatbot Toggle */}
      <div className="fixed bottom-6 right-6 z-[200]">
         <AnimatePresence>
            {isChatOpen && (
               <motion.div 
                 initial={{ opacity: 0, y: 20, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: 20, scale: 0.95 }}
                 className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[32px] shadow-2xl flex flex-col overflow-hidden"
               >
                 <div className="p-4 bg-brand-green flex items-center justify-between text-brand-gold">
                    <div className="flex items-center gap-2">
                       <Sparkles className="w-5 h-5" />
                       <span className="font-black text-sm uppercase tracking-widest">SFK AI Assistant</span>
                    </div>
                    <button onClick={() => setIsChatOpen(false)} className="hover:text-white transition-colors">
                       <XCircle className="w-5 h-5" />
                    </button>
                 </div>
                 <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto bg-slate-50 dark:bg-slate-900/50">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 dark:border-slate-700 w-5/6">
                       <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Welcome to SFK Academy! Ask me anything about the modules, reasoning tracks, or AKU-EB curriculum.</p>
                    </div>
                 </div>
                 <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <div className="relative">
                       <input type="text" placeholder="Type a question..." className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-3 text-sm font-bold outline-none focus:border-brand-green dark:text-white" />
                       <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-green text-brand-gold rounded-full flex items-center justify-center hover:scale-105 transition-transform text-xs">
                         <ArrowRight className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
               </motion.div>
            )}
         </AnimatePresence>
         
         <button 
           onClick={() => setIsChatOpen(!isChatOpen)}
           className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all text-white ${isChatOpen ? 'bg-red-500' : 'bg-brand-green'}`}
         >
            {isChatOpen ? <XCircle className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
         </button>
      </div>

    </div>
  );
}
