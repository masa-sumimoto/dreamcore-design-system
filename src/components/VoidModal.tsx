"use client";

import { useEffect, useId, useRef, type MouseEvent, type ReactNode } from "react";

type VoidModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export default function VoidModal({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  className = "",
}: VoidModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Native <dialog> makes the background inert but does not lock its scroll
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Clicks on the dialog element itself land on the backdrop area
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClick={handleBackdropClick}
      onClose={onClose}
      className={`void-modal m-auto w-[min(90vw,28rem)] rounded-dreamy border border-white/20 bg-surface/90 p-0 text-text shadow-float-far backdrop-blur-md ${className}`}
    >
      <div className="relative p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-lg text-midnight/40 transition-all duration-500 ease-drift hover:rotate-90 hover:bg-surface-dim hover:text-midnight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          ✕
        </button>

        {eyebrow && (
          <p className="font-mono text-[10px] tracking-widest text-rose uppercase">
            {eyebrow}
          </p>
        )}
        <h2 id={titleId} className="mt-2 font-display text-2xl">
          {title}
        </h2>
        <div className="mt-4 text-sm leading-relaxed text-midnight/70">
          {children}
        </div>

        {footer && (
          <div className="mt-8 flex flex-wrap justify-end gap-3">{footer}</div>
        )}
      </div>
    </dialog>
  );
}
