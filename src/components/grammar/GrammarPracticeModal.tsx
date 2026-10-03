import { useState, useMemo, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight, Trophy, RotateCcw, Volume2, Loader2, Square } from "lucide-react";
import { cn, shuffleArray } from "@/lib/utils";
import { useElevenLabsTTS } from "@/hooks/useElevenLabsTTS";
import { useExerciseFeedback } from "@/hooks/useExerciseFeedback";
import { 
  GrammarExercise, 
  getGrammarExercisesByLevel, 
  getRandomGrammarExercises,
  getGrammarExercisesByCategory 
} from "@/data/grammarExercisesExpanded";

interface GrammarPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  category?: string;
  exerciseCount?: number;
}

export function GrammarPracticeModal({ 
  isOpen, 
  onClose, 
  level, 
  category,
  exerciseCount = 10 
}: GrammarPracticeModalProps) {
  const [exercises, setExercises] = useState<GrammarExercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [answerHistory, setAnswerHistory] = useState<Record<number, string>>({});
  const feedbackSentRef = useRef(false);
  const { sendExerciseResultEmail } = useExerciseFeedback();

  // ElevenLabs TTS hook for natural voice
  const { speak, stopAudio, isLoading: isSpeaking, isPlaying } = useElevenLabsTTS();
  const startPractice = () => {
    let exerciseList: GrammarExercise[];
    if (category) {
      exerciseList = getGrammarExercisesByCategory(level, category);
      // Shuffle and take exerciseCount
      exerciseList = exerciseList.sort(() => Math.random() - 0.5).slice(0, exerciseCount);
    } else {
      exerciseList = getRandomGrammarExercises(level, exerciseCount);
    }
    setExercises(exerciseList);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, incorrect: 0 });
    setIsCompleted(false);
    setHasStarted(true);
  };

  const currentExercise = exercises[currentIndex];
  const displayGrammarOptions = useMemo(() => {
    if (!currentExercise?.options?.length) return [];
    return shuffleArray([...currentExercise.options]);
  }, [currentIndex, currentExercise?.id]);

  const isCorrect = selectedAnswer === currentExercise?.correctAnswer;
  const progress = exercises.length > 0 ? ((currentIndex + 1) / exercises.length) * 100 : 0;

  const handleSelectAnswer = (answer: string) => {
    if (selectedAnswer) return; // Already answered
    setSelectedAnswer(answer);
    setShowExplanation(true);
    setAnswerHistory(prev => ({ ...prev, [currentIndex]: answer }));
    if (answer === currentExercise.correctAnswer) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsCompleted(true);
      if (!feedbackSentRef.current) {
        feedbackSentRef.current = true;
        const finalCorrect = score.correct + (selectedAnswer === currentExercise?.correctAnswer ? 1 : 0);
        const percentage = Math.round((finalCorrect / exercises.length) * 100);
        const incorrectAnswers = exercises
          .map((ex, i) => ({ question: ex.question, userAnswer: answerHistory[i] || selectedAnswer || "", correctAnswer: ex.correctAnswer }))
          .filter(item => item.userAnswer !== item.correctAnswer);
        sendExerciseResultEmail({
          exerciseType: "Grammar Practice",
          exerciseTitle: `Grammar Practice (${level}${category ? ` - ${category}` : ""})`,
          level,
          score: percentage,
          totalQuestions: exercises.length,
          correctAnswers: finalCorrect,
          incorrectAnswers,
        });
      }
    }
  };

  const handleRestart = () => {
    startPractice();
  };

  const handleClose = () => {
    stopAudio();
    setHasStarted(false);
    setIsCompleted(false);
    setExercises([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, incorrect: 0 });
    setAnswerHistory({});
    feedbackSentRef.current = false;
    onClose();
  };

  const speakText = (text: string) => {
    // Clean the text for TTS - remove blanks placeholder
    const cleanText = text.replace(/___/g, "blank");
    
    if (isPlaying) {
      stopAudio();
    } else {
      speak(cleanText);
    }
  };

  const getLevelColor = (lvl: string) => {
    const colors: Record<string, string> = {
      A1: "bg-level-a1",
      A2: "bg-level-a2",
      B1: "bg-level-b1",
      B2: "bg-level-b2",
      C1: "bg-level-c1",
      C2: "bg-level-c2",
    };
    return colors[lvl] || "bg-primary";
  };

  const totalExercisesAvailable = category 
    ? getGrammarExercisesByCategory(level, category).length 
    : getGrammarExercisesByLevel(level).length;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className={cn("px-2 py-1 rounded text-white text-sm", getLevelColor(level))}>
              {level}
            </span>
            Grammar Practice
            {category && <Badge variant="secondary">{category}</Badge>}
          </DialogTitle>
        </DialogHeader>

        {!hasStarted ? (
          // Start Screen
          <div className="py-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-4xl">📚</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Practice grammar level {level}!
              </h3>
              <p className="text-muted-foreground">
                {totalExercisesAvailable} exercises available
                {category && ` in category "${category}"`}
              </p>
            </div>
            <div className="flex flex-col gap-2 max-w-xs mx-auto">
              <Button onClick={startPractice} size="lg" className="gap-2">
                Start ({Math.min(exerciseCount, totalExercisesAvailable)} exercises)
              </Button>
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>
        ) : isCompleted ? (
          // Results Screen
          <div className="py-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-success" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Practice complete!</h3>
              <p className="text-muted-foreground">Level {level}</p>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success">{score.correct}</div>
                  <div className="text-xs text-muted-foreground">Correct</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-destructive">{score.incorrect}</div>
                  <div className="text-xs text-muted-foreground">Incorrect</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">
                    {Math.round((score.correct / exercises.length) * 100)}%
                  </div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </CardContent>
              </Card>
            </div>
            <div className="flex gap-2 justify-center">
              <Button onClick={handleRestart} variant="outline" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                Practice again
              </Button>
              <Button onClick={handleClose}>
                Close
              </Button>
            </div>
          </div>
        ) : currentExercise ? (
          // Exercise Screen
          <div className="space-y-6">
            {/* Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Question {currentIndex + 1} of {exercises.length}</span>
                <span className="text-success">{score.correct} correct</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {currentExercise.category}
                    </Badge>
                    <p className="text-lg font-medium">{currentExercise.question}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => speakText(currentExercise.question)}
                    disabled={isSpeaking}
                    className={cn(isPlaying && "text-primary")}
                  >
                    {isSpeaking ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : isPlaying ? (
                      <Square className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Options */}
            <div className="grid gap-3">
              {displayGrammarOptions.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const isCorrectOption = option === currentExercise.correctAnswer;
                
                let optionStyle = "border-2 border-border hover:border-primary/50 hover:bg-secondary/50";
                if (showExplanation) {
                  if (isCorrectOption) {
                    optionStyle = "border-2 border-success bg-success/10";
                  } else if (isSelected && !isCorrectOption) {
                    optionStyle = "border-2 border-destructive bg-destructive/10";
                  }
                } else if (isSelected) {
                  optionStyle = "border-2 border-primary bg-primary/10";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(option)}
                    disabled={showExplanation}
                    className={cn(
                      "p-4 rounded-lg text-left transition-all flex items-center justify-between",
                      optionStyle,
                      showExplanation && "cursor-default"
                    )}
                  >
                    <span>{option}</span>
                    {showExplanation && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    )}
                    {showExplanation && isSelected && !isCorrectOption && (
                      <XCircle className="w-5 h-5 text-destructive" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <Card className={cn(
                "border-2",
                isCorrect ? "border-success/50 bg-success/5" : "border-destructive/50 bg-destructive/5"
              )}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium mb-1">
                        {isCorrect ? "Correct!" : "Incorrect"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {currentExercise.explanation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Next Button */}
            {showExplanation && (
              <Button onClick={handleNext} className="w-full gap-2">
                {currentIndex < exercises.length - 1 ? (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    View results
                    <Trophy className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
