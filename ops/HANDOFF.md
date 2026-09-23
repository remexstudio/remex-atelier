# Handoff C5

- Status: **DEV COMPLETE** — awaiting Leader REVIEW
- TASK ID: C5
- Commit: `feat(site): inner pages canon polish for C5`
- Base: `0038290` (`main`, C4 merge)
- Phase: **CANON CYCLE — ACTIVE C5**
- Previous: C4 **CLOSED** — Canon PASS `ad1afd3` / merge `0038290`
- Next: do not invent C6 in this PR. Do not merge this PR from Dev.

## What shipped

`/services` opens as a catalog: title Services, lede Design, Build, and Operations, then three large rows with small stills (200px). The home headline stack is not reprinted there, and the page does not mount a ProductStage. The Build still is a first-seat spec, not a Propose → Approve → Record wallpaper of the home stage.

`/work` keeps a still, a short teaser, and Read the full example → at 44px. The index lede does not sell four seats as the catalog. Home still uses the shared examples lede.

Story reading measures 680px at 1440. Stills stay in a sequence under that column (Demand desk still height 234, not the 520 home stage). Approach still prints the three names on three bands and has no stage. Contact is a 1px hairline sheet and a `#1d1d1f` pill at 44px.

## Scope held

Every checked main route renders one C1 product footer: lockup Remex Studio, legal row Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC, wayfinding Work · Services · Approach · Contact. Desktop primary nav is those four links. No Seattle. No English-first.

Home C3/C4 held: one `[data-product-stage]`, height 520, headline “Agents, built to the brief.”, mechanism Propose → Approve → Record, opening beat Propose.

## Soft ADD

Propose-first default on the home stage is **accepted**. Do not reopen unless that beat is broken.

## Verify

- `pnpm build` PASS
- Headless Chrome, 1440 and 375: `/` `/services` `/work` `/approach` `/contact` `/work/atelier-concierge/story`
- Services: zero product stages; rows Design, Build, Operations; stills 200px
- Work: teaser lengths 114 / 142 / 117 / 135; read target 44; click opens `/work/atelier-concierge/story`
- Story: narrative width 680 at 1440 (343 at 375, under the 680 cap); five stills; no product stage
- Approach: three names; three bands; no product stage
- Contact: sheet border 1px; pill `rgb(29, 29, 31)` / 44; submit reaches “Brief received”
- Home: one stage, 520, active step Propose

## Acceptance

- [x] No home-hero clone on `/services`
- [x] Work short + story entry; story narrow + stills
- [x] Product footer everywhere; Approach three names held
- [x] Home C3/C4 not regressed; pnpm build PASS; PR open; not merged
- [x] C4 CLOSED stamped in REVIEW (Canon PASS `ad1afd3` / merge `0038290`)
