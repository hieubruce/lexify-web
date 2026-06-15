import { SpeakerWaveIcon } from '@heroicons/react/24/solid'

const RATINGS = [
  { label: 'Again', interval: '1m', tone: 'text-red-600 border-red-500/30' },
  { label: 'Hard', interval: '8m', tone: 'text-orange-600 border-orange-500/30' },
  { label: 'Good', interval: '3d', tone: 'text-primary-600 border-primary-600/30' },
  { label: 'Easy', interval: '6d', tone: 'text-blue-600 border-blue-500/30' },
]

/** A faithful, static render of a Lexify review card — the brand's signature surface. */
export function FlashcardMockup() {
  return (
    <div className="relative">
      {/* soft brand glow behind the card */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br
                   from-primary-500/20 via-primary-400/5 to-coral-500/10 blur-2xl"
      />
      <div
        className="w-full max-w-sm rounded-3xl border border-hairline bg-surface p-6 shadow-xl
                   shadow-ink/5 dark:border-hairline-d dark:bg-surface-d dark:shadow-black/40"
      >
        {/* meta bar */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-ink-muted dark:text-ink-muted-d">
            noun · /əˈbændən/
          </span>
          <button
            type="button"
            aria-label="Play pronunciation"
            className="grid h-8 w-8 place-items-center rounded-full text-primary-600 dark:text-primary-400"
          >
            <SpeakerWaveIcon className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* word */}
        <h3 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink dark:text-ink-d">
          abandon
        </h3>

        {/* definitions */}
        <div className="mt-4 space-y-3 text-left">
          <p className="text-[15px] leading-relaxed text-ink dark:text-ink-d">
            to leave someone or something, especially when you should stay and look after them.
          </p>
          <p className="text-[15px] font-medium text-primary-700 dark:text-primary-400">
            bỏ rơi, từ bỏ
          </p>
          <p className="border-l-2 border-hairline pl-3 text-sm italic text-ink-muted dark:border-hairline-d dark:text-ink-muted-d">
            “They had to abandon the car and walk the rest of the way.”
          </p>
        </div>

        {/* rating buttons */}
        <div className="mt-6 grid grid-cols-4 gap-2">
          {RATINGS.map((r) => (
            <div
              key={r.label}
              className={`flex flex-col items-center gap-0.5 rounded-xl border bg-paper/40 py-2
                          dark:bg-white/[0.03] ${r.tone}`}
            >
              <span className="text-xs font-semibold">{r.label}</span>
              <span className="text-[10px] text-ink-muted dark:text-ink-muted-d">{r.interval}</span>
            </div>
          ))}
        </div>
      </div>

      {/* floating "due today" pill */}
      <div
        className="absolute -right-3 -top-4 flex items-center gap-1.5 rounded-full border
                   border-hairline bg-surface px-3 py-1.5 text-xs font-semibold text-ink shadow-lg
                   dark:border-hairline-d dark:bg-surface-d dark:text-ink-d"
      >
        <span className="h-2 w-2 rounded-full bg-coral-500" />
        12 due today
      </div>
    </div>
  )
}
