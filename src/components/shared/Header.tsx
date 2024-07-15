import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/events/all", label: "All Events" },
];

export default function Header() {
  return (
    <header className='flex justify-between items-center border-b border-white/20 h-14 sm:px-9 px-3'>
      <Logo />
      <nav>
        <ul className='flex gap-x-6 text-sm'>
          {links.map(({ href, label }) => (
            <li
              key={href}
              className='text-white/70 hover:text-white transition'
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
