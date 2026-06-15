import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../lib/useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-9 w-9 place-items-center rounded-full border border-hairline
                 text-ink-muted transition-colors hover:text-ink hover:bg-ink/5
                 dark:border-hairline-d dark:text-ink-muted-d dark:hover:text-ink-d
                 dark:hover:bg-white/5"
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  )
}
