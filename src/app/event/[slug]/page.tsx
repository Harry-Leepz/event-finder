import { Metadata } from "next";
import Image from "next/image";

import MainHeading from "@/components/shared/MainHeading";
import { EventType } from "@/lib/types";
import { getEvent } from "@/lib/utils";

type EventProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: EventProps): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);

  return {
    title: event.name,
  };
}

export default async function Event({ params }: EventProps) {
  const slug = params.slug;
  const event = await getEvent(slug);

  return (
    <main>
      <section className='relative overflow-hidden flex justify-center items-center py-14 md:py-20'>
        <Image
          src={event.imageUrl}
          alt={event.name}
          fill
          quality={50}
          sizes='(max-width: 1280) 100vw,1280px'
          className='object-cover blur-2xl z-0'
          priority
        />

        <div className='relative z-1 flex flex-col gap-6 lg:flex-row lg:gap-16'>
          <Image
            src={event.imageUrl}
            alt={event.name}
            height={201}
            width={300}
            className='rounded-lg border-2 border-white/50 object-cover'
          />
          <div className='flex flex-col'>
            <p className='text-white/75'>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>
            <MainHeading className='mb-2 mt-1 whitespace-nowrap lg:text-5xl'>
              {event.name}
            </MainHeading>
            <p className='whitespace-nowrap text-xl text-white/75'>
              Organized by <span className='italic'>{event.organizerName}</span>
            </p>
            <button className='bg-white/20 border-2 border-white/10 text-lg capitalize rounded-md py-2 sm:w-full lg:mt-auto mt-5 bg-blur state-effect'>
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className='min-h-[75vh] text-center px-5 py-16'>
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className='mb-12'>{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className='text-2xl mb-8'>{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-lg leading-8 text-white/75 max-w-4xl mx-auto'>
      {children}
    </p>
  );
}
