# TASK — C5

TASK ID: C5
REPO: remexstudio/remex-atelier
BASE: main tip after C4 merge (`0038290`)
GOAL: Inner pages share the product footer and the catalog grammar. `/services` does not clone the home hero.

## Cycle

**Canon Cycle — ACTIVE C5.** C4 is CLOSED (Canon PASS `ad1afd3` / merge `0038290`). Do not invent C6 in this PR.

## Required

1. Every main route uses the C1 product footer. No page reintroduces a film or lab footer.
2. `/services`: title Services, three large Design / Build / Operations rows with small stills. No second home ProductStage. No Propose → Approve → Record wallpaper.
3. `/work`: still + short teaser + Read the full example → (at least 44). Not a long body on the card. Not four SKUs.
4. `/work/*/story`: narrow reading (~680) + still sequence. Not a home-hero clone.
5. `/approach`: keep the C2 three names and the three bands. No duplicate home stage.
6. `/contact`: hairline sheet + black pill. Product footer.
7. Four-link nav identical. No Seattle. No English-first. Home C3/C4 not regressed.
8. Soft ADD from C4: Propose-first default is accepted. Do not reopen unless broken.

## ALLOWED FILES

- `app/services/**`
- `app/work/**`
- `app/approach/**`
- `app/contact/**`
- Related inner components
- `app/globals.css` (inner routes only)
- `components/SiteFooter.tsx` if needed
- `ops/*`

## OUT OF SCOPE

Rebuilding home stage motion. New offers. Inventing C6 in this PR.

## ACCEPTANCE

- [x] No home-hero clone on `/services`
- [x] Work short + story entry; story narrow + stills
- [x] Product footer everywhere; Approach three names held
- [x] Home C3/C4 not regressed; pnpm build PASS; PR open; not merged
- [x] C4 CLOSED stamped in REVIEW (Canon PASS `ad1afd3` / merge `0038290`)

## COMMIT

feat(site): inner pages canon polish for C5
