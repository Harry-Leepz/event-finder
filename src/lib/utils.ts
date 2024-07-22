import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventType } from "./types";

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
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventType[] = await response.json();
  return events;
}

// Fetch a single event from the API based on the slug
export async function getEvent(slug: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventType = await response.json();
  return event;
}
