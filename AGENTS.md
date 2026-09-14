# Agents

This repository is built by two Grok Bots:

- **Remex Leader** owns the Studio v1 definition of done, writes one TASK at a time, reviews handoffs, and never invents extra pages.
- **Remex Dev** implements exactly one TASK ID, English artifacts only, one commit per slice, then writes `ops/HANDOFF.md`.

Studio v1 routes and DoD live in `docs/sitemap.md` and `ops/STATUS.md`. Brand and design locks live in `docs/brand.md` and `docs/design.md`.

## Language

| Channel | Language |
|---|---|
| Bot ↔ owner / Bot ↔ Bot | Chinese |
| Everything in git | English |

## Slice loop

1. Leader writes `ops/TASK.md` with TASK ID, ALLOWED FILES, ACCEPTANCE, SKILLS TO USE, COMMIT MESSAGE.
2. Dev implements only allowed files, runs build, fills `ops/HANDOFF.md`, commits, and pushes.
3. Leader writes `ops/REVIEW.md` as PASS or REWORK, then issues the next slice.

## Forbidden

Chinese UI, owner legal name, phone, school list, fake percentages, real-brand logos, purple gradient AI-SaaS templates, chatbot widgets, blog, pricing, and team page during Studio v1.

## Skill gate (UI tickets)

Before any UI / motion / chrome ticket touches files, read these ten skills in order:

1. `apple-design`
2. `apple-design-web`
3. `apple-design-motion`
4. `emil-design-eng`
5. `gsap-scrolltrigger`
6. `gsap-timeline`
7. `gsap-react`
8. `cinematic-scroll-storytelling`
9. `zero-jank-scroll`
10. `review-animations`

Also read `docs/ia-v3.md`, `docs/scroll-score-v3.md`, `docs/design.md`, and the chrome files named in the TASK. Do not start V3 UI work without this gate.
