# TASK V5-5 — Apple / motion polish (final V5 craft knife)

TASK ID: V5-5
REPO: remexstudio/remex-atelier
BASE: tip after V5-4 PASS (`a41037b` or newer main)
GOAL: Final commercial craft pass. Kill remaining chip-as-page feel. Elevate Selected examples stills to **product-page media stages**. Tighten type / frosted nav tokens. Do **not** dilute V5 thesis or rewrite long case narratives.

## Must ship

1. **Still media stage (examples + home teasers)**
   - `/work/*` stills and home example teasers: larger, calmer product frames (media), not DNA mini-chip stacks as the page hero
   - Keep captions; keep distinct desk DNA facts inside frames
   - 375: single column, no horizontal chip rails; overflow contained

2. **Kill chip-as-page leftovers**
   - Audit primary routes for pill/tag/chip rails used as the main visual
   - Decorative chips only where they support a still — never the whole chapter grammar

3. **Type + nav tokens**
   - Confirm `#ffffff` / `#f5f5f7`, SF-like sans, large negative-tracking display on hero/desk H1
   - Frosted sticky nav 44–48px; hairlines; CTA-only accent
   - Soft from UX: on Menu open, move focus into first panel link (optional if ≤ small change)

4. **Motion**
   - transform/opacity only; RM full payload; no Lenis / normalizeScroll / body lock
   - No new long pins; no six-isomorphic home return

5. **Approach polish (light)**
   - Ensure `/approach` still carries method + name meaning once + refuse + Now/Next/Later detail + trust if missing — film grammar aligned; **no** Chinese outside etymology glyphs

## Do not

- Change desk display names, locked SAY, trust paragraph, engagement labels, example closer
- Invent prices / weeks / SOC2 / named customers / four-SKU framing
- Open personal site or founder name

## ALLOWED FILES

- `app/globals.css`
- `components/*Chapter.tsx` (still markup/CSS hooks only)
- `components/HomeScenes.tsx` (teaser stills only)
- `app/work/page.tsx` (index still presentation)
- `components/SiteChrome.tsx` / `components/SiteNavMenu.tsx` (focus-into-panel soft)
- `app/approach/page.tsx` (light film/align only)
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- New routes; services/catalog rewrite; narrative word-count rewrite
- Soft backlog beyond this knife

## ACCEPTANCE

- [ ] Example stills read as media stages, not chip pages (desktop + 375)
- [ ] No chip-as-page primary grammar on primary routes
- [ ] Type/nav tokens film-locked; CTA ≥44
- [ ] RM + no Lenis; commercial locks untouched
- [ ] `pnpm build` PASS; `vercel deploy --prod` + smoke
- [ ] HANDOFF; DEV PASS; do not invent V5-6

## SKILLS TO USE

`/apple-design` `/apple-design-web` `/apple-design-motion` `/emil-design-eng`
`/gsap-scrolltrigger` `/gsap-react` `/cinematic-scroll-storytelling` `/zero-jank-scroll` `/review-animations`

## COMMIT MESSAGE

`feat(site): elevate still media and polish film chrome`
