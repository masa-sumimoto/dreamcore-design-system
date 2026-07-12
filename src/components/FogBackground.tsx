"use client";

import { useEffect, useRef } from "react";

/**
 * The eternal sunset. Four fog blobs drift on 30-50s loops (pure CSS),
 * while a "consciousness bloom" lerps toward the cursor with a heavy,
 * dreamlike lag. Everything lives on transform/opacity only.
 */
export default function FogBackground() {
  const bloomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = bloomRef.current;
    if (!el) return;

    let raf = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight * 0.4 };
    const current = { ...target };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="fog-blob animate-fog-a"
        style={{
          top: "-20%",
          left: "-15%",
          width: "65vmax",
          height: "65vmax",
          background:
            "radial-gradient(circle, rgb(249 168 212 / 0.45) 0%, transparent 68%)",
        }}
      />
      <div
        className="fog-blob animate-fog-b"
        style={{
          top: "10%",
          right: "-25%",
          width: "55vmax",
          height: "55vmax",
          background:
            "radial-gradient(circle, rgb(216 180 254 / 0.38) 0%, transparent 68%)",
        }}
      />
      <div
        className="fog-blob animate-fog-c"
        style={{
          bottom: "-30%",
          left: "15%",
          width: "60vmax",
          height: "60vmax",
          background:
            "radial-gradient(circle, rgb(199 226 255 / 0.5) 0%, transparent 68%)",
        }}
      />
      <div
        className="fog-blob animate-fog-d"
        style={{
          top: "45%",
          left: "45%",
          width: "40vmax",
          height: "40vmax",
          background:
            "radial-gradient(circle, rgb(255 246 160 / 0.32) 0%, transparent 68%)",
        }}
      />
      <div
        ref={bloomRef}
        className="fog-blob"
        style={{
          top: 0,
          left: 0,
          width: "48rem",
          height: "48rem",
          background:
            "radial-gradient(circle, rgb(255 189 217 / 0.35) 0%, transparent 62%)",
        }}
      />
      <div className="grain absolute inset-0" />
    </div>
  );
}
