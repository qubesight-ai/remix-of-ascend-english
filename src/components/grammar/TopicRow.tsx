import { Button } from "@/components/ui/button";
import { Check, Lock, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { GrammarTopic } from "@/data/grammarData";

interface TopicRowProps {
  topic: GrammarTopic;
  index: number;
  onStart: () => void;
  getLevelColor: (level: string) => string;
}

export function TopicRow({ topic, index, onStart, getLevelColor }: TopicRowProps) {
  const isLocked = !topic.completed && index > 0;
  
  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 border-b last:border-b-0 transition-colors",
        isLocked ? "opacity-60" : "hover:bg-secondary/30"
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            topic.completed
              ? "bg-success text-white"
              : isLocked
              ? "bg-secondary text-muted-foreground"
              : "bg-primary/10 text-primary"
          )}
        >
          {topic.completed ? (
            <Check className="w-5 h-5" />
          ) : isLocked ? (
            <Lock className="w-4 h-4" />
          ) : (
            <span className="text-sm font-bold">{index + 1}</span>
          )}
        </div>
        
        <div>
          <h4 className="font-medium">{topic.title}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span
              className={cn(
                "px-2 py-0.5 rounded-full text-xs font-medium text-white",
                getLevelColor(topic.level)
              )}
            >
              {topic.level}
            </span>
            {topic.completed && (
              <span className="text-xs text-success">Completed</span>
            )}
          </div>
        </div>
      </div>

      <Button
        variant={topic.completed ? "outline" : "default"}
        size="sm"
        disabled={isLocked}
        onClick={onStart}
      >
        {topic.completed ? (
          "Review"
        ) : (
          <>
            <Play className="w-4 h-4 mr-1" />
            Start
          </>
        )}
      </Button>
    </div>
  );
}
