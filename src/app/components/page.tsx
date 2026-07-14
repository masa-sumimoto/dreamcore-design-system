import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import DriftButton from "@/components/DriftButton";
import FloatingCard from "@/components/FloatingCard";
import TextInput from "@/components/TextInput";
import StatusBadge from "@/components/StatusBadge";
import DreamAvatar from "@/components/DreamAvatar";
import DriftSlider from "@/components/DriftSlider";
import VoidModalDemo from "@/components/VoidModalDemo";
import WhisperToastDemo from "@/components/WhisperToastDemo";

export default function ComponentsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-8 pt-28 pb-32">
      <PageIntro
        title="Components"
        emphasis="& fragments"
        description="Interactive building blocks mapped 1:1 to Figma components. They inherit soft elevation, loosening gravity on hover, and the temperatures of an eternal sunset."
      />

      <div className="flex flex-col gap-liminal">
        {/* Drift Button Section */}
        <Reveal>
          <section className="flex flex-col gap-8">
            <div className="border-b border-surface-dim pb-4">
              <h2 className="font-display text-3xl">Drift Button</h2>
              <p className="mt-2 text-sm text-midnight/60">
                Interactive buttons with floating physics. On hover, they drift upward against gravity and emit a soft glow.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Preview */}
              <FloatingCard className="flex flex-col items-center justify-center gap-6 py-12">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <DriftButton variant="action">Action Button</DriftButton>
                  <DriftButton variant="primary">Primary Button</DriftButton>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <DriftButton variant="secondary">Secondary Outline</DriftButton>
                  <DriftButton variant="action" disabled>
                    Disabled State
                  </DriftButton>
                </div>
              </FloatingCard>

              {/* Guidelines */}
              <div className="flex flex-col justify-center gap-4">
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-rose">Do</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Use <strong>Action</strong> (Blush Pink) for the primary conversion or next step. Use <strong>Secondary</strong> (semi-transparent outline) for passive, non-critical choices to keep the view quiet.
                  </p>
                </div>
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-midnight/70">Don&apos;t</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Avoid stacking multiple saturated buttons closely. In a dream, visual density causes panic; leave vast spaces around interaction points.
                  </p>
                </div>
              </div>
            </div>

            {/* Spec Table */}
            <FloatingCard className="overflow-x-auto p-6">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-surface-dim pb-2 font-mono text-[10px] tracking-wider text-rose uppercase">
                    <th className="pb-3">Variant</th>
                    <th className="pb-3">Token Class</th>
                    <th className="pb-3">Behavior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-dim font-mono">
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">action</td>
                    <td className="py-3 text-rose">bg-action</td>
                    <td className="py-3 text-midnight/60">Glows with shadow-glow-action on hover</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">primary</td>
                    <td className="py-3 text-rose">bg-primary</td>
                    <td className="py-3 text-midnight/60">Glows with shadow-glow-primary on hover</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">secondary</td>
                    <td className="py-3 text-rose">bg-surface/60 border-primary/40</td>
                    <td className="py-3 text-midnight/60">Slightly sharpens outline and glows soft blue</td>
                  </tr>
                </tbody>
              </table>
            </FloatingCard>
          </section>
        </Reveal>

        {/* Floating Card Section */}
        <Reveal>
          <section className="flex flex-col gap-8">
            <div className="border-b border-surface-dim pb-4">
              <h2 className="font-display text-3xl">Floating Card</h2>
              <p className="mt-2 text-sm text-midnight/60">
                Containers detached from the fog background. Utilizing glassmorphism and extreme roundness to signify structure.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Preview */}
              <div className="flex flex-col gap-6">
                <FloatingCard>
                  <p className="font-mono text-[10px] tracking-widest text-rose uppercase">
                    Static Card
                  </p>
                  <h3 className="mt-2 font-display text-2xl">A room with no windows</h3>
                  <p className="mt-3 text-xs leading-relaxed text-midnight/60">
                    A default container holding static components. Soft drop shadow separates it from the backdrop gradient.
                  </p>
                </FloatingCard>

                <FloatingCard hoverable className="cursor-pointer">
                  <p className="font-mono text-[10px] tracking-widest text-rose uppercase">
                    Hoverable Card
                  </p>
                  <h3 className="mt-2 font-display text-2xl">Gravity looses here</h3>
                  <p className="mt-3 text-xs leading-relaxed text-midnight/60">
                    Hover to see the card rise further. Shadow stretches from shadow-float to shadow-float-far using ease-drift.
                  </p>
                </FloatingCard>
              </div>

              {/* Guidelines */}
              <div className="flex flex-col justify-center gap-4">
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-rose">Do</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Use cards to group closely related information. Let the backdrop blur (`backdrop-blur-md`) settle down the moving fog blobs underneath for better text readability.
                  </p>
                </div>
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-midnight/70">Don&apos;t</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Do not nest multiple hoverable cards inside one another. Floating hierarchy should never exceed two levels of depth.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Void Modal Section */}
        <Reveal>
          <section className="flex flex-col gap-8">
            <div className="border-b border-surface-dim pb-4">
              <h2 className="font-display text-3xl">Void Modal</h2>
              <p className="mt-2 text-sm text-midnight/60">
                A dialog surfacing from the deep. The void backdrop dims the eternal sunset into gravity and focus, while the panel drifts upward with ease-drift.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Preview */}
              <FloatingCard className="flex flex-col items-center justify-center gap-4 py-12">
                <VoidModalDemo />
                <p className="font-mono text-[9px] tracking-wider text-midnight/40 uppercase">
                  esc / backdrop click to close
                </p>
              </FloatingCard>

              {/* Guidelines */}
              <div className="flex flex-col justify-center gap-4">
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-rose">Do</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Reserve the modal for decisions that deserve full attention — the void backdrop (<code className="font-mono text-[10px] text-rose">#030027</code> at 45%) is the strongest gravity in the system. Always offer a quiet secondary exit next to the action.
                  </p>
                </div>
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-midnight/70">Don&apos;t</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Never stack modals or use them for passive information. A dream interrupted twice collapses; prefer inline cards or badges for anything that can wait.
                  </p>
                </div>
              </div>
            </div>

            {/* Spec Table */}
            <FloatingCard className="overflow-x-auto p-6">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-surface-dim pb-2 font-mono text-[10px] tracking-wider text-rose uppercase">
                    <th className="pb-3">Layer</th>
                    <th className="pb-3">Token / Technique</th>
                    <th className="pb-3">Behavior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-dim font-mono">
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">panel</td>
                    <td className="py-3 text-rose">bg-surface/90 rounded-dreamy shadow-float-far</td>
                    <td className="py-3 text-midnight/60">Rises 28px with ease-drift via @starting-style</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">backdrop</td>
                    <td className="py-3 text-rose">color-void/45 + blur(8px)</td>
                    <td className="py-3 text-midnight/60">Crossfades with ease-fade, blurring the sunset</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">semantics</td>
                    <td className="py-3 text-rose">native &lt;dialog&gt;</td>
                    <td className="py-3 text-midnight/60">Focus trap, Esc and inert background for free</td>
                  </tr>
                </tbody>
              </table>
            </FloatingCard>
          </section>
        </Reveal>

        {/* Whisper Toast Section */}
        <Reveal>
          <section className="flex flex-col gap-8">
            <div className="border-b border-surface-dim pb-4">
              <h2 className="font-display text-3xl">Whisper Toast</h2>
              <p className="mt-2 text-sm text-midnight/60">
                Passive feedback that never demands attention. A whisper rises from below with ease-drift, lingers for a breath, then melts back into the fog.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Preview */}
              <FloatingCard className="flex flex-col items-center justify-center gap-4 py-12">
                <WhisperToastDemo />
                <p className="font-mono text-[9px] tracking-wider text-midnight/40 uppercase">
                  melts away after 4.8s
                </p>
              </FloatingCard>

              {/* Guidelines */}
              <div className="flex flex-col justify-center gap-4">
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-rose">Do</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Whisper only what can be safely missed — saves, sync states, gentle warnings. Keep the copy to one soft sentence, and let every whisper dissolve on its own.
                  </p>
                </div>
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-midnight/70">Don&apos;t</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Never whisper something that requires a decision — that is the Void Modal&apos;s gravity. Avoid letting more than three whispers stack; a chorus of whispers becomes noise.
                  </p>
                </div>
              </div>
            </div>

            {/* Spec Table */}
            <FloatingCard className="overflow-x-auto p-6">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-surface-dim pb-2 font-mono text-[10px] tracking-wider text-rose uppercase">
                    <th className="pb-3">Variant</th>
                    <th className="pb-3">Dot Token</th>
                    <th className="pb-3">Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-dim font-mono">
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">drifting</td>
                    <td className="py-3 text-rose">bg-primary + glow</td>
                    <td className="py-3 text-midnight/60">Default — a neutral passing thought</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">stable</td>
                    <td className="py-3 text-rose">bg-mint + glow</td>
                    <td className="py-3 text-midnight/60">Success — the connection held</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-sans font-medium text-midnight">fading</td>
                    <td className="py-3 text-rose">bg-gold + glow</td>
                    <td className="py-3 text-midnight/60">Gentle warning — act before it fades</td>
                  </tr>
                </tbody>
              </table>
            </FloatingCard>
          </section>
        </Reveal>

        {/* Input / Form Section */}
        <Reveal>
          <section className="flex flex-col gap-8">
            <div className="border-b border-surface-dim pb-4">
              <h2 className="font-display text-3xl">Input / Form</h2>
              <p className="mt-2 text-sm text-midnight/60">
                Quiet input fields designed to feel secondary. On focus, they sharpen details and glow softly, signaling active consciousness.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Preview */}
              <FloatingCard className="flex flex-col gap-5 justify-center">
                <TextInput
                  label="email address"
                  placeholder="enter the address of your childhood home"
                  defaultValue=""
                />
                <TextInput
                  label="security code"
                  placeholder="••••"
                  error="this code does not match the memory"
                  defaultValue="1234"
                />
                <TextInput
                  label="locked field"
                  placeholder="closed memory"
                  disabled
                  defaultValue=""
                />
              </FloatingCard>

              {/* Guidelines */}
              <div className="flex flex-col justify-center gap-4">
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-rose">Do</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Always use uppercase uppercase mono labels (like <code className="font-mono text-[10px] text-rose">email address</code>) to annotate inputs. Keep placeholders descriptive but slightly mysterious to align with the design theme.
                  </p>
                </div>
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-midnight/70">Don&apos;t</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Never use heavy borders or thick dark outlines. Form fields should look like soft recesses (wells) in the canvas rather than hard physical boxes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Dream Avatar Section */}
        <Reveal>
          <section className="flex flex-col gap-8">
            <div className="border-b border-surface-dim pb-4">
              <h2 className="font-display text-3xl">Dream Avatar</h2>
              <p className="mt-2 text-sm text-midnight/60">
                Identity markers wrapped in a soft gradient glow. The presence dot breathes while the dreamer is connected.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Preview */}
              <FloatingCard className="flex flex-wrap items-end justify-center gap-8 py-12">
                <DreamAvatar name="Dreamer_02" size="sm" status="stable" />
                <DreamAvatar name="Anemoia" size="md" status="drifting" />
                <DreamAvatar name="Void Walker" size="lg" status="void" />
                <DreamAvatar name="Sunset" size="md" />
              </FloatingCard>

              {/* Guidelines */}
              <div className="flex flex-col justify-center gap-4">
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-rose">Do</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Use <strong>stable</strong> (mint) for connected dreamers and <strong>void</strong> for those who have faded. Omit the status dot entirely when presence is irrelevant.
                  </p>
                </div>
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-midnight/70">Don&apos;t</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Do not place avatars on saturated backgrounds — the glow ring needs the quiet blush canvas to breathe.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Drift Slider Section */}
        <Reveal>
          <section className="flex flex-col gap-8">
            <div className="border-b border-surface-dim pb-4">
              <h2 className="font-display text-3xl">Drift Slider</h2>
              <p className="mt-2 text-sm text-midnight/60">
                A range control over a sky-to-bloom gradient. The glowing knob swells gently on hover, like a slow breath.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Preview */}
              <FloatingCard className="flex flex-col gap-8 justify-center py-12">
                <DriftSlider
                  label="fog temperature"
                  defaultValue={42}
                  minLabel="sky memory"
                  maxLabel="soft bloom"
                />
                <DriftSlider
                  label="locked parameter"
                  defaultValue={70}
                  minLabel="min"
                  maxLabel="max"
                  disabled
                />
              </FloatingCard>

              {/* Guidelines */}
              <div className="flex flex-col justify-center gap-4">
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-rose">Do</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Label both ends with quiet uppercase mono text describing the sensory poles (e.g. <code className="font-mono text-[10px] text-rose">sky memory → soft bloom</code>), not numbers.
                  </p>
                </div>
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-midnight/70">Don&apos;t</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Avoid tick marks or numeric readouts beside the track. Precision belongs to machines; the dream prefers a feeling.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Status / Badge Section */}
        <Reveal>
          <section className="flex flex-col gap-8">
            <div className="border-b border-surface-dim pb-4">
              <h2 className="font-display text-3xl">Status / Badge</h2>
              <p className="mt-2 text-sm text-midnight/60">
                Small indicators equipped with a breathing pulse dot. Used to represent state or category in the dream realm.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Preview */}
              <FloatingCard className="flex flex-wrap items-center justify-center gap-4 py-12">
                <StatusBadge variant="drifting">drifting</StatusBadge>
                <StatusBadge variant="stable">stable connection</StatusBadge>
                <StatusBadge variant="warning">fading memory</StatusBadge>
                <StatusBadge variant="void">the void</StatusBadge>
              </FloatingCard>

              {/* Guidelines */}
              <div className="flex flex-col justify-center gap-4">
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-rose">Do</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Use status badges to clarify status differences immediately. Use the default pulsing dot for active background connections, as it adds dynamic micro-animation to static pages.
                  </p>
                </div>
                <div className="rounded-dreamy bg-surface/40 p-6 border border-white/10">
                  <h3 className="font-display text-xl text-midnight/70">Don&apos;t</h3>
                  <p className="mt-2 text-xs leading-relaxed text-midnight/70">
                    Avoid using badges for non-status text labels. If you need tags, use static uppercase mono text instead of a pill with an active pulsing indicator.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
