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
              "p-3.5 text-sm rounded-2xl backdrop-blur-md border",
              item.type === "success" 
                ? "bg-emerald-500/10 border-emerald-500/25 shadow-sm" 
                : "bg-amber-500/10 border-amber-500/25 shadow-sm"
            )}
          >
            {item.type === "success" ? (
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <span className="text-lg">✨</span>
                <span>{item.successMessage}</span>
              </div>
            ) : (
              <div className="space-y-2">
                {/* Error and Correction */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-300 text-rose-700 font-semibold text-xs shadow-sm">
                    🔴 {item.error}
                  </span>
                  <span className="text-[#3c494b] font-bold">→</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-300 text-emerald-700 font-semibold text-xs shadow-sm">
                    ✅ {item.correction}
                  </span>
                </div>
                
                {/* Explanation */}
                {item.explanation && (
                  <p className="text-[#3c494b] text-xs pl-1 leading-relaxed">
                    📖 {item.explanation}
                  </p>
                )}
                
                {/* Example */}
                {item.example && (
                  <p className="text-primary text-xs pl-1 font-semibold italic">
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