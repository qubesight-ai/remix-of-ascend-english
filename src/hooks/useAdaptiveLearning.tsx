import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface LearningProfile {
  strengths: CategoryScore[];
  weaknesses: CategoryScore[];
  recentPerformance: PerformanceRecord[];
  recommendedTopics: string[];
  learningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'mixed';
  preferredSessionLength: number; // minutes
  adaptiveDifficulty: number; // 1-5
}

export interface CategoryScore {
  category: string;
  score: number; // 0-100
  attempts: number;
  lastAttempt: string;
}

export interface PerformanceRecord {
  date: string;
  category: string;
  score: number;
  timeSpent: number;
  questionsAttempted: number;
}

interface AdaptiveLearningContextType {
  profile: LearningProfile;
  recordPerformance: (category: string, score: number, timeSpent: number, questions: number) => void;
  getRecommendedDifficulty: (category: string) => number;
  getPersonalizedContent: () => string[];
  updateLearningStyle: (style: 'visual' | 'auditory' | 'kinesthetic' | 'mixed') => void;
  getWeakestAreas: (count: number) => CategoryScore[];
  getStrongestAreas: (count: number) => CategoryScore[];
  getOverallProgress: () => number;
}

const initialProfile: LearningProfile = {
  strengths: [],
  weaknesses: [],
  recentPerformance: [],
  recommendedTopics: [
    "Present Simple",
    "Basic Vocabulary",
    "Numbers and Time",
    "Greetings",
    "Common Verbs"
  ],
  learningStyle: 'mixed',
  preferredSessionLength: 15,
  adaptiveDifficulty: 2,
};

const allCategories = [
  "Present Simple",
  "Present Continuous", 
  "Past Simple",
  "Past Continuous",
  "Present Perfect",
  "Future Tenses",
  "Conditionals",
  "Modal Verbs",
  "Passive Voice",
  "Reported Speech",
  "Gerunds & Infinitives",
  "Phrasal Verbs",
  "Prepositions",
  "Articles",
  "Relative Clauses",
  "Vocabulary - Basic",
  "Vocabulary - Intermediate",
  "Vocabulary - Advanced",
];

const AdaptiveLearningContext = createContext<AdaptiveLearningContextType | undefined>(undefined);

