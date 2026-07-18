"use client";

import Link from "next/link";
import { type ReactNode, type ButtonHTMLAttributes } from "react";

type DriftButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "action";
  className?: string;
  href?: string;
};

// Button element props vs Anchor element props
type DriftButtonProps = DriftButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof DriftButtonBaseProps>;

export default function DriftButton({
  children,
  variant = "action",
  className = "",
  href,
  ...props
}: DriftButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-drift ease-drift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40";

  const variantStyles = {
    action:
      "bg-action text-midnight hover:-translate-y-1 hover:shadow-glow-action focus-visible:ring-action",
    primary:
      "bg-primary text-midnight hover:-translate-y-1 hover:shadow-glow-primary focus-visible:ring-primary",
    secondary:
      "bg-surface/60 border border-primary/40 text-midnight backdrop-blur-sm hover:-translate-y-1 hover:border-primary/80 hover:shadow-glow-primary focus-visible:ring-primary",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
