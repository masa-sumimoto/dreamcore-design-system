import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import { colorGroups } from "@/lib/tokens";

export default function ColorsPage() {
  return (
    <>
      <PageIntro
        title="Colors"
        description="The palette is divided into Soft Pastels for comfort and The Void for the unknown. Always start from the blush canvas — the dream has a temperature, and it is a permanent sunset."
      />
      <div className="flex flex-col gap-liminal">
        {colorGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 80}>
            <section>
              <h2 className="font-display text-3xl">{group.title}</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-midnight/60">
                {group.rationale}
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.tokens.map((token) => (
                  <div
                    key={token.name}
                    className="overflow-hidden rounded-dreamy bg-surface shadow-float"
                  >
                    <div
                      className="h-28"
                      style={{ backgroundColor: token.value }}
                    />
                    <div className="flex flex-col gap-1.5 p-5">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-medium">
                          {token.name}
                        </span>
                        <code className="font-mono text-[11px] tracking-wider text-rose">
                          {token.value}
                        </code>
                      </div>
                      <span className="font-display text-lg text-midnight/80 italic">
                        {token.alias}
                      </span>
                      <p className="text-xs leading-relaxed text-midnight/55">
                        {token.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </>
  );
}
