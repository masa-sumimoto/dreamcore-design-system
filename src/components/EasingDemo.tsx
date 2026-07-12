"use client";

import { useEffect, useRef, useState } from "react";

const tracks = [
  {
    label: "ease-drift",
    className: "ease-drift bg-primary",
    duration: 1400,
    note: "settles like something sinking in water",
  },
  {
    label: "ease-fade",
    className: "ease-fade bg-secondary",
    duration: 1400,
    note: "smooth, symmetrical crossfade",
  },
  {
    label: "linear (don't)",
    className: "ease-linear bg-midnight/30",
    duration: 1400,
    note: "mechanical — nothing in a dream moves like this",
  },
];

export default function EasingDemo() {
  const [run, setRun] = useState(false);

  const replay = () => {
    setRun(false);
  };

  useEffect(() => {
    if (!run) {
      const id = setTimeout(() => {
        setRun(true);
      }, 50);
      return () => clearTimeout(id);
    }
  }, [run]);

  return (
    <div className="rounded-dreamy bg-surface/80 p-8 shadow-float backdrop-blur-sm">
      <div className="flex flex-col gap-6">
        {tracks.map((track) => (
          <div key={track.label} className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-4">
              <code className="font-mono text-[11px] text-rose">
                {track.label}
              </code>
              <span className="text-[11px] text-midnight/50">
                {track.note}
              </span>
            </div>
            <div className="@container relative h-6 rounded-full bg-surface-dim">
              <div
                className={`absolute top-1/2 left-1 h-4 w-4 -translate-y-1/2 rounded-full ${
                  run ? `transition-transform ${track.className}` : ""
                }`}
                style={{
                  transitionDuration: run ? `${track.duration}ms` : "0ms",
                  transform: run
                    ? "translateX(calc(100cqw - 1.5rem)) translateY(-50%)"
                    : "translateX(0) translateY(-50%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={replay}
        className="mt-8 rounded-full bg-action px-6 py-2.5 text-xs font-medium transition-all duration-500 ease-drift hover:-translate-y-0.5 hover:shadow-glow-action"
      >
        Replay
      </button>
    </div>
  );
}
