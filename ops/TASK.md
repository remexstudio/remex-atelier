# TASK V3-14

TASK ID: V3-14
REPO: remexstudio/remex-atelier

SKILLS: /apple-design /apple-design-web /emil-design-eng /web-design-guidelines /writing-guidelines /review-animations (if touching home motion)

GOAL:
Raise information density without new slogans or new pins. Fill empty home method glyphs, sharpen H2 hire-still, align Contact to the four brief asks, nail non-interchangeable gate/record facts on Services offers, and echo the hire SAY line on About.

Cite: Apple/UX/Vision post-V3-13 KEEP/KILL/ADD (non-blocking ADD).

ALLOWED:
- components/HomeScenes.tsx (H2 hire-still + H7 method glyphs only; locked copy verbatim)
- app/globals.css (home hire/method glyph + contact checklist helpers; optional `.lab-loop` dead remap remove; optional `.btn-primary` text `#fff`)
- components/ContactForm.tsx
- app/contact/page.tsx (lede / checklist only if needed)
- app/services/page.tsx
- app/about/page.tsx
- ops/HANDOFF.md, ops/STATUS.md, ops/BACKLOG.md, ops/ITERATION.md

OUT OF SCOPE:
- New pins, Lenis, normalizeScroll, body overflow lock
- Moving 机羽云 or refuse list
- Changing locked product chapter score lines
- Reintroducing Offers.tsx or /demo CTAs
- Primary-nav promotion of Services/About

REQUIRED:
1. **Home H2** — `hire-still` reads as a single seat / job card lighting up (one workflow named). Keep headline + supports exact from `docs/scroll-score-v3.md` H2.
2. **Home H7** — each method column gets a **concrete** still glyph (not empty `aria-hidden` box). Titles/bodies stay exact: Design the job / Build the gate / Keep the record + existing substance sentences.
3. **Contact** — align to brief asks (exact strings from H6):
   - Which workflow hurts.
   - Who approves.
   - What the agent may never do.
   - What record you must keep.
   Keep Name + Email. Expand Brief into these four labeled fields (or a visible checklist band + one brief area). All inputs/CTA ≥44; focus-visible; success state kept.
4. **Services** — rewrite each of the three offer bodies so Agent Apps / Agent Ops / Advisory each state a **distinct, non-interchangeable** gate or record fact (Propose→Approve→Record DNA). No founder, no English-products claims, no interchangeable fluff.
5. **About** — add verbatim SAY echo: `One painful workflow. One agent. A human gate.` Keep Jiyuyun Studio LLC + Seattle studio. Global clients. No CJK move.
6. Soft if cheap: remove unused `.lab-loop` CSS remap; `.btn-primary` text color may use `#fff` instead of `var(--paper)` (not a canvas stub).
7. `pnpm build` PASS; `vercel deploy --prod` and record deploy id in HANDOFF.

ACCEPTANCE:
- [ ] H7 glyphs non-empty and visually distinct per column
- [ ] H2 hire-still readable as one seat / one job / human gate
- [ ] Contact surfaces all four brief-ask strings verbatim
- [ ] Services three offers not interchangeable on gate/record
- [ ] About contains exact hire SAY line
- [ ] No locked home/product headlines changed; no 机羽云/refuse move
- [ ] Hit targets ≥44; RM/375 not regressed; build green; prod refreshed

COMMIT: `feat(site): v3 density home contact services about`

Await three PM + Leader. No V3-15 until PASS.
