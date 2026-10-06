import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mic, Sparkles } from "lucide-react";

export function AITutorPreview() {
  const navigate = useNavigate();

  return (
    <Card variant="elevated" className="overflow-hidden relative rounded-3xl border-white/90 shadow-card-hover">
      {/* Gradient background with aquatic depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b3b4a] via-[#00838f] to-[#26c6da] opacity-95" />
      
      {/* Decorative ambient caustic bubbles */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#69f0ae]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#38dbe6]/25 rounded-full blur-3xl pointer-events-none" />
      
      <CardContent className="p-6 md:p-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Avatar Orb */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full orb-aqua border-2 border-white/90 flex items-center justify-center shadow-aqua-lg animate-float">
              <Sparkles className="w-9 h-9 text-white drop-shadow-md" />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#69f0ae] border-3 border-white shadow-[0_0_10px_#69f0ae]" />
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-2">
              <h3 className="font-display font-extrabold text-2xl text-white drop-shadow-sm">
                AI Tutor
              </h3>
              <span className="px-3 py-0.5 rounded-full bg-white/20 border border-white/50 backdrop-blur-md text-xs font-display font-bold text-white shadow-sm">
                Online
              </span>
            </div>
            
            <p className="text-white/90 text-sm mb-5 leading-relaxed font-medium">
              Practice real conversations with instant corrections. Your personal tutor available 24/7.
            </p>
            
            {/* Sample conversation with translucent chat pills */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2">
                <div className="bg-white/85 text-[#0b3b4a] backdrop-blur-md rounded-3xl rounded-tl-sm px-4 py-2.5 text-sm font-medium border border-white/90 shadow-sm">
                  Hello! I go to the store yesterday.
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-white/95 text-[#0b3b4a] backdrop-blur-md rounded-3xl rounded-tr-sm px-4 py-2.5 text-sm font-medium border border-[#26c6da]/50 shadow-aqua-sm">
                  <span className="text-[#00838f] font-bold">💡 Try:</span> "I <span className="font-bold underline text-primary decoration-primary/60">went</span> to the store yesterday." (past simple)
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="hero" 
                size="lg" 
                className="flex-1 btn-gel-aqua shadow-aqua-md"
                onClick={() => navigate('/conversation')}
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                Start Chat
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="btn-gel-white border-white/90 text-[#0b3b4a]"
                onClick={() => navigate('/conversation')}
              >
                <Mic className="w-5 h-5 text-primary" />
                Voice
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
