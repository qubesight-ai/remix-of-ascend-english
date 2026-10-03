import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { grammarCategories, GrammarCategory } from "@/data/grammarData";
import { grammarExerciseStats } from "@/data/grammarExercisesExpanded";
import { grammarCurriculumStats } from "@/data/grammarCurriculumComplete";
import { ChevronDown, ChevronRight, ArrowLeft, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";
import { TopicRowWithLevels } from "@/components/grammar/TopicRowWithLevels";
import { GrammarPracticeModal } from "@/components/grammar/GrammarPracticeModal";
import { useAppState } from "@/hooks/useAppState";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export default function Grammar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const levelParam = searchParams.get("level") as CEFRLevel | null;
  
  const { userProgress } = useAppState();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [practiceModalOpen, setPracticeModalOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(levelParam || "A1");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | "all">(levelParam || "all");

  // Update filter when URL param changes
  useEffect(() => {
    if (levelParam && ["A1", "A2", "B1", "B2", "C1", "C2"].includes(levelParam)) {
      setFilterLevel(levelParam);
      setSelectedLevel(levelParam);
    }
  }, [levelParam]);

  const currentLevel = (userProgress?.currentLevel as CEFRLevel) || "A1";

  // Filter categories based on selected level - show only categories that have topics at that level
  const filteredCategories = filterLevel === "all" 
    ? grammarCategories 
    : grammarCategories.map(category => ({
        ...category,
        topics: category.topics.filter(topic => topic.level === filterLevel)
      })).filter(category => category.topics.length > 0);

  // Get counts per level
  const getTopicCountForLevel = (level: CEFRLevel) => {
    return grammarCategories.reduce((count, cat) => 
      count + cat.topics.filter(t => t.level === level).length, 0
    );
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const getCategoryProgress = (category: GrammarCategory) => {
    const completed = category.topics.filter(t => t.completed).length;
    return Math.round((completed / category.topics.length) * 100);
  };

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

  // Start quick practice by level (random exercises)
  const handleStartQuickPractice = (level: CEFRLevel) => {
    setSelectedLevel(level);
    setSelectedCategory(undefined);
    setPracticeModalOpen(true);
  };

  // Start topic-specific practice with category and level
  const handleStartTopicPractice = (category: string, level: CEFRLevel) => {
    setSelectedCategory(category);
    setSelectedLevel(level);
    setPracticeModalOpen(true);
  };

  const levels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

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
            <div className="w-16 h-16 rounded-2xl bg-level-b1 flex items-center justify-center">
              <span className="text-3xl">📚</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground">
                Grammar
              </h1>
              <p className="text-muted-foreground">
                {grammarExerciseStats.total}+ complete exercises from verb tenses to complex structures
              </p>
            </div>
          </div>
        </div>

        {/* Level Filter */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Filter by Level</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filterLevel === "all" ? "default" : "outline"}
              onClick={() => setFilterLevel("all")}
              className="min-w-[80px]"
            >
              All
              <span className="ml-2 text-xs opacity-80">
                ({grammarExerciseStats.total})
              </span>
            </Button>
            {levels.map((level) => (
              <Button
                key={level}
                variant={filterLevel === level ? "default" : "outline"}
                onClick={() => setFilterLevel(level)}
                className={cn(
                  "min-w-[80px]",
                  filterLevel === level && getLevelColor(level),
                  filterLevel === level && "text-white border-transparent"
                )}
              >
                {level}
                <span className="ml-2 text-xs opacity-80">({grammarExerciseStats[level]})</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Quick Practice by Level */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Dumbbell className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Quick Practice by Level</h3>
              <Badge variant="secondary" className="ml-auto">
                {grammarExerciseStats.total} exercises
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Select a level to practice 10 random grammar exercises
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {levels.map((level) => (
                <Button
                  key={level}
                  variant="outline"
                  className={cn(
                    "flex flex-col gap-1 h-auto py-3 hover:text-white",
                    `hover:${getLevelColor(level)}`
                  )}
                  onClick={() => handleStartQuickPractice(level)}
                >
                  <span className="font-bold text-lg">{level}</span>
                  <span className="text-xs opacity-80">
                    {grammarExerciseStats[level]} ex.
                  </span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Overall Progress */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Overall Progress</h3>
              <span className="text-sm text-muted-foreground">0% completed</span>
            </div>
            <Progress value={0} className="h-3" />
          </CardContent>
        </Card>

        {/* Grammar Categories */}
        <div className="space-y-4">
          {filteredCategories.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-muted-foreground">No grammar topics found for level {filterLevel}.</p>
              </CardContent>
            </Card>
          ) : (
            filteredCategories.map((category) => {
              const isExpanded = expandedCategories.includes(category.id);
              const progress = getCategoryProgress(category);
              
              return (
                <Card key={category.id} className="overflow-hidden">
                  {/* Category Header */}
                  <button
                    className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl">
                        {category.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="font-display font-semibold text-lg">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium">{progress}%</p>
                        <p className="text-xs text-muted-foreground">{category.topics.length} topics</p>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {/* Topics List with Level Toggle */}
                  {isExpanded && (
                    <div className="border-t">
                      {category.topics.map((topic, index) => (
                        <TopicRowWithLevels
                          key={topic.id}
                          topic={topic}
                          index={index}
                          onStartPractice={handleStartTopicPractice}
                          getLevelColor={getLevelColor}
                        />
                      ))}
                    </div>
                  )}
                </Card>
              );
            })
          )}
        </div>
      </main>

      {/* Practice Modal */}
      <GrammarPracticeModal
        isOpen={practiceModalOpen}
        onClose={() => setPracticeModalOpen(false)}
        level={selectedLevel}
        category={selectedCategory}
        exerciseCount={10}
      />
    </div>
  );
}
