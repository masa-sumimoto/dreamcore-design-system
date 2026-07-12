"use client";

import Link from "next/link";
import FloatingCard from "@/components/FloatingCard";
import StatusBadge from "@/components/StatusBadge";
import DriftButton from "@/components/DriftButton";
import Reveal from "@/components/Reveal";

export default function BlogShowcase() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 pt-24 pb-48 md:px-8">
      {/* Navigation */}
      <div className="mb-12 flex items-center justify-between">
        <Link
          href="/showcase"
          className="font-mono text-[10px] tracking-widest text-rose uppercase hover:text-midnight transition-colors"
        >
          &larr; Back to Showcase
        </Link>
        <StatusBadge variant="stable">archive corridor #04</StatusBadge>
      </div>

      {/* Article Header */}
      <Reveal>
        <header className="mb-16 text-center">
          <p className="font-mono text-[10px] tracking-[0.25em] text-rose uppercase font-medium">
            retrograde memory // 1998
          </p>
          <h1 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
            The Mall at the <em className="text-primary">End of Time</em>
          </h1>
          <p className="mt-6 font-display text-xl italic text-midnight/55">
            On the comfort and slight unease of neon-lit memories.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 font-mono text-[10px] text-midnight/40 tracking-wider">
            <span>WRITTEN BY DREAMER_02</span>
            <span>·</span>
            <span>9 MINUTE DRIFT</span>
          </div>
        </header>
      </Reveal>

      {/* Article Content */}
      <article className="prose prose-midnight max-w-none flex flex-col gap-8 text-base leading-relaxed text-midnight/80">
        <Reveal delay={100}>
          <p>
            You have been here before, though the storefronts have no signs and the escalators lead to platforms that terminate in fog. It is a Saturday afternoon that never reaches evening. A soft, synthesized saxophone melody loops from speakers hidden somewhere behind the pastel blue columns, echoing down hallways that stretch further than physics should allow.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p>
            This is the essence of <em>anemoia</em>: a profound nostalgia for a digital childhood you never quite lived. We remember the hum of CRT monitors, the glare of static, and the promise of websites that consisted of nothing but text and neon lines. We remember it not because we were there, but because it feels like the last place we were safe before the noise started.
          </p>
        </Reveal>

        {/* Featured Blockquote as a Floating Card */}
        <Reveal delay={250}>
          <FloatingCard className="my-6 border border-white/20 relative overflow-hidden py-10 px-8 text-center md:px-12">
            {/* Background glowing blob */}
            <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-secondary/35 blur-fog" />
            <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/25 blur-fog" />

            <span className="font-mono text-[9px] tracking-widest text-rose uppercase">
              memory fragment
            </span>
            <p className="mt-4 font-display text-2xl md:text-3xl leading-relaxed text-midnight/90">
              &ldquo;The hallway is always empty at 3am, yet we wait for a knock on a door that was never built.&rdquo;
            </p>
          </FloatingCard>
        </Reveal>

        <Reveal delay={300}>
          <p>
            In modern design systems, every gap is filled, every layout optimized to capture attention. But in the Dreamcore layout, we treat emptiness as a physical material. The margins are vast. The components float. By deliberately decoupling our interfaces from the grid of productivity, we create a sanctuary for quiet thought. It is the digital equivalent of sitting in an empty food court under a skylight that shows a permanent sunset.
          </p>
        </Reveal>

        <Reveal delay={350}>
          <p>
            Perhaps that is why we drift. Not to find answers, but to remember the feeling of a world that was still small enough to be understood.
          </p>
        </Reveal>
      </article>

      {/* Article Footer / Action */}
      <Reveal delay={400}>
        <footer className="mt-20 border-t border-surface-dim pt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-xs text-midnight/55">
            Do you wish to continue down this memory corridor?
          </p>
          <div className="flex gap-4 mt-2">
            <DriftButton variant="action" href="/showcase/profile">
              Step Forward
            </DriftButton>
            <DriftButton variant="secondary" href="/showcase">
              Return to Gallery
            </DriftButton>
          </div>
        </footer>
      </Reveal>
    </main>
  );
}
