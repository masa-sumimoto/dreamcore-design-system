"use client";

import Link from "next/link";
import FloatingCard from "@/components/FloatingCard";
import TextInput from "@/components/TextInput";
import DriftButton from "@/components/DriftButton";
import StatusBadge from "@/components/StatusBadge";
import DreamAvatar from "@/components/DreamAvatar";
import Reveal from "@/components/Reveal";

export default function ProfileShowcase() {
  return (
    <main className="mx-auto w-full max-w-md flex-1 px-6 pt-24 pb-32 flex flex-col justify-center">
      {/* Navigation */}
      <div className="mb-8 flex items-center justify-between w-full">
        <Link
          href="/showcase"
          className="font-mono text-[10px] tracking-widest text-rose uppercase hover:text-midnight transition-colors"
        >
          &larr; Back to Showcase
        </Link>
        <StatusBadge variant="void">auth state</StatusBadge>
      </div>

      <Reveal>
        <FloatingCard className="w-full flex flex-col gap-6 p-10 border border-white/20 relative overflow-hidden">
          {/* Internal glowing blur */}
          <div className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-primary/20 blur-fog" />
          
          {/* Avatar Area */}
          <div className="flex flex-col items-center gap-4 text-center mt-2">
            <DreamAvatar name="Dreamer_02" size="lg" status="stable" />

            <div className="flex flex-col gap-1">
              <h2 className="font-display text-2xl">Dreamer_02</h2>
              <span className="font-mono text-[9px] tracking-widest text-midnight/40 uppercase">
                core identity synced
              </span>
            </div>
          </div>

          {/* Form Area */}
          <form className="flex flex-col gap-5 mt-4" onSubmit={(e) => e.preventDefault()}>
            <TextInput
              label="dreamer name"
              placeholder="e.g. Dreamer_02"
              defaultValue="Dreamer_02"
            />
            <TextInput
              label="memory token"
              type="password"
              placeholder="enter memory token"
              defaultValue="••••••••••••"
            />
            
            <div className="flex flex-col gap-3 mt-4">
              <DriftButton variant="action" type="submit" className="w-full">
                Save Connection
              </DriftButton>
              <DriftButton variant="secondary" className="w-full" href="/showcase">
                Cancel
              </DriftButton>
            </div>
          </form>

          {/* Footnote */}
          <div className="text-center font-mono text-[9px] text-midnight/35 uppercase tracking-wider mt-4">
            terminal: secure access tunnel
          </div>
        </FloatingCard>
      </Reveal>
    </main>
  );
}
