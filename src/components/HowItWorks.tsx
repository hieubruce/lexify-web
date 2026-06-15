const STEPS = [
  {
    n: '01',
    title: 'Capture',
    body: 'Read English anywhere — articles, docs, social. Hit a word you don’t know and save it to Lexify in one click.',
  },
  {
    n: '02',
    title: 'Review',
    body: 'Each day, Lexify hands you only the cards that are due. Recall the meaning, rate how it felt, move on. Five minutes.',
  },
  {
    n: '03',
    title: 'Remember',
    body: 'FSRS stretches the gaps between reviews as words stick — until they’re yours for good, in speaking and writing.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how"
      className="border-y border-hairline bg-surface/50 py-20 sm:py-28 dark:border-hairline-d dark:bg-surface-d/30"
    >
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            How it works
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl dark:text-ink-d">
            Three steps, then it’s a habit
          </h2>
        </div>

        <ol className="reveal mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative">
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-13px] top-9 hidden h-px w-6 bg-hairline md:block dark:bg-hairline-d"
                />
              )}
              <div className="h-full rounded-3xl border border-hairline bg-surface p-8 dark:border-hairline-d dark:bg-surface-d">
                <span className="font-display text-5xl font-semibold text-primary-600/25 dark:text-primary-400/25">
                  {s.n}
                </span>
                <h3 className="font-display mt-3 text-2xl font-semibold text-ink dark:text-ink-d">
                  {s.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-muted dark:text-ink-muted-d">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
