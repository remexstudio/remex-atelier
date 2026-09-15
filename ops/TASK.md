# TASK V5-3 — home services-first rebuild

TASK ID: V5-3
REPO: remexstudio/remex-atelier
BASE: tip after V5-2 PASS (`32f8825` or newer main)
GOAL: Rebuild `/` per `docs/ia-v5.md` §4.1. **Services before examples.** Not a four-SKU shop. Not six isomorphic pins. Film canvas.

## Required home module order

| # | Module | Must carry |
| --- | --- | --- |
| 1 | Hero | Locked promise: Agents, built to the brief. / We design the job… / One workflow. One agent. A human still decides. |
| 2 | Services | Layer A three beats: Agent product design / Agent build / Agent operations (short who+done or deliverable; link to `/services`) — **not** a product grid of four desks |
| 3 | Method / gate | Job + gate + Propose → Approve → Record; human still decides. At most **one** short pin **only if** it reveals a new fact; else shallow |
| 4 | Example teasers | Four desks as **Selected examples** proof (Demand / Knowledge / Attention / Exception) + gate one-liners → `/work/*`. Not “our four products” |
| 5 | How a brief starts | BRIEF_ASKS four questions |
| 6 | Now / Next / Later | Extensibility **direction only** — not shipped SaaS |
| 7 | Start a brief | CTA → `/contact` |

≥3 distinct layout grammars. Ban chip-as-page hero. Ban horizontal chip rails as home hero. Ban Lenis / normalizeScroll / body lock.

Reuse constants from `lib/services-catalog.ts`, `lib/selected-examples.ts`, `lib/brief-asks.ts` where possible (DRY).

## Kill from current home

- Framing that sells four named agents as the catalog / hire wall
- “Jobs we hire” / product-shop rail as the primary commercial surface before services
- Warm-paper / chip-as-page leftovers

## Visual / UX

- `#fff/#f5f5f7`; large negative-tracking display; frosted nav; hairlines; CTA-only accent
- 375: stacked modules; stills above copy where split; ≥44 targets; full payload under RM
- Chapter map / in-page anchors may restage to new module ids
- Soft: if easy, add `scroll-margin-top: var(--nav-height)` on new home module ids (full 375 nav collapse stays V5-4)

## ALLOWED FILES

- `components/HomeScenes.tsx`
- `app/page.tsx` (metadata only if needed)
- `app/globals.css` (home modules)
- `components/SiteChrome.tsx` (chapter map / home anchors only)
- `lib/` shared constants only if needed for home
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- Rewriting `/services` or four long cases (PASS)
- Approach full rewrite (can soft-link Now/Next/Later detail to `/approach`)
- V5-4 nav collapse / full primary-route RM audit
- V5-5 still media stage polish
- Inventing prices, weeks, SOC2, named customers

## ACCEPTANCE

- [ ] Home order: services → method → example teasers → brief asks → Now/Next/Later → CTA
- [ ] Services module is Layer A catalog, not four desks
- [ ] Example teasers use desk display names + Selected examples framing
- [ ] Locked SAY lines where used; no four-SKU / English-products language
- [ ] ≥3 grammars; no six isomorphic pins; no Lenis; RM keeps full commercial payload
- [ ] `pnpm build` PASS; prefer `vercel deploy --prod`
- [ ] HANDOFF; DEV PASS; do not open V5-4

## SKILLS TO USE

`/apple-design` `/apple-design-web` `/apple-design-motion` `/emil-design-eng`
`/gsap-scrolltrigger` `/gsap-react` `/cinematic-scroll-storytelling` `/zero-jank-scroll` `/review-animations`

## COMMIT MESSAGE

`feat(home): restage services-first commercial home`
