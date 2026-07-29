"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useTransition,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type NavigateFn = (href: string) => void;

const TransitionRouterContext = createContext<NavigateFn | null>(null);

export function useTransitionRouter() {
  const navigate = useContext(TransitionRouterContext);
  if (!navigate) {
    throw new Error(
      "useTransitionRouter must be used within ViewTransitionsProvider",
    );
  }
  return navigate;
}

/**
 * Wraps App Router navigation in the native View Transitions API — the old
 * and new page crossfade with ease-fade (see ::view-transition-old/new(root)
 * in globals.css) instead of snapping. The transition's update callback
 * returns a promise that resolves once the pathname has actually changed,
 * since App Router navigation is async and streamed.
 *
 * Falls back to a plain router.push when the API is unsupported or the
 * user prefers reduced motion.
 */
export function ViewTransitionsProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [, startReactTransition] = useTransition();
  const resolveRef = useRef<(() => void) | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    resolveRef.current?.();
    resolveRef.current = null;
  }, [pathname]);

  const navigate = useCallback<NavigateFn>(
    (href) => {
      const supportsViewTransitions =
        typeof document !== "undefined" && "startViewTransition" in document;
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!supportsViewTransitions || prefersReducedMotion) {
        router.push(href);
        return;
      }

      const transition = document.startViewTransition(
        () =>
          new Promise<void>((resolve) => {
            resolveRef.current = resolve;
            startReactTransition(() => {
              router.push(href);
            });
          }),
      );
      // The browser can legitimately abort a transition (e.g. rapid
      // successive navigations) — that's routine, not an app error.
      transition.finished.catch(() => {});
    },
    [router, startReactTransition],
  );

  return (
    <TransitionRouterContext.Provider value={navigate}>
      {children}
    </TransitionRouterContext.Provider>
  );
}
