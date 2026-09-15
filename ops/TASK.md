# TASK V6-0 — docs only: IA for nav, teaser/story split, kill geo slogan

TASK ID: V6-0
REPO: remexstudio/remex-atelier
GOAL: Create `docs/ia-v6.md` and update `docs/copy-locks.md` so later slices implement owner V6 corrections. Docs only. No `app/` or `components/` edits.

## Owner corrections (override conflicting V5 locks)

1. **DELETE** the line `Seattle studio. Global clients.` sitewide (home, services, work, approach, contact, footer, metadata). Studio base is mobile. Do **not** emphasize geography or “global clients”. Do **not** replace with another location slogan.

2. **Example surfaces — two layers (forbidden: essay on teaser card)**
   - **Teaser** (`/work` + home examples chapter): SHORT description only + clear entry `Read the full example →` → long article
   - **Story** (`/work/[desk]/story` or equivalent): layered essay (narrow measure, real paragraphs, subheads). Under the essay: demo still sequence ask → one recommendation → gate → record

3. **Chrome**
   - Primary nav **identical on every route**: Work · Services · Approach · Contact
   - Home chapter links = in-page anchors only (below nav) OR a slim secondary row that does **not** appear/disappear by route
   - Forbidden: swapping a 9-item bar for a 4-item bar with no shared structure

4. **Desktop first-class**: 1280 / 1440 max-width, grid, column balance (Approach / Services / home). No crushed text, no single card lost in empty space, no uneven three-column catalog.

5. **Home**: first viewport must include three buyable services (Design / Build / Operations). JOB/GATE card cannot be the only object under the headline. Examples AFTER services.

6. **Approach roadmap** (not deepen four named jobs)
   - Now = ship one gated seat
   - Next = reuse the method (job spec + gate + record) on a new seat
   - Later = modules / studio products still gated
   - Four desks stay examples; Other seats = method fits, not shipped products

## ALLOWED FILES

- `docs/ia-v6.md` (create)
- `docs/copy-locks.md` (update: ban Seattle/Global clients; add teaser/story entry line; keep allowed SAY; Approach roadmap rewrite note)
- `ops/HANDOFF.md`, `ops/STATUS.md` (optional)

## OUT OF SCOPE

- Any `app/`, `components/`, CSS implementation
- V6-1…V6-6 code

## `docs/ia-v6.md` must include

1. Why V6 (geo slogan kill; teaser vs story; nav inconsistency; desktop 1280/1440; home not services-first enough; Approach Next wrong)
2. Primary nav lock (4 items every route) + home chapter policy
3. Example teaser vs `/work/[desk]/story` split + still sequence under essay
4. Routes map matching owner brief
5. Desktop layout contract (1280/1440) + 375 still usable
6. Home first-viewport contract (three services)
7. Approach Now/Next/Later rewrite
8. Slice map V6-0…V6-6 (exact owner order)
9. Hard bans (geo slogan replacement; four-SKU; English-first; Lenis; 9↔4 nav swap; essay-on-teaser-card)

## `docs/copy-locks.md` must

- Move `Seattle studio. Global clients.` to **DO NOT SAY**
- Remove it from SAY / footer defaults
- Add verbatim entry: `Read the full example →`
- Keep: Agents, built to the brief. / One workflow. One agent. A human still decides. / We design the job… / Start a brief.
- Note Approach roadmap language for Next (method reuse, not deepen four desks)

## ACCEPTANCE

- [ ] `docs/ia-v6.md` covers nav, teaser/story, geo kill, desktop, home, roadmap, slices, bans
- [ ] `docs/copy-locks.md` bans Seattle/Global clients; adds Read the full example →
- [ ] No app/ changes
- [ ] English only; HANDOFF; commit+push; DEV PASS; do not open V6-1

## SKILLS TO USE

Docs awareness: `/apple-design` `/apple-design-web` `/emil-design-eng` `/gsap-scrolltrigger` `/gsap-react` `/zero-jank-scroll` `/review-animations` `/web-design-guidelines`

## COMMIT MESSAGE

`docs(v6): add ia-v6 and update copy locks for nav story split`
