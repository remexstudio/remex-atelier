# TASK V3-13

TASK ID: V3-13
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /emil-design-eng /web-design-guidelines /writing-guidelines

GOAL:
Kill remaining paper/Tailwind stub seams: root body canvas, 404 film shell, PulseLoop native film classes, dead Offers stub. Add footer wayfinding to Services/About without crowding primary nav. Do not change locked product copy or reintroduce demos.

Cite: Apple/UX/Vision post-V3-12 KEEP/KILL/ADD.

ALLOWED:
- app/layout.tsx
- app/not-found.tsx
- app/globals.css (root tokens + film/lab/not-found only)
- components/lab/PulseLoop.tsx
- components/lab/pulse.css (if present)
- components/Offers.tsx (delete if unused)
- components/SiteChrome.tsx (footer secondary links + Lab aria-label only)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md, ops/ITERATION.md

OUT OF SCOPE:
- Home H2/H7 density glyphs (V3-14)
- Contact BRIEF_ASKS checklist / Services offer nails / About SAY echo (V3-14)
- Four chapter layout/copy changes
- Reintroducing /demo CTAs or long pins

REQUIRED:
1. `app/layout.tsx`: remove body `bg-paper`; lock to canvas/gutter tokens (`#fff` / `#f5f5f7`).
2. `app/not-found.tsx`: `SiteChrome variant="film"` + film page grammar; no `mt-14` paper stub; CTAs ≥44.
3. `PulseLoop.tsx` (+ pulse.css): replace `bg-paper` utilities with film/gutter classes; keep buttons ≥44, focus-visible, RM full facts.
4. Delete unused `components/Offers.tsx` if no imports remain.
5. `SiteChrome`: film footer secondary links to `/services` and `/about` (≥44, focus-visible); do NOT add them to primary nav row. Lab primary item: aria-label clarifying prototypes.
6. pnpm build PASS; prefer vercel deploy --prod.

COMMIT: `feat(site): v3 root canvas 404 and pulseloop film`

Await three PM + Leader. No V3-14 until PASS.
