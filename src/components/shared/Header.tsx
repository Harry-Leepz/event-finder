"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/events/all", label: "All Events" },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className='flex justify-between items-center border-b border-white/20 h-14 sm:px-9 px-3'>
      <Logo />
      <nav>
        <ul className='flex gap-x-6 text-sm'>
          {links.map(({ href, label }) => (
            <li
              key={href}
              className={clsx(" hover:text-white transition", {
                "text-white": activePathname === href,
                "text-white/50": activePathname !== href,
              })}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
