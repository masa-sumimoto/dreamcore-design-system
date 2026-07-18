"use client";

import { useEffect, useState } from "react";

const tracks = [
  { label: "whisper", duration: 300, className: "bg-secondary" },
  { label: "drift", duration: 500, className: "bg-action" },
  { label: "surface", duration: 700, className: "bg-primary" },
  { label: "rise", duration: 1200, className: "bg-lilac" },
  { label: "dawn", duration: 1600, className: "bg-rose" },
];

export default function DurationDemo() {
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
                duration-{track.label}
              </code>
              <span className="text-[11px] text-midnight/50">
                {track.duration}ms
              </span>
            </div>
            <div className="@container relative h-6 rounded-full bg-surface-dim">
              <div
                className={`absolute top-1/2 left-1 h-4 w-4 -translate-y-1/2 rounded-full ${track.className} ${
                  run ? "transition-transform ease-drift" : ""
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
        className="mt-8 rounded-full bg-action px-6 py-2.5 text-xs font-medium transition-all duration-drift ease-drift hover:-translate-y-0.5 hover:shadow-glow-action"
      >
        Replay
      </button>
    </div>
  );
}
