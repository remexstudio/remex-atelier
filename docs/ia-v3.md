# Information architecture V3

Restage map after the live draft failed board review. Reason: `ops/pm/V3-0-REJECT.md` (Apple / UX / Vision PMs). Do not polish the six-pin slogan film. Later tickets implement this IA; V3-0 is docs only.

## Canvas tokens (locked) — Apple PM

| Token | Value | Use |
| --- | --- | --- |
| Product canvas | `#ffffff` | Default page / product stage background |
| Gutter | `#f5f5f7` | Section gutters, rails, soft bands between modules |

CTA-only accent. Sticky frosted nav height band kept from REJECT KEEP. No purple mesh, no Inter-template editorial paper as the only grammar.

## Hard bans (Apple PM)

- **Forbidden on `/`:** bringing back six isomorphic full-bleed pin chapters that swap slogans. The old `HomeScenes` six-clone pin film is dead.
- **Required on `/`:** ≥3 distinct layout grammars across the nine modules (not six identical pins).
- Pin + scrub only where UX accepts short runways; chapter progress must stay scannable; nav and footer always reachable.

## UX contract (Leader align)

- Default = **shallow scroll**, not long pin traps (REJECT KILL: `+=150%` home ×6, `+=420%` story).
- Per-module pin / end-ceiling / 375 / reduced-motion annotations live in `docs/scroll-score-v3.md` (source of truth for motion).
- Home: at most one short pin (The gate), end ceiling `+=80%` max.
- Reduced-motion and 375 must expose **all** payload facts, not a slogan subset.

## Routes → payload

| Route | Payload |
| --- | --- |
| `/` | Nine modules below; one new fact each; ≥3 layout grammars |
| `/work` | Four distinct stills linking to product routes; **no** “Open demo” |
| `/work/atelier-concierge` | Job+user, pain, ability×3, unique gate, unique record, unique refusal, CTA |
| `/work/ledger-clerk` | Same structure; non-interchangeable copy |
| `/work/morning-remex` | Same structure; non-interchangeable copy |
| `/work/exception-copilot` | Same structure; non-interchangeable copy |
| `/approach` | Methods + name meaning once + legal/Seattle/global + what we refuse + Now/Next/Later |
| `/contact` | Start a brief form + `hello@remexstudio.com` |
| Lab / Pulse | Prototype only; not primary nav product claims |

## Home `/` — nine modules (minimum)

Each module carries a **different fact**. Layout DNA must differ; do not clone one pin template.

| # | Module | Fact it must carry | Suggested layout grammar |
| --- | --- | --- | --- |
| 1 | Hero | Promise + locked wayfinding | `hero` (light canvas, large negative-tracking display) |
| 2 | The hire | Why we exist: one painful workflow → one agent | `shallow-deep` or split still + copy |
| 3 | The gate | Propose → Approve → Record mechanism | `pin-stage` (single short pin OK) or still + steps |
| 4 | Four jobs stills rail | Four named jobs as stills → product routes | `horizontal rail` |
| 5 | For whom / not for whom | Fit + what we do not sell | `bento` or two-column for/against |
| 6 | What a brief asks | Constraints a brief must answer | `specs cluster` / checklist band |
| 7 | Method three | Design the job / Build the gate / Keep the record (with substance) | `method columns` |
| 8 | Roadmap three | Now / Next / Later (one section, not a second home) | `timeline band` |
| 9 | Start a brief | CTA → `/contact` | `footer map` / close band |

**Layout diversity rule:** the same home page must use **≥3 distinct layout grammars**. Example legal set: `hero` + `pin-stage` + `horizontal rail` + `bento` + `method columns` + `footer map`. Ban: six full-bleed isomorphic pins.

Chapter-linked nav (or in-page map) with visible section ids for Gate / Jobs / Brief / Roadmap / etc. 375 compositions first-class; 44px hit targets on job cards and CTA.

## Product routes — uniqueness required (Vision / REJECT)

Shared page skeleton is allowed; **ability×3, gate, record, refusal must not be interchangeable**. Seeds from `ops/pm/V3-0-REJECT.md`. Exact lines in `docs/scroll-score-v3.md`.

### 1. Atelier Concierge — `/work/atelier-concierge`

