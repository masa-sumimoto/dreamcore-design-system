import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import FloatingCard from "@/components/FloatingCard";

const showcases = [
  {
    href: "/showcase/dashboard",
    title: "Dreamer Dashboard",
    description: "An interface to monitor memory sync rates, background consciousness drift, and active dream states.",
    category: "system / data",
    visual: (
      <div className="relative h-32 w-full overflow-hidden rounded-soft bg-surface-dim/40 border border-primary/10 flex items-center justify-center">
        {/* Abstract mini dashboard visual */}
        <div className="absolute inset-x-4 top-4 flex justify-between">
          <div className="h-2 w-12 rounded bg-primary/40" />
          <div className="h-2 w-6 rounded bg-secondary/50" />
        </div>
        <div className="flex gap-2 items-end justify-center h-12 w-full mt-4">
          <div className="h-6 w-3 rounded bg-primary/50 animate-pulse" />
          <div className="h-8 w-3 rounded bg-secondary/50" />
          <div className="h-12 w-3 rounded bg-lilac/50" />
          <div className="h-10 w-3 rounded bg-mint/50" />
          <div className="h-4 w-3 rounded bg-gold/50" />
        </div>
      </div>
    ),
  },
  {
    href: "/showcase/blog",
    title: "Anemoia Reader",
    description: "A clean reading interface tailored for nostalgic narratives, featuring delicate typography and vast quiet borders.",
    category: "content / media",
    visual: (
      <div className="relative h-32 w-full overflow-hidden rounded-soft bg-surface-dim/40 border border-primary/10 p-4 flex flex-col gap-2 justify-center">
        {/* Abstract mini text visual */}
        <div className="h-3 w-3/4 rounded bg-rose/40 font-display" />
        <div className="h-2 w-full rounded bg-midnight/20" />
        <div className="h-2 w-full rounded bg-midnight/20" />
        <div className="h-2 w-5/6 rounded bg-midnight/20" />
      </div>
    ),
  },
  {
    href: "/showcase/profile",
    title: "Identity Gateway",
    description: "A memory gateway profile editor and authorization screen wrapped in a heavy dreamlike card hierarchy.",
    category: "profile / auth",
    visual: (
      <div className="relative h-32 w-full overflow-hidden rounded-soft bg-surface-dim/40 border border-primary/10 flex items-center justify-center">
        {/* Abstract mini profile card visual */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-lilac/40 shadow-glow-primary border border-white/20" />
          <div className="h-2 w-16 rounded bg-midnight/35" />
          <div className="h-1.5 w-10 rounded bg-midnight/20" />
        </div>
      </div>
    ),
  },
];

export default function ShowcasePage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-8 pt-28 pb-32">
      <PageIntro
        title="Showcase"
        emphasis="& templates"
        description="Full-page interface examples built with the Dreamcore system. These layouts act as the blueprint source material for the Figma community templates."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {showcases.map((showcase, i) => (
          <Reveal key={showcase.href} delay={i * 100}>
            <Link
              href={showcase.href}
              className="group block h-full"
            >
              <FloatingCard
                hoverable
                className="flex h-full flex-col gap-5 border border-white/10 group-hover:border-primary/30"
              >
                <span className="font-mono text-[9px] tracking-widest text-rose uppercase">
                  {showcase.category}
                </span>
                
                {showcase.visual}
                
                <div className="flex flex-col gap-2">
                  <h2 className="font-display text-2xl group-hover:text-rose transition-colors duration-whisper">
                    {showcase.title}
                  </h2>
                  <p className="text-xs leading-relaxed text-midnight/60">
                    {showcase.description}
                  </p>
                </div>
              </FloatingCard>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
