// Brand glyphs not covered by Heroicons (kept minimal + monochrome-friendly).

export function ChromeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#fff" />
      <path fill="#4285F4" d="M24 16a8 8 0 0 1 6.9 4H44a20 20 0 0 0-33-7l6 10a8 8 0 0 1 7-7Z" opacity="0" />
      <path fill="#EA4335" d="M24 14h17.6A20 20 0 0 0 6.7 12.3L15 26.7A10 10 0 0 1 24 14Z" />
      <path fill="#4285F4" d="M31.5 19A10 10 0 0 1 24 34h0l-6.7 11.6A20 20 0 0 0 41.6 14H24a10 10 0 0 1 7.5 5Z" />
      <path fill="#FBBC05" d="M15 26.7 6.7 12.3A20 20 0 0 0 17.3 45.6L24 34a10 10 0 0 1-9-7.3Z" />
      <circle cx="24" cy="24" r="8" fill="#fff" />
      <circle cx="24" cy="24" r="6.4" fill="#4285F4" />
    </svg>
  )
}

export function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.6 9.48l1.84-3.18a.38.38 0 0 0-.66-.38l-1.86 3.22a11.4 11.4 0 0 0-9.84 0L5.22 5.92a.38.38 0 1 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18.3h22a10.8 10.8 0 0 0-5.4-8.82M7 15.25a1.13 1.13 0 1 1 1.12-1.13A1.13 1.13 0 0 1 7 15.25m10 0a1.13 1.13 0 1 1 1.12-1.13A1.13 1.13 0 0 1 17 15.25" />
    </svg>
  )
}
