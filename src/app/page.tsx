import Link from "next/link";

export default function Home() {
  return (
    <main className='flex items-center flex-col pt-36 px-3'>
      <h1 className='text-3xl lg:text-6xl font-bold tracking-tight'>
        Discover Amazing Events Nearby
      </h1>
      <p className='mb-12 mt-7 text-2xl lg:text-3xl opacity-90'>
        Explore a world of{" "}
        <span className='font-bold italic underline text-pink-500'>
          excitement
        </span>{" "}
        with events just around the corner.
      </p>

      <form className='w-full sm:w-[580px]'>
        <input
          className='w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-pink-400 transition focus:ring-2 focus:bg-white/10'
          type='text'
          spellCheck={false}
          placeholder='Search for events in any city...'
        />
      </form>

      <section className='mt-4 flex gap-x-4 text-sm text-white/50'>
        <p>Popular Locations:</p>
        <div className='space-x-2 font-semibold'>
          <Link href='/events/london'>London</Link>
          <Link href='/events/manchester'>Manchester</Link>
          <Link href='/events/birmingham'>Birmingham</Link>
        </div>
      </section>
    </main>
  );
}
