import "server-only";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalizeFirstLetter } from "./utils";

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
