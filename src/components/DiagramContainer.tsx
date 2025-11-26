import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DiagramContainerProps {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: "pink" | "navy" | "slate" | "light-pink";
}

export const DiagramContainer = ({ 
  title, 
  children, 
  className,
  variant = "pink" 
}: DiagramContainerProps) => {
  const variantStyles = {
    pink: "bg-primary/10 border-primary hover:bg-primary/20",
    navy: "bg-secondary/50 border-secondary hover:bg-secondary/70",
    slate: "bg-accent/50 border-accent hover:bg-accent/70",
    "light-pink": "bg-muted/30 border-muted hover:bg-muted/50"
  };

  return (
    <div 
      className={cn(
        "rounded-2xl border-2 p-6 transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-2xl",
        variantStyles[variant],
        className
      )}
    >
      <h2 className="text-xl font-bold text-center mb-4 text-foreground">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {children}
      </div>
    </div>
  );
};
