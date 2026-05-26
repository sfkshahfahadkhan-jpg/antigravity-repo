export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  diagram?: string; // Optional SVG or base64
}

export interface QuizSubmission {
  id: string;
  studentEmail: string;
  studentName: string;
  score: number;
  total: number;
  sectionName: string;
  submittedAt: number;
  flaggedQuestions?: number[];
}

export type QuizState = 'welcome' | 'register' | 'quiz' | 'results' | 'admin' | 'performance' | 'leaderboard' | 'interview-prep' | 'academic-library' | 'practice-bank' | 'portfolio' | 'video-lectures' | 'mcq-banks' | 'reasoning';

export interface UserProgress {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  isFinished: boolean;
  score: number;
  startTime?: number;
  flaggedQuestions: number[];
  mode?: 'practice' | 'exam';
  isPaused?: boolean;
  elapsedTime?: number; // to keep track of time when paused
}

export interface StudentProfile {
  name: string;
  email: string;
  registeredAt: number;
  streak?: number;
  lastActiveDate?: string;
  achievements?: string[];
  isPremium?: boolean;
  unlockedSections?: string[];
  xp?: number;
  level?: number;
  topicMastery?: Record<string, number>; // Topic ID -> Mastery Percentage
  premiumUntil?: number; // Timestamp
  role?: 'student' | 'editor' | 'admin';
}

export interface AccessCode {
  id?: string;
  code: string;
  section: 'premium' | 'aku_papers' | 'lectures' | 'books' | 'practice';
  active: boolean;
  createdAt: number;
  duration?: '1m' | '3m' | '6m' | '1y';
}
