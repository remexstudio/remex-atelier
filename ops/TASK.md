# TASK — UI-3

TASK ID: UI-3
REPO: remexstudio/remex-atelier
BASE: main tip after UI-2 CLOSED (`f969b96` or newer on main)

## Owner

UI campaign APPEARANCE ONLY. UI-0 / UI-1 / UI-2 are CLOSED (unanimous PASS). Do NOT regress home first viewport (Geist 600, ProductStage ≥520, Design/Build/Operations strip, black pill) or dark `#home-gate`. Do NOT rewrite offers, thesis sentences, or routes. English only in git. No Seattle / Global clients. No founder name. No English-first. No `#1d4ed8`.

## GOAL

Restyle INNER pages so they stop cloning the home hero (giant headline + gray lede + pale card). Keep locked copy; change skeleton / chrome / media grammar only.

## Required per route

1. `/services` — page title "Services"; three LARGE service rows (Design / Build / Operations) with small product stills beside each; NOT a second home hero with ProductStage as sole media. Catalog grammar.
2. `/work` — still + short teaser line + "Read the full example →" (≥44px); NO long body on cards; keep href to `/work/[desk]/story`.
3. `/work/[desk]/story` — narrow reading column max-width ~680px; stacked UI stills under body (ask→recommend→gate→record sequence already present — polish chrome only); not home-hero clone.
4. `/approach` — three FULL-WIDTH bands (method / refuse / Now-Next-Later path), not a stack of pale cards mimicking home.
5. `/contact` — one hairline sheet form + black/near-black submit pill (≥44); labeled fields; success state kept.
6. Four-link nav Work · Services · Approach · Contact identical everywhere (do not add chapter spam on inner pages).
7. Tokens: `#fff` / `#f5f5f7` / `#1d1d1f` / `#6e6e73`; Geist/system; display 600 + ~-0.03em where display used; hairlines; no drop shadows; module radius 18–28px; CTA near-black pill.
8. `prefers-reduced-motion`: all text visible; transform/opacity only; no Lenis / body overflow lock / scroll hijack.
9. Soft: clear any remaining literal Georgia/ui-serif fallbacks if still present outside remapped tokens.

## ALLOWED FILES

- `app/services/**`, `app/work/**`, `app/approach/**`, `app/contact/**` (and related page.tsx / layout)
- components used by those routes (e.g. work cards, story chrome, approach bands, contact form) — NOT HomeScenes first-viewport / gate rebuild unless a shared chrome bug
- `app/globals.css` (inner-page classes only; do not undo UI-1/UI-2 home tokens)
- `ops/TASK.md`, `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/REVIEW.md`, `ops/ITERATION.md`, `ops/BACKLOG.md`

## OUT OF SCOPE

New offers, copy rewrites of locked thesis, route changes, UI-4/UI-5 polish beyond skeleton, `/demo` as product, personal site.

## ACCEPTANCE

- [ ] Inner pages do not clone home hero pattern
- [ ] `/services` three large rows + small stills
- [ ] `/work` short + still + Read the full example
- [ ] `/story` narrow ~680 reading + still sequence
- [ ] `/approach` full-width bands
- [ ] `/contact` hairline sheet + black submit
- [ ] Home UI-1/UI-2 not regressed; four-link nav; no Seattle; lock copy
- [ ] `pnpm build` PASS; open PR; merge when ready or leave ready-for-review
- [ ] Write `ops/HANDOFF.md` DEV PASS; update ops/STATUS Active=UI-3 DEV PASS awaiting PMs; stamp UI-2 CLOSED in `ops/REVIEW.md` with Apple/UX/Vision/Leader PASS (tips `f969b96`)

## COMMIT

feat(site): restyle inner pages skeleton for UI-3

## SKILLS TO USE

apple-design, apple-design-web, emil-design-eng, web-design-guidelines, gsap-scrolltrigger, gsap-react, zero-jank-scroll, review-animations (only if motion touched).

Do not start UI-4.