export function AdaptiveLearningProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<LearningProfile>(() => {
    const saved = localStorage.getItem('adaptiveLearning');
    return saved ? { ...initialProfile, ...JSON.parse(saved) } : initialProfile;
  });

  useEffect(() => {
    localStorage.setItem('adaptiveLearning', JSON.stringify(profile));
  }, [profile]);

  const recordPerformance = (category: string, score: number, timeSpent: number, questions: number) => {
    const today = new Date().toISOString().split('T')[0];
    
    setProfile(prev => {
      // Update recent performance
      const newPerformance: PerformanceRecord = {
        date: today,
        category,
        score,
        timeSpent,
        questionsAttempted: questions,
      };
      
      const recentPerformance = [newPerformance, ...prev.recentPerformance].slice(0, 50);
      
      // Calculate category scores
      const categoryPerformance = recentPerformance.filter(p => p.category === category);
      const avgScore = categoryPerformance.length > 0
        ? categoryPerformance.reduce((acc, p) => acc + p.score, 0) / categoryPerformance.length
        : score;
      
      // Update strengths/weaknesses
      const existingIndex = prev.strengths.findIndex(s => s.category === category);
      const newCategoryScore: CategoryScore = {
        category,
        score: Math.round(avgScore),
        attempts: (existingIndex >= 0 ? prev.strengths[existingIndex].attempts : 0) + 1,
        lastAttempt: today,
      };
      
      let allScores = existingIndex >= 0
        ? prev.strengths.map((s, i) => i === existingIndex ? newCategoryScore : s)
        : [...prev.strengths, newCategoryScore];
      
      // Also check weaknesses
      const weaknessIndex = prev.weaknesses.findIndex(w => w.category === category);
      if (weaknessIndex >= 0) {
        allScores = allScores.filter(s => s.category !== category);
        allScores.push(newCategoryScore);
      }
      
      // Separate into strengths (>70) and weaknesses (<50)
      const strengths = allScores.filter(s => s.score >= 70).sort((a, b) => b.score - a.score);
      const weaknesses = allScores.filter(s => s.score < 50).sort((a, b) => a.score - b.score);
      
      // Update adaptive difficulty based on recent performance
      const recentAvg = recentPerformance.slice(0, 10).reduce((acc, p) => acc + p.score, 0) / Math.min(recentPerformance.length, 10);
      let adaptiveDifficulty = prev.adaptiveDifficulty;
      if (recentAvg > 85 && adaptiveDifficulty < 5) adaptiveDifficulty += 0.5;
      else if (recentAvg < 50 && adaptiveDifficulty > 1) adaptiveDifficulty -= 0.5;
      
      // Update recommended topics based on weaknesses and unexplored categories
      const attemptedCategories = allScores.map(s => s.category);
      const unattempted = allCategories.filter(c => !attemptedCategories.includes(c));
      const weakCategories = weaknesses.map(w => w.category);
      const recommendedTopics = [...weakCategories, ...unattempted].slice(0, 5);
      
      return {
        ...prev,
        strengths,
        weaknesses,
        recentPerformance,
        adaptiveDifficulty: Math.round(adaptiveDifficulty * 2) / 2,
        recommendedTopics: recommendedTopics.length > 0 ? recommendedTopics : prev.recommendedTopics,
      };
    });
  };

  const getRecommendedDifficulty = (category: string): number => {
    const categoryScore = [...profile.strengths, ...profile.weaknesses].find(s => s.category === category);
    
    if (!categoryScore) return profile.adaptiveDifficulty;
    
    // Adjust difficulty based on category performance
    if (categoryScore.score >= 90) return Math.min(5, profile.adaptiveDifficulty + 1);
    if (categoryScore.score >= 70) return profile.adaptiveDifficulty;
    if (categoryScore.score >= 50) return Math.max(1, profile.adaptiveDifficulty - 0.5);
    return Math.max(1, profile.adaptiveDifficulty - 1);
  };

  const getPersonalizedContent = (): string[] => {
    // Prioritize weaknesses, then unattempted, then reinforce strengths
    const weakCategories = profile.weaknesses.map(w => w.category);
    const strongCategories = profile.strengths.map(s => s.category);
    const attemptedCategories = [...weakCategories, ...strongCategories];
    const unattempted = allCategories.filter(c => !attemptedCategories.includes(c));
    
    return [
      ...weakCategories.slice(0, 2),
      ...unattempted.slice(0, 2),
      ...strongCategories.slice(0, 1), // Occasional reinforcement
    ];
  };

  const updateLearningStyle = (style: 'visual' | 'auditory' | 'kinesthetic' | 'mixed') => {
    setProfile(prev => ({ ...prev, learningStyle: style }));
  };

  const getWeakestAreas = (count: number): CategoryScore[] => {
    return profile.weaknesses.slice(0, count);
  };

  const getStrongestAreas = (count: number): CategoryScore[] => {
    return profile.strengths.slice(0, count);
  };

  const getOverallProgress = (): number => {
    const allScores = [...profile.strengths, ...profile.weaknesses];
    if (allScores.length === 0) return 0;
    return Math.round(allScores.reduce((acc, s) => acc + s.score, 0) / allScores.length);
  };

  return (
    <AdaptiveLearningContext.Provider
      value={{
        profile,
        recordPerformance,
        getRecommendedDifficulty,
        getPersonalizedContent,
        updateLearningStyle,
        getWeakestAreas,
        getStrongestAreas,
        getOverallProgress,
      }}
    >
      {children}
    </AdaptiveLearningContext.Provider>
  );
}

export function useAdaptiveLearning() {
  const context = useContext(AdaptiveLearningContext);
  if (!context) {
    throw new Error('useAdaptiveLearning must be used within AdaptiveLearningProvider');
  }
  return context;
}
