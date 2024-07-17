import { EventType } from "@/lib/types";

type EventListProps = {
  events: EventType[];
};

export default function EventList({ events }: EventListProps) {
  return (
    <section>
      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </section>
  );
}
