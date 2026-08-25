/**
 * Mirrors the "Code" frame shown on each component's page in the
 * Figma Community template — void background, Geist Mono, rose label.
 */
export default function CodeBlock({ code }: { code: string }) {
  return (
    <div className="rounded-dreamy bg-void p-6">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-rose">
        Code
      </p>
      <pre className="mt-4 overflow-x-auto font-mono text-[11px] leading-relaxed text-background/85">
        <code>{code}</code>
      </pre>
    </div>
  );
}
