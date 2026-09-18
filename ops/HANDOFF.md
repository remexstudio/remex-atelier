# Handoff UI-2

- Status: **DEV PASS**
- TASK ID: UI-2
- SHA: `2892f7c` (content) · this commit stamps measured checks
- PR: https://github.com/remexstudio/remex-atelier/pull/38 (open, do not merge)
- Preview / Production: https://remex-atelier.vercel.app (prod remains UI-1 until merge)
- Phase: UI campaign open
- Allowed files only: `components/HomeScenes.tsx` (gate chrome/layout), `components/ProductStage.tsx` (dark polish), `app/globals.css` (gate / dark stage / contrast), `components/lab/pulse.css` (Georgia cleanup), ops stamps.
- Out of scope kept: no UI-3 inner pages, no copy/route rewrites, no first-viewport rebuild, four-link nav unchanged.
- Do not start UI-3.

## Gate chapter

- Canvas: `#home-gate` true black `#000`; type `#f5f5f7` / muted `rgba(245, 245, 247, 0.72)`
- Distinct from `#home-method` light `--gutter` (`#f5f5f7`) canvas
- Locked H2: `A human still decides.`
- Locked lede: `Irreversible actions stay behind a named person.`
- Dark `ProductStage`: Propose → Approve → Record; Approve filled (`#f5f5f7` on `#000`); specular catch-light + inset hairline; desk/canvas stay `#000` (not gray `#111` / `#1d1d1f` JOB/GATE card)
- Stage min-height 520 in `.home-gate__stage`
- No pin. No Lenis / body lock. Transform/opacity only.

## UI-1 first viewport (unchanged)

- Headline: `Agents, built to the brief.`
- Support: `We design the job an agent is allowed to do — and the gate it cannot cross.`
- Black pill `Start a brief.` → `/contact`
- Light ProductStage ≥520; Design / Build / Operations strip
- Geist tokens; no first-viewport CSS token undo

## Soft ADD

Literal `Georgia` / `ui-serif` fallbacks cleared in `components/lab/pulse.css`. Lab titles use Geist/system. Do not import Chinese UI.

## Verify

`pnpm build` PASS. Local smoke `/` `/work` `/services` `/approach` `/contact` HTTP 200. CTA click → `/contact`. See services → `#home-services`. No Seattle. No `#1d4ed8`. Four-link nav.

Measured local `pnpm start` (Chrome):

| Surface | Gate canvas | Gate stage | Approve filled | Method canvas | Hero stage / CTA / h1 |
| --- | --- | --- | --- | --- | --- |
| 1280×800 | **`#000`** / type `#f5f5f7` | **`#000` / 520** | `#f5f5f7` on `#000` | `#f5f5f7` | **520** / **44** / `#1d1d1f` / Geist 600 **80px** **-0.03em**; strip top 748 / bottom 799 |
| 375×812 | **`#000`** | **`#000` / 520** | `#f5f5f7` on `#000` | `#f5f5f7` | **520** / **44** / Geist 600 **56px** **-0.03em** |
| 1280 reduce | **`#000`** | stacked; all 3 panels opacity 1 | filled | `#f5f5f7` | Geist 600 80px / CTA 44 |

Reduced motion: Propose / Approve / Record panels all `data-active=true`, opacity 1. No pin hiding gate copy.

## Acceptance self-check

- [x] `#home-gate` is true dark `#000` chapter; visually distinct from light method
- [x] Dark ProductStage Propose→Approve→Record with Approve filled; not gray JOB/GATE card
- [x] UI-1 first viewport not regressed (stage ≥520, strip, black pill, Geist tokens)
- [x] Gate H2/lede distinct from method; lock copy/routes; four-link nav; no Seattle
- [x] lab `pulse.css` Georgia/`ui-serif` literal fallbacks cleared
- [x] `pnpm build` PASS; open PR #38
- [x] HANDOFF DEV PASS; do NOT start UI-3

## Skills used

apple-design, apple-design-web, emil-design-eng, gsap-scrolltrigger, gsap-react, zero-jank-scroll, review-animations, web-design-guidelines

## Risks

None blocking. Gate stage and chapter share `#000`; structure reads via specular + inset hairline and the filled Approve control, not a gray fill. UI-3 still out of scope.

## Blockers

None. Awaiting Leader. Do not merge. Do not open UI-3.
