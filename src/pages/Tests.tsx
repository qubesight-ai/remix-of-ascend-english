import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, Trophy, Target, ChevronRight, CheckCircle2, XCircle, ArrowRight, BookOpen, Languages } from "lucide-react";
import { cn, shuffleArray } from "@/lib/utils";
import { testDefinitions, TestDefinition, TestQuestion } from "@/data/testsData";
import { useExerciseFeedback } from "@/hooks/useExerciseFeedback";

export default function Tests() {
  const navigate = useNavigate();
  const [selectedTest, setSelectedTest] = useState<TestDefinition | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [completedTests, setCompletedTests] = useState<Record<string, number>>({});
  const { sendExerciseResultEmail } = useExerciseFeedback();

  // Get shuffled questions for current test
  const currentQuestions = useMemo(() => {
    if (!selectedTest) return [];
    // Shuffle and take the number of questions specified
    const shuffled = [...selectedTest.questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, selectedTest.questionsCount);
  }, [selectedTest]);

  const activeTestQuestion =
    selectedTest && currentQuestions.length > 0 ? currentQuestions[currentQuestion] : null;

  const shuffledTestOptions = useMemo(() => {
    if (!activeTestQuestion?.options?.length) return [];
    return shuffleArray([...activeTestQuestion.options]);
  }, [activeTestQuestion?.id, currentQuestion, selectedTest?.id]);

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

  const getTypeIcon = (type: string) => {
    if (type === "grammar") return <BookOpen className="w-5 h-5" />;
    if (type === "vocabulary") return <Languages className="w-5 h-5" />;
    return <Target className="w-5 h-5" />;
  };

  const handleStartTest = (test: TestDefinition) => {
    setSelectedTest(test);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleSelectAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestions[currentQuestion].id]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const score = calculateScore();
      if (selectedTest) {
        setCompletedTests(prev => ({
          ...prev,
          [selectedTest.id]: score
        }));

        const incorrectAnswers = currentQuestions
          .filter((q) => answers[q.id] !== q.correctAnswer)
          .map((q) => ({
            question: q.question,
            userAnswer: answers[q.id] || "(no answer)",
            correctAnswer: q.correctAnswer,
          }));

        sendExerciseResultEmail({
          exerciseType: selectedTest.type === "grammar" ? "Grammar Test" : "Vocabulary Test",
          exerciseTitle: selectedTest.title,
          level: selectedTest.level,
          score,
          totalQuestions: currentQuestions.length,
          correctAnswers: currentQuestions.length - incorrectAnswers.length,
          incorrectAnswers,
        });
      }
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    currentQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    return Math.round((correct / currentQuestions.length) * 100);
  };

  const getCorrectCount = () => {
    return currentQuestions.filter(q => answers[q.id] === q.correctAnswer).length;
  };

  const handleBack = () => {
    if (selectedTest) {
      setSelectedTest(null);
      setShowResults(false);
    } else {
      navigate("/");
    }
  };

  // Results view
  if (selectedTest && showResults) {
    const score = calculateScore();
    const correctCount = getCorrectCount();
    const incorrectCount = currentQuestions.length - correctCount;
    
    return (
      <AppLayout>
        <div className="container py-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className={cn(
                  "w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6",
                  score >= 70 ? "bg-success/10" : "bg-warning/10"
                )}>
                  <Trophy className={cn(
                    "w-12 h-12",
                    score >= 70 ? "text-success" : "text-warning"
                  )} />
                </div>
                
                <h2 className="font-display font-bold text-2xl mb-2">
                  {score >= 70 ? "Excellent work!" : "Keep practicing"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  You completed the {selectedTest.title}
                </p>
                
                <div className="text-6xl font-display font-bold text-primary mb-4">
                  {score}%
                </div>
                
                <div className="flex items-center justify-center gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-xl font-semibold text-success">{correctCount}</p>
                    <p className="text-sm text-muted-foreground">Correct</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-xl font-semibold text-destructive">{incorrectCount}</p>
                    <p className="text-sm text-muted-foreground">Incorrect</p>
                  </div>
                </div>

                {/* Review answers */}
                <div className="text-left mb-8 space-y-3 max-h-80 overflow-y-auto">
                  <h3 className="font-semibold sticky top-0 bg-background py-2">Answer Review:</h3>
                  {currentQuestions.map((q) => {
                    const isCorrect = answers[q.id] === q.correctAnswer;
                    return (
                      <div key={q.id} className={cn(
                        "p-3 rounded-lg border",
                        isCorrect ? "bg-success/5 border-success/20" : "bg-destructive/5 border-destructive/20"
                      )}>
                        <p className="text-sm font-medium">{q.question}</p>
                        <div className="flex items-start gap-2 mt-1">
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                          )}
                          <div className="text-sm">
                            <span>Your answer: <span className={isCorrect ? "text-success font-medium" : "text-destructive font-medium"}>{answers[q.id] || "(no answer)"}</span></span>
                            {!isCorrect && (
                              <>
                                <span className="text-muted-foreground"> · Correct: <span className="text-success font-medium">{q.correctAnswer}</span></span>
                                {q.explanation && (
                                  <p className="text-muted-foreground mt-1 italic">{q.explanation}</p>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button variant="outline" onClick={handleBack}>
                    Back to Tests
                  </Button>
                  <Button variant="hero" onClick={() => handleStartTest(selectedTest)}>
                    Retry Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </AppLayout>
    );
  }

  // Active test view
  if (selectedTest && currentQuestions.length > 0 && activeTestQuestion) {
    const question = activeTestQuestion;
    const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
    
    return (
      <AppLayout>
        <div className="container py-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <Button variant="ghost" size="sm" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Exit Test
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{selectedTest.duration} min</span>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{selectedTest.title}</span>
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {currentQuestions.length}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className={cn(
                    "inline-block px-3 py-1 rounded-full text-xs font-medium text-white",
                    getLevelColor(selectedTest.level)
                  )}>
                    {selectedTest.level}
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground capitalize">
                    {selectedTest.type === "grammar" ? "Grammar" : "Vocabulary"}
                  </span>
                </div>
                
                <h2 className="font-display font-bold text-xl mb-6">
                  {question.question}
                </h2>
                
                <div className="space-y-3">
                  {shuffledTestOptions.map((option) => (
                    <button
                      key={option}
                      className={cn(
                        "w-full p-4 rounded-xl border-2 text-left font-medium transition-all hover:border-primary hover:bg-primary/5",
                        answers[question.id] === option && "border-primary bg-primary/10"
                      )}
                      onClick={() => handleSelectAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full mt-6"
                  onClick={handleNext}
                  disabled={!answers[question.id]}
                >
                  {currentQuestion < currentQuestions.length - 1 ? (
                    <>
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    "Finish Test"
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </AppLayout>
    );
  }

  // Test list view
  const completedCount = Object.keys(completedTests).length;
  const averageScore = completedCount > 0 
    ? Math.round(Object.values(completedTests).reduce((a, b) => a + b, 0) / completedCount)
    : 0;

  return (
    <AppLayout>
      <div className="container py-8">
        {/* Back Button & Title */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-level-c1 flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground">
                Tests & Assessments
              </h1>
              <p className="text-muted-foreground">
                Evaluate your progress with grammar and vocabulary exams
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-display font-bold text-foreground">{completedCount}</p>
                <p className="text-sm text-muted-foreground">Tests Completed</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-success">{averageScore}%</p>
                <p className="text-sm text-muted-foreground">Average</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">{testDefinitions.length - completedCount}</p>
                <p className="text-sm text-muted-foreground">Tests Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tests List */}
        <div className="space-y-4">
          {testDefinitions.map((test) => {
            const isCompleted = completedTests[test.id] !== undefined;
            const score = completedTests[test.id];
            
            return (
              <Card 
                key={test.id} 
                className={cn(
                  "hover:shadow-lg transition-all duration-300",
                  isCompleted && "opacity-90"
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        isCompleted ? "bg-success/10" : getLevelColor(test.level)
                      )}>
                        {isCompleted ? (
                          <Trophy className="w-6 h-6 text-success" />
                        ) : (
                          <span className="text-white font-bold">{test.level}</span>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-semibold text-lg">
                            {test.title}
                          </h3>
                          {isCompleted && (
                            <span className={cn(
                              "text-sm font-medium",
                              score >= 70 ? "text-success" : "text-warning"
                            )}>
                              {score}%
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{test.description}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            {getTypeIcon(test.type)}
                            {test.type === "grammar" ? "Grammar" : "Vocabulary"}
                          </span>
                          <span>·</span>
                          <span>{test.questionsCount} questions</span>
                          <span>·</span>
                          <span>{test.duration} min</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      variant={isCompleted ? "outline" : "default"}
                      onClick={() => handleStartTest(test)}
                    >
                      {isCompleted ? "Retry" : "Start"}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}