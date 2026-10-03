import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface FeedbackItem {
  type: "error" | "success";
  error?: string;
  correction?: string;
  explanation?: string;
  example?: string;
  successMessage?: string;
}

interface ChatFeedbackProps {
  content: string;
}

export function parseFeedback(content: string): { mainContent: string; feedback: FeedbackItem[] } {
  const feedbackRegex = /---FEEDBACK---([\s\S]*?)---END FEEDBACK---/g;
  const matches = content.match(feedbackRegex);
  
  if (!matches) {
    return { mainContent: content, feedback: [] };
  }

  // Remove feedback section from main content
  const mainContent = content.replace(feedbackRegex, '').trim();
  
  const feedback: FeedbackItem[] = [];
  
  for (const match of matches) {
    const feedbackContent = match.replace('---FEEDBACK---', '').replace('---END FEEDBACK---', '').trim();
    
    // Check for success message
    if (feedbackContent.includes('✨')) {
      feedback.push({
        type: "success",
        successMessage: feedbackContent.replace('✨', '').trim()
      });
      continue;
    }
    
    // Parse errors
    const errorMatches = feedbackContent.split(/(?=🔴 ERROR:)/g).filter(s => s.trim());
    
    for (const errorBlock of errorMatches) {
      const errorMatch = errorBlock.match(/🔴 ERROR:\s*"([^"]+)"/);
      const correctionMatch = errorBlock.match(/✅ CORRECTION:\s*"([^"]+)"/);
      const explanationMatch = errorBlock.match(/📖 EXPLANATION:\s*([^\n]+)/);
      const exampleMatch = errorBlock.match(/💡 EXAMPLE:\s*"([^"]+)"/i);
      
      if (errorMatch) {
        feedback.push({
          type: "error",
          error: errorMatch[1],
          correction: correctionMatch?.[1],
          explanation: explanationMatch?.[1],
          example: exampleMatch?.[1]
        });
      }
    }
  }
  
  return { mainContent, feedback };
}

export function ChatFeedback({ content }: ChatFeedbackProps) {
  const { mainContent, feedback } = parseFeedback(content);
  
  if (feedback.length === 0) {
    return <p className="whitespace-pre-wrap">{content}</p>;
  }
  
  return (
    <div className="space-y-3">
      <p className="whitespace-pre-wrap">{mainContent}</p>
      
      <div className="space-y-2 pt-2 border-t border-border/50">
        {feedback.map((item, index) => (
          <Card 
            key={index} 
            className={cn(
              "p-3 text-sm",
              item.type === "success" 
                ? "bg-green-500/10 border-green-500/30" 
                : "bg-orange-500/10 border-orange-500/30"
            )}
          >
            {item.type === "success" ? (
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <span className="text-lg">✨</span>
                <span className="font-medium">{item.successMessage}</span>
              </div>
            ) : (
              <div className="space-y-2">
                {/* Error and Correction */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-red-500/20 text-red-600 dark:text-red-400 font-medium">
                    🔴 {item.error}
                  </span>
                  <span className="text-muted-foreground">→</span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/20 text-green-600 dark:text-green-400 font-medium">
                    ✅ {item.correction}
                  </span>
                </div>
                
                {/* Explanation */}
                {item.explanation && (
                  <p className="text-muted-foreground pl-1">
                    📖 {item.explanation}
                  </p>
                )}
                
                {/* Example */}
                {item.example && (
                  <p className="text-primary pl-1 italic">
                    💡 Example: "{item.example}"
                  </p>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}