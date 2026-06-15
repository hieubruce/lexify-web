# Lexify — Product Site

Marketing / landing site for [Lexify](https://github.com/hieubruce/Lexify): one page that
introduces the product, links to the **Chrome extension** (Chrome Web Store) and the
**Android app** (APK on GitHub Releases), and explains how to install both.

Built with **Vite + React + TypeScript + Tailwind**, matching the app's "Ink & Paper"
brand (Emerald primary, Coral reward accent, Fraunces + Inter, light/dark).

This repo contains **only the website** — no app source code.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build → dist/
npm run preview    # serve the built dist/ locally
```

## Where the links point

All outbound links live in [`src/lib/constants.ts`](src/lib/constants.ts):

| Link | Target |
|------|--------|
| Add to Chrome | `chromewebstore.google.com/detail/<extension-id>` |
| Download APK | `github.com/hieubruce/lexify-app/releases/latest/download/lexify.apk` |
| All versions | `github.com/hieubruce/lexify-app/releases` |
| Privacy | `hieubruce.github.io/lexify-privacy` |

> The APK download resolves to the **latest** GitHub Release on `lexify-app`, so the
> button never needs updating — just publish a new release and name the asset
> `lexify.apk`.

## Deploy

The build uses `base: './'` (relative asset paths), so `dist/` works on any host.

### Option A — GitHub Pages (zero extra accounts)
A workflow is included at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
To enable: repo **Settings → Pages → Source: GitHub Actions**. Every push to `main`
builds and publishes. Site URL: `https://hieubruce.github.io/lexify-web/`.

### Option B — Firebase Hosting (custom domain, same project as the app)
```bash
npm i -g firebase-tools
firebase init hosting     # public dir: dist  ·  SPA: yes
npm run build && firebase deploy --only hosting
```

## TODO (nice-to-have)
- Real `og:image` (1200×630 PNG) for link previews on social.
- Screenshots of the real app/extension in the feature section.
