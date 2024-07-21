import { Suspense } from "react";
import { Metadata } from "next";

import EventList from "@/components/events/event-list";
import MainHeading from "@/components/shared/MainHeading";
import Loading from "./loading";

type EventsProps = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: EventsProps): Metadata {
  const city = params.city;
  return {
    title: `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
    description: `Explore a world of excitement with events in ${city}`,
  };
}

export default async function Events({ params }: EventsProps) {
  const city = params.city;

  return (
    <main className='flex flex-col items-center py-24 px-5 min-h-[110vh]'>
      <MainHeading className='mb-28'>
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </MainHeading>

      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
    </main>
  );
}
