import {
  CursorArrowRaysIcon,
  ClockIcon,
  BookOpenIcon,
  PencilSquareIcon,
  ChartBarIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'

type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  body: string
  span?: string
  accent?: boolean
}

const FEATURES: Feature[] = [
  {
    icon: CursorArrowRaysIcon,
    title: 'Capture words where you read them',
    body: 'Highlight any word on a webpage, right-click → “Add to Lexify.” No copy-pasting into a separate app, no breaking your flow.',
    span: 'sm:col-span-2',
    accent: true,
  },
  {
    icon: ClockIcon,
    title: 'Reviews timed by science',
    body: 'The FSRS algorithm schedules each card for the moment right before you’d forget it — so you study less and remember more.',
  },
  {
    icon: BookOpenIcon,
    title: 'Definitions filled in for you',
    body: 'Auto-pulls the English definition, Vietnamese meaning, part of speech, phonetics and an example sentence as you add a word.',
  },
  {
    icon: PencilSquareIcon,
    title: 'Active recall, not passive reading',
    body: 'Type the word from memory and write your own sentence. Real production practice, the way vocabulary actually sticks.',
  },
  {
    icon: SpeakerWaveIcon,
    title: 'Hear every word',
    body: 'Native Merriam-Webster audio and IPA on every card, so you learn the sound alongside the meaning.',
  },
  {
    icon: ChartBarIcon,
    title: 'See your streak grow',
    body: 'Daily streaks, retention stats and per-deck mastery — clear signals that your effort is compounding.',
    span: 'sm:col-span-2',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Why Lexify
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl dark:text-ink-d">
            Built for words that actually stay
          </h2>
          <p className="mt-4 text-lg text-ink-muted dark:text-ink-muted-d">
            Every part of Lexify is designed around one goal: turning the English you
            encounter into vocabulary you can use.
          </p>
        </div>

        <div className="reveal mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className={`group rounded-3xl border border-hairline bg-surface p-7 transition-all
                          duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5
                          dark:border-hairline-d dark:bg-surface-d dark:hover:shadow-black/30
                          ${f.span ?? ''}`}
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-2xl transition-colors ${
                  f.accent
                    ? 'bg-primary-600 text-white'
                    : 'bg-primary-50 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400'
                }`}
              >
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold text-ink dark:text-ink-d">
                {f.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted dark:text-ink-muted-d">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
