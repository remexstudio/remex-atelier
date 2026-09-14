# Review R4 — REWORK

- TASK ID: R4 (same ID; no new pages)
- Prior delivery SHA: 596aa52
- Verdict: **LEADER: REWORK**

## Defects (must fix)

1. **Story film grammar is wrong for Apple product chapters.**  
   Score + owner: one **pinned product stage** + **five copy scenes that scrub in**.  
   Current: five independent full-viewport pins, each fading its own still.  
   Fix: per story route, **one** ScrollTrigger pin on a persistent stage; scrub five copy beats (A–E); stage still morphs pain → agent → gate → record → CTA via transform/opacity only. No new routes.

2. **Home pin runway too short (`end: "+=90%"`).**  
   Chapters feel rushed, not apple.com breath.  
   Fix: longer pin distance (≈ `+=140%`–`+=160%`) with a readable hold; one idea per scene must linger. Keep scrub:1; no Lenis/normalizeScroll.

3. **Blank-slide entrances.**  
   `gsap.set(..., autoAlpha: 0)` on stage+copy at each pin start → empty frames.  
   Fix: keep stage present; evolve stage state + crossfade copy. Do not black out the chapter.

4. **S2 stage shows literal “Job title”.**  
   Looks like a placeholder, not “the job title lights up.”  
   Fix: light up a concrete job-name still (craft visual). No new slogans; no paraphrasing locked headlines.

5. **S5 method hierarchy vs scroll-score.**  
   Score: line 1 = headline; lines 2–3 = supporting sequential beats.  
   Current: three equal display headlines.  
   Fix: typographic hierarchy (headline vs support) while keeping the three exact lines and sequential scrub.

6. **Story scene-1 productName kicker dilutes one idea per scene.**  
   Pain beat must be the locked sentence alone in the copy column.  
   Fix: move product name to stage/chrome/metadata; copy column = locked line (+ CTA only on beat E).

## Skills required before edits

`/apple-design-web` `/review-animations` `/gsap-scrolltrigger`

## Out of scope

New pages, new routes, new slogans, /demo rebuild, personal site.
