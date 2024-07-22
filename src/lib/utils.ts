import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

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

// Fetch events from the API based on the city
export async function getEvents(city: string) {
  // If the city is "all", we don't filter by city
  // And we return all events as undefined in returns all events
  const events = await prisma.eventyEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalizeFirstLetter(city),
    },
  });
  return events;
}

// Fetch a single event from the API based on the slug
export async function getEvent(slug: string) {
  const event = await prisma.eventyEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  return event;
}
