import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold font-display transition-all focus:outline-none backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(38,198,218,0.12)] border",
  {
    variants: {
      variant: {
        default: "border-white/80 bg-gradient-to-b from-[#4dd0e1] to-[#00acc1] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_10px_rgba(0,172,193,0.3)]",
        secondary: "border-white/90 bg-[#e1f8fb]/90 text-[#0b3b4a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(38,198,218,0.1)]",
        destructive: "border-white/80 bg-gradient-to-b from-rose-400 to-rose-600 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_10px_rgba(225,29,72,0.3)]",
        outline: "border-primary/40 bg-white/70 text-[#0b3b4a]",
        success: "border-white/90 bg-gradient-to-b from-[#69f0ae] to-[#43a047] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_10px_rgba(67,160,71,0.3)]",
        mint: "border-white/90 bg-[#e8ffee]/90 text-[#1b5e20] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(102,187,106,0.15)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />;
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
