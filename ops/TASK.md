# TASK V7-3 — gate chapter fact + appearance verify

TASK ID: V7-3
REPO: remexstudio/remex-atelier
BASE: tip after V7-2 close (`d34e086` or newer main after this ops stamp)
GOAL: Distinct `#home-gate` chapter fact (one fact per scene) + full appearance verification.

Owner override: **APPEARANCE REOPEN** briefly for this soft ADD + verify. No Seattle / Global. No founder. No `/demo` as product. Do not change offers or routes.

## 1. Distinct gate fact (REQUIRED)

`#home-method` and `#home-gate` currently share the same H2 + lede. Give `#home-gate` its own headline + one support line (English, thesis-compatible, not a new slogan):

- Method keeps existing Propose / Approve / Record explanation on `#f5f5f7`
- Gate dark chapter gets a distinct fact about the gate the agent cannot cross / named human / irreversible stop — reuse locked phrases from `docs/copy-locks.md` where possible (`A human still decides.` / gate language). Do NOT invent metrics or geography.
- Keep ProductStage dark in the gate chapter
- Close-map Gate link still works; scroll-margin intact

## 2. Verification (REQUIRED — document in HANDOFF)

Against owner DONE WHEN, with evidence:

1. First viewport is NOT title + gray JOB/GATE card alone — product STAGE present
2. Product stage on home AND on gate chapter
3. Display type Geist/system weight 600, tracking ~-0.03em
4. CTA black/near-black pill
5. Nav four links every primary route
6. Inner pages do not reuse home hero
7. 375 and 1440 hold the stage (screenshot or measured)
8. Copy/routes/offers unchanged except the new distinct gate H2/lede

Smoke: `/` `/services` `/work` `/approach` `/contact` + one `/work/*/story` → 200
`pnpm build` PASS; `vercel deploy --prod`; record deploy id.

Screenshots required in HANDOFF or PR: home first viewport 1280 + 375; home gate dark 1280; services 1280; work 1280.

## ALLOWED FILES

- `components/HomeScenes.tsx`
- `components/ProductStage.tsx` if needed
- `app/globals.css` (gate chapter only)
- `ops/*`

## OUT OF SCOPE

- New routes, new services copy, story essay rewrites
- V7-4 invention

## ACCEPTANCE

- [ ] Distinct gate H2+lede (not shared with method)
- [ ] DONE WHEN checklist all checked in HANDOFF with evidence
- [ ] build + prod deploy + route smoke
- [ ] DEV PASS; await Leader + PM review

## SKILLS TO USE

`apple-design` `apple-design-web` `apple-design-motion` `emil-design-eng` `gsap-scrolltrigger` `gsap-timeline` `gsap-react` `cinematic-scroll-storytelling` `zero-jank-scroll` `review-animations`

Also read `docs/ia-v3.md`, `docs/scroll-score-v3.md`, `docs/design.md`, `docs/copy-locks.md`, and the chrome files named above. Skill files may be absent in this environment — apply those principles from `docs/design.md` and the locks in `docs/copy-locks.md`.

## COMMIT MESSAGE

`feat(home): give gate chapter its own fact for V7-3`
