import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Shuffle } from "lucide-react";
import { cn, shuffleArray } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { getRandomGrammarExercises, GrammarExercise } from "@/data/grammarExercisesExpanded";
import { useExerciseFeedback } from "@/hooks/useExerciseFeedback";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

// Convert grammar exercises to questions format
function convertToQuestions(exercises: GrammarExercise[]): Question[] {
  return exercises.map(ex => ({
    id: ex.id,
    question: ex.question,
    options: ex.options || [],
    correctAnswer: ex.correctAnswer,
    explanation: ex.explanation,
    category: ex.category,
  }));
}

export default function Practice() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const levelParam = searchParams.get("level") as CEFRLevel | null;
  
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(levelParam || "A1");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [answerHistory, setAnswerHistory] = useState<Record<string, string>>({});
  const feedbackSentRef = useRef(false);
  const { sendExerciseResultEmail } = useExerciseFeedback();
  const [practiceQuestions, setPracticeQuestions] = useState<Question[]>([]);

  const levels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

  // Update level when URL param changes
  useEffect(() => {
    if (levelParam && levels.includes(levelParam)) {
      setSelectedLevel(levelParam);
    }
  }, [levelParam]);

  // Load questions for selected level
  useEffect(() => {
    const exercises = getRandomGrammarExercises(selectedLevel, 50);
    setPracticeQuestions(convertToQuestions(exercises));
    // Reset state when level changes
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, incorrect: 0 });
    setIsComplete(false);
  }, [selectedLevel]);

  const currentQuestion = practiceQuestions[currentQuestionIndex];

  const shuffledOptions = useMemo(() => {
    if (!currentQuestion?.options?.length) return [];
    return shuffleArray(currentQuestion.options);
  }, [currentQuestionIndex, currentQuestion?.id]);

  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;
  const progress = practiceQuestions.length > 0 
    ? ((currentQuestionIndex + 1) / practiceQuestions.length) * 100 
    : 0;

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      A1: "bg-level-a1",
      A2: "bg-level-a2",
      B1: "bg-level-b1",
      B2: "bg-level-b2",
      C1: "bg-level-c1",
      C2: "bg-level-c2",
    };
    return colors[level] || "bg-primary";
  };

  const handleSelectAnswer = (answer: string) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    setAnswerHistory(prev => ({ ...prev, [currentQuestion.id]: answer }));

    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
      toast({
        title: "Correct! 🎉",
        description: "Excellent work",
      });
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < practiceQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    const exercises = getRandomGrammarExercises(selectedLevel, 50);
    setPracticeQuestions(convertToQuestions(exercises));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, incorrect: 0 });
    setIsComplete(false);
    setAnswerHistory({});
    feedbackSentRef.current = false;
  };

  const handleLevelChange = (level: CEFRLevel) => {
    setSelectedLevel(level);
    navigate(`/practice?level=${level}`, { replace: true });
    feedbackSentRef.current = false;
  };

  useEffect(() => {
    if (!isComplete || feedbackSentRef.current || practiceQuestions.length === 0) return;

    feedbackSentRef.current = true;
    const percentage = Math.round((score.correct / practiceQuestions.length) * 100);
    const incorrectAnswers = practiceQuestions
      .filter((q) => answerHistory[q.id] && answerHistory[q.id] !== q.correctAnswer)
      .map((q) => ({
        question: q.question,
        userAnswer: answerHistory[q.id],
        correctAnswer: q.correctAnswer,
      }));

    sendExerciseResultEmail({
      exerciseType: "Practice",
      exerciseTitle: `Practice Session (${selectedLevel})`,
      level: selectedLevel,
      score: percentage,
      totalQuestions: practiceQuestions.length,
      correctAnswers: score.correct,
      incorrectAnswers,
    });
  }, [isComplete, practiceQuestions, score.correct, answerHistory, selectedLevel, sendExerciseResultEmail]);

  if (practiceQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground">Loading exercises...</p>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  if (isComplete) {
    const percentage = Math.round((score.correct / practiceQuestions.length) * 100);
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-8">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="text-center py-12">
              <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
              <h2 className="text-2xl font-bold mb-2">Session Complete!</h2>
              <p className="text-muted-foreground mb-6">
                Level {selectedLevel} Practice
              </p>
              
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-success">{score.correct}</p>
                  <p className="text-sm text-muted-foreground">Correct</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-destructive">{score.incorrect}</p>
                  <p className="text-sm text-muted-foreground">Incorrect</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{percentage}%</p>
                  <p className="text-sm text-muted-foreground">Score</p>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={() => navigate("/")}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button onClick={handleRestart}>
                  <Shuffle className="w-4 h-4 mr-2" />
                  New Session
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" onClick={() => navigate("/")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Score:</span>
              <span className="text-success font-medium">{score.correct}</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-destructive font-medium">{score.incorrect}</span>
            </div>
          </div>

          {/* Level Selector */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {levels.map(level => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                size="sm"
                onClick={() => handleLevelChange(level)}
                className={cn(
                  "gap-1",
                  selectedLevel === level && getLevelColor(level)
                )}
              >
                {level}
              </Button>
            ))}
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestionIndex + 1} of {practiceQuestions.length}</span>
              <span className={cn(
                "px-2 py-0.5 rounded text-white text-xs",
                getLevelColor(selectedLevel)
              )}>
                {selectedLevel}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
                {currentQuestion.category}
              </p>
              <h3 className="text-xl font-semibold mb-6">{currentQuestion.question}</h3>

              <div className="space-y-3">
                {shuffledOptions.map((option) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrectOption = option === currentQuestion.correctAnswer;
                  
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelectAnswer(option)}
                      disabled={showExplanation}
                      className={cn(
                        "w-full p-4 rounded-lg border text-left transition-all",
                        !showExplanation && "hover:border-primary hover:bg-primary/5",
                        showExplanation && isCorrectOption && "border-success bg-success/10",
                        showExplanation && isSelected && !isCorrectOption && "border-destructive bg-destructive/10",
                        !showExplanation && isSelected && "border-primary bg-primary/5"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showExplanation && isCorrectOption && (
                          <CheckCircle2 className="w-5 h-5 text-success" />
                        )}
                        {showExplanation && isSelected && !isCorrectOption && (
                          <XCircle className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div className={cn(
                  "mt-6 p-4 rounded-lg",
                  isCorrect ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
                )}>
                  <div className="flex items-start gap-2">
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
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button variant="outline" onClick={handleRestart}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Restart
            </Button>
            {showExplanation && (
              <Button onClick={handleNextQuestion}>
                {currentQuestionIndex < practiceQuestions.length - 1 ? (
                  <>
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  "Finish"
                )}
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
