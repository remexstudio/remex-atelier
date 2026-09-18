# TASK V7-0 — tokens + home first viewport product STAGE

TASK ID: V7-0
REPO: remexstudio/remex-atelier
BASE: tip after this ops stamp (park V6-5/6; issue V7-0)
GOAL: Tokens + home first viewport product STAGE. Appearance only. Keep all thesis copy.

Owner override 2026-09-17: **APPEARANCE ONLY** restyle. Park unfinished V6-5 and V6-6. Do not change offers, routes, or thesis sentences. No Seattle/Global clients. No founder page. Do not revive `/demo` as product.

## Visual system (tokens in globals / layout)

- Type: Geist (`next/font`) or system-ui with optical sizing. Display weight 600, tracking ~-0.03em at 56–80px. Body 17–21px `#1d1d1f`. Eyebrows 12px `#6e6e73`.
- Color: `#ffffff` / `#f5f5f7` / `#1d1d1f` / `#6e6e73` / hairline `rgba(0,0,0,0.08)`. Optional one `#000` gate chapter later (may stub class). CTA near-black pill. Kill SaaS blue `#1d4ed8` if present.
- Nav already 4 links — keep. Frosted 44–48px. No extra home banner links in primary nav.
- Radius 18–28px on stages. Almost no drop shadow.

## Home first viewport (REQUIRED)

Keep the words. Change the medium.

1. Headline `Agents, built to the brief.` + ONE support line (keep an existing allowed line; do not invent a new thesis).
2. CTAs: Start a brief (black pill → `/contact`) + See services (text/link → `/services` or `#home-services`).
3. A product STAGE ≥520px tall: fabricated UI module showing Propose → Approve → Record with Approve filled, specular edge, inset hairline — **NOT** a rounded gray JOB/GATE text card.
4. Three services as a quiet strip IN the first viewport (Design / Build / Operations), one line each, visible without long scroll on 1280.
5. GSAP pin+scrub ONLY on this stage if motion is added. Transform/opacity only. `prefers-reduced-motion`: all text visible, no missing content.

Then restyle subsequent home chapters toward (can be partial in V7-0 if time; minimum is first viewport + tokens):

- hire on `#f5f5f7` with no card
- gate as dark stage (optional in V7-0 if first viewport done)
- Keep module order: services in first viewport → method → examples teasers → brief → roadmap → CTA
- Do **NOT** rewrite thesis sentences or change routes.

## ALLOWED FILES

- `app/globals.css`
- `app/layout.tsx` (font only)
- `components/HomeScenes.tsx`
- `components/*` chrome/nav only if CTA pill / type tokens need it
- any tiny new component for ProductStage / GateStage under `components/`
- `ops/HANDOFF.md`, `ops/STATUS.md`

## OUT OF SCOPE

- Changing service offers, story essays, Approach Next rewrite (V6-6)
- Copy rewrites of locked lines
- Inner page deep restyle (that is V7-1)
- Adding geography slogans, founder, `/demo` as product

## ACCEPTANCE

- [ ] First viewport is no longer title + gray JOB/GATE card alone
- [ ] Product stage ≥520px with Propose→Approve→Record UI language exists on home
- [ ] Display type engineered sans (Geist/system), weight 600, tight tracking
- [ ] CTA is black/near-black pill
- [ ] Three service names visible in first viewport on 1280
- [ ] Nav still four links; copy/routes unchanged
- [ ] `pnpm build` PASS; `vercel deploy --prod` preferred; smoke `/`
- [ ] HANDOFF; DEV PASS; do not start V7-1 until Leader PASS

## SKILLS TO USE

`apple-design` `apple-design-web` `emil-design-eng` `gsap-scrolltrigger` `gsap-react` `zero-jank-scroll` `review-animations` `web-design-guidelines`

Also read `docs/ia-v3.md`, `docs/scroll-score-v3.md`, `docs/design.md`, and chrome named above. Skill files may be absent in this environment — apply those principles from `docs/design.md` and the locks in `docs/copy-locks.md`.

## COMMIT MESSAGE

`feat(home): add product stage and display tokens for V7-0`
