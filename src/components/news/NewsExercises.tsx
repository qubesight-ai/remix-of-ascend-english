import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle2, XCircle, BookOpen, MessageSquare, 
  RotateCcw, Trophy, ArrowRight, Volume2, Loader2, Square
} from "lucide-react";
import { cn, shuffleArray } from "@/lib/utils";
import { GrammarExercise, VocabularyExercise } from "@/data/newsData";
import { useGamification } from "@/hooks/useGamification";
import { toast } from "@/hooks/use-toast";
import { useElevenLabsTTS } from "@/hooks/useElevenLabsTTS";
import { useExerciseFeedback } from "@/hooks/useExerciseFeedback";

interface NewsExercisesProps {
  grammarExercises?: GrammarExercise[];
  vocabularyExercises?: VocabularyExercise[];
  articleTitle: string;
}

export function NewsExercises({ 
  grammarExercises = [], 
  vocabularyExercises = [],
  articleTitle 
}: NewsExercisesProps) {
  const { addXP } = useGamification();
  const [activeTab, setActiveTab] = useState<"grammar" | "vocabulary">("grammar");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ grammar: 0, vocabulary: 0 });
  const [completed, setCompleted] = useState({ grammar: false, vocabulary: false });
  const [answers, setAnswers] = useState<Record<string, Record<number, boolean>>>({
    grammar: {},
    vocabulary: {}
  });
  const [selectedOptions, setSelectedOptions] = useState<Record<string, Record<number, string>>>({
    grammar: {},
    vocabulary: {}
  });
  const { sendExerciseResultEmail } = useExerciseFeedback();

  const currentExercises = activeTab === "grammar" ? grammarExercises : vocabularyExercises;
  const currentExercise = currentExercises[currentIndex];
  const totalExercises = currentExercises.length;

  const newsExerciseStableKey =
    currentExercise == null
      ? ""
      : "sentence" in currentExercise
        ? (currentExercise as GrammarExercise).sentence
        : (currentExercise as VocabularyExercise).question;

  const shuffledNewsExerciseOptions = useMemo(() => {
    if (!currentExercise || !("options" in currentExercise)) return [];
    const opts =
      (currentExercise as GrammarExercise).options ??
      (currentExercise as VocabularyExercise).options;
    if (!opts?.length) return [];
    return shuffleArray([...opts]);
  }, [activeTab, currentIndex, newsExerciseStableKey]);

  // ElevenLabs TTS
  const { speak, stopAudio, isLoading: isSpeaking, isPlaying } = useElevenLabsTTS();

  const speakText = (text: string) => {
    if (isPlaying) {
      stopAudio();
    } else {
      speak(text);
    }
  };

  const handleSelectAnswer = (answer: string) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    const isCorrect = answer === currentExercise?.correctAnswer;
    
    setAnswers(prev => ({
      ...prev,
      [activeTab]: { ...prev[activeTab], [currentIndex]: isCorrect }
    }));
    setSelectedOptions(prev => ({
      ...prev,
      [activeTab]: { ...prev[activeTab], [currentIndex]: answer }
    }));
    
    if (isCorrect) {
      setScore(prev => ({ ...prev, [activeTab]: prev[activeTab] + 1 }));
    }
    
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentIndex < totalExercises - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Complete this section
      const finalScore = score[activeTab] + (selectedAnswer === currentExercise?.correctAnswer ? 0 : 0);
      const xpEarned = finalScore * 10;
      addXP(xpEarned, activeTab === "grammar" ? "grammar" : "vocabulary");
      
      setCompleted(prev => ({ ...prev, [activeTab]: true }));

      const incorrectAnswers = currentExercises
        .map((exercise, idx) => ({
          question: "sentence" in exercise ? exercise.sentence : exercise.question,
          userAnswer: selectedOptions[activeTab][idx] || "(no answer)",
          correctAnswer: exercise.correctAnswer,
          isCorrect: answers[activeTab][idx] === true,
        }))
        .filter(item => !item.isCorrect)
        .map(({ question, userAnswer, correctAnswer }) => ({ question, userAnswer, correctAnswer }));

      sendExerciseResultEmail({
        exerciseType: activeTab === "grammar" ? "News Grammar Exercises" : "News Vocabulary Exercises",
        exerciseTitle: `${articleTitle} - ${activeTab === "grammar" ? "Grammar" : "Vocabulary"}`,
        level: "Mixed",
        score: totalExercises > 0 ? Math.round((score[activeTab] / totalExercises) * 100) : 0,
        totalQuestions: totalExercises,
        correctAnswers: score[activeTab],
        incorrectAnswers,
      });
      
      toast({
        title: `${activeTab === "grammar" ? "Grammar" : "Vocabulary"} Complete!`,
        description: `Score: ${score[activeTab]}/${totalExercises} • +${xpEarned} XP`,
      });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(prev => ({ ...prev, [activeTab]: 0 }));
    setCompleted(prev => ({ ...prev, [activeTab]: false }));
    setAnswers(prev => ({ ...prev, [activeTab]: {} }));
    setSelectedOptions(prev => ({ ...prev, [activeTab]: {} }));
  };

  const switchTab = (tab: "grammar" | "vocabulary") => {
    setActiveTab(tab);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  if (grammarExercises.length === 0 && vocabularyExercises.length === 0) {
    return null;
  }

  const renderExerciseContent = () => {
    if (!currentExercise) return null;

    if (completed[activeTab]) {
      const finalScore = score[activeTab];
      const percentage = Math.round((finalScore / totalExercises) * 100);
      
      return (
        <div className="text-center py-8">
          <Trophy className={cn(
            "w-16 h-16 mx-auto mb-4",
            percentage >= 80 ? "text-warning" : percentage >= 60 ? "text-primary" : "text-muted-foreground"
          )} />
          <h3 className="text-2xl font-bold mb-2">
            {percentage >= 80 ? "Excellent!" : percentage >= 60 ? "Good Job!" : "Keep Practicing!"}
          </h3>
          <p className="text-4xl font-bold text-primary mb-2">
            {finalScore}/{totalExercises}
          </p>
          <p className="text-muted-foreground mb-6">
            {percentage}% correct
          </p>
          
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={handleRestart}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            {activeTab === "grammar" && vocabularyExercises.length > 0 && !completed.vocabulary && (
              <Button onClick={() => switchTab("vocabulary")}>
                Practice Vocabulary
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
            {activeTab === "vocabulary" && grammarExercises.length > 0 && !completed.grammar && (
              <Button onClick={() => switchTab("grammar")}>
                Practice Grammar
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Progress */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Question {currentIndex + 1} of {totalExercises}
          </span>
          <span className="text-sm font-medium text-primary">
            Score: {score[activeTab]}/{currentIndex + (showResult ? 1 : 0)}
          </span>
        </div>
        <Progress value={((currentIndex + 1) / totalExercises) * 100} className="h-2" />

        {/* Grammar Point Badge */}
        {activeTab === "grammar" && 'grammarPoint' in currentExercise && (
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {(currentExercise as GrammarExercise).grammarPoint}
            </span>
          </div>
        )}

        {/* Instruction */}
        <p className="text-sm text-muted-foreground">
          {'instruction' in currentExercise 
            ? (currentExercise as GrammarExercise).instruction 
            : (currentExercise as VocabularyExercise).question}
        </p>

        {/* Sentence/Question */}
        <div className="p-4 rounded-xl bg-muted/50 border">
          <div className="flex items-center gap-2">
            <p className="font-medium text-lg">
              {'sentence' in currentExercise 
                ? (currentExercise as GrammarExercise).sentence 
                : (currentExercise as VocabularyExercise).question}
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => speakText(
                'sentence' in currentExercise 
                  ? (currentExercise as GrammarExercise).sentence.replace('_____', currentExercise.correctAnswer)
                  : currentExercise.correctAnswer
              )}
              disabled={isSpeaking}
              className={cn("h-8 w-8 p-0", isPlaying && "text-primary")}
            >
              {isSpeaking ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : isPlaying ? (
                <Square className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {shuffledNewsExerciseOptions.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === currentExercise.correctAnswer;
            const showCorrect = showResult && isCorrect;
            const showIncorrect = showResult && isSelected && !isCorrect;

            return (
              <button
                key={index}
                className={cn(
                  "p-4 rounded-xl border-2 text-left transition-all",
                  !showResult && "hover:border-primary hover:bg-primary/5",
                  !showResult && isSelected && "border-primary bg-primary/10",
                  showCorrect && "border-success bg-success/10",
                  showIncorrect && "border-destructive bg-destructive/10"
                )}
                onClick={() => handleSelectAnswer(option)}
                disabled={showResult}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showCorrect && <CheckCircle2 className="w-5 h-5 text-success" />}
                  {showIncorrect && <XCircle className="w-5 h-5 text-destructive" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className={cn(
            "p-4 rounded-xl border",
            selectedAnswer === currentExercise.correctAnswer
              ? "bg-success/10 border-success/30"
              : "bg-warning/10 border-warning/30"
          )}>
            <p className="text-sm">
              <span className="font-semibold">
                {selectedAnswer === currentExercise.correctAnswer ? "✅ Correct!" : "❌ Not quite."}
              </span>
              {" "}{currentExercise.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {showResult && (
          <Button 
            variant="default" 
            size="lg" 
            className="w-full"
            onClick={handleNext}
          >
            {currentIndex < totalExercises - 1 ? "Next Question" : "View Results"}
          </Button>
        )}
      </div>
    );
  };

  return (
    <Card className="mt-6 border-2 border-accent/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-accent" />
          Practice Exercises
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Based on: {articleTitle}
        </p>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={(v) => switchTab(v as "grammar" | "vocabulary")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger 
              value="grammar" 
              disabled={grammarExercises.length === 0}
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Grammar
              {grammarExercises.length > 0 && (
                <span className="text-xs bg-primary/20 px-2 py-0.5 rounded-full">
                  {grammarExercises.length}
                </span>
              )}
              {completed.grammar && <CheckCircle2 className="w-4 h-4 text-success" />}
            </TabsTrigger>
            <TabsTrigger 
              value="vocabulary" 
              disabled={vocabularyExercises.length === 0}
              className="flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Vocabulary
              {vocabularyExercises.length > 0 && (
                <span className="text-xs bg-primary/20 px-2 py-0.5 rounded-full">
                  {vocabularyExercises.length}
                </span>
              )}
              {completed.vocabulary && <CheckCircle2 className="w-4 h-4 text-success" />}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="grammar">
            {grammarExercises.length > 0 ? renderExerciseContent() : (
              <p className="text-center text-muted-foreground py-8">
                No grammar exercises available for this article.
              </p>
            )}
          </TabsContent>

          <TabsContent value="vocabulary">
            {vocabularyExercises.length > 0 ? renderExerciseContent() : (
              <p className="text-center text-muted-foreground py-8">
                No vocabulary exercises available for this article.
              </p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
