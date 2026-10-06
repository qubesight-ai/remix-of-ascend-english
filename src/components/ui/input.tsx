import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-full border border-white/90 bg-[#e0f7fa]/45 px-5 py-2 text-sm text-[#091f21] placeholder:text-[#3c494b]/60 shadow-[inset_0_2px_4px_rgba(1,87,155,0.12),0_2px_6px_rgba(38,198,218,0.06)] backdrop-blur-md transition-all duration-200 focus-visible:outline-none focus-visible:bg-white/90 focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/25 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
