import Link from "next/link";

const links = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms and Conditions" },
];

export default function Footer() {
  return (
    <footer className='mt-auto flex justify-between items-center border-t border-white/20 h-16 px-3 sm:px-9 text-xs text-white/25'>
      <small className='text-xs'>
        All content is fictional and is solely for education purposes.
      </small>

      <ul className='flex gap-x-3 sm:gap-x-8'>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
