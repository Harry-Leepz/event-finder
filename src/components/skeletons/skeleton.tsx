import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "h-3 w-[550px] rounded bg-white/10 animate-pulse",
        className
      )}
    />
  );
}
