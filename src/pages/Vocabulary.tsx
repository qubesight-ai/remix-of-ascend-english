import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { expandedVocabularyCategories, VocabularyCategory, getTotalWordCount, getCategoryCount } from "@/data/vocabularyDataExpanded";
import { ArrowLeft, Play, RotateCcw, Volume2, Loader2, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import { useElevenLabsTTS } from "@/hooks/useElevenLabsTTS";
import { useExerciseFeedback } from "@/hooks/useExerciseFeedback";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export default function Vocabulary() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const levelParam = searchParams.get("level") as CEFRLevel | null;
  
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(levelParam || "A1");
  const [selectedCategory, setSelectedCategory] = useState<VocabularyCategory | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showingFlashcard, setShowingFlashcard] = useState(false);
  const { sendExerciseResultEmail } = useExerciseFeedback();

  // Update level when URL param changes
  useEffect(() => {
    if (levelParam && ["A1", "A2", "B1", "B2", "C1", "C2"].includes(levelParam)) {
      setSelectedLevel(levelParam);
    }
  }, [levelParam]);

  const filteredCategories = expandedVocabularyCategories.filter(cat => cat.level === selectedLevel);
  const levelWordCount = filteredCategories.reduce((sum, cat) => sum + cat.words.length, 0);

  const levels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

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

  const handleStartCategory = (category: VocabularyCategory) => {
    setSelectedCategory(category);
    setCurrentWordIndex(0);
    setIsFlipped(false);
    setShowingFlashcard(true);
  };

  const handleNextWord = () => {
    if (selectedCategory && currentWordIndex < selectedCategory.words.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleBack = () => {
    if (showingFlashcard) {
      setShowingFlashcard(false);
      setSelectedCategory(null);
    } else {
      navigate("/");
    }
  };

  // ElevenLabs TTS
  const { speak, stopAudio, isLoading: isSpeaking, isPlaying } = useElevenLabsTTS();

  const speakWord = (text: string) => {
    if (isPlaying) {
      stopAudio();
    } else {
      speak(text);
    }
  };

  if (showingFlashcard && selectedCategory) {
    const currentWord = selectedCategory.words[currentWordIndex];
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container py-8">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6"
            onClick={handleBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to categories
          </Button>

          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{selectedCategory.title}</span>
                <span className="text-sm text-muted-foreground">
                  {currentWordIndex + 1} / {selectedCategory.words.length}
                </span>
              </div>
              <Progress 
                value={((currentWordIndex + 1) / selectedCategory.words.length) * 100} 
                className="h-2"
              />
            </div>

            {/* Flashcard */}
            <div
              className="relative h-80 cursor-pointer perspective-1000"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <Card 
                className={cn(
                  "absolute inset-0 transition-all duration-500 backface-hidden",
                  isFlipped ? "rotate-y-180 opacity-0" : ""
                )}
              >
                <CardContent className="h-full flex flex-col items-center justify-center p-8">
                  <span className="text-xl font-display font-bold text-primary mb-4">
                    {currentWord.definition}
                  </span>
                  <div className="text-center space-y-2 mt-4">
                    <p className="text-sm italic text-foreground">
                      "{currentWord.example}"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {currentWord.context}
                    </p>
                  </div>
                  <p className="text-sm text-center text-muted-foreground mt-8">
                    Tap to see the word
                  </p>
                </CardContent>
              </Card>

              <Card 
                className={cn(
                  "absolute inset-0 transition-all duration-500 backface-hidden",
                  isFlipped ? "" : "-rotate-y-180 opacity-0"
                )}
              >
                <CardContent className="h-full flex flex-col items-center justify-center p-8">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn("absolute top-4 right-4", isPlaying && "text-primary")}
                    onClick={(e) => {
                      e.stopPropagation();
                      speakWord(currentWord.english);
                    }}
                    disabled={isSpeaking}
                  >
                    {isSpeaking ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : isPlaying ? (
                      <Square className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </Button>
                  
                  <span className="text-4xl font-display font-bold text-foreground mb-2">
                    {currentWord.english}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {currentWord.pronunciation}
                  </span>
                </CardContent>
              </Card>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevWord}
                disabled={currentWordIndex === 0}
              >
                Previous
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setCurrentWordIndex(0);
                  setIsFlipped(false);
                }}
              >
                <RotateCcw className="w-5 h-5" />
              </Button>
              
              <Button
                variant="default"
                onClick={handleNextWord}
                disabled={currentWordIndex === selectedCategory.words.length - 1}
              >
                Next
              </Button>
            </div>

            {/* Finish Button */}
            {currentWordIndex === selectedCategory.words.length - 1 && (
              <Button
                variant="hero"
                size="lg"
                className="w-full mt-6"
                onClick={() => {
                  sendExerciseResultEmail({
                    exerciseType: "Vocabulary Flashcards",
                    exerciseTitle: `${selectedCategory.title} (${selectedLevel})`,
                    level: selectedLevel,
                    score: 100,
                    totalQuestions: selectedCategory.words.length,
                    correctAnswers: selectedCategory.words.length,
                    incorrectAnswers: [],
                  });
                  handleBack();
                }}
              >
                Complete session!
              </Button>
            )}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
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
            <div className="w-16 h-16 rounded-2xl bg-level-a2 flex items-center justify-center">
              <span className="text-3xl">💡</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground">
                Vocabulary
              </h1>
              <p className="text-muted-foreground">
                Expand your lexicon with flashcards and contextual exercises
              </p>
            </div>
          </div>
        </div>

        {/* Level Selector */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Select Level</h2>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => {
              const levelCategories = expandedVocabularyCategories.filter(c => c.level === level);
              const count = levelCategories.reduce((sum, c) => sum + c.words.length, 0);
              return (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  onClick={() => setSelectedLevel(level)}
                  className={cn(
                    "min-w-[80px]",
                    selectedLevel === level && getLevelColor(level),
                    selectedLevel === level && "text-white border-transparent"
                  )}
                >
                  {level}
                  <span className="ml-2 text-xs opacity-80">({count})</span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-display font-bold text-foreground">0</p>
                <p className="text-sm text-muted-foreground">Words learned</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-foreground">{filteredCategories.length}</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-foreground">{levelWordCount}</p>
                <p className="text-sm text-muted-foreground">Words in {selectedLevel}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.map((category) => {
            const progress = Math.round((category.learned / category.wordCount) * 100);
            
            return (
              <Card
                key={category.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleStartCategory(category)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium text-white",
                        getLevelColor(category.level)
                      )}
                    >
                      {category.level}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span>{category.learned} / {category.wordCount} words</span>
                    <span className="font-medium text-foreground">{progress}%</span>
                  </div>
                  
                  <Progress value={progress} className="h-2 mb-4" />
                  
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <Play className="w-4 h-4 mr-2" />
                    Practice
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
