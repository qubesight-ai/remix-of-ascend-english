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
    <div className="flex items-center gap-3.5 p-4 md:p-5 rounded-3xl aero-glass border-white/90 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/95 to-[#e1f8fb] border border-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,1),0_4px_12px_rgba(38,198,218,0.14)] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-display font-extrabold text-[#0b3b4a] tracking-tight">{value}</span>
          {trend && (
            <span className="text-xs font-display font-bold text-success px-1.5 py-0.5 rounded-full bg-[#e8ffee] border border-white">{trend}</span>
          )}
        </div>
        <p className="text-xs font-semibold text-[#3c494b]/80 mt-0.5">{label}</p>
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
