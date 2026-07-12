import Link from "next/link";

const links = [
  { href: "/foundations", label: "foundations" },
  { href: "/components", label: "components" },
  { href: "/showcase", label: "showcase" },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-8">
      <Link
        href="/"
        className="font-display text-lg transition-colors duration-300 hover:text-rose"
      >
        Dreamcore
      </Link>
      <nav className="flex items-center gap-5 font-mono text-[11px] tracking-[0.2em] uppercase md:gap-7">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-midnight/60 transition-colors duration-300 hover:text-rose"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
