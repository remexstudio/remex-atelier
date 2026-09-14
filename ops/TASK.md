# TASK R1

TASK ID: R1
REPO: remexstudio/remex-atelier
GOAL: Rebuild `/` as six full-viewport pinned product scenes per `docs/scroll-score.md`, with copy locked to `docs/copy-locks.md`. Apple-style scroll film. Marketing stills only.

ALLOWED FILES:
- `app/page.tsx`
- `app/layout.tsx` (nav/footer chrome only as needed)
- `app/globals.css`
- `components/SiteChrome.tsx` or equivalent layout/nav/footer (sticky translucent nav ~44–48px)
- `components/HomeScenes.tsx` (or similarly named HomeScenes client component)
- `package.json` / `pnpm-lock.yaml` (add GSAP + ScrollTrigger; optional Lenis)
- `ops/HANDOFF.md`, `ops/STATUS.md`, `ops/BACKLOG.md` (handoff only)

OUT OF SCOPE:
- `/demo/*` rebuild
- personal site
- product story routes (`/work/atelier-concierge` etc.) — S4 may **link** to future paths but do not build those pages this slice
- new slogans / paraphrasing locked copy
- purple mesh, Inter-template slop, chatbot UI
- fake checkout / live refunds / auto-publish

SKILLS TO USE (read before code):
- apple-design
- apple-design-web
- apple-design-motion
- emil-design-eng
- gsap-scrolltrigger
- gsap-timeline
- gsap-react
- cinematic-scroll-storytelling
- zero-jank-scroll
- gsap-web

COMMIT MESSAGE: feat(home): add pinned product scenes

## Spec

### Scenes (from docs/scroll-score.md)

Six full-viewport scenes with pin ids `#home-s1` … `#home-s6`:

| ID | Visual | Headline (exact) | Support (exact) |
| --- | --- | --- | --- |
| S1 | Silent product frame | Agents, built to the brief. | One workflow. One agent. A human still decides. |
| S2 | Job title lights up | Most tools answer. | Ours is hired for one job. |
| S3 | Propose then Approve | The agent proposes. | A person approves. The record stays. |
| S4 | Four stills → four stories | Four jobs we know how to hire an agent for. | Atelier Concierge. Ledger Clerk. Morning Remex. Exception Copilot. |
| S5 | Three method beats | Design the job. | Build the gate. Keep the record. (three lines sequential) |
| S6 | Close CTA | Start a brief. | Tell us the painful workflow. We design the agent and the gate. |

S6 CTA should route to `/contact` (or existing brief entry) — label exact **Start a brief.**

### Motion / craft

- Each scene: `pin: true`, `scrub: 1`
- Animate **only** `transform` and `opacity`
- Light canvas `#ffffff` / gutter `#f5f5f7`
- **One** accent color on CTA only
- Large display type; negative tracking on headlines
- Sticky translucent nav ~44–48px
- `prefers-reduced-motion`: **no pin theater**; crossfade only
- Preserve native scroll; avoid layout thrashing / per-frame React state (zero-jank)

### Copy

- Match `docs/copy-locks.md` and scroll-score lines **exactly**
- Strip any remaining “English-first / English products / English-language software” language from home if present
- No founder name; no DO NOT SAY phrases

## Acceptance

- [ ] `/` presents six full-viewport scenes with pin targets `#home-s1`…`#home-s6`
- [ ] Headlines/supports match scroll-score exactly (including S5 three lines)
- [ ] GSAP ScrollTrigger pins with scrub:1; only transform/opacity
- [ ] Canvas/gutter colors; one accent on CTA; sticky translucent nav 44–48px
- [ ] No purple mesh / Inter-slop / chatbot; no English-first claims
- [ ] `prefers-reduced-motion` disables pin theater (crossfade only)
- [ ] `pnpm build` passes
- [ ] Commit: `feat(home): add pinned product scenes`
- [ ] HANDOFF lists all skills used + reduced-motion note + preview URL or blocker

## Stop

Both PASS closes R1. Do not start R2 until owner sends the next prompt.
