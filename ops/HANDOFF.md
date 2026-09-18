# Handoff UI-DoD

- Status: **LEADER PASS**
- TASK ID: UI-DoD
- SHA / tip: `11406c3`
- Prod: `dpl_boxRtYBsw4QApNXGYxA5CjdAGhbe` → https://remex-atelier.vercel.app
- Phase: **UI CAMPAIGN APPEARANCE CLOSED**
- Dev: **standby**. Do not invent UI-6.

## UI-5 closed

Unanimous PM PASS. Leader appearance DoD **PASS** on live production after deploy caught tip `11406c3`.

## Measured (prod, Playwright Chromium, `prefers-reduced-motion: no-preference`)

| Surface | Nav | Type / stage | Notes |
| --- | --- | --- | --- |
| Home 1440×900 | 46; Work · Services · Approach · Contact; frost | Geist 600 **80px** **-0.03em**; ProductStage **520**; Approve filled `#1d1d1f`; strip in-viewport; CTA **44** / `#1d1d1f` | First viewport ≠ title + gray card |
| Home 375×812 | 46; Menu + four links | Geist 600 **56px** **-0.03em**; ProductStage **520** under type; Approve filled; CTA **44** | Strip below fold (UI-4 hold) |
| `#home-gate` | 46 | bg `#000`; dark ProductStage **520**; distinct H2/lede | — |
| Services 1440 / 375 | 46 identical | 3 rows + stills | not a home-hero clone |
| Work 1440 / 375 | 46 identical | 4 short teasers + entry | DNA stills distinct |
| Story Demand 1440 | 46 identical | reading **680** + still seq | Ask → Recommend → Gate → Record |
| Approach 1440 / 375 | 46 identical | method / refuse / path bands | — |
| Contact 1440 / 375 | 46 identical | hairline inset sheet; pill **44** `#1d1d1f` | — |

No Seattle / Global clients / English-first / `#1d4ed8`. Routes locked.

Soft → BACKLOG: StageStill `aria-hidden` DNA via adjacent copy; compact `desk-ui__fact`.

## Verify

Prod Ready for `11406c3`. Smoke `/` `/services` `/work` `/approach` `/contact` `/work/atelier-concierge/story` HTTP 200. Pixel measure + first-viewport screenshots.

## Acceptance

- [x] All seven Done When bullets PASS on prod
- [x] UI-5 CLOSED in REVIEW
- [x] STATUS: UI CAMPAIGN APPEARANCE CLOSED; Dev standby
- [x] Soft ADDs listed in BACKLOG only
