import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout";
import { InteractiveLevelSelector } from "@/components/InteractiveLevelSelector";
import { LevelTopicsPreview } from "@/components/LevelTopicsPreview";
import { QuickStats } from "@/components/QuickStats";
import { TodayLesson } from "@/components/TodayLesson";
import { ModuleCard } from "@/components/ModuleCard";
import { DailyGoalWidget } from "@/components/DailyGoalWidget";
import { AITutorPreview } from "@/components/AITutorPreview";
import { PlacementExamModal } from "@/components/PlacementExamModal";
import { BookOpen, MessageSquare, PenTool, GraduationCap, Lightbulb, Map, Library, Music, Sparkles, Languages } from "lucide-react";
import { useAppState } from "@/hooks/useAppState";
import { useAuth } from "@/contexts/AuthContext";
import { usePlacementExam } from "@/hooks/usePlacementExam";
import { supabase } from "@/integrations/supabase/client";
import { DemoBanner } from "@/components/DemoBanner";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

const modules = [
  {
    title: "CEFR Curriculum",
    description: "Your complete learning path with all skills by level",
    icon: Map,
    progress: 0,
    color: "bg-primary",
    path: "/curriculum",
  },
  {
    title: "Article Library",
    description: "Complete textbook-style explanations for each grammar topic",
    icon: Library,
    progress: 0,
    color: "bg-level-b2",
    path: "/articles",
  },
  {
    title: "Grammar",
    description: "19 complete categories from verb tenses to complex structures",
    icon: BookOpen,
    progress: 0,
    color: "bg-level-b1",
    path: "/grammar",
  },
  {
    title: "Vocabulary",
    description: "Expand your lexicon with flashcards and contextual exercises",
    icon: Lightbulb,
    progress: 0,
    color: "bg-level-a2",
    path: "/vocabulary",
  },
  {
    title: "Practice",
    description: "Interactive exercises adapted to your current level",
    icon: PenTool,
    progress: 0,
    color: "bg-level-a1",
    path: "/practice",
  },
  {
    title: "Conversation",
    description: "Practice with AI and improve your fluency with instant feedback",
    icon: MessageSquare,
    progress: 0,
    color: "bg-accent",
    path: "/conversation",
  },
  {
    title: "Tests",
    description: "Evaluate your progress with certification-style exams",
    icon: GraduationCap,
    progress: 0,
    color: "bg-level-c1",
    path: "/tests",
  },
  {
    title: "Educational Karaoke",
    description: "Learn English by singing your favorite songs with synchronized lyrics",
    icon: Music,
    progress: 0,
    color: "bg-accent",
    path: "/karaoke",
  },
  {
    title: "Custom Exams",
    description: "Generate specific exams by choosing the topic and level you want to practice",
    icon: Sparkles,
    progress: 0,
    color: "bg-primary",
    path: "/custom-exam",
  },
  {
    title: "Spanish → English Coach",
    description: "Write in Spanish and get English translation, pronunciation, and grammar explained step by step",
    icon: Languages,
    progress: 0,
    color: "bg-level-a1",
    path: "/spanish-coach",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const { userProgress } = useAppState();
  const { user } = useAuth();
  const { needsPlacementExam, loading: placementLoading, markPlacementComplete } = usePlacementExam();
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [learningErrors, setLearningErrors] = useState<{ error_type: string; count: number }[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(
    (userProgress.currentLevel as CEFRLevel) || "A1"
  );

  const handlePlacementComplete = (level: string) => {
    markPlacementComplete();
    setSelectedLevel(level as CEFRLevel);
  };

  const handleSkipPlacement = async () => {
    if (user) {
      // Set level to A1 in the database
      await supabase
        .from('profiles')
        .update({ current_level: 'A1' })
        .eq('user_id', user.id);

      // Notify teacher that student skipped placement exam
      supabase.functions.invoke('send-placement-results', {
        body: {
          studentName: displayName || user.email?.split('@')[0] || 'Unknown',
          studentEmail: user.email || 'No email',
          assignedLevel: 'A1',
          score: 0,
          totalQuestions: 0,
          percentage: 0,
          timeSpent: '0:00',
          completedAt: new Date().toISOString(),
          sectionBreakdown: [],
          incorrectAnswers: [],
          skipped: true,
        },
      }).catch((err) => {
        console.error('Failed to send skip notification:', err);
      });
    }
    markPlacementComplete();
    setSelectedLevel('A1');
  };

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('display_name')
          .eq('user_id', user.id)
          .single();
        
        if (data?.display_name) {
          setDisplayName(data.display_name);
        }
      }
    };

    const fetchErrors = async () => {
      if (user) {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const { data } = await supabase
          .from('learning_errors')
          .select('error_type')
          .eq('user_id', user.id)
          .gte('created_at', sevenDaysAgo.toISOString());

        if (data && data.length > 0) {
          const counts: Record<string, number> = {};
          data.forEach((e) => {
            counts[e.error_type] = (counts[e.error_type] || 0) + 1;
          });
          const sorted = Object.entries(counts)
            .map(([error_type, count]) => ({ error_type, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);
          setLearningErrors(sorted);
        }
      }
    };

    fetchProfile();
    fetchErrors();
  }, [user]);

  // Get greeting name: profile name > email username > "learner"
  const getGreetingName = () => {
    if (displayName) return displayName;
    if (user?.email) return user.email.split('@')[0];
    return "learner";
  };

  return (
    <AppLayout>
      {/* Placement Exam Modal - Mandatory for new users, skip for demo */}
      <PlacementExamModal 
        open={needsPlacementExam && !placementLoading && !!user && user.email !== 'qubetest@tutamail.com'} 
        onComplete={handlePlacementComplete}
        onSkip={handleSkipPlacement}
      />
      
      <div className="container py-8">
        <DemoBanner />
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
            Hello, {getGreetingName()}! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Continue your path to English fluency
          </p>
        </div>

        {/* Interactive Level Selector */}
        <div className="mb-6 p-6 rounded-2xl bg-card border shadow-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-lg">Explore CEFR Levels</h2>
          </div>
          <InteractiveLevelSelector 
            selectedLevel={selectedLevel}
            onLevelSelect={setSelectedLevel}
            currentUserLevel={userProgress.currentLevel as CEFRLevel}
          />
        </div>

        {/* Level Topics Preview */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <LevelTopicsPreview level={selectedLevel} />
        </div>

        {/* Quick Stats */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <QuickStats />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Lesson */}
            <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-display font-semibold text-lg mb-4">Today's Lesson</h2>
              <TodayLesson />
            </section>

            {/* AI Tutor */}
            <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="font-display font-semibold text-lg mb-4">Practice with AI</h2>
              <AITutorPreview />
            </section>

            {/* Modules Grid */}
            <section className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="font-display font-semibold text-lg mb-4">Learning Modules</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {modules.map((module) => (
                  <ModuleCard
                    key={module.title}
                    title={module.title}
                    description={module.description}
                    icon={module.icon}
                    progress={module.progress}
                    color={module.color}
                    onClick={() => navigate(module.path)}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.35s' }}>
            {/* Daily Goal Widget */}
            <section>
              <h2 className="font-display font-semibold text-lg mb-4">Your Activity</h2>
            <DailyGoalWidget
                currentStreak={userProgress.currentStreak}
                bestStreak={userProgress.bestStreak}
                todayMinutes={userProgress.todayMinutes}
                goalMinutes={userProgress.goalMinutes}
                weeklyProgress={userProgress.weeklyProgress}
              />
            </section>

            {/* Quick Tips */}
            <section className="p-5 rounded-2xl border bg-card">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">💡</span>
                Tip of the Day
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The <span className="font-medium text-foreground">Present Perfect</span> connects the past with the present. Use it when the action has relevance now: 
                <span className="italic text-primary"> "I have lost my keys"</span> (I still can't find them).
              </p>
            </section>

            {/* Recent Errors */}
            <section className="p-5 rounded-2xl border bg-card">
              <h3 className="font-display font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">🎯</span>
                Areas to Improve
                <span className="text-xs font-normal text-muted-foreground ml-auto">Last 7 days</span>
              </h3>
              {learningErrors.length > 0 ? (
                <div className="space-y-2">
                  {learningErrors.map((item) => (
                    <div key={item.error_type} className="flex items-center justify-between py-2 px-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                      onClick={() => navigate('/error-history')}>
                      <span className="text-sm font-medium">{item.error_type}</span>
                      <span className="text-xs text-muted-foreground">{item.count} {item.count === 1 ? 'error' : 'errors'}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No errors recorded yet. Start practicing!</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
