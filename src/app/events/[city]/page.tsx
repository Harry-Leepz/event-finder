import EventList from "@/components/events/event-list";
import MainHeading from "@/components/shared/MainHeading";

import { EventType } from "@/lib/types";

type EventsProps = {
  params: {
    city: string;
  };
};

export default async function Events({ params }: EventsProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events`
  );
  const events: EventType[] = await response.json();
  const city = params.city;

  return (
    <main className='flex flex-col items-center py-24 px-5 min-h-[110vh]'>
      <MainHeading className='mb-28'>
        {city === "all" && "All Events"}
        {city !== "all" &&
          `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </MainHeading>

      <EventList events={events} />
    </main>
  );
}
