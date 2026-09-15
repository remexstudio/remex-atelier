# TASK V5-4 — 375 + reduced-motion on primary routes

TASK ID: V5-4
REPO: remexstudio/remex-atelier
BASE: tip after V5-3 PASS (`d809e6b` or newer main)
GOAL: Make every primary commercial route usable at **375** and complete under **`prefers-reduced-motion`**. Collapse narrow nav. No Lenis. No long pin traps.

## Primary routes in scope

`/` `/services` `/work` `/work/*` `/approach` `/contact` (+ shared `SiteChrome` nav/footer)

## Must ship

1. **375 primary nav collapse**
   - Work / Services / Approach / Contact must **not** force horizontal scroll as a four-link nowrap row
   - Pattern: menu button (≥44px) + open panel/drawer/list with labeled links + focus trap or escape; `aria-expanded` / `aria-controls`
   - Home chapter map (Services/Method/Examples/Brief/Roadmap) on narrow: collapse into the same menu, a secondary disclosure, or stacked — **no** hairline horizontal chip rail as the only way to jump

2. **scroll-margin**
   - Home `.home-mod[id]` keep `scroll-margin-top: var(--nav-height)`
   - Example chapters: `[data-ex-mod]` (and any in-page anchors) get the same — fix UX soft ADD from V5-2

3. **375 layout audit**
   - Stacked modules; no horizontal chip rails as page heroes
   - Hit targets ≥44px (nav, CTA, cards, form controls)
   - `/contact` form: labels visible, fields full-width, usable on 375
   - Long example narratives + stills readable without horizontal overflow

4. **`prefers-reduced-motion`**
   - Full commercial payload still visible (offer / path / proof / risk / start on home; catalog on services; narratives on examples)
   - Motion = transform/opacity only; once-reveal may become static; no scrub-required facts
   - No pin theater required to read

5. **Hard bans remain**
   - No Lenis / normalizeScroll / body overflow lock
   - No inventing prices/weeks/SOC2/named customers

## ALLOWED FILES

- `components/SiteChrome.tsx`
- `app/globals.css`
- `components/HomeScenes.tsx` (only if chapter map / scroll-margin / narrow layout needs it)
- `components/ContactForm.tsx` / `app/contact/page.tsx` (375 form only)
- `components/*Chapter.tsx` (scroll-margin / narrow still stack only — no narrative rewrite)
- `app/approach/page.tsx` (narrow/RM only if broken)
- Small helper under `components/` for mobile nav if needed
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- V5-5 still media stage polish / type token restage beyond nav
- Rewriting services/examples/home commercial copy
- Personal site

## ACCEPTANCE

- [ ] 375: primary nav collapsed (no four-link nowrap horizontal trap); chapter links not a chip rail
- [ ] Menu controls ≥44px; keyboard + `aria-*` sane; focus-visible
- [ ] `[data-ex-mod]` (and home mods) have `scroll-margin-top: var(--nav-height)`
- [ ] Primary routes readable at 375; contact form usable
- [ ] RM: full payload without scrub/pin
- [ ] No Lenis; `pnpm build` PASS; prefer `vercel deploy --prod`
- [ ] HANDOFF; DEV PASS; do not open V5-5

## SKILLS TO USE

`/apple-design` `/apple-design-web` `/apple-design-motion` `/emil-design-eng`
`/gsap-scrolltrigger` `/gsap-react` `/cinematic-scroll-storytelling` `/zero-jank-scroll` `/review-animations`

## COMMIT MESSAGE

`fix(a11y): collapse 375 nav and harden reduced-motion routes`
