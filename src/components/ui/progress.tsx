import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-white/75 border border-white/95 shadow-[inset_0_2px_4px_rgba(1,87,155,0.16),0_2px_8px_rgba(38,198,218,0.15)] backdrop-blur-md",
      className
    )}
    {...props}
  >
    {/* Specular top reflection line across the tube */}
    <div className="absolute inset-x-1 top-0.5 h-1/3 rounded-full bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-10" />

    <ProgressPrimitive.Indicator
      className="relative h-full w-full flex-1 rounded-full bg-gradient-to-r from-[#26c6da] via-[#38dbe6] to-[#69f0ae] shadow-[0_0_14px_rgba(38,198,218,0.55),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all duration-700 ease-out"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    >
      {/* Liquid bubble accents */}
      <div className="absolute right-2 top-1 w-1.5 h-1.5 rounded-full bg-white/80 blur-[0.5px] shadow-[0_0_4px_#fff]" />
      <div className="absolute right-5 top-1.5 w-1 h-1 rounded-full bg-white/60" />
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
