import { BookOpen, Brain, Clock, Zap } from "lucide-react";
import { useAppState } from "@/hooks/useAppState";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
}

function StatItem({ icon, value, label, trend }: StatItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-card border hover:shadow-card transition-shadow">
      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-display font-bold text-foreground">{value}</span>
          {trend && (
            <span className="text-xs font-medium text-success">{trend}</span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export function QuickStats() {
  const { userProgress } = useAppState();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <StatItem
        icon={<Clock className="w-5 h-5 text-info" />}
        value={`${userProgress.weeklyHours}h`}
        label="This week"
      />
      <StatItem
        icon={<BookOpen className="w-5 h-5 text-success" />}
        value={String(userProgress.totalLessons)}
        label="Lessons completed"
      />
      <StatItem
        icon={<Brain className="w-5 h-5 text-primary" />}
        value={String(userProgress.wordsLearned)}
        label="Words learned"
      />
      <StatItem
        icon={<Zap className="w-5 h-5 text-warning" />}
        value={`${userProgress.averageAccuracy}%`}
        label="Average accuracy"
      />
    </div>
  );
}
