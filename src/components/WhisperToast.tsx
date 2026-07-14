"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type WhisperVariant = "drifting" | "stable" | "fading";

type WhisperInput = {
  title: string;
  message?: string;
  variant?: WhisperVariant;
};

type Whisper = Required<Omit<WhisperInput, "message">> & {
  id: number;
  message?: string;
  leaving: boolean;
};

const LINGER_MS = 4800; // how long a whisper stays before melting
const MELT_MS = 700; // must match the .whisper-toast transition duration

const WhisperContext = createContext<((input: WhisperInput) => void) | null>(
  null,
);

export function useWhisper() {
  const context = useContext(WhisperContext);
  if (!context) {
    throw new Error("useWhisper must be used within a WhisperProvider");
  }
  return context;
}

const variantDots: Record<WhisperVariant, string> = {
  drifting: "bg-primary shadow-glow-primary",
  stable: "bg-mint shadow-[0_0_12px_0_rgb(167,255,224,0.8)]",
  fading: "bg-gold shadow-[0_0_12px_0_rgb(255,246,160,0.9)]",
};

export function WhisperProvider({ children }: { children: ReactNode }) {
  const [whispers, setWhispers] = useState<Whisper[]>([]);
  const nextId = useRef(0);

  const dismiss = useCallback((id: number) => {
    setWhispers((prev) =>
      prev.map((w) => (w.id === id ? { ...w, leaving: true } : w)),
    );
    setTimeout(() => {
      setWhispers((prev) => prev.filter((w) => w.id !== id));
    }, MELT_MS);
  }, []);

  const whisper = useCallback(
    (input: WhisperInput) => {
      const id = nextId.current++;
      setWhispers((prev) => [
        ...prev,
        { variant: "drifting", ...input, id, leaving: false },
      ]);
      setTimeout(() => dismiss(id), LINGER_MS);
    },
    [dismiss],
  );

  return (
    <WhisperContext.Provider value={whisper}>
      {children}

      <div
        aria-live="polite"
        className="pointer-events-none fixed right-6 bottom-6 left-6 z-50 flex flex-col items-end gap-3 sm:left-auto"
      >
        {whispers.map((w) => (
          <div
            key={w.id}
            role="status"
            data-leaving={w.leaving || undefined}
            className="whisper-toast pointer-events-auto flex w-full items-start gap-3 rounded-dreamy border border-white/20 bg-surface/80 p-5 shadow-float backdrop-blur-md sm:w-80"
          >
            <span
              className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${variantDots[w.variant]}`}
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-midnight">{w.title}</p>
              {w.message && (
                <p className="mt-1 text-xs leading-relaxed text-midnight/60">
                  {w.message}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => dismiss(w.id)}
              aria-label="Dismiss"
              className="-mt-1 -mr-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs text-midnight/40 transition-all duration-500 ease-drift hover:bg-surface-dim hover:text-midnight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </WhisperContext.Provider>
  );
}
