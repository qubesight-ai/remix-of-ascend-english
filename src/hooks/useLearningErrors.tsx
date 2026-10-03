import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface LearningError {
  id: string;
  user_id: string;
  conversation_id: string | null;
  level: string;
  phase: "SPEAK" | "LISTEN" | "PRACTICE" | "CONVERSATION";
  question_text: string;
  user_response: string;
  correct_response: string;
  error_type: string;
  recommendation: string | null;
  created_at: string;
}

export interface NewLearningError {
  conversation_id?: string;
  level: string;
  phase: "SPEAK" | "LISTEN" | "PRACTICE" | "CONVERSATION";
  question_text: string;
  user_response: string;
  correct_response: string;
  error_type: string;
  recommendation?: string;
}

export const useLearningErrors = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: errors = [], isLoading, error } = useQuery({
    queryKey: ["learning-errors", user?.id],
    queryFn: async () => {
      if (!user?.id) return [];
      
      const { data, error } = await supabase
        .from("learning_errors")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as LearningError[];
    },
    enabled: !!user?.id,
  });

  const addError = useMutation({
    mutationFn: async (newError: NewLearningError) => {
      if (!user?.id) throw new Error("User not authenticated");

      const { data, error } = await supabase
        .from("learning_errors")
        .insert({
          user_id: user.id,
          ...newError,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["learning-errors", user?.id] });
    },
  });

  const deleteError = useMutation({
    mutationFn: async (errorId: string) => {
      const { error } = await supabase
        .from("learning_errors")
        .delete()
        .eq("id", errorId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["learning-errors", user?.id] });
    },
  });

  const clearAllErrors = useMutation({
    mutationFn: async () => {
      if (!user?.id) throw new Error("User not authenticated");

      const { error } = await supabase
        .from("learning_errors")
        .delete()
        .eq("user_id", user.id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["learning-errors", user?.id] });
    },
  });

  // Get statistics
  const stats = {
    totalErrors: errors.length,
    byLevel: errors.reduce((acc, err) => {
      acc[err.level] = (acc[err.level] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    byPhase: errors.reduce((acc, err) => {
      acc[err.phase] = (acc[err.phase] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    byErrorType: errors.reduce((acc, err) => {
      acc[err.error_type] = (acc[err.error_type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>),
    recentErrors: errors.slice(0, 5),
  };

  return {
    errors,
    isLoading,
    error,
    addError,
    deleteError,
    clearAllErrors,
    stats,
  };
};
