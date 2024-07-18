import { EventType } from "@/lib/types";
import EventCard from "./event-card";

type EventListProps = {
  events: EventType[];
};

export default function EventList({ events }: EventListProps) {
  return (
    <section className='flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
