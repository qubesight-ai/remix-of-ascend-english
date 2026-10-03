import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  unlockedAt?: Date;
  requirement: {
    type: 'streak' | 'lessons' | 'words' | 'accuracy' | 'quizzes' | 'conversations' | 'time';
    value: number;
  };
}

export interface GamificationState {
  xp: number;
  level: number;
  currentStreak: number;
  bestStreak: number;
  lastActivityDate: string;
  totalLessons: number;
  totalWords: number;
  totalQuizzes: number;
  totalConversations: number;
  totalMinutes: number;
  accuracy: number;
  achievements: Achievement[];
  unlockedAchievements: string[];
}

interface GamificationContextType {
  state: GamificationState;
  addXP: (amount: number, source: string) => void;
  updateStreak: () => void;
  completedLesson: () => void;
  learnedWord: () => void;
  completedQuiz: (accuracy: number) => void;
  completedConversation: (minutes: number) => void;
  checkAchievements: () => Achievement[];
  getNextLevelXP: () => number;
  getLevelProgress: () => number;
}

const allAchievements: Achievement[] = [
  // Streak achievements
  { id: "streak-3", title: "Getting Started", description: "Study for 3 days in a row", icon: "🔥", xpReward: 50, requirement: { type: "streak", value: 3 } },
  { id: "streak-7", title: "Week Warrior", description: "Study for 7 days in a row", icon: "⚡", xpReward: 100, requirement: { type: "streak", value: 7 } },
  { id: "streak-14", title: "Dedicated Learner", description: "Study for 14 days in a row", icon: "🏆", xpReward: 200, requirement: { type: "streak", value: 14 } },
  { id: "streak-30", title: "Monthly Master", description: "Study for 30 days in a row", icon: "👑", xpReward: 500, requirement: { type: "streak", value: 30 } },
  { id: "streak-100", title: "Century Champion", description: "Study for 100 days in a row", icon: "💎", xpReward: 2000, requirement: { type: "streak", value: 100 } },
  
  // Lesson achievements
  { id: "lessons-1", title: "First Step", description: "Complete your first lesson", icon: "📖", xpReward: 25, requirement: { type: "lessons", value: 1 } },
  { id: "lessons-10", title: "Eager Student", description: "Complete 10 lessons", icon: "📚", xpReward: 100, requirement: { type: "lessons", value: 10 } },
  { id: "lessons-50", title: "Knowledge Seeker", description: "Complete 50 lessons", icon: "🎓", xpReward: 300, requirement: { type: "lessons", value: 50 } },
  { id: "lessons-100", title: "Scholar", description: "Complete 100 lessons", icon: "🏛️", xpReward: 500, requirement: { type: "lessons", value: 100 } },
  
  // Vocabulary achievements
  { id: "words-50", title: "Word Collector", description: "Learn 50 words", icon: "✨", xpReward: 75, requirement: { type: "words", value: 50 } },
  { id: "words-200", title: "Vocabulary Builder", description: "Learn 200 words", icon: "📝", xpReward: 200, requirement: { type: "words", value: 200 } },
  { id: "words-500", title: "Lexicon Master", description: "Learn 500 words", icon: "📕", xpReward: 400, requirement: { type: "words", value: 500 } },
  { id: "words-1000", title: "Polyglot", description: "Learn 1000 words", icon: "🌟", xpReward: 1000, requirement: { type: "words", value: 1000 } },
  
  // Quiz achievements
  { id: "quizzes-10", title: "Quiz Starter", description: "Complete 10 quizzes", icon: "❓", xpReward: 100, requirement: { type: "quizzes", value: 10 } },
  { id: "quizzes-50", title: "Quiz Pro", description: "Complete 50 quizzes", icon: "💯", xpReward: 300, requirement: { type: "quizzes", value: 50 } },
  
  // Accuracy achievements
  { id: "accuracy-80", title: "Sharp Mind", description: "Maintain 80% accuracy", icon: "🎯", xpReward: 150, requirement: { type: "accuracy", value: 80 } },
  { id: "accuracy-90", title: "Near Perfect", description: "Maintain 90% accuracy", icon: "🔥", xpReward: 300, requirement: { type: "accuracy", value: 90 } },
  { id: "accuracy-95", title: "Perfectionist", description: "Maintain 95% accuracy", icon: "💎", xpReward: 500, requirement: { type: "accuracy", value: 95 } },
  
  // Conversation achievements
  { id: "conversations-5", title: "Chatty", description: "Complete 5 conversations", icon: "💬", xpReward: 75, requirement: { type: "conversations", value: 5 } },
  { id: "conversations-20", title: "Conversationalist", description: "Complete 20 conversations", icon: "🗣️", xpReward: 200, requirement: { type: "conversations", value: 20 } },
  
  // Time achievements
  { id: "time-60", title: "Hour of Power", description: "Study for 1 hour total", icon: "⏰", xpReward: 50, requirement: { type: "time", value: 60 } },
  { id: "time-600", title: "Ten Hour Hero", description: "Study for 10 hours total", icon: "⌛", xpReward: 200, requirement: { type: "time", value: 600 } },
  { id: "time-3600", title: "Time Master", description: "Study for 60 hours total", icon: "🕐", xpReward: 1000, requirement: { type: "time", value: 3600 } },
];

