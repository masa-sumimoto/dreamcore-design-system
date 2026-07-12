import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { typographyTokens } from "@/lib/tokens";

export default function TypographyPage() {
  return (
    <>
      <PageIntro
        title="Typography"
        description="A serif display face evokes anemoia — nostalgia for a time never lived — while the body text stays ordinary, the way most of a dream is ordinary. All faces are served from Google Fonts."
      />

      <div className="flex flex-col gap-liminal">
        {/* Specimen */}
        <Reveal>
          <section className="rounded-dreamy bg-surface/80 p-10 shadow-float backdrop-blur-sm md:p-14">
            <p className="font-mono text-[11px] tracking-[0.2em] text-rose uppercase">
              specimen // instrument serif
            </p>
            <p className="mt-6 font-display text-display md:text-display-lg">
              A time <em className="text-primary">never lived</em>
            </p>
            <p className="mt-8 max-w-lg leading-relaxed text-midnight/70">
              The ordinary parts of the dream are set in Inter. They carry the
              content quietly, so the serif moments feel like memories
              surfacing.
            </p>
            <p className="mt-6 font-mono text-xs tracking-[0.25em] text-text-muted uppercase">
              and the system whispers in mono
            </p>
          </section>
        </Reveal>

        {/* Token table */}
        <Reveal>
          <section>
            <h2 className="font-display text-3xl">Styles</h2>
            <div className="mt-8 flex flex-col gap-6">
              {typographyTokens.map((token) => (
                <div
                  key={token.name}
                  className="grid gap-4 rounded-dreamy bg-surface/80 p-6 shadow-float backdrop-blur-sm md:grid-cols-[1fr_2fr] md:gap-8 md:p-8"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">{token.name}</span>
                    <code className="font-mono text-[11px] text-rose">
                      {token.stack}
                    </code>
                    <span className="mt-2 text-xs text-midnight/55">
                      {token.family} · {token.size} · {token.weight}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p
                      className={
                        token.name === "display"
                          ? "font-display text-4xl"
                          : token.name === "caption"
                            ? "text-xs font-medium"
                            : token.name === "code"
                              ? "font-mono text-xs tracking-[0.2em] uppercase"
                              : "text-base"
                      }
                    >
                      {token.name === "display"
                        ? "Familiar but impossible"
                        : token.name === "code"
                          ? "design system // alpha"
                          : "The quick pink fox drifts over the liminal space."}
                    </p>
                    <p className="text-xs leading-relaxed text-midnight/55">
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
