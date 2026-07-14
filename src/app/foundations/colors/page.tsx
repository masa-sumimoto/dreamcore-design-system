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

        {/* Using the Void */}
        <Reveal>
          <section>
            <h2 className="font-display text-3xl">Using the Void</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-midnight/60">
              The Void is not a dark theme — it is gravity. In a dream painted
              in pastels, darkness only means something because it is rare.
              Spend it like a held breath.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                <h3 className="font-display text-xl text-rose">Do</h3>
                <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                  Use <strong>midnight</strong> as the workhorse — body text,
                  icons, and shadows. Reserve <strong>void</strong> for the few
                  moments that demand full attention: modal backdrops, faded
                  presence states, and terminal moments like footers. One void
                  moment per view is the ceiling.
                </p>
              </div>
              <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                <h3 className="font-display text-xl text-midnight/70">
                  Don&apos;t
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                  Never fill large surfaces with void, never use it
                  decoratively, and never reach for pure{" "}
                  <code className="font-mono text-[10px] text-rose">
                    #000000
                  </code>
                  . Even the deepest dark keeps a trace of blue — the dream
                  never fully goes out.
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto rounded-dreamy bg-surface/75 p-6 shadow-float border border-white/20">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-surface-dim font-mono text-[10px] tracking-wider text-rose uppercase">
                    <th className="pb-3">Token</th>
                    <th className="pb-3">Role</th>
                    <th className="pb-3">In the wild</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-dim font-mono">
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">
                      midnight
                    </td>
                    <td className="py-3 text-midnight/60 font-sans">
                      Everyday dark — reading, not gravity
                    </td>
                    <td className="py-3 text-rose">
                      text, shadow-float, borders
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">
                      void
                    </td>
                    <td className="py-3 text-midnight/60 font-sans">
                      Focus &amp; absence — the strongest signal
                    </td>
                    <td className="py-3 text-rose">
                      VoidModal backdrop, StatusBadge void, DreamAvatar void
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">
                      rose
                    </td>
                    <td className="py-3 text-midnight/60 font-sans">
                      Emotional accent within the dark family
                    </td>
                    <td className="py-3 text-rose">
                      labels, emphasis, error text
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
