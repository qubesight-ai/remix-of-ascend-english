import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BookOpen, 
  Lightbulb, 
  MessageSquare, 
  Headphones, 
  PenTool, 
  FileText,
  Play,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { enhancedCurriculumData } from "@/data/enhancedCurriculumData";
import { getGrammarExercisesByLevel, grammarExerciseStats } from "@/data/grammarExercisesExpanded";
import { getVocabularyByLevel } from "@/data/vocabularyDataExpanded";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface LevelTopicsPreviewProps {
  level: CEFRLevel;
}

const categoryIcons: Record<string, React.ElementType> = {
  grammar: BookOpen,
  vocabulary: Lightbulb,
  speaking: MessageSquare,
  listening: Headphones,
  writing: PenTool,
  reading: FileText,
};

const getLevelColor = (level: string): string => {
  const colors: Record<string, string> = {
    A1: "bg-level-a1",
    A2: "bg-level-a2",
    B1: "bg-level-b1",
    B2: "bg-level-b2",
    C1: "bg-level-c1",
    C2: "bg-purple-600",
  };
  return colors[level] || "bg-primary";
};

export function LevelTopicsPreview({ level }: LevelTopicsPreviewProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Get enhanced curriculum data for this level
  const levelCurriculum = enhancedCurriculumData.find(c => c.level === level);
  
  // Get grammar exercises count
  const grammarCount = grammarExerciseStats[level] || 0;
  
  // Get vocabulary categories
  const vocabularyCategories = getVocabularyByLevel(level);
  const vocabWordCount = vocabularyCategories.reduce((sum, cat) => sum + cat.wordCount, 0);
  
  // Get skills from curriculum
  const allSkills = levelCurriculum?.categories.flatMap(cat => cat.skills) || [];
  
  const stats = [
    { label: "Grammar Exercises", value: grammarCount, icon: BookOpen, color: "text-level-b1" },
    { label: "Vocabulary Words", value: vocabWordCount, icon: Lightbulb, color: "text-level-a2" },
    { label: "Skills to Master", value: allSkills.length, icon: Sparkles, color: "text-primary" },
    { label: "Categories", value: levelCurriculum?.categories.length || 0, icon: FileText, color: "text-level-c1" },
  ];

  const grammarExercises = getGrammarExercisesByLevel(level);

  return (
    <Card className="border-2 animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <span className={cn(
              "px-3 py-1 rounded-lg text-white font-bold",
              getLevelColor(level)
            )}>
              {level}
            </span>
            <span>Level Content</span>
          </CardTitle>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate(`/curriculum?level=${level}`)}
            className="gap-1"
          >
            Full Curriculum <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
            >
              <stat.icon className={cn("w-5 h-5", stat.color)} />
              <div>
                <p className="text-lg font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="grammar">Grammar</TabsTrigger>
            <TabsTrigger value="vocabulary">Vocabulary</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {levelCurriculum?.categories.map((category) => {
                const Icon = categoryIcons[category.id] || BookOpen;
                return (
                  <div 
                    key={category.id}
                    className="flex items-center gap-3 p-4 rounded-lg border hover:bg-secondary/50 transition-colors cursor-pointer"
                    onClick={() => navigate(`/curriculum?level=${level}`)}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      getLevelColor(level),
                      "bg-opacity-20"
                    )}>
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium capitalize">{category.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {category.skills.length} skills to learn
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                );
              })}
            </div>
          </TabsContent>
          
          {/* Grammar Tab */}
          <TabsContent value="grammar" className="mt-4">
            <ScrollArea className="h-[200px]">
              <div className="space-y-2">
                {grammarExercises.slice(0, 10).map((exercise, idx) => (
                  <div 
                    key={exercise.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-secondary/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium line-clamp-1">{exercise.question}</p>
                        <p className="text-xs text-muted-foreground capitalize">{exercise.category}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exercise.difficulty}
                    </Badge>
                  </div>
                ))}
                {grammarCount > 10 && (
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => navigate(`/grammar?level=${level}`)}
                  >
                    View all {grammarCount} exercises <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </ScrollArea>
          </TabsContent>
          
          {/* Vocabulary Tab */}
          <TabsContent value="vocabulary" className="mt-4">
            <ScrollArea className="h-[200px]">
              <div className="grid sm:grid-cols-2 gap-2">
                {vocabularyCategories.map((category) => (
                  <div 
                    key={category.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-secondary/50 cursor-pointer"
                    onClick={() => navigate(`/vocabulary?level=${level}`)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{category.icon}</span>
                      <div>
                        <p className="text-sm font-medium">{category.title}</p>
                        <p className="text-xs text-muted-foreground">{category.wordCount} words</p>
                      </div>
                    </div>
                    <Play className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          {/* Skills Tab */}
          <TabsContent value="skills" className="mt-4">
            <ScrollArea className="h-[200px]">
              <div className="space-y-2">
                {allSkills.slice(0, 8).map((skill) => (
                  <div 
                    key={skill.id}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-secondary/50"
                  >
                    <div>
                      <p className="text-sm font-medium">{skill.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {skill.subSkills.length} sub-skills
                      </p>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => navigate(`/curriculum?level=${level}`)}>
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                {allSkills.length > 8 && (
                  <Button 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => navigate(`/curriculum?level=${level}`)}
                  >
                    View all {allSkills.length} skills <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
        
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
          <Button 
            size="sm" 
            onClick={() => navigate(`/grammar?level=${level}`)}
            className="gap-1"
          >
            <BookOpen className="w-4 h-4" /> Practice Grammar
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => navigate(`/vocabulary?level=${level}`)}
            className="gap-1"
          >
            <Lightbulb className="w-4 h-4" /> Learn Vocabulary
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            onClick={() => navigate(`/practice?level=${level}`)}
            className="gap-1"
          >
            <PenTool className="w-4 h-4" /> Mixed Practice
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
