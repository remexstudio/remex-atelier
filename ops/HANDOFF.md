# Handoff C3

- Status: **DEV COMPLETE** — awaiting Leader REVIEW
- TASK ID: C3
- Commit: `feat(home): one stage one loop for C3`
- Base: `a5139cc` (`main`, C2 merge)
- Phase: **CANON CYCLE — ACTIVE C3**
- Previous: C2 **CLOSED** — Canon PASS `45e6761` / merge `a5139cc`
- Next: C4 stage scroll motion. Do not start C4 in this PR. Do not merge this PR from Dev.

## What shipped

Home now teaches the gate once and sells the catalog.

- First viewport: headline, one light ProductStage (520, Approve filled), Design / Build / Operations, Start a brief (`#1d1d1f`, 44px).
- The three mechanism sentences live once, inside that stage. The numbered method list, the one-liner chapter, and the second ProductStage are gone.
- `#home-gate` stays a dark `#000` chapter with one distinct fact: “A human still decides.” / “Irreversible actions stay behind a named person.” No second stage.
- Services is a catalog chapter directly under the hero: Agent product design, Agent build, Agent operations, who it is for, and one offer fact each.
- Selected examples stay short teasers plus “Read the full example →”.
- The single-stage step hook remains for C4. This slice does not add a three-state scrub.

## Duplicates removed

- Dark `#home-gate` ProductStage (second Propose → Approve → Record console).
- `#home-method` headline “The agent proposes. A person approves. The record stays.”
- `#home-method` support “One workflow. One agent. A human still decides.”
- Numbered Propose / Approve / Record bullets that repeated the stage sentences.
- Quiet uppercase service strip and the extra “See services” link. The three names now sit in the hero copy and open the catalog rows.

“A human still decides.” remains the gate headline. The locked Now line still ends with that clause as the direction beat, not as a second stage.

## Scope held

C1 product footer untouched. C2 Approach three names untouched. No Seattle, global-clients, English-first, or four-SKU line. No C4 scrub. No inner-page rewrite.

## Verify

- `pnpm build` PASS
- Headless Chrome `/` at 1440×900: one `[data-product-stage]`, height 520, step approve, in view. H1, Design / Build / Operations (18px / 600 / ink), and Start a brief are fully in view. CTA fill `rgb(29, 29, 31)`, height 44. No horizontal overflow.
- 375×812: same four first-viewport pieces. Stage starts under the type at top 379, height 520. `scrollWidth` 375.
- Body text: each mechanism sentence once. Loop one-liner count 0. “Read the full example” ×4. Selected examples ×1. No Seattle / Global clients / English-first.
- `#home-gate` background `rgb(0, 0, 0)`, copy is only the human-decides headline and the irreversible lede.
- `#design` hash lands below the 46px nav (`scroll-margin` 66px).
- `/approach` studio line still `Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC`. Footer legal row on `/` and `/approach` unchanged.

## Acceptance

- [x] One primary PAR stage on home (not duplicated)
- [x] One clear loop explanation; no recycled three-sentence wallpaper
- [x] Services catalog readable as what we sell in first viewport / near it
- [x] Examples stay short method proof, not SKUs
- [x] C1/C2 not regressed; `pnpm build` PASS; PR open; not merged; C4 not started
- [x] C2 CLOSED stamped in REVIEW (Canon PASS `45e6761` / merge `a5139cc`)
