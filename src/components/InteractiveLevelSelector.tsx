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
        <p className="text-sm font-medium text-[#3c494b]">
          Click on any level to explore its topics and exercises
        </p>
        <span className={cn(
          "text-xs px-3 py-1 rounded-full text-white font-display font-bold shadow-sm",
          getLevelColor(selectedLevel)
        )}>
          Exploring: {selectedLevel} - {levels.find(l => l.id === selectedLevel)?.label}
        </span>
      </div>
      
      {/* Level Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3.5">
        {levels.map((level) => {
          const isSelected = selectedLevel === level.id;
          const isUserLevel = currentUserLevel === level.id;
          
          return (
            <button
              key={level.id}
              onClick={() => onLevelSelect(level.id)}
              className={cn(
                "relative flex flex-col items-center p-4 rounded-3xl border transition-all duration-300",
                "hover:scale-105 cursor-pointer backdrop-blur-md",
                isSelected 
                  ? "bg-white/95 border-white shadow-[0_12px_28px_rgba(38,198,218,0.35),inset_0_2px_1px_rgba(255,255,255,1)] ring-4 ring-primary/30" 
                  : "bg-white/60 border-white/80 hover:bg-white/80 shadow-[0_4px_16px_rgba(38,198,218,0.08)]"
              )}
            >
              {/* Level Orb */}
              <div
                className={cn(
                  "w-13 h-13 rounded-full flex items-center justify-center text-white font-display font-extrabold text-lg mb-2 transition-transform shadow-md relative overflow-hidden",
                  getLevelColor(level.id),
                  isSelected && "scale-110 shadow-aqua-sm"
                )}
                style={{ width: '3.25rem', height: '3.25rem' }}
              >
                {/* Specular gloss crescent */}
                <div className="absolute top-1 left-2 w-5 h-3 rounded-full bg-white/70 blur-[0.5px] pointer-events-none" />
                <span className="relative z-10 drop-shadow-sm">{level.id}</span>
              </div>
              
              {/* Label */}
              <span className={cn(
                "text-xs font-display font-semibold text-center tracking-tight",
                isSelected ? "text-[#0b3b4a]" : "text-[#3c494b]"
              )}>
                {level.label}
              </span>
              
              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-b from-[#69f0ae] to-[#43a047] border-2 border-white shadow-md flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                </div>
              )}

              {/* User's current level indicator */}
              {isUserLevel && !isSelected && (
                <div className="absolute -top-1.5 -right-1.5 px-2 py-0.5 rounded-full btn-gel-aqua border border-white text-[10px] text-white font-display font-bold shadow-sm">
                  YOU
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Selected Level Info with Actions */}
      <div className="mt-5 p-5 rounded-3xl bg-white/70 border border-white/90 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.95),0_8px_20px_rgba(38,198,218,0.1)] backdrop-blur-md">
        <div className="flex flex-col gap-4">
          {/* Level Title and Description */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-display font-bold text-lg text-[#0b3b4a] flex items-center gap-2">
                <span className={cn(
                  "px-3 py-0.5 rounded-full text-white text-xs font-extrabold shadow-sm",
                  getLevelColor(selectedLevel)
                )}>
                  {selectedLevel}
                </span>
                {levels.find(l => l.id === selectedLevel)?.label}
                {isCurrentUserLevel && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#e1f8fb] text-primary border border-primary/20 font-semibold">
                    Your current level
                  </span>
                )}
              </h3>
              <p className="text-sm text-[#3c494b] mt-1">
                {levels.find(l => l.id === selectedLevel)?.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2.5">
            {/* Start Learning - Primary CTA */}
            <Button 
              onClick={handleStartLearning}
              className="gap-2 btn-gel-aqua shadow-aqua-sm"
              size="sm"
            >
              <Play className="w-4 h-4 fill-white" />
              Start Learning {selectedLevel}
            </Button>

            {/* Quick Navigation Buttons */}
            <Button 
              variant="outline" 
              size="sm"
              onClick={handlePracticeGrammar}
              className="gap-1.5 rounded-full border-white/80 bg-white/80 hover:bg-white text-[#0b3b4a] shadow-sm font-semibold"
            >
              <BookOpen className="w-4 h-4 text-primary" />
              Grammar
            </Button>

            <Button 
              variant="outline" 
              size="sm"
              onClick={handleLearnVocabulary}
              className="gap-1.5 rounded-full border-white/80 bg-white/80 hover:bg-white text-[#0b3b4a] shadow-sm font-semibold"
            >
              <Lightbulb className="w-4 h-4 text-warning" />
              Vocabulary
            </Button>

            {/* Set as My Level - Only show if not already the user's level */}
            {!isCurrentUserLevel && (
              <Button 
                variant="secondary" 
                size="sm"
                onClick={handleSetAsMyLevel}
                disabled={isSettingLevel}
                className="gap-1.5 ml-auto rounded-full btn-gel-white border border-[#c7dee1] font-semibold text-xs"
              >
                <Settings className="w-4 h-4 text-primary" />
                {isSettingLevel ? "Setting..." : `Set ${selectedLevel} as My Level`}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
