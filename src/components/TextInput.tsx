"use client";

import { useId, type InputHTMLAttributes } from "react";

type TextInputProps = {
  label?: string;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({
  label,
  error,
  className = "",
  disabled,
  ...props
}: TextInputProps) {
  const id = useId();

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
        disabled={disabled}
        className={`w-full rounded-soft bg-surface-dim/40 border border-primary/20 px-4 py-3 text-sm text-midnight placeholder-midnight/40 backdrop-blur-sm transition-all duration-400 ease-fade outline-none hover:border-primary/45 focus:border-primary/80 focus:bg-surface/80 focus:shadow-glow-primary disabled:pointer-events-none disabled:opacity-40`}
        {...props}
      />
      {error && (
        <span className="font-mono text-[10px] tracking-wide text-rose/90 ml-1">
          {error}
        </span>
      )}
    </div>
  );
}
