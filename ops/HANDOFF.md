# Handoff C4

- Status: **DEV COMPLETE** — awaiting Leader REVIEW
- TASK ID: C4
- Commit: `feat(home): scrub stage states for C4`
- Base: `7953363` (`main`, C3 merge)
- Phase: **CANON CYCLE — ACTIVE C4**
- Previous: C3 **CLOSED** — Canon PASS `ff610e4` / merge `7953363`
- Next: C5 inner pages. Do not start C5 in this PR. Do not merge this PR from Dev.

## What shipped

The single home ProductStage is the only pin. Native scroll scrubs its panels Propose → Approve → Record (opacity only, `scrub: true`, end `+=80%`). The headline is not pinned. Approve’s pill is filled on the Approve beat.

`prefers-reduced-motion`: no ScrollTrigger pin. CSS stacks the three tickets in document flow with overflow visible, so every line is on screen. No Lenis, no `normalizeScroll`, no body overflow lock.

Services lede uses the short names Design, Build, and Operations. Catalog row titles stay the locked long names.

## Scope held

C3 chapters unchanged: one stage, services catalog, one loop inside that stage, dark `#home-gate` without a second stage, selected examples, brief, roadmap, close. C1 footer and C2 Approach names untouched. No C5 inner-page rewrite.

## Verify

- `pnpm build` PASS
- Motion: one `[data-product-stage]`, one pin (`home-product-stage`) on `[data-stage-pin]`. Scroll progress moves `data-active-step` propose → approve → record. Approve rail and pill fill on the approve beat. `document.body` overflow stays visible.
- Reduced motion: zero pins. Three panel texts visible (Propose, Approve, Record lines). Page scroll is native.

## Acceptance

- [ ] Scroll drives Propose→Approve→Record on the one stage
- [ ] RM: three frames + all text; no scroll trap
- [ ] One stage only; C3 structure held; pnpm build PASS; PR open; not merged; C5 not started
- [x] C3 CLOSED stamped in REVIEW (Canon PASS `ff610e4` / merge `7953363`)
