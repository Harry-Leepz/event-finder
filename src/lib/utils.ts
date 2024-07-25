import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Wrapper around clsx that merges the classes with tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Sleep for a given number of milliseconds (ms) before resolving the promise
// This is useful for simulating a delay in a function
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Capitalize the first letter of a string
export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
