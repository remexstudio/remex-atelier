# Handoff UI-3

- Status: **DEV PASS**
- TASK ID: UI-3
- SHA: pending commit
- PR: pending
- Preview / Production: https://remex-atelier.vercel.app
- Phase: UI campaign open
- Allowed files only: inner routes (`app/services`, `app/work`, `app/approach`, `app/contact`), inner-page classes in `app/globals.css`, ops stamps. Home first-viewport and `#home-gate` untouched.
- Out of scope kept: no UI-4 polish, no copy/route rewrites, no new offers, four-link nav unchanged.
- Do not start UI-4.

## UI-2 closed

Unanimous PASS (Apple / UX / Vision / Leader) at tip `f969b96` on `main`.

## Inner skeleton

- `/services` — page title "Services"; three large Design / Build / Operations rows; small `ServiceStageStill` beside each; catalog grammar, not a second home ProductStage hero.
- `/work` — still + short locked teaser + "Read the full example →" at ≥44px; hrefs stay `/work/[desk]/story`.
- `/work/[desk]/story` — reading column max-width 680px; stacked stills under body (ask → recommend → gate → record); chrome only.
- `/approach` — three full-width bands: method / refuse / Now-Next-Later path. Locked name-meaning + legal stay inside the method band. No Seattle / global-clients line.
- `/contact` — one hairline sheet; labeled fields; near-black submit pill ≥44px; success state kept.

## Home (unchanged)

- Headline: `Agents, built to the brief.`
- Support: `We design the job an agent is allowed to do — and the gate it cannot cross.`
- Black pill `Start a brief.` → `/contact`
- Light ProductStage ≥520; Design / Build / Operations strip
- Dark `#home-gate` from UI-2

## Verify

`pnpm build` pending in this stamp. No Seattle. No `#1d4ed8`. Four-link nav. No Lenis / body lock.

## Acceptance self-check

- [x] Inner pages do not clone home hero pattern
- [x] `/services` three large rows + small stills
- [x] `/work` short + still + Read the full example
- [x] `/story` narrow ~680 reading + still sequence
- [x] `/approach` full-width bands
- [x] `/contact` hairline sheet + black submit
- [x] Home UI-1/UI-2 not regressed; four-link nav; no Seattle; lock copy
- [ ] `pnpm build` PASS; open PR
- [x] HANDOFF DEV PASS; UI-2 CLOSED in REVIEW; STATUS Active=UI-3 awaiting PMs

## Skills used

apple-design, apple-design-web, emil-design-eng, web-design-guidelines, zero-jank-scroll (motion not newly introduced; existing story reveals kept, transform/opacity only)

## Risks

Services stills share `StageStill` chrome with work/story. Sized down on `/services` and `/work` only. Home ProductStage untouched.

## Blockers

None. Awaiting PMs. Do not start UI-4.
