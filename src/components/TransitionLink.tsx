"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useTransitionRouter } from "@/components/ViewTransitionsProvider";

type TransitionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children?: ReactNode;
  };

/**
 * Drop-in replacement for next/link that routes normal clicks through
 * document.startViewTransition (see ViewTransitionsProvider). Modified
 * clicks (new tab, download, etc.) and external targets fall through to
 * the browser's default Link behavior untouched.
 */
export default function TransitionLink({
  href,
  onClick,
  target,
  ...rest
}: TransitionLinkProps) {
  const navigate = useTransitionRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);

    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      target === "_blank"
    ) {
      return;
    }

    e.preventDefault();
    navigate(typeof href === "string" ? href : (href.pathname ?? "/"));
  };

  return <Link href={href} target={target} onClick={handleClick} {...rest} />;
}
