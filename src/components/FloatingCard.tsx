"use client";

import { type ReactNode, type ElementType } from "react";

type FloatingCardProps<T extends ElementType = "div"> = {
  children: ReactNode;
  as?: T;
  hoverable?: boolean;
  className?: string;
};

export default function FloatingCard<T extends ElementType = "div">({
  children,
  as,
  hoverable = false,
  className = "",
  ...props
}: FloatingCardProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof FloatingCardProps<T>>) {
  const Component = as || "div";

  const baseStyles =
    "rounded-dreamy bg-surface/75 p-8 shadow-float backdrop-blur-md border border-white/20";
  
  const hoverStyles = hoverable
    ? "transition-all duration-500 ease-drift hover:-translate-y-1.5 hover:shadow-float-far hover:bg-surface/85"
    : "";

  return (
    <Component className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </Component>
  );
}
