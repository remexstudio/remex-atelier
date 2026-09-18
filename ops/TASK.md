# TASK — UI-1

TASK ID: UI-1
REPO: remexstudio/remex-atelier
BASE: main tip `5004f76` (or newer)
GOAL: Rebuild HOME FIRST VIEWPORT only. Appearance only. Do not rewrite thesis/offers/routes.

## Owner

UI-0 PASS. Continuous UI campaign. First viewport of `/` must be apple.com product-page grammar. No Seattle/Global. No founder. No /demo as product.

## Required first viewport

1. Locked headline `Agents, built to the brief.` + ONE existing allowed support line
2. CTAs: black/near-black pill `Start a brief.` → `/contact` (≥44) + text link `See services` → `/services` or `#home-services`
3. Product STAGE ≥520px: fabricated UI Propose → Approve → Record with Approve filled, specular edge, inset hairline — NOT a rounded gray JOB/GATE text card alone
4. Three services as a quiet strip IN the first viewport (Design / Build / Operations), one line each, visible without long scroll on 1280
5. prefers-reduced-motion: all text visible. Transform/opacity only if motion. No Lenis / body lock. No pin-at-load that hides the strip

Soft ADD from UI-0: replace literal `Georgia` / `ui-serif` fallbacks with Geist/system where `--font-serif` is already remapped.

Keep module order after first viewport: method → gate → examples teasers → brief → roadmap → CTA.

## ALLOWED FILES

- `components/HomeScenes.tsx`
- `components/ProductStage.tsx` (and tiny helpers)
- `app/globals.css` (home first-viewport / stage / soft Georgia cleanup only)
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/TASK.md`, `ops/ITERATION.md`, `ops/BACKLOG.md` as needed

## OUT OF SCOPE

UI-2 dark gate rebuild, UI-3 inner pages, copy rewrites of locked lines, nav chrome beyond tokens already set.

## ACCEPTANCE

- [ ] First viewport is NOT title + gray JOB/GATE card alone
- [ ] Product stage ≥520px with Propose→Approve→Record UI language
- [ ] Design / Build / Operations visible in first viewport on 1280
- [ ] Black pill CTA ≥44; UI-0 tokens kept (Geist 600, -0.03em, no #1d4ed8)
- [ ] Copy/routes unchanged; four-link nav; no Seattle
- [ ] `pnpm build` PASS; open PR
- [ ] HANDOFF DEV PASS; do NOT start UI-2; do NOT merge unless campaign pattern already merges

## COMMIT

feat(home): rebuild first viewport product stage for UI-1

## SKILLS TO USE

apple-design, apple-design-web, emil-design-eng, gsap-scrolltrigger, gsap-react, zero-jank-scroll, review-animations, web-design-guidelines
