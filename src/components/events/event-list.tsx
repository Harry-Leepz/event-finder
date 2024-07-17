import { EventType } from "@/lib/types";
import EventCard from "./event-card";

type EventListProps = {
  events: EventType[];
};

export default function EventList({ events }: EventListProps) {
  return (
    <section>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
