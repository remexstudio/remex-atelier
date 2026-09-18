# Handoff UI-5

- Status: **DEV PASS**
- TASK ID: UI-5
- SHA: `50ef17c` (content) · tip after this stamp
- PR: https://github.com/remexstudio/remex-atelier/pull/41
- Phase: UI campaign open
- Allowed files only: ProductStage, StageStill / ServiceStageStill / desk stills, HomeScenes still wiring, chapter still chrome, `app/globals.css` still/stage chrome, ops stamps.
- Out of scope kept: no UI-6, no copy/route rewrites, no UI-4 layout-grid rebuild, no new offers.
- Do not invent UI-6.

## UI-4 closed

Unanimous PASS (Apple / UX / Vision / Leader) at merge tip `d375f98` on `main`.

## Still fidelity

- **ProductStage** — light + dark: specular edge + inset hairline; inner ticket on a desk (not a JOB/GATE text card); Approve filled near-black; Propose = draft ticket + outline pill; Record = linked log rows + quiet pill.
- **ServiceStageStill** — Design = spec sheet (Seat / Inputs / Done); Build = Propose→Approve→Record with Approve filled; Operations = Evals / Gate / Record + Hold. Hairline, radius 22, no drop shadow.
- **Desk DNA** — Demand: Human before pay · LUM-1042; Knowledge: Propose ≠ Execute · corpus; Attention: Priority / Watch / Noise · Human before send; Exception: Human before money · refund hold.
- **Story** — Ask → Recommend → Gate → Record kickers on stills; locked captions / body copy untouched.
- **Home examples** — same teaser still grammar as `/work` (short + entry).
- **Motion** — no new motion; no Lenis / normalizeScroll / body lock. Reduced-motion: stills and text stay visible (transform/opacity only).

## Measured (local `pnpm start`, Chrome, `prefers-reduced-motion: no-preference`)

| Surface | Nav | Stage / still | DNA / notes |
| --- | --- | --- | --- |
| Home 1440×900 | four inline Work · Services · Approach · Contact | ProductStage **520 × 526**; Approve filled | first viewport = headline + black pill + stage + Design/Build/Operations strip — not title + gray card |
| Home 375×812 | Menu + four links | ProductStage **520 × 335**; Approve filled; stage under type | UI-4 hold kept |
| `#home-gate` 1440 | four inline | dark ProductStage **520**; variant=dark; Approve filled | chapter bg `rgb(0, 0, 0)` |
| Home examples | — | four `desk-ui` teasers | Human before pay · LUM-1042 / Propose ≠ Execute · corpus / Priority·Watch·Noise · Human before send / Human before money |
| Services 1440 | four inline | three compact stills, not clones | Design=spec Seat/Inputs/Done; Build=Propose→Approve→Record + Approve; Operations=Evals/Gate/Record + Hold |
| Work 1440 | four inline | teaser stills 11.5rem | same four DNA facts as examples |
| Story Demand | four inline | Ask / Recommend / Recommend / Gate / Record | Gate = Human before pay; Record ticket LUM-1042; captions locked |
| Reduced-motion `/` | — | 6 ProductStage panels visible | Propose + Approve + Record on hero and gate |

`--cta` `#1d1d1f` (not `#1d4ed8`). No Seattle. No Lenis / body lock.

Screenshots: `/opt/cursor/artifacts/screenshots/home-1440-productstage.png`, `home-1440-gate.png`, `services-1440-row.png`, `work-1440-teasers.png`, `story-demand-stills.png`, `home-375-productstage.png`.

## Verify

`pnpm build` PASS. Local smoke `/` `/services` `/work` `/work/atelier-concierge/story` HTTP 200. Reduced-motion: ProductStage Propose/Approve/Record all visible. No Lenis / body lock.

## Acceptance self-check

- [x] First screenshot is NOT title + gray card alone — product stage + real still grammar
- [x] ProductStage light/dark premium; Approve filled; DNA stills distinct across four desks
- [x] /services stills not identical clones; story Ask→Recommend→Gate→Record readable
- [x] UI-0…UI-4 not regressed; no Seattle; lock copy/routes; four-link nav
- [x] `pnpm build` PASS; open PR ready-for-review
- [x] UI-4 CLOSED in REVIEW (unanimous PASS, merge tip `d375f98`); STATUS Active=UI-5; HANDOFF DEV PASS with measured notes

## Skills used

apple-design, apple-design-web (via apple-design WWDC web mapping), emil-design-eng, web-design-guidelines, zero-jank-scroll (no new motion; no Lenis / normalizeScroll / body lock), review-animations (motion not added), gsap-scrolltrigger / gsap-react (read-only; HomeScenes motion untouched)

## Risks

Compact service / work stills are 11.5–12.5rem — DNA stays readable as short rows + one fact. First-viewport ProductStage height stays 520.

## Blockers

None. Awaiting PMs. Do not invent UI-6. Do not merge.
