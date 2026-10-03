import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mic, Sparkles } from "lucide-react";

export function AITutorPreview() {
  const navigate = useNavigate();

  return (
    <Card variant="elevated" className="overflow-hidden relative">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
      
      <CardContent className="p-8 relative z-10">
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-info flex items-center justify-center shadow-xl animate-float">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-success border-4 border-background" />
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-display font-bold text-xl text-white">
                AI Tutor
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-medium text-white">
                Online
              </span>
            </div>
            
            <p className="text-white/80 text-sm mb-4">
              Practice real conversations with instant corrections. Your personal tutor available 24/7.
            </p>
            
            {/* Sample conversation */}
            <div className="space-y-3 mb-6">
              <div className="flex gap-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-white/90">
                  Hello! I go to the store yesterday.
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-primary/80 backdrop-blur-sm rounded-2xl rounded-tr-sm px-4 py-2 text-sm text-white">
                  <span className="text-white/70">💡 Try:</span> "I <span className="font-semibold underline decoration-accent">went</span> to the store yesterday." (past simple)
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex gap-3">
              <Button 
                variant="hero" 
                size="lg" 
                className="flex-1"
                onClick={() => navigate('/conversation')}
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg"
                onClick={() => navigate('/conversation')}
              >
                <Mic className="w-5 h-5" />
                Voice
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
