import type { ReactNode } from 'react'

type Variant = 'solid' | 'outline' | 'ghost' | 'white' | 'outlineLight'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold ' +
  'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-primary-600/50 focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-paper dark:focus-visible:ring-offset-paper-d ' +
  'disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  solid:
    'bg-primary-600 text-white shadow-sm hover:bg-primary-700 ' +
    'hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
  outline:
    'border border-primary-600/30 text-primary-700 hover:border-primary-600/60 ' +
    'hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400/30 ' +
    'dark:hover:bg-primary-400/10 dark:hover:border-primary-400/60',
  ghost:
    'text-ink-muted hover:text-ink hover:bg-ink/5 ' +
    'dark:text-ink-muted-d dark:hover:text-ink-d dark:hover:bg-white/5',
  // For use on a colored (emerald) band — white pill with emerald label.
  white:
    'bg-white text-primary-700 shadow-sm hover:bg-primary-50 ' +
    'hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
  // For use on a colored band — outlined, white label.
  outlineLight:
    'border border-white/40 text-white hover:bg-white/10 hover:border-white/70',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export function Button({
  children,
  href,
  variant = 'solid',
  size = 'md',
  className = '',
  external = true,
}: {
  children: ReactNode
  href: string
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
}) {
  const isAnchor = href.startsWith('#')
  return (
    <a
      href={href}
      {...(external && !isAnchor ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  )
}