const initialState: GamificationState = {
  xp: 0,
  level: 1,
  currentStreak: 0,
  bestStreak: 0,
  lastActivityDate: "",
  totalLessons: 0,
  totalWords: 0,
  totalQuizzes: 0,
  totalConversations: 0,
  totalMinutes: 0,
  accuracy: 0,
  achievements: allAchievements,
  unlockedAchievements: [],
};

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export function GamificationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GamificationState>(() => {
    const saved = localStorage.getItem('gamification');
    return saved ? { ...initialState, ...JSON.parse(saved) } : initialState;
  });

  useEffect(() => {
    localStorage.setItem('gamification', JSON.stringify(state));
  }, [state]);

  const getNextLevelXP = () => {
    return state.level * 100;
  };

  const getLevelProgress = () => {
    const nextLevelXP = getNextLevelXP();
    const previousLevelXP = (state.level - 1) * 100;
    const currentProgress = state.xp - previousLevelXP;
    const needed = nextLevelXP - previousLevelXP;
    return Math.round((currentProgress / needed) * 100);
  };

  const addXP = (amount: number, _source: string) => {
    setState(prev => {
      let newXP = prev.xp + amount;
      let newLevel = prev.level;
      
      // Check for level up
      while (newXP >= newLevel * 100) {
        newXP -= newLevel * 100;
        newLevel++;
      }
      
      return { ...prev, xp: newXP, level: newLevel };
    });
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    setState(prev => {
      if (prev.lastActivityDate === today) {
        return prev;
      }
      
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const wasYesterday = prev.lastActivityDate === yesterday.toDateString();
      
      const newStreak = wasYesterday ? prev.currentStreak + 1 : 1;
      const newBestStreak = Math.max(newStreak, prev.bestStreak);
      
      return {
        ...prev,
        currentStreak: newStreak,
        bestStreak: newBestStreak,
        lastActivityDate: today,
      };
    });
  };

  const completedLesson = () => {
    updateStreak();
    setState(prev => ({
      ...prev,
      totalLessons: prev.totalLessons + 1,
    }));
    addXP(20, 'lesson');
  };

  const learnedWord = () => {
    setState(prev => ({
      ...prev,
      totalWords: prev.totalWords + 1,
    }));
    addXP(5, 'word');
  };

  const completedQuiz = (accuracy: number) => {
    updateStreak();
    setState(prev => {
      const newTotalQuizzes = prev.totalQuizzes + 1;
      const newAccuracy = Math.round(
        (prev.accuracy * prev.totalQuizzes + accuracy) / newTotalQuizzes
      );
      return {
        ...prev,
        totalQuizzes: newTotalQuizzes,
        accuracy: newAccuracy,
      };
    });
    const xpEarned = Math.round(accuracy / 10) * 5;
    addXP(xpEarned, 'quiz');
  };

  const completedConversation = (minutes: number) => {
    updateStreak();
    setState(prev => ({
      ...prev,
      totalConversations: prev.totalConversations + 1,
      totalMinutes: prev.totalMinutes + minutes,
    }));
    addXP(30, 'conversation');
  };

  const checkAchievements = (): Achievement[] => {
    const newlyUnlocked: Achievement[] = [];
    
    setState(prev => {
      const unlockedIds = [...prev.unlockedAchievements];
      
      for (const achievement of allAchievements) {
        if (unlockedIds.includes(achievement.id)) continue;
        
        let unlocked = false;
        switch (achievement.requirement.type) {
          case 'streak':
            unlocked = prev.currentStreak >= achievement.requirement.value;
            break;
          case 'lessons':
            unlocked = prev.totalLessons >= achievement.requirement.value;
            break;
          case 'words':
            unlocked = prev.totalWords >= achievement.requirement.value;
            break;
          case 'quizzes':
            unlocked = prev.totalQuizzes >= achievement.requirement.value;
            break;
          case 'accuracy':
            unlocked = prev.accuracy >= achievement.requirement.value && prev.totalQuizzes >= 5;
            break;
          case 'conversations':
            unlocked = prev.totalConversations >= achievement.requirement.value;
            break;
          case 'time':
            unlocked = prev.totalMinutes >= achievement.requirement.value;
            break;
        }
        
        if (unlocked) {
          unlockedIds.push(achievement.id);
          newlyUnlocked.push({ ...achievement, unlockedAt: new Date() });
        }
      }
      
      return { ...prev, unlockedAchievements: unlockedIds };
    });
    
    // Add XP for newly unlocked achievements
    newlyUnlocked.forEach(achievement => {
      addXP(achievement.xpReward, 'achievement');
    });
    
    return newlyUnlocked;
  };

  return (
    <GamificationContext.Provider
      value={{
        state,
        addXP,
        updateStreak,
        completedLesson,
        learnedWord,
        completedQuiz,
        completedConversation,
        checkAchievements,
        getNextLevelXP,
        getLevelProgress,
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within GamificationProvider');
  }
  return context;
}
