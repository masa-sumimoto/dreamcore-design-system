import Link from "next/link";
import Reveal from "@/components/Reveal";

const fragments = [
  {
    accent: "bg-primary",
    title: "Anemoia",
    body: "Nostalgia for a time never lived. Serif letterforms carry the weight of memories that were never yours to begin with.",
  },
  {
    accent: "bg-secondary",
    title: "Liminal Space",
    body: "Familiar but impossible places. Vast, quiet gaps between content areas simulate the emptiness of a hallway at 3am.",
  },
  {
    accent: "bg-gold",
    title: "Pink Bloom",
    body: "A permanent sunset. Soft blush creams against deep indigo shadows — comfort and unease sharing the same frame.",
  },
];

const sections = [
  {
    href: "/foundations",
    title: "Foundations",
    description: "Colors, typography, spacing, effects, and motion tokens.",
  },
  {
    href: "/components",
    title: "Components",
    description: "Floating cards, drift buttons, and other dream fragments.",
  },
  {
    href: "/showcase",
    title: "Showcase",
    description: "Full-page examples of interfaces built with Dreamcore.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — the first frame of the dream */}
      <main className="flex flex-1 flex-col">
        <section className="relative flex min-h-svh flex-col items-center justify-center px-8 text-center">
          <p
            className="hero-rise font-mono text-xs tracking-[0.35em] text-rose uppercase"
            style={{ animationDelay: "150ms" }}
          >
            design system // alpha
          </p>
          <h1
            className="hero-rise mt-8 font-display text-display md:text-display-lg"
            style={{ animationDelay: "350ms" }}
          >
            Dreamcore <em className="text-primary">System</em>
          </h1>
          <p
            className="hero-rise mt-8 max-w-xl text-text-muted"
            style={{ animationDelay: "600ms" }}
          >
            A liminal interface designed to evoke <em>anemoia</em>&mdash;nostalgia
            for a time never lived. Where every component is a fragment of a
            late-90s digital memory.
          </p>
          <div
            className="hero-rise mt-12 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "850ms" }}
          >
            <Link
              href="/foundations"
              className="rounded-full bg-action px-8 py-4 text-sm font-medium transition-all duration-500 ease-drift hover:-translate-y-1 hover:shadow-glow-action"
            >
              Explore Foundations
            </Link>
            <Link
              href="/showcase"
              className="rounded-full border border-primary/60 px-8 py-4 text-sm font-medium text-midnight transition-all duration-500 ease-drift hover:-translate-y-1 hover:border-primary hover:shadow-glow-primary"
            >
              View Showcase
            </Link>
          </div>
          <a
            href="https://www.figma.com/community/file/1658134948361547091"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-rise mt-7 font-mono text-[10px] tracking-[0.25em] text-midnight/50 uppercase underline-offset-4 transition-colors duration-500 ease-fade hover:text-rose hover:underline"
            style={{ animationDelay: "1050ms" }}
          >
            get the figma community template ↗
          </a>

          <div className="scroll-hint absolute bottom-10 font-mono text-[10px] tracking-[0.3em] text-text-muted uppercase">
            drift down
          </div>
        </section>

        {/* Philosophy — three fragments of the feeling */}
        <section className="mx-auto w-full max-w-5xl px-8 py-32">
          <Reveal>
            <h2 className="text-center font-display text-4xl md:text-5xl">
              The feeling of <em className="text-rose">a dream</em>
            </h2>
          </Reveal>
          <div className="mt-liminal grid gap-12 md:grid-cols-3 md:gap-8">
            {fragments.map((fragment, i) => (
              <Reveal key={fragment.title} delay={i * 150}>
                <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
                  <span
                    className={`h-3 w-3 rounded-full ${fragment.accent} shadow-glow-primary`}
                  />
                  <h3 className="font-display text-2xl">{fragment.title}</h3>
                  <p className="text-sm leading-relaxed text-midnight/70">
                    {fragment.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Explore — doors to the rest of the dream */}
        <section className="mx-auto w-full max-w-5xl px-8 pb-40">
          <nav className="grid gap-8 md:grid-cols-3">
            {sections.map((section, i) => (
              <Reveal key={section.href} delay={i * 150}>
                <Link
                  href={section.href}
                  className="flex h-full flex-col gap-3 rounded-dreamy bg-surface/80 p-8 shadow-float backdrop-blur-sm transition-all duration-500 ease-drift hover:-translate-y-1.5 hover:shadow-glow-primary"
                >
                  <h2 className="font-display text-2xl">{section.title}</h2>
                  <p className="text-sm text-text-muted">
                    {section.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </nav>
        </section>

        <footer className="flex flex-col items-center gap-2 px-8 pb-16 text-center">
          <p className="font-mono text-[10px] tracking-[0.3em] text-text-muted uppercase">
            dreamcore design system
          </p>
          <p className="text-xs text-midnight/50">
            Designed &amp; engineered by Masaaki Sumimoto
          </p>
        </footer>
      </main>
    </>
  );
}
