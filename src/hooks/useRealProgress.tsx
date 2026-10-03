import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export interface RealProgress {
  totalLessonsCompleted: number;
  wordsLearned: number;
  totalExercisesAttempted: number;
  totalExercisesCorrect: number;
  currentStreak: number;
  bestStreak: number;
  lastActiveDate: string | null;
  todayMinutes: number;
  goalMinutes: number;
  weeklyMinutes: number[];
  // Derived from existing tables
  totalConversations: number;
  averageAccuracy: number;
  weeklyHours: number;
}

const defaultProgress: RealProgress = {
  totalLessonsCompleted: 0,
  wordsLearned: 0,
  totalExercisesAttempted: 0,
  totalExercisesCorrect: 0,
  currentStreak: 0,
  bestStreak: 0,
  lastActiveDate: null,
  todayMinutes: 0,
  goalMinutes: 20,
  weeklyMinutes: [0, 0, 0, 0, 0, 0, 0],
  totalConversations: 0,
  averageAccuracy: 0,
  weeklyHours: 0,
};

export function useRealProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<RealProgress>(defaultProgress);
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      // Fetch all data in parallel
      const [progressRes, conversationsRes, errorsRes] = await Promise.all([
        supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id)
          .single(),
        supabase
          .from('conversations')
          .select('id')
          .eq('user_id', user.id),
        supabase
          .from('learning_errors')
          .select('id')
          .eq('user_id', user.id),
      ]);

      const dbProgress = progressRes.data;
      const totalConversations = conversationsRes.data?.length || 0;
      const totalErrors = errorsRes.data?.length || 0;

      if (dbProgress) {
        const attempted = dbProgress.total_exercises_attempted || 0;
        const correct = dbProgress.total_exercises_correct || 0;
        const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
        const weeklyMins = (dbProgress.weekly_minutes as number[]) || [0, 0, 0, 0, 0, 0, 0];
        const weeklyTotal = weeklyMins.reduce((a, b) => a + b, 0);

        setProgress({
          totalLessonsCompleted: dbProgress.total_lessons_completed || 0,
          wordsLearned: dbProgress.words_learned || 0,
          totalExercisesAttempted: attempted,
          totalExercisesCorrect: correct,
          currentStreak: dbProgress.current_streak || 0,
          bestStreak: dbProgress.best_streak || 0,
          lastActiveDate: dbProgress.last_active_date,
          todayMinutes: dbProgress.today_minutes || 0,
          goalMinutes: dbProgress.goal_minutes || 20,
          weeklyMinutes: weeklyMins,
          totalConversations,
          averageAccuracy: accuracy,
          weeklyHours: Math.round((weeklyTotal / 60) * 10) / 10,
        });
      } else {
        // Create a progress row if it doesn't exist
        await supabase.from('user_progress').insert({ user_id: user.id });
        setProgress({
          ...defaultProgress,
          totalConversations,
        });
      }
    } catch (err) {
      console.error('Failed to fetch progress:', err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const recordExercise = useCallback(async (correct: boolean, wordsCount = 0) => {
    if (!user) return;
    const today = new Date().toISOString().split('T')[0];
    const dayOfWeek = new Date().getDay(); // 0=Sun, we want Mon=0
    const dayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    // Update streak logic
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const isNewDay = progress.lastActiveDate !== today;
    let newStreak = progress.currentStreak;
    if (isNewDay) {
      newStreak = progress.lastActiveDate === yesterdayStr ? progress.currentStreak + 1 : 1;
    }

    const newWeekly = [...progress.weeklyMinutes];
    // Add ~1 min per exercise as approximation
    newWeekly[dayIndex] = (newWeekly[dayIndex] || 0) + 1;

    const updates: Record<string, any> = {
      total_exercises_attempted: progress.totalExercisesAttempted + 1,
      total_exercises_correct: progress.totalExercisesCorrect + (correct ? 1 : 0),
      words_learned: progress.wordsLearned + wordsCount,
      today_minutes: progress.todayMinutes + 1,
      weekly_minutes: newWeekly,
      last_active_date: today,
      current_streak: newStreak,
      best_streak: Math.max(newStreak, progress.bestStreak),
      updated_at: new Date().toISOString(),
    };

    await supabase
      .from('user_progress')
      .update(updates)
      .eq('user_id', user.id);

    setProgress(prev => ({
      ...prev,
      totalExercisesAttempted: prev.totalExercisesAttempted + 1,
      totalExercisesCorrect: prev.totalExercisesCorrect + (correct ? 1 : 0),
      wordsLearned: prev.wordsLearned + wordsCount,
      todayMinutes: prev.todayMinutes + 1,
      weeklyMinutes: newWeekly,
      lastActiveDate: today,
      currentStreak: newStreak,
      bestStreak: Math.max(newStreak, prev.bestStreak),
      averageAccuracy: (prev.totalExercisesAttempted + 1) > 0
        ? Math.round(((prev.totalExercisesCorrect + (correct ? 1 : 0)) / (prev.totalExercisesAttempted + 1)) * 100)
        : 0,
      weeklyHours: Math.round((newWeekly.reduce((a, b) => a + b, 0) / 60) * 10) / 10,
    }));
  }, [user, progress]);

  const recordLesson = useCallback(async () => {
    if (!user) return;
    await supabase
      .from('user_progress')
      .update({
        total_lessons_completed: progress.totalLessonsCompleted + 1,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', user.id);

    setProgress(prev => ({
      ...prev,
      totalLessonsCompleted: prev.totalLessonsCompleted + 1,
    }));
  }, [user, progress.totalLessonsCompleted]);

  return { progress, loading, recordExercise, recordLesson, refetch: fetchProgress };
}
