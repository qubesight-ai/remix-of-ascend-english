import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  progress?: number;
  color: string;
  onClick?: () => void;
}

export function ModuleCard({ title, description, icon: Icon, progress, color, onClick }: ModuleCardProps) {
  return (
    <Card 
      variant="module" 
      className="group cursor-pointer overflow-hidden rounded-3xl aero-glass border-white/90 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div 
            className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[inset_0_2px_2px_rgba(255,255,255,0.9),0_4px_14px_rgba(38,198,218,0.2)] border border-white/80 relative overflow-hidden flex-shrink-0",
              color
            )}
          >
            {/* Top specular reflection */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-2xl" />
            <Icon className="w-7 h-7 text-white drop-shadow-sm relative z-10" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-lg text-[#0b3b4a] group-hover:text-primary transition-colors tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-[#3c494b] mt-1 line-clamp-2 leading-relaxed">
              {description}
            </p>
            
            {progress !== undefined && (
              <div className="mt-3.5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-[#3c494b]/80">Progreso</span>
                  <span className="text-xs font-display font-bold text-[#0b3b4a]">{progress}%</span>
                </div>
                <div className="h-2.5 bg-white/70 border border-white/90 rounded-full overflow-hidden shadow-[inset_0_1px_2px_rgba(1,87,155,0.15)] relative">
                  <div 
                    className={cn("h-full rounded-full transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_0_8px_rgba(38,198,218,0.5)]", color)}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
