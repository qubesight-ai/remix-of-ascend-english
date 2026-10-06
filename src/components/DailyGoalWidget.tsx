import { Card, CardContent } from "@/components/ui/card";
import { Flame, Target, Clock, TrendingUp } from "lucide-react";

interface DailyGoalWidgetProps {
  currentStreak: number;
  bestStreak: number;
  todayMinutes: number;
  goalMinutes: number;
  weeklyProgress: number[];
}

export function DailyGoalWidget({ 
  currentStreak, 
  bestStreak, 
  todayMinutes, 
  goalMinutes,
  weeklyProgress 
}: DailyGoalWidgetProps) {
  const goalProgress = Math.min((todayMinutes / goalMinutes) * 100, 100);
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  return (
    <Card variant="gradient" className="overflow-hidden rounded-3xl aero-glass border-white/90 shadow-card">
      <CardContent className="p-6">
        {/* Streak Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-amber-300 via-orange-400 to-rose-500 border border-white/80 shadow-[inset_0_2px_2px_rgba(255,255,255,0.85),0_4px_14px_rgba(249,115,22,0.35)] flex items-center justify-center relative overflow-hidden" style={{ width: '3.25rem', height: '3.25rem' }}>
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-2xl" />
              <Flame className="w-7 h-7 text-white drop-shadow-md relative z-10 fill-white/20" />
            </div>
            <div>
              <p className="text-3xl font-display font-extrabold text-[#0b3b4a] tracking-tight">{currentStreak}</p>
              <p className="text-xs font-semibold text-[#3c494b]/80">day streak</p>
            </div>
          </div>
          
          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8ffee] border border-white text-xs font-display font-bold text-[#1b5e20] shadow-sm">
              <TrendingUp className="w-3.5 h-3.5" />
              Best: {bestStreak}
            </span>
          </div>
        </div>

        {/* Today's Goal with Liquid Tube */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-display font-semibold text-[#0b3b4a]">Daily Goal</span>
            </div>
            <div className="flex items-center gap-1 text-sm font-display">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-bold text-[#0b3b4a]">{todayMinutes}</span>
              <span className="text-[#3c494b]/80">/ {goalMinutes} min</span>
            </div>
          </div>
          
          {/* Liquid Tube */}
          <div className="h-4 bg-white/70 border border-white/95 rounded-full overflow-hidden shadow-[inset_0_2px_4px_rgba(1,87,155,0.16),0_2px_8px_rgba(38,198,218,0.12)] relative">
            <div className="absolute inset-x-1 top-0.5 h-1/3 rounded-full bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-10" />
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#26c6da] via-[#38dbe6] to-[#69f0ae] shadow-[0_0_12px_rgba(38,198,218,0.55),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all duration-700 ease-out relative"
              style={{ width: `${goalProgress}%` }}
            >
              <div className="absolute right-2 top-0.5 w-1.5 h-1.5 rounded-full bg-white/80 blur-[0.5px]" />
            </div>
          </div>
          
          {goalProgress >= 100 && (
            <p className="text-xs text-[#1b5e20] font-display font-bold mt-2 flex items-center gap-1.5">
              <span className="text-sm">🎉</span> Goal completed!
            </p>
          )}
        </div>

        {/* Weekly Progress - Liquid Columns */}
        <div>
          <p className="text-xs font-display font-bold uppercase tracking-wider text-[#0b3b4a]/70 mb-3">This Week</p>
          <div className="flex justify-between gap-1.5">
            {weeklyProgress.map((progress, index) => (
              <div key={index} className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full h-16 bg-white/60 border border-white/80 rounded-2xl overflow-hidden flex flex-col-reverse shadow-[inset_0_1px_2px_rgba(1,87,155,0.1)] p-0.5">
                  <div 
                    className={`w-full transition-all duration-500 rounded-xl ${
                      progress >= 100 
                        ? 'bg-gradient-to-t from-[#43a047] to-[#69f0ae] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(102,187,106,0.35)]' 
                        : progress > 0 
                        ? 'bg-gradient-to-t from-[#00acc1] to-[#38dbe6] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_2px_8px_rgba(38,198,218,0.35)]' 
                        : 'bg-transparent'
                    }`}
                    style={{ height: `${Math.min(progress, 100)}%` }}
                  />
                </div>
                <span className={`text-xs font-display font-bold ${
                  index === new Date().getDay() - 1 
                    ? 'text-primary px-1.5 py-0.5 rounded-full bg-[#e1f8fb] border border-primary/20' 
                    : 'text-[#3c494b]/80'
                }`}>
                  {days[index]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
