# V3-0 PM reject — current live site

Preview: https://remex-atelier.vercel.app
Repo: remexstudio/remex-atelier (post-R4 rework)
Verdict: **FAIL** — do not polish; restage as V3 information architecture.

---

## Remex Apple PM — KEEP / KILL / ADD

**KEEP**
- `docs/copy-locks.md` SAY / DO NOT SAY constitution (English as build law, not market claim)
- Canvas tokens `#ffffff` / `#f5f5f7`, sticky frosted nav height band, CTA-only accent idea
- GSAP ScrollTrigger dependency and reduced-motion intent

**KILL**
- `components/HomeScenes.tsx` six near-identical full-bleed pin chapters that mostly swap slogans — reads as one template repeated, not apple.com product grammar
- `components/StoryScenes.tsx` shared morph grammar across four products — stages feel like the same toy chrome with different labels
- Thin hero → method → CTA rhythm with insufficient module diversity (no bento, no shallow/deep alternate, no horizontal still rail, no specs cluster)
- Any leftover Inter-template / purple-mesh risk on inner pages still using editorial paper stack without product-film variety

**ADD**
- Distinct module types on `/`: Hero, The hire, Gate still, Four jobs rail, For/Against, Brief asks, Method three, Roadmap three, Start a brief — each with unique layout DNA
- Hairline chapter maps in nav; large negative-tracking display; one new fact per module, never six clones of one pin
- Skills gate on every build ticket: `/apple-design` `/apple-design-web` `/apple-design-motion` `/emil-design-eng` + GSAP set

---

## Remex UX PM — KEEP / KILL / ADD

**KEEP**
- Skip link, `:focus-visible`, ContactForm labels, `prefers-reduced-motion` matchMedia branches
- Primary nav without `/demo/*` toy launches on work index

**KILL**
- Long pin runways (`+=150%` home ×6, `+=420%` story) that risk scroll traps and trapped reading — chapter progress must stay scannable
- Absolute-stack story beats that hide non-active copy from casual scrollers without a reduced-motion readable stack verified at 375
- Unclear chapter wayfinding: user cannot jump “Gate / Jobs / Brief / Roadmap” from nav

**ADD**
- Chapter-linked nav (or in-page map) for home modules; visible section ids
- 375 compositions as first-class (not squeezed desktop); 44px hit targets on job cards and CTA
- Reduced-motion: crossfade / static stack must still expose **all** payload facts (not a slogan subset)
- Escape hatches: footer + nav always reachable; no hijack that blocks leaving a pin

---

## Remex Vision PM — KEEP / KILL / ADD

**KEEP**
- Locked headlines as wayfinding only: Agents, built to the brief. / One workflow… / We design the job… / Start a brief.
- Study footer line pattern: Studio study. Client identity anonymized.
- Four product slugs: atelier-concierge, ledger-clerk, morning-remex, exception-copilot

**KILL**
- Slogan-only home: missing legal line, global clients, why we exist, what we refuse, brief constraints, Now/Next/Later as a dedicated section
- Product pages that share the same five-beat empty grammar (pain→agent→gate→record→CTA) without unique abilities / unique gates / unique records / unique refusals
- Any English-first / English products / outsourcing / employment-at-study-brand language if still present on legacy routes
- Founder name / personal site links (must stay absent)

**ADD (payload checklist — every item needs a landing place)**
- [ ] Remex Studio + 机羽云 meaning once on `/approach` only
- [ ] Jiyuyun Studio LLC + Seattle studio + global clients
- [ ] One-liner + Propose → Approve → Record mechanism
- [ ] Design the job / Build the gate / Keep the record with substance
- [ ] Four jobs each: unique capability ×3, unique gate, unique record, unique refusal
- [ ] What we do not sell
- [ ] What a brief must ask
- [ ] Now / Next / Later roadmap (one section, not a second home)
- [ ] Start a brief → `/contact`
- [ ] Study disclaimer on product stories
- [ ] Zero “English products” class claims in UI

**Product uniqueness required in later tickets**
1. Atelier Concierge — skin/occasion → one hero → try-on → bag → human at pay; refuse invent catalog / charge without approval; record consult + LUM-1042
2. Ledger Clerk — corpus-only answers; Propose never Execute; citations; Approve/Reject; audit log
3. Morning Remex — Priority/Watch/Noise + two tones; never auto-publish; brief+draft+escalate
4. Exception Copilot — queue + policy suggest; human for refunds/irreversible money; case timeline

---

## Board decision

Current live site = **failed draft**. Open V3-0 docs only, then V3-1… without polishing the old six-pin slogan film.

---

## Apple PM confirm (2026-09-14)

AGREE reject. Do not polish old six-pin film.

**Extra KILL**
- `docs/scroll-score.md` six-pin home contract must NOT carry into V3 implementation
- `docs/design.md` + paper `#f4f0e8` atelier stack must not remain the product-page default (canvas `#fff` / `#f5f5f7`)
- No “lengthen runway” rework of `HomeScenes` / `StoryScenes` — replace module DNA in V3 tickets

**Extra ADD for V3-0 docs**
- Module-level pin+scrub only; forbid N× identical home pins
- Module DNA list locked in scroll-score-v3
- Skill gate on every build ticket
