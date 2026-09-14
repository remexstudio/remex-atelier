# TASK V3-3

TASK ID: V3-3
REPO: remexstudio/remex-atelier

SKILLS TO USE (before edits):
/apple-design /apple-design-web /apple-design-motion /emil-design-eng
/gsap-scrolltrigger /gsap-timeline /gsap-react
/cinematic-scroll-storytelling /zero-jank-scroll /review-animations /writing-guidelines

GOAL:
Rebuild `/work/atelier-concierge` as a **unique** product chapter — not the shared five-beat StoryScenes empty grammar. Every line from `docs/scroll-score-v3.md` § Atelier Concierge must appear. Distinct Concierge still DNA (skin/occasion → hero → try-on → bag → human pay).

ALLOWED:
- app/work/atelier-concierge/**
- components/* only if a Concierge-specific component is required (do not reuse shared StoryScenes as the sole structure unless heavily specialized and Vision uniqueness holds)
- app/globals.css (concierge styles)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Other three product routes (V3-4…V3-6)
- Home nine modules (closed)
- /demo rebuild, live widgets, fake charge, invent catalog
- Personal / founder name

REQUIRED MODULES (exact lines from scroll-score-v3):
- Job + user: Concierge desk for high-touch retail clients who expect one clear next step.
- Pain: Skin, occasion, and fit notes scatter across fittings, holds, and aftercare.
- Ability 1: Map skin and occasion to one hero SKU.
- Ability 2: Stage a try-on still for the stylist desk.
- Ability 3: Draft the bag for human review before pay.
- Gate: Human at pay. A stylist approves; nothing charges without that person.
- Record: Consult thread stays with ticket LUM-1042.
- Refusal: Will not invent catalog SKUs. Will not charge without approval.
- CTA: Start a brief. → `/contact`
- Footer: Studio study. Client identity anonymized.

MOTION / UX:
- Default pin:no (shallow/stagger). If any pin, end_max ≤ +=80% and only ≥720px wide.
- Transform/opacity only; no Lenis / normalizeScroll / body lock
- 375 readable stack; reduced-motion full lines visible
- Canvas #ffffff / gutter #f5f5f7; film SiteChrome OK

ACCEPTANCE:
- [ ] Skills in HANDOFF
- [ ] All exact lines present; page not interchangeable with Ledger/Morning/Exception
- [ ] No Open demo toy CTA
- [ ] pnpm build PASS
- [ ] Commit: `feat(work): atelier concierge unique chapter`

After push: HANDOFF + DEV PASS. Await three PM + Leader. Do not open V3-4 until PASS.
