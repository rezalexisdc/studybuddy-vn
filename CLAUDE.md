# StudyBuddy.vn

A learning web app for Vietnamese high-school students (lớp 10, 11, 12) covering **all THPT subjects**, not only
English. It's the sister project of EnglishTalk.vn (`~/Documents/english-learning-app`, repo
`github.com/rezalexisdc/englishtalkvn`), uses the same stack, and copies its patterns where possible.
Domain: **studybuddy.vn**, bought from Tenten; it will be hosted on Vercel.

Keep this file short and up to date, especially "Status / next steps" at the bottom.

## Stack (same as EnglishTalk.vn)
- Vite + React 19 + react-router-dom, plain CSS (`src/index.css`), oxlint (`npm run lint`).
- Firebase: Google sign-in + Firestore (`src/firebase.js`). Without `VITE_FIREBASE_*` in `.env.local` the
  app runs as a guest and hides the sign-in button.
- Vercel hosting. `vercel.json` has an SPA rewrite and doesn't deploy `claude/*` branches.
- `api/*.js` = Vercel Functions. `vite.config.js` has a dev shim so `npm run dev` serves them too.
- PWA: `public/manifest.webmanifest` + `public/sw.js` (a minimal SW, only there so the site can be installed).

## Backups
The code lives in `~/Documents/studybuddy-vn`, **not** inside Google Drive: Drive for desktop chokes on
`node_modules` and `.git` (EnglishTalk.vn's synced folder piled up 70k temp files / 4.9 GB in Nov 2026).
GitHub is the cloud copy of the code, so push often. Secrets that git ignores (`.env.local`,
`firebase-service-account.json`) get a copy in a "StudyBuddy secrets" folder in Google Drive.

## Subjects
`src/data/subjects.js` lists the subjects grouped the way the THPT graduation exam groups them (2018 curriculum,
from 2025): compulsory Toán + Ngữ văn, plus 2 electives. Routes: `/` (subject picker), `/mon/:slug` (subject page
with Lớp 10/11/12 tabs; no content yet).

## Standing goals (carried over from EnglishTalk.vn)
- **Mobile comes first.** Most students use a phone. Check every change at phone width first.
- **No dead space.** On wide desktops (~1568px), use columns and grids that fill the row. Only cap text blocks
  (with `ch`) or the whole page (~1500px).
- **Never name a CSS class `ad`, `ad-*`, `ads`, `advert*`, `sponsor*`, `promo*` or `banner*`.** Ad blockers hide them.
- **Vietnamese first.** The UI is in Vietnamese, with English names as secondary labels. Use fonts with full
  Vietnamese diacritics (Be Vietnam Pro).
- For visual/layout work, load a design skill (e.g. `frontend-design`) before writing code.

## Brand (provisional, owner can change it)
The look is a *vở ô li* school notebook: grid paper (`.paper`), a red margin line, and *mực tím* violet ink.
Tokens are in `src/index.css`: `--ink #4b2fa8` (primary), `--margin-red #e0484b` (margin / errors),
`--highlight #ffe45c` (rewards, used only as a fill, never as text), `--ink-deep #1b1640` (body text).
Each subject has a notebook-cover colour (`cover` in `subjects.js`). Dark theme is navy, defined in the same file.

## Status / next steps
- [x] Project scaffolded, runs locally (`npm run dev`).
- [ ] GitHub repo `rezalexisdc/studybuddy-vn` (private) + first push.
- [x] Firebase project `studybuddy-vn-3d8b0` (display name studybuddy-vn): Google sign-in enabled, Firestore
      (default) database created, `.env.local` filled in. Firestore rules are still the production-mode default
      (deny all), so write real rules before saving any data.
- [ ] Add the same `VITE_FIREBASE_*` vars in Vercel; add `studybuddy.vn` + `www.studybuddy.vn` to Firebase
      Authentication → Settings → Authorized domains.
- [ ] Vercel project linked to the repo, then the domain: add `studybuddy.vn` in Vercel, set the DNS records
      in Tenten's DNS panel (A record `@` → Vercel's IP, CNAME `www` → Vercel's target, as Vercel shows them).
- [ ] Real logo + PNG PWA icons (192/512/maskable).
- [ ] Content: lesson / practice / test format per subject and grade.
