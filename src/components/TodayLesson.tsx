import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, PlayCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function TodayLesson() {
  const navigate = useNavigate();

  const handleStartLesson = () => {
    // Must match route: /skill/:level/:categoryId/:skillId
    navigate("/skill/A2/a2-grammar/a2-gram-10");
  };
  return (
    <Card variant="interactive" className="overflow-hidden group border-white/90 shadow-card hover:shadow-card-hover rounded-3xl">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          {/* Left - Lesson Info */}
          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full level-a2 text-white text-xs font-display font-extrabold shadow-sm">
                A2
              </span>
              <span className="px-3 py-1 rounded-full bg-[#e1f8fb] text-[#0b3b4a] border border-white text-xs font-display font-bold shadow-sm">
                Grammar
              </span>
            </div>
            
            <h3 className="font-display font-bold text-2xl text-[#0b3b4a] mb-2 group-hover:text-primary transition-colors">
              Present Perfect vs Past Simple
            </h3>
            <p className="text-sm text-[#3c494b] mb-5 leading-relaxed">
              Learn when to use each verb tense with practical examples and contextualized exercises.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-[#3c494b] mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-white shadow-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-semibold text-xs text-[#0b3b4a]">15 min</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-white shadow-sm">
                <Star className="w-4 h-4 text-warning fill-warning" />
                <span className="font-semibold text-xs text-[#0b3b4a]">+50 XP</span>
              </div>
            </div>
            
            <Button variant="hero" size="lg" className="group/btn btn-gel-aqua shadow-aqua-sm" onClick={handleStartLesson}>
              <PlayCircle className="w-5 h-5 fill-white/20" />
              Start lesson
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </div>
          
          {/* Right - Visual */}
          <div className="md:w-72 h-48 md:h-auto relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#26c6da] via-[#00acc1] to-[#006874] opacity-95" />
            <div className="relative z-10 text-center text-white p-6">
              <div className="w-20 h-20 rounded-3xl bg-white/25 border border-white/60 backdrop-blur-md flex items-center justify-center mx-auto mb-3 animate-float shadow-[inset_0_2px_2px_rgba(255,255,255,0.9),0_8px_20px_rgba(0,0,0,0.15)]">
                <span className="text-4xl drop-shadow-md">📚</span>
              </div>
              <p className="text-sm font-display font-bold text-white drop-shadow-sm">Recommended lesson</p>
              <p className="text-xs text-white/80 mt-1">Based on your progress</p>
            </div>
            {/* Decorative liquid bubble orbs */}
            <div className="absolute top-3 right-3 w-20 h-20 bg-white/20 rounded-full blur-xl pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-16 h-16 bg-[#69f0ae]/30 rounded-full blur-lg pointer-events-none" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
