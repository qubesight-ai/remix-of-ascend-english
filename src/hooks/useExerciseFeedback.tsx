import { useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import { enhancedCurriculumData, getEnhancedLevelProgress } from "@/data/enhancedCurriculumData";
import type { CEFRLevel } from "@/data/curriculumData";

interface IncorrectAnswer {
  question: string;
  userAnswer: string;
  correctAnswer: string;
}

interface ExerciseFeedbackData {
  exerciseType: string;
  exerciseTitle: string;
  level: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: IncorrectAnswer[];
}

function getCurriculumProgress(currentLevel?: string) {
  try {
    const saved = localStorage.getItem("curriculum-progress");
    const completedSkills: string[] = saved ? JSON.parse(saved) : [];

    const levels = enhancedCurriculumData.map((l) => ({
      level: l.level as string,
      percent: getEnhancedLevelProgress(l.level as CEFRLevel, completedSkills),
    }));

    let total = 0;
    let done = 0;
    enhancedCurriculumData.forEach((l) => {
      l.categories.forEach((c) =>
        c.skills.forEach((s) =>
          s.subSkills.forEach((sub) => {
            total++;
            if (completedSkills.includes(sub.id)) done++;
          })
        )
      );
    });

    const match = currentLevel ? levels.find((l) => l.level === currentLevel) : undefined;

    return {
      overallPercent: total > 0 ? Math.round((done / total) * 100) : 0,
      completedSubSkills: done,
      totalSubSkills: total,
      currentLevelPercent: match ? match.percent : null,
      levels,
    };
  } catch (e) {
    console.error("Failed to read curriculum progress", e);
    return null;
  }
}

export function useExerciseFeedback() {
  const { user } = useAuth();

  const sendFeedbackToTeacher = useCallback(async (data: ExerciseFeedbackData) => {
    try {
      // Get student info
      let studentName = "Anonymous Student";
      let studentEmail = "unknown@email.com";
      let currentUser = user;

      if (!currentUser) {
        const { data: authData } = await supabase.auth.getUser();
        currentUser = authData.user;
      }

      if (currentUser) {
        studentEmail = currentUser.email || "unknown@email.com";
        
        // Try to get display name from profiles
        const { data: profile } = await supabase
          .from('profiles')
          .select('display_name')
          .eq('user_id', currentUser.id)
          .single();
        
        if (profile?.display_name) {
          studentName = profile.display_name;
        } else {
          studentName = currentUser.email?.split('@')[0] || "Student";
        }
      }

      if (!studentEmail || !studentEmail.includes("@")) {
        throw new Error("No registered student email found for this session");
      }

      const curriculumProgress = getCurriculumProgress(data.level);

      // Persist the completion so it shows up in the progress pages
      if (currentUser) {
        const { error: insertError } = await supabase.from("exercise_completions").insert({
          user_id: currentUser.id,
          student_name: studentName,
          student_email: studentEmail,
          exercise_type: data.exerciseType,
          exercise_title: data.exerciseTitle,
          level: data.level,
          score: data.score,
          total_questions: data.totalQuestions,
          correct_answers: data.correctAnswers,
          curriculum_overall_percent: curriculumProgress?.overallPercent ?? null,
          curriculum_level_percent: curriculumProgress?.currentLevelPercent ?? null,
          completed_subskills: curriculumProgress?.completedSubSkills ?? null,
          total_subskills: curriculumProgress?.totalSubSkills ?? null,
        });
        if (insertError) {
          console.error("Could not save completion record", insertError);
        }
      }

      console.log("Sending exercise results email...");

      const { data: responseData, error } = await supabase.functions.invoke('send-exercise-feedback', {
        body: {
          studentName,
          studentEmail,
          exerciseType: data.exerciseType,
          exerciseTitle: data.exerciseTitle,
          level: data.level,
          score: data.score,
          totalQuestions: data.totalQuestions,
          correctAnswers: data.correctAnswers,
          incorrectAnswers: data.incorrectAnswers,
          completedAt: new Date().toISOString(),
          curriculumProgress,
        },
      });

      if (error) {
        console.error("Error sending feedback:", error);
        toast({
          title: "Results email could not be sent",
          description: "We could not send your results email this time.",
          variant: "destructive",
        });
        return { success: false, error };
      }

      console.log("Exercise results email sent successfully:", responseData);
      toast({
        title: "Results email sent",
        description: "We sent your results to your registered email.",
      });
      return { success: true, data: responseData };
    } catch (error) {
      console.error("Error in sendFeedbackToTeacher:", error);
      toast({
        title: "Results email could not be sent",
        description: "Please try again in your next session.",
        variant: "destructive",
      });
      return { success: false, error };
    }
  }, [user]);

  const sendExerciseResultEmail = sendFeedbackToTeacher;

  return { sendFeedbackToTeacher, sendExerciseResultEmail };
}
