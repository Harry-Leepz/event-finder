import { EventType } from "@/lib/types";

type EventCardProps = {
  event: EventType;
};

export default function EventCard({ event }: EventCardProps) {
  return <div>{event.name}</div>;
}
