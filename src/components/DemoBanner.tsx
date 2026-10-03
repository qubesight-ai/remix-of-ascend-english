import { Eye } from "lucide-react";
import { useDemoMode } from "@/hooks/useDemoMode";

export function DemoBanner() {
  const { isDemoUser } = useDemoMode();

  if (!isDemoUser) return null;

  return (
    <div className="bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 px-4 py-2 flex items-center gap-2 text-sm rounded-lg mb-4">
      <Eye className="w-4 h-4 flex-shrink-0" />
      <span>
        <strong>Demo mode</strong> — You are viewing a read-only demo. Data cannot be modified and personal information is protected.
      </span>
    </div>
  );
}
