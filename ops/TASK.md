# TASK — UI-5

TASK ID: UI-5
REPO: remexstudio/remex-atelier
BASE: main tip `d375f98` (or newer; after UI-4 CLOSED merge)
GOAL: Raise STILL FIDELITY — fabricated UI stills must read as product media (apple.com product-page grammar), not gray placeholder cards. Each desk DNA must stay visually distinct. Appearance only.

## Owner

UI-4 CLOSED (unanimous PASS). Continuous UI campaign. Still chrome only.

## Required

1. ProductStage (home + gate): specular edge, inset hairline, Approve filled clear, Propose/Record distinct states; light + dark variants both premium; not a JOB/GATE text card.
2. ServiceStageStill on /services: three compact stills beside Design/Build/Operations rows — each suggests that service’s craft (spec / build gate / ops tighten), not identical clones; hairline + radius 18–28; no drop shadow.
3. Work teasers + story StageStill sequence: Ask → Recommend → Gate → Record stills must be readable at a glance; DNA facts visible and non-interchangeable:
   - Demand: human before pay · LUM-1042
   - Knowledge: Propose ≠ Execute · corpus
   - Attention: Priority/Watch/Noise · human before send
   - Exception: human before money · refund hold
4. Home examples chapter stills match teaser quality (short + entry, not long copy on cards).
5. Soft ADD from earlier UX: still kickers may label Ask→Recommend→Gate→Record where it clarifies scan without changing locked body copy.
6. prefers-reduced-motion: stills/text fully visible; transform/opacity only; no Lenis / body lock.
7. Keep four-link nav; tokens #fff/#f5f5f7/#1d1d1f/#6e6e73; near-black CTA.

## ALLOWED FILES

- `components/ProductStage.tsx`, `StageStill*`, `ServiceStageStill*`, media-stage related
- components used by work/story/services/home examples for still chrome only
- `app/globals.css` (still/stage chrome only — do not undo UI-4 layout hold)
- `HomeScenes.tsx` only if still wiring needs it (no copy/route changes)
- `ops/TASK.md`, `HANDOFF.md`, `STATUS.md`, `REVIEW.md`, `ITERATION.md`, `BACKLOG.md`

## OUT OF SCOPE

New pages, copy rewrites of locked thesis, layout grid rebuild (UI-4 done), new offers.

## ACCEPTANCE

- [ ] First screenshot is NOT title + gray card alone — product stage + real still grammar
- [ ] ProductStage light/dark premium; Approve filled; DNA stills distinct across four desks
- [ ] /services stills not identical clones; story Ask→Recommend→Gate→Record readable
- [ ] UI-0…UI-4 not regressed; no Seattle; lock copy/routes; four-link nav
- [ ] `pnpm build` PASS; open PR ready-for-review; do NOT merge; do NOT invent UI-6
- [ ] Stamp UI-4 CLOSED in ops/REVIEW (Apple/UX/Vision/Leader PASS, merge tip d375f98); STATUS Active=UI-5; HANDOFF DEV PASS with measured notes

## COMMIT

feat(site): raise still fidelity for UI-5

## SKILLS TO USE

apple-design, apple-design-web, emil-design-eng, web-design-guidelines, zero-jank-scroll, review-animations (if motion), gsap-scrolltrigger/gsap-react only if stage motion touched.
