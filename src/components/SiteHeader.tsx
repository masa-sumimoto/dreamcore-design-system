"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/foundations", label: "foundations" },
  { href: "/components", label: "components" },
  { href: "/showcase", label: "showcase" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-8 bg-background/40 backdrop-blur-md border-b border-surface-dim/15">
        <Link
          href="/"
          className="font-display text-xl transition-colors duration-whisper hover:text-rose"
          onClick={() => setIsOpen(false)}
        >
          Dreamcore
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] tracking-[0.2em] uppercase">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-midnight/60 transition-colors duration-whisper hover:text-rose"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="block md:hidden font-mono text-[11px] tracking-wider text-rose uppercase hover:text-midnight transition-colors focus:outline-none z-50"
        >
          {isOpen ? "[ close ]" : "[ menu ]"}
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-drift ease-fade md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-10 text-center">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className={`font-display text-4xl text-midnight/80 transition-all duration-surface ease-drift hover:text-rose ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${isOpen ? i * 75 : 0}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
