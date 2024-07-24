import { EventyEvent } from "@prisma/client";
import PaginationControls from "../pagination/pagination-controls";
import EventCard from "./event-card";

type EventListProps = {
  events: EventyEvent[];
  totalCountOfEvents: number;
  page: number;
  city: string;
};

export default async function EventList({
  events,
  totalCountOfEvents,
  page,
  city,
}: EventListProps) {
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
  const nextPath =
    totalCountOfEvents > page * 6 ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className='flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls nextPath={nextPath} previousPath={previousPath} />
    </section>
  );
}
