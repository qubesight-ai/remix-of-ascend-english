import { splitQuestionIntoParts } from "@/lib/questionFormatter";
import { cn } from "@/lib/utils";

interface ExerciseQuestionProps {
  question: string;
  className?: string;
}

/**
 * Renders an exercise question with styled blank indicators
 */
export function ExerciseQuestion({ question, className }: ExerciseQuestionProps) {
  const parts = splitQuestionIntoParts(question);

  return (
    <h2 className={cn("font-display font-bold text-xl", className)}>
      {parts.map((part, index) => {
        if (part.type === 'blank') {
          return (
            <span
              key={index}
              className="inline-block mx-1 px-3 py-0.5 bg-primary/10 border-b-2 border-primary rounded text-primary font-medium min-w-[3rem] text-center"
            >
              ?
            </span>
          );
        }
        return <span key={index}>{part.content}</span>;
      })}
    </h2>
  );
}
