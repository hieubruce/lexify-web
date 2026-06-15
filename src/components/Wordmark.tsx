// Lexify wordmark — Fraunces serif "Lexify" + a small coral dot (brand-direction §3.5).

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`font-display text-xl font-semibold tracking-tight text-ink dark:text-ink-d ${className}`}
    >
      Lexify
      <span className="text-coral-500">.</span>
    </span>
  )
}
