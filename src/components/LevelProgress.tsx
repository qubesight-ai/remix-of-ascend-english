import { cn } from "@/lib/utils";
import { Check, Lock } from "lucide-react";

interface LevelProgressProps {
  currentLevel: "A1" | "A2" | "B1" | "B2" | "C1";
  progress: number; // 0-100 for current level
}

const levels = [
  { id: "A1", label: "Principiante", color: "level-a1", textColor: "level-a1-text" },
  { id: "A2", label: "Elemental", color: "level-a2", textColor: "level-a2-text" },
  { id: "B1", label: "Intermedio", color: "level-b1", textColor: "level-b1-text" },
  { id: "B2", label: "Avanzado", color: "level-b2", textColor: "level-b2-text" },
  { id: "C1", label: "Dominio", color: "level-c1", textColor: "level-c1-text" },
];

const levelOrder = ["A1", "A2", "B1", "B2", "C1"];

export function LevelProgress({ currentLevel, progress }: LevelProgressProps) {
  const currentIndex = levelOrder.indexOf(currentLevel);

  return (
    <div className="w-full">
      {/* Progress bar */}
      <div className="relative mb-8">
        <div className="h-3 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full gradient-progress rounded-full transition-all duration-700 ease-out"
            style={{ 
              width: `${((currentIndex + progress / 100) / levels.length) * 100}%` 
            }}
          />
        </div>
        
        {/* Level markers */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-0">
          {levels.map((level, index) => {
            const isCompleted = index < currentIndex;
            const isCurrent = index === currentIndex;
            const isLocked = index > currentIndex;
            
            return (
              <div
                key={level.id}
                className="relative flex flex-col items-center"
                style={{ left: `${(index / (levels.length - 1)) * 100}%`, marginLeft: index === 0 ? 0 : index === levels.length - 1 ? 0 : '-12px' }}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-4 border-background transition-all duration-300",
                    isCompleted && level.color,
                    isCompleted && "text-white",
                    isCurrent && level.color,
                    isCurrent && "text-white ring-4 ring-offset-2 ring-offset-background animate-pulse-soft",
                    isLocked && "bg-secondary text-muted-foreground"
                  )}
                  style={isCurrent ? { boxShadow: `0 0 20px hsl(var(--${level.color.replace('level-', 'level-')}) / 0.5)` } : {}}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : isLocked ? (
                    <Lock className="w-3 h-3" />
                  ) : (
                    level.id
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Level labels */}
      <div className="flex justify-between">
        {levels.map((level, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          
          return (
            <div key={level.id} className="text-center">
              <p className={cn(
                "font-display font-semibold text-sm",
                isCurrent && level.textColor,
                isCompleted && "text-muted-foreground",
                !isCurrent && !isCompleted && "text-muted-foreground/50"
              )}>
                {level.id}
              </p>
              <p className={cn(
                "text-xs mt-0.5",
                isCurrent ? "text-foreground" : "text-muted-foreground/70"
              )}>
                {level.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
