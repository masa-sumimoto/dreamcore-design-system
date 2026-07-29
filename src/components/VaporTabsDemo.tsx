"use client";

import { useState } from "react";
import VaporTabs, { type TabItem } from "./VaporTabs";

const sampleTabs: TabItem[] = [
  { id: "overview", label: "Overview", badge: 4 },
  { id: "foundations", label: "Foundations" },
  { id: "components", label: "Components", badge: 16 },
  { id: "showcase", label: "Showcase" },
];

const iconTabs: TabItem[] = [
  {
    id: "sunset",
    label: "Blush Sunset",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: "void",
    label: "The Void",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    id: "fog",
    label: "Atmosphere",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

export default function VaporTabsDemo() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeIconTab, setActiveIconTab] = useState("sunset");
  const [selectedVariant, setSelectedVariant] = useState<"glass" | "void" | "minimal">("glass");
  const [selectedSize, setSelectedSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <div className="space-y-8 rounded-dreamy border border-primary/20 bg-surface/40 p-6 sm:p-8 backdrop-blur-sm">
      {/* Interactive Controls */}
      <div className="flex flex-wrap items-center gap-6 border-b border-primary/15 pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
            Variant:
          </span>
          <div className="inline-flex rounded-full bg-surface-dim p-1 text-xs">
            {(["glass", "void", "minimal"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setSelectedVariant(v)}
                className={`rounded-full px-3 py-1 font-medium transition-all duration-whisper ${
                  selectedVariant === v
                    ? "bg-primary text-midnight shadow-sm"
                    : "text-midnight/60 hover:text-midnight"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
            Size:
          </span>
          <div className="inline-flex rounded-full bg-surface-dim p-1 text-xs">
            {(["sm", "md", "lg"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSelectedSize(s)}
                className={`rounded-full px-3 py-1 font-medium transition-all duration-whisper ${
                  selectedSize === s
                    ? "bg-primary text-midnight shadow-sm"
                    : "text-midnight/60 hover:text-midnight"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main VaporTabs Interactive Preview */}
      <div className="space-y-4">
        <h4 className="text-xs font-mono text-text-muted uppercase tracking-widest">
          Interactive Segmented Control
        </h4>
        <div className="flex justify-center py-4">
          <VaporTabs
            items={sampleTabs}
            activeId={activeTab}
            onChange={setActiveTab}
            variant={selectedVariant}
            size={selectedSize}
          />
        </div>

        {/* Tab Panel Content Display */}
        <div className="mt-4 rounded-soft border border-primary/20 bg-surface/60 p-6 text-center shadow-inner transition-all duration-drift ease-drift">
          <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
            Active Panel Context
          </p>
          <p className="text-lg font-display text-midnight">
            {sampleTabs.find((t) => t.id === activeTab)?.label} View
          </p>
          <p className="text-xs text-midnight/70 mt-1 max-w-md mx-auto">
            {activeTab === "overview" && "High-level entry into the dream state, displaying core tokens and telemetry."}
            {activeTab === "foundations" && "Fundamental primitives: Soft Blush Cream, The Void, and Atmospheric Easing."}
            {activeTab === "components" && "Interactive building blocks engineered with ease-drift motion curves."}
            {activeTab === "showcase" && "Real-world liminal layouts presenting full design system integration."}
          </p>
        </div>
      </div>

      {/* Secondary Demo: With Icons */}
      <div className="space-y-4 pt-4 border-t border-primary/15">
        <h4 className="text-xs font-mono text-text-muted uppercase tracking-widest">
          Iconic Atmosphere Tabs
        </h4>
        <div className="flex justify-center py-2">
          <VaporTabs
            items={iconTabs}
            activeId={activeIconTab}
            onChange={setActiveIconTab}
            variant="glass"
            size="md"
          />
        </div>
      </div>
    </div>
  );
}
