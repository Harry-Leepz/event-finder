import Link from "next/link";

import SearchForm from "@/components/search/SearchForm";
import MainHeading from "@/components/shared/MainHeading";

export default function Home() {
  return (
    <main className='flex items-center flex-col pt-36 px-3'>
      <MainHeading>Discover Amazing Events Nearby</MainHeading>
      <p className='mb-12 mt-7 text-2xl lg:text-3xl opacity-90'>
        Explore a world of{" "}
        <span className='font-bold italic underline text-accent'>
          excitement
        </span>{" "}
        with events just around the corner
      </p>

      <SearchForm />

      <section className='mt-4 flex gap-x-4 text-sm text-white/50'>
        <p>Popular:</p>
        <div className='space-x-2 font-semibold '>
          <Link className='hover:text-accent' href='/events/london'>
            London
          </Link>
          <Link className='hover:text-accent' href='/events/manchester'>
            Manchester
          </Link>
          <Link className='hover:text-accent' href='/events/birmingham'>
            Birmingham
          </Link>
        </div>
      </section>
    </main>
  );
}
