"use client";

import Link from "next/link";
import FloatingCard from "@/components/FloatingCard";
import StatusBadge from "@/components/StatusBadge";
import DriftButton from "@/components/DriftButton";
import DriftSlider from "@/components/DriftSlider";
import Reveal from "@/components/Reveal";

const logs = [
  { time: "03:14 AM", event: "Memory fragment #098 surfaced", status: "stable" as const },
  { time: "02:40 AM", event: "Anemoia signal fluctuations detected", status: "warning" as const },
  { time: "01:05 AM", event: "Temporal drift recalibrated", status: "stable" as const },
  { time: "11:50 PM", event: "Connection to childhood bedroom lost", status: "void" as const },
];

export default function DashboardShowcase() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 pt-24 pb-32 md:px-8">
      {/* Back button and title */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/showcase"
          className="font-mono text-[10px] tracking-widest text-rose uppercase hover:text-midnight transition-colors"
        >
          &larr; Back to Showcase
        </Link>
        <StatusBadge variant="drifting">drifting consciousness</StatusBadge>
      </div>

      <Reveal>
        <header className="mb-liminal">
          <h1 className="font-display text-4xl md:text-5xl">
            Dreamer <em className="text-primary">Dashboard</em>
          </h1>
          <p className="mt-3 text-sm text-midnight/60">
            Monitor and sync sensory parameters across memory corridors.
          </p>
        </header>
      </Reveal>

      {/* Grid Layout */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left column: Overview & Controls */}
        <div className="flex flex-col gap-8 lg:col-span-1">
          <Reveal delay={100}>
            <FloatingCard className="flex flex-col gap-6">
              <h2 className="font-display text-2xl">Sensory Anchor</h2>
              
              <div className="flex flex-col gap-4 font-mono text-[11px]">
                <div className="flex justify-between border-b border-surface-dim pb-2">
                  <span className="text-midnight/50">CONSCIOUSNESS LEVEL</span>
                  <span className="font-medium text-midnight">42.8%</span>
                </div>
                <div className="flex justify-between border-b border-surface-dim pb-2">
                  <span className="text-midnight/50">TEMPORAL DRIFT</span>
                  <span className="font-medium text-rose">+0.04s / min</span>
                </div>
                <div className="flex justify-between border-b border-surface-dim pb-2">
                  <span className="text-midnight/50">FOG DENSITY</span>
                  <span className="font-medium text-midnight">Heavy</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <DriftButton variant="action" className="w-full">
                  Synchronize Consciousness
                </DriftButton>
                <DriftButton variant="secondary" className="w-full">
                  Decouple Anchor
                </DriftButton>
              </div>
            </FloatingCard>
          </Reveal>

          <Reveal delay={200}>
            <FloatingCard className="flex flex-col gap-4">
              <h2 className="font-display text-xl">Atmospheric Control</h2>
              <p className="text-xs text-midnight/60 leading-relaxed">
                Modulate fog temperature to stabilize memory structures. Warmer blush tones aid in surfacing 90s digital nostalgia.
              </p>
              <DriftSlider
                defaultValue={42}
                minLabel="sky memory"
                maxLabel="soft bloom"
                aria-label="Fog temperature"
                className="mt-2"
              />
            </FloatingCard>
          </Reveal>
        </div>

        {/* Right column: Data & Logs */}
        <div className="flex flex-col gap-8 lg:col-span-2">
          {/* Chart Card */}
          <Reveal delay={150}>
            <FloatingCard className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl">Memory Sync Rate</h2>
                <span className="font-mono text-[10px] tracking-wider text-rose">Live Loop</span>
              </div>
              
              {/* Mock SVG Line Chart */}
              <div className="relative h-48 w-full bg-surface-dim/40 rounded-dreamy border border-primary/10 overflow-hidden p-2">
                <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(21, 30, 63, 0.05)" strokeWidth="0.2" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(21, 30, 63, 0.05)" strokeWidth="0.2" />
                  <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(21, 30, 63, 0.05)" strokeWidth="0.2" />
                  
                  {/* Glow effect for line */}
                  <path
                    d="M 0 35 Q 15 25 30 28 T 60 12 T 85 22 T 100 5"
                    fill="none"
                    stroke="#f9a8d4"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    className="opacity-40"
                    style={{ filter: "drop-shadow(0px 0px 4px #f9a8d4)" }}
                  />
                  {/* Main Line */}
                  <path
                    d="M 0 35 Q 15 25 30 28 T 60 12 T 85 22 T 100 5"
                    fill="none"
                    stroke="#b8336a"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Active scan line */}
                <div className="absolute top-0 bottom-0 left-[60%] w-[1px] bg-primary/80 shadow-glow-primary animate-pulse" />
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col gap-1 border-r border-surface-dim">
                  <span className="font-mono text-[9px] text-midnight/40 uppercase">max fidelity</span>
                  <span className="font-display text-xl">98.4%</span>
                </div>
                <div className="flex flex-col gap-1 border-r border-surface-dim">
                  <span className="font-mono text-[9px] text-midnight/40 uppercase">current fade</span>
                  <span className="font-display text-xl">12.1%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-midnight/40 uppercase">active nodes</span>
                  <span className="font-display text-xl">14 / 20</span>
                </div>
              </div>
            </FloatingCard>
          </Reveal>

          {/* Logs Card */}
          <Reveal delay={250}>
            <FloatingCard className="flex flex-col gap-6">
              <h2 className="font-display text-2xl">Consciousness Log</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-surface-dim font-mono text-[9px] tracking-wider text-rose uppercase">
                      <th className="pb-3 w-28">Timestamp</th>
                      <th className="pb-3">Event</th>
                      <th className="pb-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-dim font-mono text-[11px]">
                    {logs.map((log, li) => (
                      <tr key={li} className="text-midnight/80">
                        <td className="py-3.5 text-midnight/40">{log.time}</td>
                        <td className="py-3.5 font-sans font-medium text-midnight">{log.event}</td>
                        <td className="py-3.5 text-right">
                          <StatusBadge variant={log.status} pulse={log.status === "warning"}>
                            {log.status}
                          </StatusBadge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FloatingCard>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
