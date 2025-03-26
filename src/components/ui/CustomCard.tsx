
import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "premium" | "outline";
  children: React.ReactNode;
}

const CustomCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-card text-card-foreground shadow-sm",
      glass: "glass-card",
      premium: "premium-card",
      outline: "border border-border bg-transparent",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CustomCard.displayName = "CustomCard";

export { CustomCard };
