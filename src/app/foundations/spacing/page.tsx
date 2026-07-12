import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { radiusTokens, spacingTokens } from "@/lib/tokens";

export default function SpacingPage() {
  return (
    <>
      <PageIntro
        title="Spacing"
        emphasis="& shape"
        description="Dreamcore relies on vast, empty gaps to create quietude. Emptiness is a material: use the liminal gap generously between major content areas, the way an empty hallway separates rooms."
      />

      <div className="flex flex-col gap-liminal">
        <Reveal>
          <section>
            <h2 className="font-display text-3xl">Scale</h2>
            <div className="mt-8 flex flex-col gap-5 rounded-dreamy bg-surface/80 p-8 shadow-float backdrop-blur-sm">
              {spacingTokens.map((token) => (
                <div
                  key={token.name}
                  className="grid items-center gap-3 md:grid-cols-[6rem_10rem_1fr]"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium">{token.name}</span>
                    <code className="font-mono text-[11px] text-rose">
                      {token.value}px
                    </code>
                  </div>
                  <div
                    className="h-4 rounded-full bg-primary/60"
                    style={{ width: `${token.value * 2}px` }}
                  />
                  <p className="text-xs text-midnight/55">{token.role}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-3xl">Radius</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-midnight/60">
              Nothing in a dream has a sharp edge. Everything is slightly
              blurred or rounded.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {radiusTokens.map((token) => (
                <div
                  key={token.name}
                  className="flex flex-col items-center gap-4 rounded-dreamy bg-surface/80 p-8 shadow-float backdrop-blur-sm"
                >
                  <div
                    className="h-20 w-full bg-secondary/70"
                    style={{ borderRadius: token.value }}
                  />
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium">{token.name}</span>
                    <code className="font-mono text-[11px] text-rose">
                      {token.value}
                    </code>
                  </div>
                  <p className="text-center text-xs text-midnight/55">
                    {token.role}
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
