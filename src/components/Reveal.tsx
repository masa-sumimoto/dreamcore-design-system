"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

const STAGGER_MS = 120; // must match --stagger-surface (globals.css)

/**
 * Scroll reveal — content surfaces like a resurfacing memory.
 * Opacity + translate only; disabled under prefers-reduced-motion (CSS side).
 *
 * With `stagger`, each direct child gets its own reveal delay (120ms apart)
 * so a group of siblings surfaces one after another instead of all at once.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (stagger) {
    return (
      <div ref={ref} className={className}>
        {Children.map(children, (child, i) => (
          <div
            className={`reveal ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${delay + i * STAGGER_MS}ms` }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
