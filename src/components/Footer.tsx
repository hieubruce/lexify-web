import { Wordmark } from './Wordmark'
import { LINKS, NAV } from '../lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-hairline py-12 dark:border-hairline-d">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-xs text-center md:text-left">
            <Wordmark />
            <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-ink-muted-d">
              FSRS-powered spaced repetition for building English vocabulary that lasts.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink dark:text-ink-muted-d dark:hover:text-ink-d"
              >
                {item.label}
              </a>
            ))}
            <a
              href={LINKS.privacy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted transition-colors hover:text-ink dark:text-ink-muted-d dark:hover:text-ink-d"
            >
              Privacy
            </a>
            <a
              href={`mailto:${LINKS.contactEmail}`}
              className="text-sm text-ink-muted transition-colors hover:text-ink dark:text-ink-muted-d dark:hover:text-ink-d"
            >
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-hairline pt-6 text-center text-sm text-ink-muted dark:border-hairline-d dark:text-ink-muted-d">
          © {new Date().getFullYear()} Lexify. Made for learners who read in English.
        </div>
      </div>
    </footer>
  )
}
