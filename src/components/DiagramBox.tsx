import { cn } from "@/lib/utils";

interface DiagramBoxProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export const DiagramBox = ({ label, onClick, className }: DiagramBoxProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-xl border-2 font-medium text-sm transition-all duration-200",
        "hover:scale-105 hover:shadow-lg hover:shadow-primary/20",
        className
      )}
    >
      {label}
    </button>
  );
};
