import EventCard from "./event-card";

import { EventType } from "@/lib/types";

type EventListProps = {
  city: string;
};

export default async function EventList({ city }: EventListProps) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventType[] = await response.json();

  return (
    <section className='flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
