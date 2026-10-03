import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRealProgress } from '@/hooks/useRealProgress';

export interface UserProgress {
  currentLevel: "A1" | "A2" | "B1" | "B2" | "C1";
  levelProgress: number;
  currentStreak: number;
  bestStreak: number;
  todayMinutes: number;
  goalMinutes: number;
  weeklyProgress: number[];
  totalLessons: number;
  wordsLearned: number;
  averageAccuracy: number;
  weeklyHours: number;
}

export interface GrammarCategory {
  id: string;
  title: string;
  description: string;
  topics: GrammarTopic[];
  progress: number;
}

export interface GrammarTopic {
  id: string;
  title: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  completed: boolean;
  locked: boolean;
}

export interface VocabularyCategory {
  id: string;
  title: string;
  wordCount: number;
  learned: number;
  icon: string;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'grammar' | 'vocabulary' | 'practice' | 'conversation';
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  category: string;
  duration: number;
  xp: number;
  content: LessonContent;
}

export interface LessonContent {
  explanation: string;
  examples: string[];
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'reorder' | 'match';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

interface AppState {
  userProgress: UserProgress;
  setUserProgress: (progress: Partial<UserProgress>) => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  clearNotification: (id: string) => void;
}

interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning';
  message: string;
  timestamp: Date;
}

const initialProgress: UserProgress = {
  currentLevel: "A2",
  levelProgress: 45,
  currentStreak: 0,
  bestStreak: 0,
  todayMinutes: 0,
  goalMinutes: 20,
  weeklyProgress: [0, 0, 0, 0, 0, 0, 0],
  totalLessons: 0,
  wordsLearned: 0,
  averageAccuracy: 0,
  weeklyHours: 0,
};

const AppStateContext = createContext<AppState | undefined>(undefined);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [userProgress, setUserProgressState] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('userProgress');
    return saved ? { ...initialProgress, ...JSON.parse(saved) } : initialProgress;
  });
  
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { progress: realProgress, loading: realLoading } = useRealProgress();

  // Sync real progress from DB into userProgress
  useEffect(() => {
    if (!realLoading) {
      setUserProgressState(prev => ({
        ...prev,
        currentStreak: realProgress.currentStreak,
        bestStreak: realProgress.bestStreak,
        todayMinutes: realProgress.todayMinutes,
        goalMinutes: realProgress.goalMinutes,
        weeklyProgress: realProgress.weeklyMinutes.map(m => Math.min(Math.round((m / (realProgress.goalMinutes || 20)) * 100), 100)),
        totalLessons: realProgress.totalLessonsCompleted,
        wordsLearned: realProgress.wordsLearned,
        averageAccuracy: realProgress.averageAccuracy,
        weeklyHours: realProgress.weeklyHours,
      }));
    }
  }, [realProgress, realLoading]);

  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const setUserProgress = (progress: Partial<UserProgress>) => {
    setUserProgressState(prev => ({ ...prev, ...progress }));
  };

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const newNotification = {
      ...notification,
      id: Date.now().toString(),
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const clearNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <AppStateContext.Provider 
      value={{ 
        userProgress, 
        setUserProgress, 
        activeNav, 
        setActiveNav,
        notifications,
        addNotification,
        clearNotification,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return context;
}
