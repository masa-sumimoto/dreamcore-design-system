import EasingDemo from "@/components/EasingDemo";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { motionTokens } from "@/lib/tokens";

const principles = [
  {
    title: "Drift, don't snap",
    body: "Interactive feedback is a slow upward drift (400–700ms), never a mechanical click. Hover states feel like objects loosening from gravity.",
  },
  {
    title: "Surface like a memory",
    body: "Content enters with a long fade + rise (1.2–1.6s). Stagger siblings by 100–150ms so the page assembles itself gradually.",
  },
  {
    title: "The fog never stops",
    body: "Ambient layers loop on 30–50s cycles — slow enough to be felt, not watched. Under prefers-reduced-motion, the dream stands still.",
  },
  {
    title: "Transform and opacity only",
    body: "Every animation composites on the GPU. If a motion needs layout properties, redesign the motion.",
  },
];

export default function MotionPage() {
  return (
    <>
      <PageIntro
        title="Motion"
        description="Nothing in a dream ever snaps. Motion here is slow, fluid, and drifting — a language of loosened gravity and long, floating decelerations."
      />

      <div className="flex flex-col gap-liminal">
        <Reveal>
          <section>
            <h2 className="font-display text-3xl">Easing</h2>
            <div className="mt-8">
              <EasingDemo />
            </div>
            <div className="mt-8 flex flex-col gap-4 rounded-dreamy bg-surface/80 p-8 shadow-float backdrop-blur-sm">
              {motionTokens.map((token) => (
                <div
                  key={token.name}
                  className="grid gap-1 border-b border-surface-dim pb-4 last:border-0 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-6"
                >
                  <code className="font-mono text-[11px] text-rose">
                    {token.name}
                  </code>
                  <div>
                    <code className="font-mono text-[11px] text-midnight/60">
                      {token.value}
                    </code>
                    <p className="mt-1 text-xs text-midnight/55">
                      {token.role}{" "}
                      <span className="text-rose/70">({token.feel})</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-3xl">Principles</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-dreamy bg-surface/80 p-8 shadow-float backdrop-blur-sm"
                >
                  <h3 className="font-display text-xl">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-midnight/60">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
