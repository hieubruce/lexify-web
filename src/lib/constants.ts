// Single source of truth for outbound links + copy used across the site.

export const CHROME_EXTENSION_ID = 'fjdohlngpfkfhpdgfmfmjjgdljfcfcfk'

export const LINKS = {
  // Chrome Web Store listing for the published extension
  chromeStore: `https://chromewebstore.google.com/detail/${CHROME_EXTENSION_ID}`,
  // Android APK — always resolves to the latest GitHub Release asset on lexify-app
  apkLatest: 'https://github.com/hieubruce/lexify-app/releases/latest/download/lexify.apk',
  // Human-readable releases page (changelog, checksums, older versions)
  releases: 'https://github.com/hieubruce/lexify-app/releases',
  privacy: 'https://hieubruce.github.io/lexify-privacy',
  contactEmail: 'nguyendinhminhhieu0409@gmail.com',
} as const

export const NAV = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Get Lexify', href: '#download' },
  { label: 'FAQ', href: '#faq' },
] as const
