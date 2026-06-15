import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Button } from './Button'
import { FlashcardMockup } from './FlashcardMockup'
import { ChromeIcon } from './icons'
import { LINKS } from '../lib/constants'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambient background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full
                        bg-primary-500/10 blur-[120px] dark:bg-primary-500/15" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal text-center lg:text-left">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/60
                       px-3.5 py-1.5 text-xs font-medium text-ink-muted backdrop-blur
                       dark:border-hairline-d dark:bg-surface-d/60 dark:text-ink-muted-d"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            Powered by the FSRS spaced-repetition algorithm
          </span>

          <h1 className="font-display mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem] dark:text-ink-d">
            Remember every English word you meet.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted lg:mx-0 dark:text-ink-muted-d">
            Lexify turns the words you read into lasting vocabulary. Save them from
            anywhere on the web, then review just five minutes a day — scheduled at the
            exact moment you’re about to forget.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button href={LINKS.chromeStore} variant="solid" size="lg" className="w-full sm:w-auto">
              <ChromeIcon className="h-5 w-5" />
              Add to Chrome — it’s free
            </Button>
            <Button href="#download" external={false} variant="outline" size="lg" className="w-full sm:w-auto">
              <ArrowDownTrayIcon className="h-5 w-5" />
              Get the Android app
            </Button>
          </div>

          <p className="mt-5 text-sm text-ink-muted dark:text-ink-muted-d">
            Free · No ads · Your words stay private and sync across devices.
          </p>
        </div>

        <div className="reveal flex justify-center lg:justify-end">
          <div className="animate-float">
            <FlashcardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
