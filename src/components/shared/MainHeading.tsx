import { twMerge } from "tailwind-merge";

type MainHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MainHeading({ children, className }: MainHeadingProps) {
  return (
    <h1
      className={twMerge(
        "text-3xl lg:text-6xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
}
