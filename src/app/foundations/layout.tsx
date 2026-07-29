import type { ReactNode } from "react";
import TransitionLink from "@/components/TransitionLink";

const nav = [
  { href: "/foundations/colors", label: "colors" },
  { href: "/foundations/typography", label: "typography" },
  { href: "/foundations/spacing", label: "spacing" },
  { href: "/foundations/effects", label: "effects" },
  { href: "/foundations/motion", label: "motion" },
];

export default function FoundationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-8 pt-28 pb-32">
      <nav className="mb-16 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.2em] uppercase">
        <TransitionLink
          href="/foundations"
          className="text-rose transition-colors duration-whisper hover:text-midnight"
        >
          foundations
        </TransitionLink>
        <span className="text-midnight/30">{"//"}</span>
        {nav.map((item) => (
          <TransitionLink
            key={item.href}
            href={item.href}
            className="text-midnight/50 transition-colors duration-whisper hover:text-rose"
          >
            {item.label}
          </TransitionLink>
        ))}
      </nav>
      {children}
    </main>
  );
}
