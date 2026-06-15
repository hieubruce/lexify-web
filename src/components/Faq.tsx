import { PlusIcon } from '@heroicons/react/24/outline'
import { LINKS } from '../lib/constants'

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Is Lexify free?',
    a: 'Yes. Both the Chrome extension and the Android app are free, with no ads and no paywalled features.',
  },
  {
    q: 'Why does the Android app install from a file instead of the Play Store?',
    a: (
      <>
        Lexify isn’t on the Play Store yet, so you download the APK directly from us. It’s
        signed and every release publishes a SHA-256 checksum you can verify. The{' '}
        <a
          href={LINKS.releases}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary-700 hover:underline dark:text-primary-400"
        >
          releases page
        </a>{' '}
        always has the latest version.
      </>
    ),
  },
  {
    q: 'Is my data private?',
    a: (
      <>
        Your words live in your own account and are only accessible to you. We don’t sell
        data or show ads. Read the full{' '}
        <a
          href={LINKS.privacy}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary-700 hover:underline dark:text-primary-400"
        >
          privacy policy
        </a>
        .
      </>
    ),
  },
  {
    q: 'Do I need both the extension and the app?',
    a: 'No — either one works on its own. If you use both, they share one account, so words and progress stay in sync automatically.',
  },
  {
    q: 'What is FSRS?',
    a: 'FSRS (Free Spaced Repetition Scheduler) is a modern algorithm that predicts when you’re about to forget a word and schedules its review for that exact moment — far more efficient than fixed intervals.',
  },
  {
    q: 'Who is Lexify for?',
    a: 'It’s built for Vietnamese learners building intermediate-to-advanced English, but anyone who wants to retain vocabulary from real reading will feel at home.',
  },
]

export function Faq() {
  return (
    <section
      id="faq"
      className="border-t border-hairline bg-surface/50 py-20 sm:py-28 dark:border-hairline-d dark:bg-surface-d/30"
    >
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl dark:text-ink-d">
            Good questions, answered
          </h2>
        </div>

        <div className="reveal mx-auto mt-12 max-w-3xl divide-y divide-hairline overflow-hidden rounded-3xl border border-hairline bg-surface dark:divide-hairline-d dark:border-hairline-d dark:bg-surface-d">
          {FAQS.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-medium text-ink marker:hidden dark:text-ink-d">
                <span className="font-display text-lg">{item.q}</span>
                <PlusIcon className="h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300 group-open:rotate-45 dark:text-ink-muted-d" />
              </summary>
              <div className="px-6 pb-5 text-[15px] leading-relaxed text-ink-muted dark:text-ink-muted-d">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
