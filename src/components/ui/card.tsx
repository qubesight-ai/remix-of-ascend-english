import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "rounded-3xl border border-white/85 bg-white/75 backdrop-blur-xl text-card-foreground shadow-[0_10px_30px_-5px_rgba(38,198,218,0.15),inset_0_1.5px_1px_rgba(255,255,255,0.95)] transition-all duration-300",
  {
    variants: {
      variant: {
        default: "hover:shadow-[0_14px_34px_-4px_rgba(38,198,218,0.22),inset_0_1.5px_1px_rgba(255,255,255,1)]",
        elevated: "bg-white/85 backdrop-blur-2xl shadow-[0_16px_38px_-4px_rgba(38,198,218,0.28),inset_0_2px_1px_rgba(255,255,255,1)] hover:shadow-[0_20px_44px_-4px_rgba(38,198,218,0.35),inset_0_2px_1px_rgba(255,255,255,1)]",
        interactive: "hover:shadow-[0_16px_38px_-4px_rgba(38,198,218,0.28),inset_0_1.5px_1px_rgba(255,255,255,1)] hover:-translate-y-1 cursor-pointer active:translate-y-0",
        glass: "bg-white/70 backdrop-blur-2xl border-white/90 shadow-[0_10px_30px_-5px_rgba(38,198,218,0.18),inset_0_1.5px_1px_rgba(255,255,255,0.95)]",
        gradient: "bg-gradient-to-br from-white/90 via-white/80 to-[#e1f8fb]/80 backdrop-blur-xl border-white/90 shadow-[0_10px_30px_-5px_rgba(38,198,218,0.16),inset_0_1.5px_1px_rgba(255,255,255,0.95)]",
        module: "hover:shadow-[0_16px_36px_-4px_rgba(38,198,218,0.28),inset_0_1.5px_1px_rgba(255,255,255,1)] hover:-translate-y-1 cursor-pointer border border-white/85 hover:border-primary/50 bg-white/80 backdrop-blur-xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-display font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
