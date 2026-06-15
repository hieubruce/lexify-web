import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Button } from './Button'
import { ChromeIcon } from './icons'
import { LINKS } from '../lib/constants'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-x">
        {/* about story */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            About us
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl dark:text-ink-d">
            A dictionary that remembers for you
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted dark:text-ink-muted-d">
            Lexify started from a familiar frustration: meeting the same English word again
            and again, and forgetting it every time. We wanted something calmer than a wall
            of flashcards and smarter than a notes app — a tool that treats vocabulary like
            something worth keeping. So we built one editorial, quiet app powered by proven
            spaced-repetition science, for learners who read in English every day.
          </p>
        </div>

        {/* closing CTA band */}
        <div className="reveal mt-16 overflow-hidden rounded-[2rem] bg-primary-700 px-8 py-14 text-center sm:px-16">
          <div className="mx-auto max-w-2xl">
            <h3 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Five minutes a day. Words that finally stay.
            </h3>
            <p className="mt-4 text-lg text-primary-100">
              Add Lexify and turn today’s reading into vocabulary you’ll still have next year.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={LINKS.chromeStore}
                variant="white"
                size="lg"
                className="w-full sm:w-auto"
              >
                <ChromeIcon className="h-5 w-5" />
                Add to Chrome
              </Button>
              <Button
                href={LINKS.apkLatest}
                variant="outlineLight"
                size="lg"
                className="w-full sm:w-auto"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
