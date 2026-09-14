# TASK V3-10

TASK ID: V3-10
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /apple-design-motion /emil-design-eng /cinematic-scroll-storytelling /zero-jank-scroll /review-animations /writing-guidelines

GOAL:
Raise still fidelity on home + /work. Kill chatbot-chrome product frames and pure gradient still bricks. Locked copy stays verbatim. Do not break four unique chapters' text locks. Layout isomorphism break is V3-11 — this ticket is stills/frames only.

Cite: Apple ITERATION ADD items 1–2 + KILL gradient/chatbot chrome.

ALLOWED:
- components/HomeScenes.tsx
- app/work/page.tsx
- app/globals.css (home/work still styles)
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md

OUT OF SCOPE:
- Rewriting four *Chapter.tsx copy locks or breaking their layout grammar (V3-11)
- Services/Lab/About redesign (V3-12)
- Reintroducing /demo marketing CTAs
- Changing SiteChrome chapter-map rules from V3-9

REQUIRED:
1. Home: replace `.product-frame` three-dot + gray-bar chatbot chrome with recognizable Concierge/Gate still DNA (Propose→Approve→Record or hire-stage UI — CSS stills OK, no live widgets).
2. Home job cards: replace `.job-card__still` pure linear-gradient bricks with four distinct micro-DNA stills (skin→hero / corpus spine / P·W·N / exception queue U1–U3).
3. /work index: replace `still-a…d` gradient cards with product-distinct stills aligned to each chapter hero DNA; one glance = which job.
4. Canvas #fff/#f5f5f7; hairlines; no purple mesh; no Inter-template slop; transform/opacity only if any motion touch.
5. 375 readable; reduced-motion full facts; CTA ≥44.
6. Also: `vercel deploy --prod` (or equivalent) so remex-atelier.vercel.app serves main tip with 301s — report deploy URL/SHA in HANDOFF.
7. pnpm build PASS.

COMMIT: `feat(site): v3 home and work still fidelity`

Await three PM + Leader. No V3-11 until PASS.
