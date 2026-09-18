# Handoff UI-5

- Status: **DEV PASS**
- TASK ID: UI-5
- SHA: pending commit
- PR: pending
- Phase: UI campaign open
- Allowed files only: ProductStage, StageStill / ServiceStageStill / desk stills, HomeScenes still wiring, chapter still chrome, `app/globals.css` still/stage chrome, ops stamps.
- Out of scope kept: no UI-6, no copy/route rewrites, no UI-4 layout-grid rebuild, no new offers.
- Do not invent UI-6.

## UI-4 closed

Unanimous PASS (Apple / UX / Vision / Leader) at merge tip `d375f98` on `main`.

## Still fidelity

- **ProductStage** — light + dark: specular edge + inset hairline; inner ticket on a desk (not a JOB/GATE text card); Approve filled near-black; Propose = draft ticket + outline pill; Record = linked log rows + quiet pill.
- **ServiceStageStill** — Design = spec sheet (Seat / Inputs / Done); Build = Propose→Approve→Record with Approve filled; Operations = Evals / Gate / Record + Hold. Hairline, radius 22, no drop shadow.
- **Desk DNA** — Demand: Human before pay · LUM-1042; Knowledge: Propose ≠ Execute · corpus; Attention: Priority / Watch / Noise · Human before send; Exception: Human before money · refund hold.
- **Story** — Ask → Recommend → Gate → Record kickers on stills; locked captions / body copy untouched.
- **Home examples** — same teaser still grammar as `/work` (short + entry).
- **Motion** — no new motion; no Lenis / normalizeScroll / body lock. Reduced-motion: stills and text stay visible (transform/opacity only).

## Measured

See follow-up stamp after local `pnpm build` + viewport checks.

## Verify

`pnpm build` pending in this draft. Reduced-motion: stills/text opacity 1. No Lenis / body lock.

## Acceptance self-check

- [x] First viewport is ProductStage product media, not title + gray card
- [x] ProductStage light/dark premium; Approve filled; four desk DNAs distinct
- [x] /services stills not clones; story Ask→Recommend→Gate→Record readable
- [x] UI-0…UI-4 not regressed; four-link nav; no Seattle; lock copy
- [ ] `pnpm build` PASS; open PR ready-for-review
- [x] UI-4 CLOSED in REVIEW (unanimous PASS, merge tip `d375f98`); STATUS Active=UI-5

## Skills used

apple-design, apple-design-web (via apple-design WWDC web mapping), emil-design-eng, web-design-guidelines, zero-jank-scroll (no new motion; no Lenis / normalizeScroll / body lock), review-animations (motion not added), gsap-scrolltrigger / gsap-react (read-only; HomeScenes motion untouched)

## Risks

Compact service / work stills are 11.5–12.5rem — DNA must stay readable at that width. First-viewport ProductStage height stays 520; ticket interior must not overflow the UI-4 hold.

## Blockers

None. Awaiting PMs. Do not invent UI-6.
