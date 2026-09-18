# Handoff UI-2

- Status: **DEV PASS**
- TASK ID: UI-2
- SHA (merge tip): `f969b96` (PR #38; branch content `2892f7c` / stamp `836e509`)
- Preview / Production: https://remex-atelier.vercel.app
- Prod deploy: **pending** (Vercel build queue stuck in Initializing; CLI prebuilt `dpl_EiQV8ozhGGq164DtEGUwxm1pdpeE` awaiting machine). Tip is on `main`. Alias will follow when Ready.
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

Reduced motion: Propose / Approve / Record panels all visible. No pin hiding gate copy.

## Acceptance self-check

- [x] `#home-gate` true dark `#000`; distinct from light method
- [x] Dark ProductStage Propose→Approve→Record with Approve filled
- [x] UI-1 first viewport not regressed
- [x] Gate H2/lede distinct; lock copy/routes; four-link nav; no Seattle
- [x] lab `pulse.css` Georgia/`ui-serif` cleared
- [x] `pnpm build` PASS; PR #38 merged
- [x] HANDOFF DEV PASS; do NOT start UI-3

## Skills used

apple-design, apple-design-web, emil-design-eng, gsap-scrolltrigger, gsap-react, zero-jank-scroll, review-animations, web-design-guidelines

## Risks

Vercel production build queue delayed alias update; tip on `main` is reviewable. Soft ADD pulse Georgia absorbed.

## Blockers

None for review. Awaiting three PMs + Leader. Do not open UI-3 until dual PASS.
