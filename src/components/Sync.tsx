import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { ChromeIcon, AndroidIcon } from './icons'

const POINTS = [
  'Add a word on your laptop, review it on the bus.',
  'One account — your decks, streak and progress stay in sync.',
  'Works offline; changes sync the moment you reconnect.',
]

export function Sync() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Everywhere you learn
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl dark:text-ink-d">
            On Chrome and on Android — one Lexify
          </h2>
          <p className="mt-4 text-lg text-ink-muted dark:text-ink-muted-d">
            Use the browser extension while you work and the mobile app while you’re out.
            They share the same account and the same words, so your review queue is always
            right where you left it.
          </p>

          <ul className="mt-7 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400" />
                <span className="text-ink dark:text-ink-d">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* two device cards */}
        <div className="reveal grid grid-cols-2 gap-4">
          <DeviceCard
            icon={<ChromeIcon className="h-8 w-8" />}
            kind="Browser extension"
            name="Chrome, Edge & Brave"
            note="Save words as you browse"
          />
          <DeviceCard
            icon={<AndroidIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
            kind="Mobile app"
            name="Android"
            note="Review on the go"
          />
        </div>
      </div>
    </section>
  )
}

function DeviceCard({
  icon,
  kind,
  name,
  note,
}: {
  icon: React.ReactNode
  kind: string
  name: string
  note: string
}) {
  return (
    <div
      className="flex flex-col gap-3 rounded-3xl border border-hairline bg-surface p-6 text-center
                 shadow-sm dark:border-hairline-d dark:bg-surface-d"
    >
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-paper dark:bg-white/[0.04]">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-ink-muted dark:text-ink-muted-d">
          {kind}
        </p>
        <p className="font-display text-lg font-semibold text-ink dark:text-ink-d">{name}</p>
        <p className="mt-1 text-sm text-ink-muted dark:text-ink-muted-d">{note}</p>
      </div>
    </div>
  )
}
