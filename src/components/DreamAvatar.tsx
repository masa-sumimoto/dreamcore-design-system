"use client";

type DreamAvatarProps = {
  name: string;
  size?: "sm" | "md" | "lg";
  status?: "stable" | "drifting" | "void";
  className?: string;
};

export default function DreamAvatar({
  name,
  size = "md",
  status,
  className = "",
}: DreamAvatarProps) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";

  const sizeStyles = {
    sm: { avatar: "h-10 w-10", initial: "text-lg", dot: "h-2.5 w-2.5" },
    md: { avatar: "h-14 w-14", initial: "text-2xl", dot: "h-3 w-3" },
    lg: { avatar: "h-20 w-20", initial: "text-4xl", dot: "h-4 w-4" },
  };

  const statusStyles = {
    stable: "bg-mint shadow-glow-primary animate-pulse",
    drifting: "bg-secondary shadow-glow-primary animate-pulse",
    void: "bg-void/70",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Outer soft glowing ring */}
      <div
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-secondary to-primary/80 opacity-70 blur-md scale-105"
        aria-hidden="true"
      />

      {/* Avatar body */}
      <div
        role="img"
        aria-label={name}
        className={`relative ${sizeStyles[size].avatar} rounded-full border-2 border-white bg-gradient-to-br from-secondary/80 to-primary/80 flex items-center justify-center overflow-hidden`}
      >
        <span
          className={`font-display italic text-midnight/40 ${sizeStyles[size].initial}`}
          aria-hidden="true"
        >
          {initial}
        </span>
      </div>

      {/* Presence dot */}
      {status && (
        <span
          className={`absolute bottom-0 right-0 ${sizeStyles[size].dot} rounded-full border-2 border-white ${statusStyles[status]}`}
          aria-label={status}
        />
      )}
    </div>
  );
}
