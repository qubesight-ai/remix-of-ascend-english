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
    <Card variant="gradient" className="overflow-hidden">
      <CardContent className="p-6">
        {/* Streak Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Flame className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-foreground">{currentStreak}</p>
              <p className="text-xs text-muted-foreground">day streak</p>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm font-medium text-muted-foreground flex items-center gap-1 justify-end">
              <TrendingUp className="w-4 h-4" />
              Best: {bestStreak}
            </p>
          </div>
        </div>

        {/* Today's Goal */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Daily Goal</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="font-semibold text-foreground">{todayMinutes}</span>
              <span className="text-muted-foreground">/ {goalMinutes} min</span>
            </div>
          </div>
          
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full gradient-primary rounded-full transition-all duration-700 ease-out"
              style={{ width: `${goalProgress}%` }}
            />
          </div>
          
          {goalProgress >= 100 && (
            <p className="text-xs text-success font-medium mt-2 flex items-center gap-1">
              <span className="text-lg">🎉</span> Goal completed!
            </p>
          )}
        </div>

        {/* Weekly Progress */}
        <div>
          <p className="text-xs text-muted-foreground mb-3">This Week</p>
          <div className="flex justify-between gap-1">
            {weeklyProgress.map((progress, index) => (
              <div key={index} className="flex flex-col items-center gap-1.5 flex-1">
                <div className="w-full h-16 bg-secondary rounded-lg overflow-hidden flex flex-col-reverse">
                  <div 
                    className={`w-full transition-all duration-500 rounded-lg ${
                      progress >= 100 ? 'bg-success' : progress > 0 ? 'bg-primary' : 'bg-transparent'
                    }`}
                    style={{ height: `${Math.min(progress, 100)}%` }}
                  />
                </div>
                <span className={`text-xs font-medium ${
                  index === new Date().getDay() - 1 ? 'text-primary' : 'text-muted-foreground'
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
