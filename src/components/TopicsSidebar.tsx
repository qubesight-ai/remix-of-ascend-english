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
    <Sidebar className="border-r border-white/70 bg-white/70 backdrop-blur-2xl">
      <SidebarHeader className="p-4 border-b border-white/60">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-2xl orb-aqua flex items-center justify-center shadow-aqua-sm">
            <Book className="h-4 w-4 text-white drop-shadow-sm" />
          </div>
          <div>
            <h2 className="font-display font-bold text-sm text-[#0b3b4a]">Adventure Map</h2>
            <p className="text-xs text-[#3c494b]/80">Explore the topics</p>
          </div>
        </div>

        {/* Level Selector - RPG Style */}
        <div className="space-y-2">
          <p className="text-[11px] font-display font-semibold text-[#0b3b4a]/70 uppercase tracking-wider">
            Select Level
          </p>
          <div className="flex flex-wrap gap-1.5">
            <Button
              variant={selectedLevel === "ALL" ? "default" : "outline"}
              size="sm"
              onClick={() => handleLevelSelect("ALL")}
              className={cn(
                "h-7 px-3 text-xs font-display font-semibold transition-all rounded-full",
                selectedLevel === "ALL" 
                  ? "btn-gel-aqua text-white shadow-aqua-sm" 
                  : "bg-white/70 border-white/80 hover:bg-white text-[#0b3b4a]"
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
                    "h-7 px-2.5 text-xs font-display font-semibold transition-all gap-1 rounded-full",
                    selectedLevel === level 
                      ? `${config.bgColor} ${config.color} border-current shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(38,198,218,0.15)]` 
                      : "bg-white/70 border-white/80 hover:bg-white text-[#0b3b4a]"
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
              "flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_6px_rgba(38,198,218,0.1)]",
              levelConfig[selectedLevel].bgColor
            )}>
              {(() => {
                const Icon = levelConfig[selectedLevel].icon;
                return <Icon className={cn("h-3.5 w-3.5", levelConfig[selectedLevel].color)} />;
              })()}
              <span className={cn("text-xs font-display font-semibold", levelConfig[selectedLevel].color)}>
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
                    <SidebarGroupLabel className="cursor-pointer hover:bg-white/80 rounded-2xl px-3 py-2 transition-all flex items-center justify-between w-full border border-transparent hover:border-white/80 hover:shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{categoryData[0]?.icon}</span>
                        <span className="font-display font-semibold text-xs text-[#0b3b4a]">{categoryName}</span>
                        <Badge variant="secondary" className="text-[10px] h-4 px-2 rounded-full">
                          {categoryData.reduce((acc, d) => acc + d.skills.length, 0)}
                        </Badge>
                      </div>
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 transition-transform duration-200 text-[#0b3b4a]",
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
                                "ml-2 mt-2 mb-1 px-2.5 py-0.5 text-[10px] font-display font-bold uppercase tracking-wider rounded-full inline-block border border-white/80",
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
                                    "w-full justify-start text-left py-2 px-3 ml-2 rounded-xl transition-all",
                                    "hover:bg-white/90 hover:text-primary hover:shadow-sm",
                                    location.pathname.includes(skill.id) && "bg-white/90 text-primary font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,1),0_2px_8px_rgba(38,198,218,0.12)] border border-primary/20"
                                  )}
                                >
                                  <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-display font-medium leading-tight text-[#0b3b4a]">{skill.title}</span>
                                    <span className="text-[10px] text-[#3c494b]/70 line-clamp-1">
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
