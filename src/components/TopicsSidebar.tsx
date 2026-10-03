import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Book, ChevronDown, Sparkles, Trophy, Swords, Shield, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { CEFRLevel } from "@/data/curriculumData";
import { enhancedCurriculumData } from "@/data/enhancedCurriculumData";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type SupportedLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
const levels: SupportedLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const levelConfig: Record<SupportedLevel, { label: string; icon: React.ElementType; color: string; bgColor: string }> = {
  A1: { label: "Novice", icon: Shield, color: "text-level-a1", bgColor: "bg-level-a1/10" },
  A2: { label: "Learner", icon: Swords, color: "text-level-a2", bgColor: "bg-level-a2/10" },
  B1: { label: "Adventurer", icon: Trophy, color: "text-level-b1", bgColor: "bg-level-b1/10" },
  B2: { label: "Warrior", icon: Sparkles, color: "text-level-b2", bgColor: "bg-level-b2/10" },
  C1: { label: "Master", icon: Crown, color: "text-level-c1", bgColor: "bg-level-c1/10" },
  C2: { label: "Legend", icon: Crown, color: "text-level-c2", bgColor: "bg-level-c2/10" },
};

const categoryIcons: Record<string, string> = {
  vocabulary: "📚",
  grammar: "🧩",
  speaking: "🗣️",
  listening: "👂",
  reading: "📖",
  writing: "✍️",
};

export function TopicsSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  
  const [selectedLevel, setSelectedLevel] = useState<SupportedLevel | "ALL">("ALL");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // Filter enhanced curriculum data based on selected level
  const filteredData = useMemo(() => {
    if (selectedLevel === "ALL") {
      return enhancedCurriculumData;
    }
    return enhancedCurriculumData.filter(level => level.level === selectedLevel);
  }, [selectedLevel]);

  // Get all topics grouped by category for all filtered levels
  const groupedTopics = useMemo(() => {
    const groups: Record<string, { level: SupportedLevel; category: string; icon: string; skills: typeof filteredData[0]["categories"][0]["skills"] }[]> = {};
    
    filteredData.forEach(levelData => {
      // Validate that level is supported
      if (!levels.includes(levelData.level as SupportedLevel)) return;
      
      levelData.categories.forEach(category => {
        const categoryKey = category.title;
        if (!groups[categoryKey]) {
          groups[categoryKey] = [];
        }
        groups[categoryKey].push({
          level: levelData.level as SupportedLevel,
          category: category.id,
          icon: category.icon,
          skills: category.skills,
        });
      });
    });
    
    return groups;
  }, [filteredData]);

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryKey)) {
        next.delete(categoryKey);
      } else {
        next.add(categoryKey);
      }
      return next;
    });
  };

  const handleTopicClick = (level: SupportedLevel, categoryId: string, skillId: string) => {
    // Navigate to the new skill lesson page with level, category and skill
    navigate(`/skill/${level}/${categoryId}/${skillId}`);
  };

  const handleLevelSelect = (level: SupportedLevel | "ALL") => {
    setSelectedLevel(level);
    // Keep expanded categories when switching levels
  };

  if (isCollapsed) {
    return (
      <Sidebar collapsible="icon" className="border-r border-sidebar-border">
        <SidebarContent className="py-4">
          <div className="flex flex-col items-center gap-2">
            <Book className="h-5 w-5 text-primary" />
            {levels.map((level) => {
              const config = levelConfig[level];
              const Icon = config.icon;
              return (
                <button
                  key={level}
                  onClick={() => handleLevelSelect(level)}
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center transition-all",
                    selectedLevel === level 
                      ? `${config.bgColor} ${config.color}` 
                      : "hover:bg-secondary text-muted-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </button>
              );
            })}
          </div>
        </SidebarContent>
      </Sidebar>
    );
  }

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Book className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h2 className="font-display font-semibold text-sm">Adventure Map</h2>
            <p className="text-xs text-muted-foreground">Explore the topics</p>
          </div>
        </div>

        {/* Level Selector - RPG Style */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Select Level
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Button
              variant={selectedLevel === "ALL" ? "default" : "outline"}
              size="sm"
              onClick={() => handleLevelSelect("ALL")}
              className={cn(
                "h-7 px-2 text-xs font-medium transition-all",
                selectedLevel === "ALL" && "bg-gradient-to-r from-level-a1 via-level-b1 to-level-c1 text-white border-0"
              )}
            >
              All
            </Button>
            {levels.map((level) => {
              const config = levelConfig[level];
              const Icon = config.icon;
              return (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleLevelSelect(level)}
                  className={cn(
                    "h-7 px-2 text-xs font-medium transition-all gap-1",
                    selectedLevel === level 
                      ? `${config.bgColor} ${config.color} border-current` 
                      : "hover:bg-secondary"
                  )}
                >
                  <Icon className="h-3 w-3" />
                  {level}
                </Button>
              );
            })}
          </div>
          {selectedLevel !== "ALL" && (
            <div className={cn(
              "flex items-center gap-2 px-2 py-1.5 rounded-lg",
              levelConfig[selectedLevel].bgColor
            )}>
              {(() => {
                const Icon = levelConfig[selectedLevel].icon;
                return <Icon className={cn("h-4 w-4", levelConfig[selectedLevel].color)} />;
              })()}
              <span className={cn("text-xs font-medium", levelConfig[selectedLevel].color)}>
                {levelConfig[selectedLevel].label} - Level {selectedLevel}
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-220px)]">
          <div className="p-2">
            {Object.entries(groupedTopics).map(([categoryName, categoryData]) => (
              <Collapsible
                key={categoryName}
                open={expandedCategories.has(categoryName)}
                onOpenChange={() => toggleCategory(categoryName)}
              >
                <SidebarGroup>
                  <CollapsibleTrigger asChild>
                    <SidebarGroupLabel className="cursor-pointer hover:bg-secondary/50 rounded-lg px-2 py-2 transition-colors flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{categoryData[0]?.icon}</span>
                        <span className="font-medium">{categoryName}</span>
                        <Badge variant="secondary" className="text-[10px] h-4 px-1.5">
                          {categoryData.reduce((acc, d) => acc + d.skills.length, 0)}
                        </Badge>
                      </div>
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          expandedCategories.has(categoryName) && "rotate-180"
                        )} 
                      />
                    </SidebarGroupLabel>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {categoryData.map((data) => (
                          <div key={`${data.level}-${data.category}`}>
                            {selectedLevel === "ALL" && (
                              <div className={cn(
                                "ml-2 mt-2 mb-1 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded",
                                levelConfig[data.level].bgColor,
                                levelConfig[data.level].color
                              )}>
                                {data.level} - {levelConfig[data.level].label}
                              </div>
                            )}
                            {data.skills.map((skill) => (
                              <SidebarMenuItem key={skill.id}>
                                <SidebarMenuButton
                                  onClick={() => handleTopicClick(data.level, data.category, skill.id)}
                                  className={cn(
                                    "w-full justify-start text-left py-2 px-3 ml-2 rounded-lg transition-all",
                                    "hover:bg-primary/10 hover:text-primary",
                                    location.pathname.includes(skill.id) && "bg-primary/10 text-primary font-medium"
                                  )}
                                >
                                  <div className="flex flex-col gap-0.5">
                                    <span className="text-sm leading-tight">{skill.title}</span>
                                    <span className="text-[10px] text-muted-foreground line-clamp-1">
                                      {skill.description}
                                    </span>
                                  </div>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </div>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            ))}
          </div>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  );
}
