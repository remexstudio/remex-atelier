# TASK V7-2 — finish owner appearance DoD

TASK ID: V7-2
REPO: remexstudio/remex-atelier
BASE: tip after V7-1 PASS (`7a8b493` or newer main after this ops stamp)
GOAL: Finish owner DONE WHEN for appearance restyle.

Owner override: **APPEARANCE FIRST**. One approved copy fix for Approach / home Next. No Seattle / Global. No founder. No `/demo` as product. Do not change offers or routes.

## 1. Home dark gate chapter (REQUIRED)

Owner: "gate as a dark stage" and "A product stage exists on home and on the gate chapter."

Add one `#000` / near-black gate chapter on `/` AFTER method (hire on `#f5f5f7`) and BEFORE or after examples — recommend after method: dark stage with Propose → Approve → Record product-stage language (can reuse ProductStage variant dark). Keep existing thesis sentences; do not invent slogans.

## 2. Soft ADDs from V7-0 / V7-1 reviews

- ProductStage: remove decorative `aria-hidden` OR expose one visible mechanism line for SR (UX / Vision soft ADD)
- `.stage-still` / story stills: include in `prefers-reduced-motion` forced-visible path like product-stage

## 3. Home chapters polish (appearance)

- Brief (`#home-brief`): more compact instrument (tight rows, hairlines) — keep the four brief asks text
- Close: black pill already — ensure consistent `.home-cta` / `.cta-pill`
- Examples: still thumbnails stay; ensure not sparse gray ocean on 1440

## 4. 375 / 1440 regression

- 375: Menu four links; stage under type; ≥44 targets; first viewport readable (headline + stage or strip)
- 1440: first viewport still shows headline + stage + three service names; no tiny card in gray ocean on home / services / approach / work / contact

## 5. Approach Next copy fix (approved content lock from V6)

On home roadmap AND `/approach`, Next must mean: reuse the method (job spec + gate + record) on a **new** seat — NOT deepen the four named desks, NOT "Repeated modules become internal tools" as the Next beat if that conflicts.

Use direction from `docs/ia-v6.md` §7:

- Now: Ship one gated seat
- Next: Reuse method on a new seat
- Later: Modules / studio-owned gated products

Do not invent dates / pricing. Keep English. Appearance bands stay.

## ALLOWED FILES

- `components/HomeScenes.tsx`, `ProductStage.tsx` (+ dark variant)
- `components/*Chapter*`, story stills, SiteChrome if needed
- `app/globals.css`
- `app/approach/page.tsx` (Next copy + bands)
- `app/work/**`, `app/services`, `app/contact` only for RM / 375 / 1440 polish
- `lib/*` if roadmap strings live there
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- New routes, founder, geo slogans, four-SKU shop
- Rewriting service offers or story essays beyond Next roadmap lock
- Inventing V7-3

## ACCEPTANCE

- [ ] Dark gate chapter with product stage on home
- [ ] ProductStage SR soft ADD addressed
- [ ] stage-still RM visibility
- [ ] Approach / home Next = method reuse on new seat
- [ ] 375 + 1440 hold stage / no gray ocean
- [ ] Copy elsewhere / routes / offers unchanged; `pnpm build` PASS; `vercel deploy --prod`
- [ ] HANDOFF DEV PASS; do not invent V7-3 unless Leader says

## SKILLS TO USE

`apple-design` `apple-design-web` `apple-design-motion` `emil-design-eng` `gsap-scrolltrigger` `gsap-timeline` `gsap-react` `cinematic-scroll-storytelling` `zero-jank-scroll` `review-animations`

Also read `docs/ia-v3.md`, `docs/ia-v6.md` §7, `docs/scroll-score-v3.md`, `docs/design.md`, `docs/copy-locks.md`. Skill files may be absent in this environment — apply those principles from `docs/design.md` and the locks in `docs/copy-locks.md`.

## COMMIT MESSAGE

`feat(home): add dark gate stage and finish V7 appearance polish`
