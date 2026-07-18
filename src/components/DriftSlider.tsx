"use client";

import { useId, type InputHTMLAttributes } from "react";

type DriftSliderProps = {
  label?: string;
  minLabel?: string;
  maxLabel?: string;
  className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export default function DriftSlider({
  label,
  minLabel,
  maxLabel,
  className = "",
  disabled,
  ...props
}: DriftSliderProps) {
  const id = useId();

  const thumbStyles =
    "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-glow-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-drift [&::-webkit-slider-thumb]:ease-drift hover:[&::-webkit-slider-thumb]:scale-125 " +
    "[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:shadow-glow-primary [&::-moz-range-thumb]:cursor-pointer";

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="font-mono text-[10px] tracking-widest text-rose uppercase font-medium ml-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type="range"
        disabled={disabled}
        className={`w-full h-2 appearance-none rounded-full bg-gradient-to-r from-secondary to-primary/80 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 ${thumbStyles}`}
        {...props}
      />
      {(minLabel || maxLabel) && (
        <div className="flex justify-between font-mono text-[9px] text-midnight/40 tracking-wider uppercase">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      )}
    </div>
  );
}
