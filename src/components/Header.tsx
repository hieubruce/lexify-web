import { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Wordmark } from './Wordmark'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './Button'
import { ChromeIcon } from './icons'
import { LINKS, NAV } from '../lib/constants'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-hairline/80 bg-paper/80 backdrop-blur-lg dark:border-hairline-d/80 dark:bg-paper-d/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2" aria-label="Lexify home">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-muted
                         transition-colors hover:text-ink dark:text-ink-muted-d dark:hover:text-ink-d"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href={LINKS.chromeStore} variant="solid" className="hidden sm:inline-flex">
            <ChromeIcon className="h-4 w-4" />
            Add to Chrome
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-hairline
                       text-ink-muted md:hidden dark:border-hairline-d dark:text-ink-muted-d"
          >
            {open ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-hairline bg-paper md:hidden dark:border-hairline-d dark:bg-paper-d">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink
                           hover:bg-ink/5 dark:text-ink-d dark:hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <Button
              href={LINKS.chromeStore}
              variant="solid"
              size="lg"
              className="mt-2 w-full"
            >
              <ChromeIcon className="h-5 w-5" />
              Add to Chrome
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
