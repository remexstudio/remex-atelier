# TASK V6-5 — home first viewport three services

TASK ID: V6-5
REPO: remexstudio/remex-atelier
BASE: tip after V6-4 PASS (`3863258` or newer main after this ops stamp)
GOAL: First viewport of `/` must show the locked promise AND three buyable services (Design / Build / Operations). JOB/GATE may support; it cannot be the only object under the headline. Examples stay after services. Per `docs/ia-v6.md` §4.1 and §6.

## Required layout (first viewport)

1. Locked promise: `Agents, built to the brief.` (+ allowed support lines from copy-locks)
2. Three buyable services visible without scrolling on a typical 1280×800 / 1440 desktop first screen — Design / Build / Operations mapping to Agent product design, Agent build, Agent operations (reuse `CATALOG_LINES` / existing short who+done; do not invent pricing or weeks)
3. JOB/GATE hero still may sit beside or under the three services as supporting media — not alone under the headline

## Module order (unchanged after first viewport)

services (in first viewport) → method → example teasers (short + `Read the full example →`) → brief → Now/Next/Later → CTA

Do not pull Selected examples into the first viewport. Do not reopen four-SKU shop.

## Desktop

1280 and 1440: balanced columns for the three services in the hero band; no crushed text; no single JOB/GATE card floating in empty space as the offer.

## ALLOWED FILES

- `components/HomeScenes.tsx`
- `app/globals.css` (home hero / first-viewport only)
- `lib/*` only if needed to share catalog short lines already used on home
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- V6-6 Approach Next rewrite
- Changing `/work` story pages
- Nav chrome changes
- Geo slogans (already killed)

## ACCEPTANCE

- [ ] First viewport shows promise + Design / Build / Operations (buyable offer readable without scrolling on 1280 desktop)
- [ ] JOB/GATE is not the sole object under the headline
- [ ] Examples remain after services
- [ ] Film canvas / frosted nav / 4-item primary nav unchanged
- [ ] `pnpm build` PASS; prefer `vercel deploy --prod` + smoke `/`
- [ ] HANDOFF; DEV PASS; do not open V6-6

## SKILLS TO USE

`/apple-design` `/apple-design-web` `/emil-design-eng` `/gsap-scrolltrigger` `/gsap-react` `/zero-jank-scroll` `/review-animations` `/web-design-guidelines`

## COMMIT MESSAGE

`feat(home): put three services in the first viewport`
