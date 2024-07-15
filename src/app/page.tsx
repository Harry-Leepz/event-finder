import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Discover Amazing Events Nearby!</h1>
      <p>
        Explore a world of excitement with hundreds of local events just around
        the corner.
      </p>

      <form>
        <input
          type='text'
          spellCheck={false}
          placeholder='Search for events in any city...'
        />
      </form>

      <section>
        <p>Popular Locations:</p>
        <div>
          <Link href='/events/london'>London</Link>
          <Link href='/events/manchester'>Manchester</Link>
          <Link href='/events/birmingham'>Birmingham</Link>
        </div>
      </section>
    </main>
  );
}
