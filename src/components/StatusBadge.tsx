"use client";

import { type ReactNode } from "react";

type StatusBadgeProps = {
  children: ReactNode;
  variant?: "stable" | "drifting" | "warning" | "void";
  pulse?: boolean;
  className?: string;
};

export default function StatusBadge({
  children,
  variant = "drifting",
  pulse = true,
  className = "",
}: StatusBadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] tracking-widest uppercase border backdrop-blur-sm";

  const variantStyles = {
    stable: {
      badge: "bg-mint/15 border-mint/40 text-midnight/80",
      dot: "bg-mint shadow-[0_0_8px_0_rgb(167,255,224)]",
    },
    drifting: {
      badge: "bg-secondary/20 border-secondary/50 text-midnight/80",
      dot: "bg-secondary shadow-[0_0_8px_0_rgb(199,226,255)]",
    },
    warning: {
      badge: "bg-gold/15 border-gold/40 text-rose/90",
      dot: "bg-gold shadow-[0_0_8px_0_rgb(255,246,160)]",
    },
    void: {
      badge: "bg-void/10 border-void/30 text-void/80",
      dot: "bg-void shadow-[0_0_8px_0_rgb(3,0,39)]",
    },
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant].badge} ${className}`}>
      <span
        className={`h-1.5 w-1.5 rounded-full ${variantStyles[variant].dot} ${
          pulse ? "animate-pulse" : ""
        }`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
