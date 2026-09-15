# TASK V6-2 — unify primary nav (four items every route)

TASK ID: V6-2
REPO: remexstudio/remex-atelier
BASE: tip after V6-1 PASS (`6673d11` or newer main)
GOAL: One primary nav everywhere: **Work · Services · Approach · Contact**. Kill the home-only chapter row that makes Home look like a 9-item bar and other routes look like a 4-item bar. Per `docs/ia-v6.md` §2.

## Must ship

1. **Primary chrome identical on every route**
   - Same four links, same order, same treatment on `/`, `/work`, `/services`, `/approach`, `/contact`, stories, lab/about
   - Desktop: **no** `site-nav__chapters` (or equivalent) beside primary links on Home
   - Remove `site-shell--home-chapters` behavior that grows the bar only on `/`

2. **Home chapters = in-page only**
   - Allowed: anchors in the **page body** (existing `home-close-map` / equivalent band below the nav — not inside the sticky primary bar)
   - Forbidden: a slim chapter row in the sticky header that appears only on `/` and disappears on other routes
   - Mobile `SiteNavMenu`: primary four always. **Do not** inject a home-only “On this page” block that recreates route-dependent chrome. Prefer body anchors (or a home body “On this page” list). UX soft preference: avoid sticky dual row.

3. **Keep**
   - V5-4 collapse Menu/Close ≥44, aria, Escape, focus trap
   - Frosted 44–48px film nav
   - No `/demo` in primary; Lab stays footer Prototype

4. **Do not**
   - Change copy locks, geo (already stripped), story routes (V6-4), home first viewport services (V6-5), desktop grids (V6-3)

## ALLOWED FILES

- `components/SiteChrome.tsx`
- `components/SiteNavMenu.tsx`
- `app/globals.css` (nav chrome only)
- `components/HomeScenes.tsx` (body chapter map only if needed so Home still has in-page jump targets)
- `ops/HANDOFF.md`, `ops/STATUS.md`

## ACCEPTANCE

- [ ] Every primary route shows the same four nav items; Home no longer adds five chapter links into the sticky bar
- [ ] Home chapter targets still reachable via in-page body links (not route-dependent sticky row)
- [ ] 375 Menu still works; ≥44; no Lenis/body lock
- [ ] `pnpm build` PASS; prefer `vercel deploy --prod`
- [ ] HANDOFF; DEV PASS; do not open V6-3

## SKILLS TO USE

`/apple-design` `/apple-design-web` `/emil-design-eng` `/gsap-scrolltrigger` `/gsap-react` `/zero-jank-scroll` `/review-animations` `/web-design-guidelines`

## COMMIT MESSAGE

`fix(nav): unify four-item primary chrome on every route`
