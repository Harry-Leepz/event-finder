import { Suspense } from "react";
import { Metadata } from "next";

import EventList from "@/components/events/event-list";
import MainHeading from "@/components/shared/MainHeading";
import Loading from "./loading";

import { capitalizeFirstLetter } from "@/lib/utils";

type EventsProps = {
  params: {
    city: string;
  };
};

type EventsPageProps = EventsProps & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: EventsProps): Metadata {
  const city = params.city;
  return {
    title:
      city === "all"
        ? "All Events"
        : `Events in ${capitalizeFirstLetter(city)}`,
  };
}

export default async function Events({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const page = searchParams.page || 1;

  return (
    <main className='flex flex-col items-center py-24 px-5 min-h-[110vh]'>
      <MainHeading className='mb-28'>
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalizeFirstLetter(city)}`}
      </MainHeading>

      <Suspense key={page + city} fallback={<Loading />}>
        <EventList city={city} page={+page} />
      </Suspense>
    </main>
  );
}
