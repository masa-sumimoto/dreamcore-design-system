import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";

const pages = [
  {
    href: "/foundations/colors",
    title: "Colors",
    description:
      "Soft pastels for comfort, the void for the unknown. A permanent sunset split into tokens.",
  },
  {
    href: "/foundations/typography",
    title: "Typography",
    description:
      "Instrument Serif for anemoia, Inter for the ordinary parts of the dream.",
  },
  {
    href: "/foundations/spacing",
    title: "Spacing",
    description:
      "Vast, liminal gaps. Emptiness is a design material here.",
  },
  {
    href: "/foundations/effects",
    title: "Effects",
    description:
      "Fog blurs, floating shadows, and the dream glow. Depth without weight.",
  },
  {
    href: "/foundations/motion",
    title: "Motion",
    description:
      "Slow, fluid, drifting. Nothing in a dream ever snaps.",
  },
];

export default function FoundationsPage() {
  return (
    <>
      <PageIntro
        title="Foundations"
        description="The atomic layer of the Dreamcore system. Every token is defined in code (Tailwind v4 @theme) as the single source of truth, and mirrored into Figma Variables."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {pages.map((page, i) => (
          <Reveal key={page.href} delay={i * 100}>
            <Link
              href={page.href}
              className="flex h-full flex-col gap-3 rounded-dreamy bg-surface/80 p-8 shadow-float backdrop-blur-sm transition-all duration-500 ease-drift hover:-translate-y-1.5 hover:shadow-glow-primary"
            >
              <h2 className="font-display text-2xl">{page.title}</h2>
              <p className="text-sm leading-relaxed text-midnight/60">
                {page.description}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
