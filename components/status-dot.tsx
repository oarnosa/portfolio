import { cn } from "@/lib/utils";

interface StatusDotProps {
  className?: string;
}

export function StatusDot({ className }: StatusDotProps) {
  return (
    <span
      className={cn(
        "relative inline-block h-2 w-2 rounded-full bg-accent",
        className
      )}
      aria-hidden
    />
  );
}
