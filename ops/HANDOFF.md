# Handoff R4 REWORK

- Status: delivered
- SHA: 59cdfc6
- Commit message (ready): `fix(site): apple chapter pin and scrub feel`
- Preview: https://remex-atelier.vercel.app (after deploy)
- Local build: `pnpm build` PASS (Next.js 16.3.5)

## Skills used
- apple-design-web (invoked by parent before edits)
- review-animations (invoked by parent before edits)
- gsap-scrolltrigger (invoked by parent before edits)

## Defects fixed
1. **StoryScenes — one pinned stage + five scrub copy beats.** Replaced five separate `pin:true` sections with a single `.story-chapter` ScrollTrigger (`end: "+=420%"`, `scrub:1`). Copy beats `#story-s1`…`#story-s5` absolute-stack and crossfade; five stage stills morph pain→agent→gate→record→cta via opacity/transform only. Stage shell never `autoAlpha:0`.
2. **Home pin runway longer.** Per-chapter `end` changed `+=90%` → `+=150%`; longer end hold (`duration: 0.55`) so one idea lingers. Still `pin:true`, `scrub:1` on `#home-s1`…`#home-s6`.
3. **No blank slides on home.** Removed `gsap.set(stage+copy, autoAlpha:0)`. Stage starts `autoAlpha:1` with soft `y`/`scale` lift only; copy crossfades in.
4. **S2 job-name still.** Replaced literal “Job title” with lit **Atelier Concierge** (`data-job-title` dim→full). Removed competing “One brief. One seat.” Locked headlines unchanged.
5. **S5 hierarchy.** “Design the job.” = `home-headline` (h2); “Build the gate.” / “Keep the record.” = `home-support` sequential scrub reveals.
6. **Story kicker removed.** `productName` no longer in copy column; shown as stage chrome frame label. Beat A copy = locked pain line only. Beat E = “Start a brief.” + CTA `/contact`.

## Architecture summary
- **Home:** six chaptered pins; longer runway; stage always present; transform/opacity only; matchMedia skip when `prefers-reduced-motion` or height &lt; 520px.
- **Stories:** one chapter pin per route; persistent stage + five scrubbing copy beats; default CSS = readable static stack; `.story-film--motion` opts into absolute scrub layers. No Lenis / no `normalizeScroll`.

## Files changed
- `components/HomeScenes.tsx`
- `components/StoryScenes.tsx`
- `app/globals.css` (film/chapter typography + story chapter layout only)
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/BACKLOG.md`

## Acceptance
- [x] Locked copy exact (re-read copy-locks + scroll-score)
- [x] Skills invoked before edits (parent)
- [x] Story: single pin + five scrub beats; stage morphs; transform/opacity only
- [x] Home: six pins, longer runway, no blank slides; S2/S5 fixed
- [x] Story beat A: no productName kicker
- [x] prefers-reduced-motion / short viewport: no pin; static stack
- [x] `pnpm build` PASS
- [x] Commit: `fix(site): apple chapter pin and scrub feel`

## DEV
PASS

## Stop
R4 REWORK complete on disk — awaiting commit/push + dual PASS.
