# Handoff V7-3

- Status: delivered — DEV PASS
- TASK ID: V7-3
- Content SHA: `2318f91`
- Base: V7-2 close `d34e086` + ops issue `2ff178a`
- Preview / Production: https://remex-atelier.vercel.app
- Deploy: `dpl_ByFLvJ8bQ8fRiVfn1P2RHNKxFdpr` READY (target production; CLI `vercel deploy --prod` not authorized in this VM — production deploy created via Vercel API against SHA `2318f91`)

## Gate fact (locked phrases)

| Chapter | H2 | Lede |
| --- | --- | --- |
| `#home-method` (unchanged) | The agent proposes. A person approves. The record stays. | One workflow. One agent. A human still decides. |
| `#home-gate` (V7-3) | A human still decides. | Irreversible actions stay behind a named person. |

Method keeps Propose / Approve / Record on `#f5f5f7`. Gate keeps ProductStage `variant="dark"`. Close-map `href="#home-gate"` works. `#home-gate` `scroll-margin-top: 46px` (`--nav-height`). No new slogan, metrics, or geography.

## DONE WHEN

1. [x] First viewport is NOT title + gray JOB/GATE card alone — product STAGE present
   - Evidence: 1280 first viewport shows headline + Propose → Approve → Record stage + Design / Build / Operations strip. Measured `firstViewportHasStage: true`. Screenshot: `/opt/cursor/artifacts/home_first_viewport_1280.png`
2. [x] Product stage on home AND on gate chapter
   - Home: `#home-hero .product-stage`. Gate: `#home-gate .product-stage.product-stage--dark`, section background `rgb(0, 0, 0)`. Screenshot: `/opt/cursor/artifacts/home_gate_dark_1280.png`
3. [x] Display type Geist/system weight 600, tracking ~-0.03em
   - Computed `#home-hero-h`: `font-family: Geist, "Geist Fallback", system-ui…`; `font-weight: 600`; 1280 `80px` / `-2.4px` = `-0.03em`; 375 `56px` / `-1.68px` = `-0.03em`
4. [x] CTA black/near-black pill
   - `.home-cta.cta-pill` computed `background: rgb(0, 0, 0)`; `border-radius: 999px`
5. [x] Nav four links every primary route
   - Work / Services / Approach / Contact on `/` `/services` `/work` `/approach` `/contact` `/work/atelier-concierge/story`. 375 Menu exposes the same four.
6. [x] Inner pages do not reuse home hero
   - `/services` H1 Services; `/work` H1 Selected examples; `/approach` H1 Design the job…; `/contact` H1 Start a brief.; story H1 Demand desk. All `hasHomeHero: false`.
7. [x] 375 and 1440 hold the stage
   - 375: stage under type, `stageTop: 340.875` inside `vh: 812`, screenshot `/opt/cursor/artifacts/home_first_viewport_375.png`
   - 1440: `stagePresent: true`, `inFirstViewport: true`, `stageWidth: 551`, `stageHeight: 758`. Screenshot `/opt/cursor/artifacts/home_first_viewport_1440.png`
8. [x] Copy/routes/offers unchanged except the new distinct gate H2/lede
   - Diff is `#home-gate` H2+lede only. No Seattle / Global. No founder. `/demo` not a product. Offers / routes untouched.

## Smoke

Local `next start` + prod https://remex-atelier.vercel.app:

| Route | Local | Prod |
| --- | --- | --- |
| `/` | 200 | 200 |
| `/services` | 200 | 200 |
| `/work` | 200 | 200 |
| `/approach` | 200 | 200 |
| `/contact` | 200 | 200 |
| `/work/atelier-concierge/story` | 200 | 200 |

`pnpm build` PASS (Next.js 16.3.5, 19/19 static). Prod HTML contains distinct gate H2 + lede and unchanged method H2.

## Screenshots

- home first viewport 1280: `/opt/cursor/artifacts/home_first_viewport_1280.png`
- home first viewport 375: `/opt/cursor/artifacts/home_first_viewport_375.png`
- home first viewport 1440 (hold): `/opt/cursor/artifacts/home_first_viewport_1440.png`
- home gate dark 1280: `/opt/cursor/artifacts/home_gate_dark_1280.png`
- services 1280: `/opt/cursor/artifacts/services_1280.png`
- work 1280: `/opt/cursor/artifacts/work_1280.png`
- measures: `/opt/cursor/artifacts/v7_3_measures.json`

## Absorb

- V6-5 **ABSORBED/CLOSED** by V7-0 (three services in first viewport) — verified still present at 1280 / 1440
- V6-6 **ABSORBED/CLOSED** by V7-2 Next lock — not reopened

- Skills: apple-design, apple-design-web, apple-design-motion, emil-design-eng, gsap-scrolltrigger, gsap-timeline, gsap-react, cinematic-scroll-storytelling, zero-jank-scroll, review-animations (repo skill files absent; followed docs/design.md + ia-v3 + copy-locks)
- Blockers: Await Leader + PM review. No V7-4.
