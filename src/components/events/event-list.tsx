import EventCard from "./event-card";

import { getEvents } from "@/lib/utils";

type EventListProps = {
  city: string;
  page: number;
};

export default async function EventList({ city, page }: EventListProps) {
  const events = await getEvents(city, page);

  return (
    <section className='flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
