import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, XCircle, AlertTriangle, Pencil, Send, 
  Volume2, RefreshCw, Lightbulb, BookOpen 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useElevenLabsTTS } from "@/hooks/useElevenLabsTTS";

interface WritingExerciseProps {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  onAnswer: (answer: string, correct: boolean) => void;
  showExplanation: boolean;
  selectedAnswer: string | null;
}

interface FeedbackItem {
  type: 'error' | 'warning' | 'success';
  message: string;
  suggestion?: string;
}

export function WritingExercise({
  question,
  options,
  correctAnswer,
  explanation,
  onAnswer,
  showExplanation,
  selectedAnswer,
}: WritingExerciseProps) {
  const [userInput, setUserInput] = useState("");
  const [liveFeedback, setLiveFeedback] = useState<FeedbackItem[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { speak: speakText } = useElevenLabsTTS();

  // Check if this is a free-form writing exercise or has expected answers
  const isMultipleChoice = options.length > 0 && options.some(opt => 
    opt.length < 100 && !opt.includes("______")
  );

  // Analyze user input for common writing issues
  const analyzeWriting = useCallback((text: string): FeedbackItem[] => {
    const feedback: FeedbackItem[] = [];
    
    if (!text.trim()) return feedback;

    // Check capitalization at start of sentence
    if (text.length > 0 && text[0] !== text[0].toUpperCase()) {
      feedback.push({
        type: 'warning',
        message: "Start with a capital letter",
        suggestion: text.charAt(0).toUpperCase() + text.slice(1)
      });
    }

    // Check if 'I' is always capitalized
    const iPattern = /\bi\b(?!')/g;
    if (iPattern.test(text)) {
      feedback.push({
        type: 'warning',
        message: "The pronoun 'I' should always be capitalized",
        suggestion: text.replace(/\bi\b(?!')/g, 'I')
      });
    }

    // Check ending punctuation
    const trimmedText = text.trim();
    if (trimmedText.length > 3 && !trimmedText.match(/[.!?]$/)) {
      feedback.push({
        type: 'warning',
        message: "Sentences should end with punctuation (. ? !)",
        suggestion: trimmedText + "."
      });
    }

    // Check for double spaces
    if (/\s{2,}/.test(text)) {
      feedback.push({
        type: 'warning',
        message: "Avoid double spaces",
        suggestion: text.replace(/\s{2,}/g, ' ')
      });
    }

    // Check for proper nouns that should be capitalized (common ones)
    const properNouns = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
      'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december',
      'english', 'spanish', 'french', 'german', 'italian', 'chinese', 'japanese',
      'costa rica', 'san jose', 'san josé', 'london', 'paris', 'new york'];
    
    const lowerText = text.toLowerCase();
    for (const noun of properNouns) {
      if (lowerText.includes(noun)) {
        const regex = new RegExp(`\\b${noun}\\b`, 'gi');
        const match = text.match(regex);
        if (match && match[0] !== noun.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')) {
          feedback.push({
            type: 'warning',
            message: `"${noun}" should be capitalized (it's a proper noun)`,
          });
          break; // Only show one proper noun warning at a time
        }
      }
    }

    // Check for common subject-verb agreement issues
    const svErrors = [
      { pattern: /\b(he|she|it)\s+(am|are)\b/i, message: "Use 'is' with he/she/it" },
      { pattern: /\bi\s+(is|are)\b/i, message: "Use 'am' with 'I'" },
      { pattern: /\b(we|they|you)\s+(is|am)\b/i, message: "Use 'are' with we/they/you" },
      { pattern: /\b(he|she|it)\s+don't\b/i, message: "Use 'doesn't' with he/she/it" },
      { pattern: /\b(he|she|it)\s+have\b/i, message: "Use 'has' with he/she/it (unless in perfect tenses with auxiliary)" },
    ];

    for (const { pattern, message } of svErrors) {
      if (pattern.test(text)) {
        feedback.push({
          type: 'error',
          message: `Grammar: ${message}`,
        });
        break;
      }
    }

    // Positive feedback if no issues
    if (feedback.length === 0 && text.trim().length >= 5) {
      feedback.push({
        type: 'success',
        message: "Good writing! Capitalization and punctuation look correct.",
      });
    }

    return feedback;
  }, []);

  // Update live feedback as user types
  useEffect(() => {
    if (!isSubmitted) {
      const feedback = analyzeWriting(userInput);
      setLiveFeedback(feedback);
    }
  }, [userInput, analyzeWriting, isSubmitted]);

  // Reset when question changes
  useEffect(() => {
    setUserInput("");
    setLiveFeedback([]);
    setIsSubmitted(false);
  }, [question]);

  // Check if answer is correct
  const checkAnswer = (): boolean => {
    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedCorrect = correctAnswer.trim().toLowerCase();
    
    // Exact match
    if (normalizedInput === normalizedCorrect) return true;
    
    // Check against options if multiple choice
    if (options.length > 0) {
      return options.some(opt => 
        opt.trim().toLowerCase() === normalizedInput
      ) && normalizedInput === normalizedCorrect;
    }

    // For free-form, check similarity (allowing minor punctuation differences)
    const cleanInput = normalizedInput.replace(/[.,!?]/g, '').replace(/\s+/g, ' ');
    const cleanCorrect = normalizedCorrect.replace(/[.,!?]/g, '').replace(/\s+/g, ' ');
    
    if (cleanInput === cleanCorrect) return true;

    // Check if key words match (at least 80%)
    const inputWords = cleanInput.split(' ').filter(w => w.length > 2);
    const correctWords = cleanCorrect.split(' ').filter(w => w.length > 2);
    
    if (correctWords.length > 0) {
      const matchingWords = inputWords.filter(w => correctWords.includes(w));
      const matchRate = matchingWords.length / correctWords.length;
      if (matchRate >= 0.8) return true;
    }

    return false;
  };

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    
    setIsSubmitted(true);
    const isCorrect = checkAnswer();
    onAnswer(userInput, isCorrect);
  };

  const handleUseHint = (suggestion: string) => {
    setUserInput(suggestion);
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 space-y-6">
        {/* Question */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Pencil className="w-5 h-5 text-primary" />
            <h3 className="font-display font-semibold text-lg">Writing Exercise</h3>
          </div>
          
          <div className="p-4 bg-secondary/50 rounded-xl border">
            <p className="font-medium text-lg">{question}</p>
          </div>

          {/* Audio button */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => speakText(question.replace(/[_→]/g, ''))}
            className="text-xs"
          >
            <Volume2 className="w-4 h-4 mr-1" />
            Listen to question
          </Button>
        </div>

        {/* Writing Area */}
        {!showExplanation && (
          <div className="space-y-4">
            {/* Expected format hint */}
            {isMultipleChoice && options.length > 0 && (
              <div className="flex items-start gap-2 p-3 bg-accent/10 rounded-lg border border-accent/20">
                <Lightbulb className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <span className="font-medium">Hint:</span> Write your answer. Expected format examples:
                  <div className="mt-1 flex flex-wrap gap-1">
                    {options.slice(0, 2).map((opt, i) => (
                      <Badge key={i} variant="secondary" className="text-xs font-mono">
                        {opt.length > 30 ? opt.substring(0, 30) + '...' : opt}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Text input area */}
            <div className="relative">
              <Textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your answer here..."
                className="min-h-[120px] text-base resize-none pr-12"
                disabled={isSubmitted}
              />
              <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                {userInput.length} chars
              </div>
            </div>

            {/* Live Feedback Panel */}
            {liveFeedback.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  Live Feedback
                </div>
                <div className="space-y-2">
                  {liveFeedback.map((item, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-start gap-2 p-3 rounded-lg text-sm",
                        item.type === 'error' && "bg-destructive/10 border border-destructive/20",
                        item.type === 'warning' && "bg-warning/10 border border-warning/20",
                        item.type === 'success' && "bg-success/10 border border-success/20"
                      )}
                    >
                      {item.type === 'error' && <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />}
                      {item.type === 'warning' && <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />}
                      {item.type === 'success' && <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />}
                      <div className="flex-1">
                        <p>{item.message}</p>
                        {item.suggestion && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="mt-1 h-auto py-1 px-2 text-xs"
                            onClick={() => handleUseHint(item.suggestion!)}
                          >
                            <RefreshCw className="w-3 h-3 mr-1" />
                            Apply fix: "{item.suggestion.length > 40 ? item.suggestion.substring(0, 40) + '...' : item.suggestion}"
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={handleSubmit}
              disabled={!userInput.trim() || isSubmitted}
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Answer
            </Button>
          </div>
        )}

        {/* Results after submission */}
        {showExplanation && selectedAnswer && (
          <div className="space-y-4">
            {/* User's answer */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Your answer:</p>
              <div className={cn(
                "p-4 rounded-xl border-2",
                selectedAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
                  ? "bg-success/10 border-success/30"
                  : "bg-destructive/10 border-destructive/30"
              )}>
                <p className="font-medium">{selectedAnswer}</p>
              </div>
            </div>

            {/* Correct answer (if different) */}
            {selectedAnswer.toLowerCase().trim() !== correctAnswer.toLowerCase().trim() && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Correct answer:</p>
                <div className="p-4 rounded-xl bg-success/10 border-2 border-success/30">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-success">{correctAnswer}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => speakText(correctAnswer)}
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Explanation */}
            <div className={cn(
              "p-4 rounded-xl",
              selectedAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
                ? "bg-success/10 border border-success/20"
                : "bg-warning/10 border border-warning/20"
            )}>
              <div className="flex items-start gap-3">
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                  selectedAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()
                    ? "bg-success/20"
                    : "bg-warning/20"
                )}>
                  {selectedAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim() ? (
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  ) : (
                    <BookOpen className="w-4 h-4 text-warning" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-2">
                    {selectedAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim() 
                      ? "Excellent! 🎉" 
                      : "Keep practicing!"}
                  </p>
                  <p className="text-sm">{explanation}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
