import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, Play, BookOpen, Lightbulb, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppState } from "@/hooks/useAppState";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface InteractiveLevelSelectorProps {
  selectedLevel: CEFRLevel;
  onLevelSelect: (level: CEFRLevel) => void;
  currentUserLevel?: CEFRLevel;
}

const levels: { id: CEFRLevel; label: string; description: string }[] = [
  { id: "A1", label: "Beginner", description: "Basic phrases and vocabulary" },
  { id: "A2", label: "Elementary", description: "Simple everyday situations" },
  { id: "B1", label: "Intermediate", description: "Main points of clear texts" },
  { id: "B2", label: "Upper-Intermediate", description: "Complex texts and discussions" },
  { id: "C1", label: "Advanced", description: "Demanding, longer texts" },
  { id: "C2", label: "Mastery", description: "Near-native proficiency" },
];

const getLevelColor = (level: string): string => {
  const colors: Record<string, string> = {
    A1: "bg-level-a1",
    A2: "bg-level-a2",
    B1: "bg-level-b1",
    B2: "bg-level-b2",
    C1: "bg-level-c1",
    C2: "bg-purple-600",
  };
  return colors[level] || "bg-primary";
};

const getLevelBorderColor = (level: string): string => {
  const colors: Record<string, string> = {
    A1: "border-level-a1 ring-level-a1/30",
    A2: "border-level-a2 ring-level-a2/30",
    B1: "border-level-b1 ring-level-b1/30",
    B2: "border-level-b2 ring-level-b2/30",
    C1: "border-level-c1 ring-level-c1/30",
    C2: "border-purple-600 ring-purple-600/30",
  };
  return colors[level] || "border-primary";
};

export function InteractiveLevelSelector({ 
  selectedLevel, 
  onLevelSelect,
  currentUserLevel = "A1"
}: InteractiveLevelSelectorProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { setUserProgress } = useAppState();
  const [isSettingLevel, setIsSettingLevel] = useState(false);

  // Set this level as the user's current level
  const handleSetAsMyLevel = async () => {
    if (!user) {
      toast.error("Please sign in to set your level");
      return;
    }

    setIsSettingLevel(true);
    try {
      // Update in database
      const { error } = await supabase
        .from('profiles')
        .update({ current_level: selectedLevel })
        .eq('user_id', user.id);

      if (error) throw error;

      // Update local state (only A1-C1 supported in local state)
      const localLevel = selectedLevel === "C2" ? "C1" : selectedLevel;
      setUserProgress({ currentLevel: localLevel as "A1" | "A2" | "B1" | "B2" | "C1" });
      
      toast.success(`Your level has been set to ${selectedLevel}!`);
    } catch (error) {
      console.error('Error updating level:', error);
      toast.error("Failed to update your level");
    } finally {
      setIsSettingLevel(false);
    }
  };

  // Navigate to curriculum for this level
  const handleStartLearning = () => {
    navigate(`/curriculum?level=${selectedLevel}`);
  };

  // Navigate to grammar for this level
  const handlePracticeGrammar = () => {
    navigate(`/grammar?level=${selectedLevel}`);
  };

  // Navigate to vocabulary for this level
  const handleLearnVocabulary = () => {
    navigate(`/vocabulary?level=${selectedLevel}`);
  };

  const isCurrentUserLevel = currentUserLevel === selectedLevel;

  return (
    <div className="w-full">
    <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          Click on any level to explore its topics and exercises
        </p>
        <span className={cn(
          "text-xs px-2 py-1 rounded-full text-white font-semibold",
          getLevelColor(selectedLevel)
        )}>
          Exploring: {selectedLevel} - {levels.find(l => l.id === selectedLevel)?.label}
        </span>
      </div>
      
      {/* Level Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {levels.map((level) => {
          const isSelected = selectedLevel === level.id;
          const isUserLevel = currentUserLevel === level.id;
          
          return (
            <button
              key={level.id}
              onClick={() => onLevelSelect(level.id)}
              className={cn(
                "relative flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200",
                "hover:scale-105 hover:shadow-lg cursor-pointer",
                isSelected 
                  ? `${getLevelBorderColor(level.id)} ring-4 shadow-md` 
                  : "border-border hover:border-muted-foreground/50"
              )}
            >
              {/* Level Badge */}
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2 transition-transform",
                  getLevelColor(level.id),
                  isSelected && "scale-110"
                )}
              >
                {level.id}
              </div>
              
              {/* Label */}
              <span className={cn(
                "text-xs font-medium text-center",
                isSelected ? "text-foreground" : "text-muted-foreground"
              )}>
                {level.label}
              </span>
              
              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-success flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}

              {/* User's current level indicator */}
              {isUserLevel && !isSelected && (
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-[10px] text-white font-bold">YOU</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Selected Level Info with Actions */}
      <div className="mt-4 p-4 rounded-xl bg-secondary/50 border">
        <div className="flex flex-col gap-4">
          {/* Level Title and Description */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold flex items-center gap-2">
                <span className={cn(
                  "px-2 py-0.5 rounded text-white text-sm",
                  getLevelColor(selectedLevel)
                )}>
                  {selectedLevel}
                </span>
                {levels.find(l => l.id === selectedLevel)?.label}
                {isCurrentUserLevel && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-normal">
                    Your current level
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {levels.find(l => l.id === selectedLevel)?.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            {/* Start Learning - Primary CTA */}
            <Button 
              onClick={handleStartLearning}
              className="gap-2"
              size="sm"
            >
              <Play className="w-4 h-4" />
              Start Learning {selectedLevel}
            </Button>

            {/* Quick Navigation Buttons */}
            <Button 
              variant="outline" 
              size="sm"
              onClick={handlePracticeGrammar}
              className="gap-1"
            >
              <BookOpen className="w-4 h-4" />
              Grammar
            </Button>

            <Button 
              variant="outline" 
              size="sm"
              onClick={handleLearnVocabulary}
              className="gap-1"
            >
              <Lightbulb className="w-4 h-4" />
              Vocabulary
            </Button>

            {/* Set as My Level - Only show if not already the user's level */}
            {!isCurrentUserLevel && (
              <Button 
                variant="secondary" 
                size="sm"
                onClick={handleSetAsMyLevel}
                disabled={isSettingLevel}
                className="gap-1 ml-auto"
              >
                <Settings className="w-4 h-4" />
                {isSettingLevel ? "Setting..." : `Set ${selectedLevel} as My Level`}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
