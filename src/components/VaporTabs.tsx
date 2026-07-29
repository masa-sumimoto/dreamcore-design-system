"use client";

import {
  useState,
  useRef,
  useEffect,
  useId,
  useCallback,
  type ReactNode,
  type KeyboardEvent,
} from "react";

export type TabItem<T extends string = string> = {
  id: T;
  label: string;
  icon?: ReactNode;
  badge?: string | number;
  disabled?: boolean;
};

export type VaporTabsProps<T extends string = string> = {
  items: TabItem<T>[];
  activeId: T;
  onChange: (id: T) => void;
  variant?: "glass" | "void" | "minimal";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  "aria-label"?: string;
};

export default function VaporTabs<T extends string = string>({
  items,
  activeId,
  onChange,
  variant = "glass",
  size = "md",
  fullWidth = false,
  className = "",
  "aria-label": ariaLabel = "Dreamcore navigation tabs",
}: VaporTabsProps<T>) {
  const baseId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<T, HTMLButtonElement>>(new Map());
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });

  // Measure and update sliding indicator position
  const updateIndicator = useCallback(() => {
    const activeElement = tabRefs.current.get(activeId);
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        opacity: 1,
      });
    }
  }, [activeId]);

  // Recalculate on activeId, items, size, or variant change
  useEffect(() => {
    updateIndicator();
  }, [updateIndicator, activeId, items, size, variant]);

  // Recalculate indicator position on container resize (e.g. font loading, window resize)
  useEffect(() => {
    const trackElement = trackRef.current;
    if (!trackElement) return;

    const observer = new ResizeObserver(() => {
      updateIndicator();
    });

    observer.observe(trackElement);
    return () => observer.disconnect();
  }, [updateIndicator]);

  // Keyboard navigation support (Left/Right Arrow, Home/End)
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const enabledItems = items.filter((item) => !item.disabled);
    if (enabledItems.length === 0) return;

    const currentIndex = enabledItems.findIndex((item) => item.id === items[index].id);
    let nextIndex = -1;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % enabledItems.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + enabledItems.length) % enabledItems.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = enabledItems.length - 1;
    }

    if (nextIndex !== -1) {
      const nextItem = enabledItems[nextIndex];
      onChange(nextItem.id);
      tabRefs.current.get(nextItem.id)?.focus();
    }
  };

  // Track styling per variant
  const trackVariantStyles = {
    glass:
      "bg-surface/50 border border-primary/30 backdrop-blur-md shadow-float text-midnight",
    void:
      "bg-midnight/90 border border-primary/20 backdrop-blur-md shadow-float text-background",
    minimal:
      "bg-surface-dim/40 border border-transparent text-midnight",
  };

  // Active Pill indicator styling per variant
  const pillVariantStyles = {
    glass:
      "bg-surface shadow-glow-primary border border-primary/20",
    void:
      "bg-rose/90 shadow-glow-action border border-rose/30",
    minimal:
      "bg-surface shadow-sm border border-primary/10",
  };

  // Size variations for padding, indicator offset, and typography
  const sizeStyles = {
    sm: {
      track: "p-1 rounded-full text-xs font-medium",
      tab: "px-4 py-1.5 gap-1.5",
      badge: "px-1.5 py-0.5 text-[10px]",
      pillHeight: "calc(100% - 8px)",
    },
    md: {
      track: "p-1.5 rounded-full text-sm font-medium",
      tab: "px-5 py-2 gap-2",
      badge: "px-2 py-0.5 text-xs",
      pillHeight: "calc(100% - 10px)",
    },
    lg: {
      track: "p-2 rounded-full text-base font-medium",
      tab: "px-6 py-2.5 gap-2.5",
      badge: "px-2.5 py-0.5 text-xs",
      pillHeight: "calc(100% - 12px)",
    },
  };

  const activeColorStyles = {
    glass: "text-midnight font-semibold",
    void: "text-white font-semibold",
    minimal: "text-midnight font-semibold",
  };

  const inactiveColorStyles = {
    glass: "text-midnight/70 hover:text-midnight hover:bg-primary/10",
    void: "text-background/70 hover:text-background hover:bg-white/10",
    minimal: "text-midnight/60 hover:text-midnight hover:bg-surface-dim/60",
  };

  return (
    <div
      ref={trackRef}
      role="tablist"
      aria-label={ariaLabel}
      className={`relative inline-flex items-center transition-all duration-surface ease-drift ${
        fullWidth ? "w-full justify-between" : ""
      } ${trackVariantStyles[variant]} ${sizeStyles[size].track} ${className}`}
    >
      {/* Vapor Pill Sliding Indicator */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-drift ease-drift pointer-events-none ${pillVariantStyles[variant]}`}
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          height: sizeStyles[size].pillHeight,
          opacity: indicatorStyle.opacity,
        }}
        aria-hidden="true"
      />

      {/* Tabs */}
      {items.map((item, index) => {
        const isActive = item.id === activeId;
        const tabId = `${baseId}-tab-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <button
            key={item.id}
            id={tabId}
            ref={(el) => {
              if (el) tabRefs.current.set(item.id, el);
              else tabRefs.current.delete(item.id);
            }}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={panelId}
            tabIndex={isActive ? 0 : -1}
            disabled={item.disabled}
            onClick={() => !item.disabled && onChange(item.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`relative z-10 inline-flex items-center justify-center rounded-full transition-colors duration-whisper ease-fade focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-40 ${
              fullWidth ? "flex-1" : ""
            } ${sizeStyles[size].tab} ${
              isActive
                ? activeColorStyles[variant]
                : inactiveColorStyles[variant]
            }`}
          >
            {item.icon && (
              <span className="inline-flex shrink-0 transition-transform duration-whisper ease-drift">
                {item.icon}
              </span>
            )}
            <span>{item.label}</span>
            {item.badge !== undefined && (
              <span
                className={`ml-1 rounded-full font-mono transition-colors duration-whisper ${
                  isActive
                    ? "bg-primary/40 text-midnight"
                    : "bg-surface-dim text-midnight/70"
                } ${sizeStyles[size].badge}`}
              >
                {item.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
