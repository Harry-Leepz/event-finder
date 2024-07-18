import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Wrapper around clsx that merges the classes with tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
