import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { effectTokens } from "@/lib/tokens";

export default function EffectsPage() {
  return (
    <>
      <PageIntro
        title="Effects"
        description="Surfaces float in fog. Avoid sharp drop shadows — elevation here is soft, distant, and detached, and light blooms instead of reflecting."
      />

      <div className="flex flex-col gap-liminal">
        <Reveal>
          <section>
            <h2 className="font-display text-3xl">Elevation &amp; glow</h2>
            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="h-28 w-full max-w-52 rounded-dreamy bg-surface shadow-float" />
                <code className="font-mono text-[11px] text-rose">
                  shadow-float
                </code>
              </div>
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="h-28 w-full max-w-52 rounded-dreamy bg-surface shadow-float-far" />
                <code className="font-mono text-[11px] text-rose">
                  shadow-float-far
                </code>
              </div>
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="h-28 w-full max-w-52 rounded-dreamy bg-surface shadow-glow-primary" />
                <code className="font-mono text-[11px] text-rose">
                  shadow-glow-primary
                </code>
              </div>
              <div className="flex flex-col items-center gap-4 py-8">
                <div className="h-28 w-full max-w-52 rounded-full bg-action shadow-glow-action" />
                <code className="font-mono text-[11px] text-rose">
                  shadow-glow-action
                </code>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-3xl">Fog</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-midnight/60">
              Atmospheric layers are pre-blurred radial gradients — cheap to
              composite, endless to look at. The fog blur token is reserved for
              elements that must dissolve into the background.
            </p>
            <div className="relative mt-8 h-56 overflow-hidden rounded-dreamy bg-surface shadow-float">
              <div
                className="absolute top-1/2 left-1/4 h-48 w-48 -translate-1/2 rounded-full bg-primary/70 blur-fog"
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-1/2 h-48 w-48 -translate-1/2 rounded-full bg-secondary/70 blur-fog"
                aria-hidden="true"
              />
              <div
                className="absolute top-1/2 left-3/4 h-48 w-48 -translate-1/2 rounded-full bg-gold/70 blur-fog"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-4 text-center">
                <code className="font-mono text-[11px] text-rose">
                  blur-fog (40px)
                </code>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-3xl">Tokens</h2>
            <div className="mt-8 flex flex-col gap-4 rounded-dreamy bg-surface/80 p-8 shadow-float backdrop-blur-sm">
              {effectTokens.map((token) => (
                <div
                  key={token.name}
                  className="grid gap-1 border-b border-surface-dim pb-4 last:border-0 last:pb-0 md:grid-cols-[14rem_1fr] md:gap-6"
                >
                  <code className="font-mono text-[11px] text-rose">
                    {token.name}
                  </code>
                  <div>
                    <code className="font-mono text-[11px] text-midnight/60">
                      {token.value}
                    </code>
                    <p className="mt-1 text-xs text-midnight/55">
                      {token.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
