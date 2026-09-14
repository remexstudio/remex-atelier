# TASK V3-15

TASK ID: V3-15
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /emil-design-eng /web-design-guidelines /writing-guidelines /review-animations

GOAL:
DRY the four brief-ask strings to one shared source. Raise still/beat density on the four unique product chapters without changing locked score lines, new pins, or isomorphic layouts.

Cite: Apple/UX/Vision post-V3-14 KEEP/KILL/ADD (non-blocking ADD).

ALLOWED:
- New shared module under `lib/` or `components/` for BRIEF_ASKS constant only (e.g. `lib/brief-asks.ts`)
- components/HomeScenes.tsx (H6 import + optional H2 PAR microchips only)
- components/ContactForm.tsx
- app/contact/page.tsx
- components/AtelierConciergeChapter.tsx
- components/LedgerClerkChapter.tsx
- components/MorningRemexChapter.tsx
- components/ExceptionCopilotChapter.tsx
- app/globals.css (chapter still / hire-still helpers only)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md, ops/ITERATION.md

OUT OF SCOPE:
- Changing locked headlines / ability / gate / record / refusal score lines
- New pins, Lenis, normalizeScroll, body overflow lock
- Moving 机羽云 or refuse list
- Services/About copy rewrites
- Reintroducing /demo CTAs or StoryScenes

REQUIRED:
1. **BRIEF_ASKS DRY** — single exported constant with exact strings:
   - Which workflow hurts.
   - Who approves.
   - What the agent may never do.
   - What record you must keep.
   HomeScenes H6, ContactForm labels, and contact page checklist all import it. No divergent copies.
2. **Four-chapter still density** — each of Concierge / Ledger / Morning / Exception:
   - Still frames show product-specific readable DNA (not empty decorative boxes, not chatbot chrome).
   - Gate + record cues remain visually distinct per product DNA from `docs/scroll-score-v3.md`.
   - Locked module lines stay verbatim.
   - Shallow scroll; once-reveal OK; no long pins; 375/RM full facts remain visible.
3. Soft if cheap: H2 hire-still Propose→Approve→Record microchips next to Human gate.
4. `pnpm build` PASS; `vercel deploy --prod`; record deploy id in HANDOFF.

ACCEPTANCE:
- [ ] BRIEF_ASKS defined once; three consumers import the same module
- [ ] Four chapter stills denser with product-specific DNA; locked lines unchanged
- [ ] No new pins; no Lenis; no 机羽云/refuse move; no English-products
- [ ] Hit targets ≥44 where touched; build green; prod refreshed

COMMIT: `feat(site): v3 brief-asks dry and chapter still density`

Await three PM + Leader. No V3-16 until PASS.
