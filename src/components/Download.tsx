import {
  ArrowDownTrayIcon,
  ShieldCheckIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import { Button } from './Button'
import { ChromeIcon, AndroidIcon } from './icons'
import { LINKS } from '../lib/constants'

const INSTALL_STEPS = [
  'Tap “Download APK” above on your Android phone.',
  'Open the downloaded file. Android will ask to allow installs from this source — tap Settings → enable it for your browser.',
  'Tap Install. If Play Protect shows a warning, choose “Install anyway” — it appears for any app outside the Play Store.',
  'Open Lexify, sign in, and your words sync instantly with the extension.',
]

export function Download() {
  return (
    <section id="download" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Get Lexify
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl dark:text-ink-d">
            Start in under a minute
          </h2>
          <p className="mt-4 text-lg text-ink-muted dark:text-ink-muted-d">
            Free on both platforms. Pick where you read most — you can add the other anytime.
          </p>
        </div>

        <div className="reveal mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
          {/* Chrome */}
          <div className="flex flex-col items-center rounded-3xl border border-hairline bg-surface p-8 text-center dark:border-hairline-d dark:bg-surface-d">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-paper dark:bg-white/[0.04]">
              <ChromeIcon className="h-9 w-9" />
            </div>
            <h3 className="font-display mt-5 text-2xl font-semibold text-ink dark:text-ink-d">
              Chrome Extension
            </h3>
            <p className="mt-2 grow text-[15px] text-ink-muted dark:text-ink-muted-d">
              One click from the Chrome Web Store. Works on Chrome, Edge and Brave.
            </p>
            <Button href={LINKS.chromeStore} variant="solid" size="lg" className="mt-6 w-full">
              <ChromeIcon className="h-5 w-5" />
              Add to Chrome
            </Button>
          </div>

          {/* Android */}
          <div className="flex flex-col items-center rounded-3xl border border-primary-600/30 bg-surface p-8 text-center ring-1 ring-primary-600/10 dark:border-primary-400/30 dark:bg-surface-d">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary-50 dark:bg-primary-400/10">
              <AndroidIcon className="h-9 w-9 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="font-display mt-5 text-2xl font-semibold text-ink dark:text-ink-d">
              Android App
            </h3>
            <p className="mt-2 grow text-[15px] text-ink-muted dark:text-ink-muted-d">
              Download the APK directly — no Play Store account needed.
            </p>
            <Button href={LINKS.apkLatest} variant="solid" size="lg" className="mt-6 w-full">
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download APK
            </Button>
            <a
              href={LINKS.releases}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:underline dark:text-primary-400"
            >
              All versions & checksums
              <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Sideload guide */}
        <div className="reveal mx-auto mt-6 max-w-3xl rounded-3xl border border-hairline bg-surface/60 p-7 dark:border-hairline-d dark:bg-surface-d/40">
          <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-d">
            Installing the Android app
          </h3>
          <ol className="mt-4 space-y-3">
            {INSTALL_STEPS.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-600 text-xs font-semibold text-white">
                  {i + 1}
                </span>
                <span className="text-[15px] leading-relaxed text-ink dark:text-ink-d">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 flex items-start gap-2.5 rounded-2xl bg-primary-50 p-4 text-sm text-primary-800 dark:bg-primary-400/10 dark:text-primary-300">
            <ShieldCheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
            <p>
              The APK is signed and published by us. Every release lists its SHA-256
              checksum so you can verify the file is genuine before installing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
