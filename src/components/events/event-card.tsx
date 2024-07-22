"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { EventyEvent } from "@prisma/client";

type EventCardProps = {
  event: EventyEvent;
};

const MotionLink = motion(Link);

export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opactiyProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      className='flex-1 basis-80 h-[380px] max-w-[500px]'
      href={`/event/${event.slug}`}
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opactiyProgress,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
    >
      <section className='h-full w-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effect'>
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className='h-[60%] object-cover'
        />
        <div className='flex flex-1 flex-col justify-center items-center'>
          <h2 className='text-2xl font-semibold'>{event.name}</h2>
          <p className='italic text-white/75'>By {event.organizerName}</p>
          <p className='text-sm text-white/50 mt-4'>{event.location}</p>
        </div>

        <section className='absolute flex items-center justify-center flex-col left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md'>
          <p className='text-xl font-bold -mb-[5px]'>
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className='text-xs text-accent uppercase'>
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
}
