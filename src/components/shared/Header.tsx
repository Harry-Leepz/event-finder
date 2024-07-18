"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import Logo from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/events/all", label: "All Events" },
];

export default function Header() {
  const activePathname = usePathname();

  return (
    <header className='flex justify-between items-center border-b border-white/20 h-14 sm:px-9 px-3'>
      <Logo />
      <nav className='h-full'>
        <ul className='flex gap-x-6 text-sm h-full'>
          {links.map(({ href, label }) => (
            <li
              key={href}
              className={cn(
                " hover:text-white flex items-center transition relative",
                {
                  "text-white": activePathname === href,
                  "text-white/50": activePathname !== href,
                }
              )}
            >
              <Link href={href}>{label}</Link>
              {activePathname === href && (
                <motion.div
                  layoutId='header-active-link'
                  className='bg-accent h-1 w-full absolute bottom-0'
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
