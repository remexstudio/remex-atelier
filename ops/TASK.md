# TASK V3-11

TASK ID: V3-11
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /apple-design-motion /emil-design-eng /cinematic-scroll-storytelling /zero-jank-scroll /review-animations /writing-guidelines

GOAL:
Break four-chapter isomorphic layout grammar. Each product page must use at least two layout grammars unique to that job — not the same job→pain→flow→gate→record→refusal→cta clone with swapped chips. **Locked score lines stay verbatim.** Visual DNA in stills must remain readable.

Cite: Apple ITERATION ADD item 3 (break iso) + Vision/UX ADD (V3-11).

ALLOWED:
- components/AtelierConciergeChapter.tsx
- components/LedgerClerkChapter.tsx
- components/MorningRemexChapter.tsx
- components/ExceptionCopilotChapter.tsx
- app/globals.css (chapter-specific layout blocks only: cq-/lc-/mr-/ec-)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Paraphrasing scroll-score / copy-locks lines
- HomeScenes / work index still rewrite (done V3-10)
- Services/Lab/About film redesign (V3-12)
- Reintroducing StoryScenes or long pins
- Marketing /demo CTAs

REQUIRED (exact lines must remain; shapes change):
1. Concierge: ≥2 unique grammars e.g. horizontal pipeline + try-on stack / bag→pay stage — not a clone of Ledger columns.
2. Ledger: ≥2 unique e.g. citation stack + Propose≠Execute comparison table / Approve·Reject pair.
3. Morning: ≥2 unique e.g. dual-tone draft columns + P/W/N triage rail.
4. Exception: ≥2 unique e.g. ranked queue list + policy-cite sidebar / case timeline spine.
5. Swap titles between two pages must still look like different products (Vision veto if not).
6. pin:no; once-reveal OK; transform/opacity; no Lenis; 375+RM full facts; CTA ≥44; canvas #fff/#f5f5f7.
7. pnpm build PASS. Prefer vercel deploy --prod after push.

COMMIT: `feat(work): v3 break four chapter isomorphic layouts`

Await three PM + Leader. No V3-12 until PASS.
