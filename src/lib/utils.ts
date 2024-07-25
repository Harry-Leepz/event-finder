import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

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
export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventyEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalizeFirstLetter(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalCountOfEvents = await prisma.eventyEvent.count({
    where: {
      city: city === "all" ? undefined : capitalizeFirstLetter(city),
    },
  });

  return { events, totalCountOfEvents };
});

// Fetch a single event from the API based on the slug
export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventyEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
});
