# TASK — UI-4

TASK ID: UI-4
REPO: remexstudio/remex-atelier
BASE: main tip `5531561` (or newer; after UI-3 CLOSED merge)
GOAL: Hold layout at 375px and 1280/1440px — appearance polish only. Fix squeeze, orphan column in gray ocean, stage/type stacking fails, or broken hit targets. Do not regress UI-0…UI-3. Do not rewrite offers/thesis/routes.

## Owner

UI-3 CLOSED (unanimous PASS). Continuous UI campaign. Layout hold only.

## Required

1. **375px home**: Menu collapses to four primary links (Work · Services · Approach · Contact); stage sits under type (not crushed beside); services strip stacks vertically; all interactive targets ≥44px; long copy/forms remain readable/fillable; no horizontal chip rail as primary nav.
2. **375px inner**: `/services` rows stack (still under or after type); `/work` teasers stack; `/story` reading column usable; `/approach` bands full-bleed readable; `/contact` sheet fillable with ≥44 inputs/CTA.
3. **1280 / 1440 home first viewport**: headline + support + ProductStage ≥520 + three services strip ALL visible without a long scroll; no tiny text column floating in a gray ocean; stage and type share the first viewport grammar (apple.com product-page density).
4. **1280 / 1440 inner**: services three rows align; approach bands use proper max-width/stage-max; work teasers not collapsed into a thin island; story stays ≤680 centered in film; contact sheet centered with hairline.
5. Four-link frosted nav 44–48px identical on every route; mobile menu ≥44 hit targets + focus-visible.
6. prefers-reduced-motion: all text visible; transform/opacity only; no Lenis / normalizeScroll / body overflow lock / scroll hijack.
7. Soft ADD from UX UI-3 (optional, only if easy): clear leftover literal Georgia/ui-serif in `components/lab/pulse.css` if still present.

## ALLOWED FILES

- `app/globals.css` (viewport / layout / nav / stage / strip / inner layout only)
- `components/SiteChrome.tsx`, `SiteNav*`, `HomeScenes.tsx` (layout/chrome only — do not undo stage/gate facts)
- components for services/work/approach/contact layout wrappers if needed
- `app/**/page.tsx` only for className/layout wrappers — no copy rewrites
- `ops/TASK.md`, `HANDOFF.md`, `STATUS.md`, `REVIEW.md`, `ITERATION.md`, `BACKLOG.md`

## OUT OF SCOPE

UI-5 DNA fidelity beyond layout, new offers, copy/route changes, ProductStage redesign, dark gate rewrite.

## ACCEPTANCE

- [ ] 375: four-link menu, stage under type, strip vertical, ≥44 everywhere critical
- [ ] 1280/1440: first viewport = headline + stage ≥520 + three services; no gray-ocean orphan column
- [ ] Inner pages hold at both widths without hero-clone regression
- [ ] UI-1/UI-2/UI-3 not regressed; four-link nav; no Seattle; lock copy
- [ ] `pnpm build` PASS; open PR ready-for-review
- [ ] Stamp UI-3 CLOSED in ops/REVIEW (Apple/UX/Vision/Leader PASS, merge tip 5531561); STATUS Active=UI-4; HANDOFF DEV PASS

## COMMIT

feat(site): hold 375 and 1440 layout for UI-4

## SKILLS TO USE

apple-design, apple-design-web, emil-design-eng, web-design-guidelines, zero-jank-scroll, gsap-scrolltrigger, gsap-react, review-animations (only if motion touched)