- **Flow:** skin/occasion → one hero → try-on → bag → human at pay
- **Job + user:** Retail concierge / stylist desk for high-touch clients
- **Pain:** Skin, occasion, and fit notes scatter across fittings, holds, and aftercare
- **Abilities (×3):** Map skin/occasion → one hero SKU; stage try-on still; draft bag for human review
- **Gate:** Human at pay; no charge without approval
- **Record:** Consult thread + ticket `LUM-1042`
- **Refusal:** Invent catalog SKUs; charge without approval
- **CTA:** Start a brief. → `/contact`
- **Footer:** Studio study. Client identity anonymized.

### 2. Ledger Clerk — `/work/ledger-clerk`

- **Flow:** corpus-only answers; Propose never Execute; citations; Approve/Reject; audit log
- **Job + user:** Controller / accounting desk answering corpus questions
- **Pain:** Month-end questions bury the team in the same source hunt
- **Abilities (×3):** Answer from corpus only; attach citations; draft Propose package (never Execute)
- **Gate:** Approve / Reject by a named controller before books move
- **Record:** Audit log of ask, cite, decision
- **Refusal:** Answer outside corpus; Execute ledger changes
- **CTA:** Start a brief. → `/contact`
- **Footer:** Studio study. Client identity anonymized.

### 3. Morning Remex — `/work/morning-remex`

- **Flow:** Priority/Watch/Noise + two tones; never auto-publish; brief+draft+escalate
- **Job + user:** Operator / desk lead triage overnight inbox
- **Pain:** Overnight threads arrive without one readable brief
- **Abilities (×3):** Sort Priority / Watch / Noise; draft in two tones; escalate threads that need a human
- **Gate:** Never auto-publish; operator edits before send
- **Record:** Brief + draft + escalate decision linked
- **Refusal:** Auto-publish digests or posts
- **CTA:** Start a brief. → `/contact`
- **Footer:** Studio study. Client identity anonymized.

### 4. Exception Copilot — `/work/exception-copilot`

- **Flow:** queue + policy suggest; human for refunds/irreversible money; case timeline
- **Job + user:** Ops / CX lead clearing exception queues
- **Pain:** Exceptions pile faster than policy can be reread
- **Abilities (×3):** Rank the queue; suggest policy disposition; draft case note
- **Gate:** Human for refunds and irreversible money moves
- **Record:** Case timeline (policy cite + decision)
- **Refusal:** Issue refunds or move money without a human
- **CTA:** Start a brief. → `/contact`
- **Footer:** Studio study. Client identity anonymized.

## Approach `/approach`

- Method three with substance (Design the job / Build the gate / Keep the record)
- Name meaning once (机 / 羽 / 云 / Remex = remiges); Chinese **only** here
- Legal: Jiyuyun Studio LLC
- Seattle studio. Global clients.
- What we refuse (mirror “What we do not sell”)
- Roadmap Now / Next / Later (detail may live here; home shows the three-beat summary only)

## Contact `/contact`

- Form: Start a brief
- Email: `hello@remexstudio.com`

## Lab / Pulse

Prototype surfaces only. Not sold as finished products in primary nav. No toy “Open demo” on `/work`.

## Vision checklist → landing place (acceptance map)

Every item from Vision PM ADD in `ops/pm/V3-0-REJECT.md` must land:

| Checklist item | Landing place |
| --- | --- |
| Remex Studio + 机羽云 meaning once | `/approach` name-meaning section only |
| Jiyuyun Studio LLC + Seattle studio + global clients | `/approach` (+ chrome/footer as needed); home may echo Seattle/global in hire or close |
| One-liner + Propose → Approve → Record | Home module 3 The gate; SAY in `docs/copy-locks.md` |
| Design the job / Build the gate / Keep the record with substance | Home module 7 Method three; deeper copy on `/approach` |
| Four jobs: unique capability ×3, gate, record, refusal | Four `/work/*` product routes (REJECT seeds above); stills on home module 4 + `/work` |
| What we do not sell | Home module 5; `/approach` refuse list; copy-locks locked list |
| What a brief must ask | Home module 6 |
| Now / Next / Later roadmap | Home module 8 summary; `/approach` detail |
| Start a brief → `/contact` | Home module 9; product footers; `/contact` |
| Study disclaimer on product stories | Each product footer: Studio study. Client identity anonymized. |
| Zero “English products” class claims in UI | Enforced by `docs/copy-locks.md` DO NOT SAY |

## Reduced motion / a11y (IA contract)

- `prefers-reduced-motion`: full payload still readable (static stack or crossfade); not a slogan subset
- Transform / opacity only for motion
- Escape hatches: footer + nav always reachable; no scroll hijack that traps a pin
