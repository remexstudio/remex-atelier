# REVIEW — Canon DoD CLOSED

- Slice: C-DoD live production check of the owner defects that opened the Canon Cycle
- Canon: **PASS**
- Tip: `ff9fab7` on `main` (`Merge pull request #48 from remexstudio/cursor/c5-inner-canon-polish-2e15`)
- C5 commit: `c00477d` (`feat(site): inner pages canon polish for C5`)
- Prod: `dpl_B7pChHN78p1pBgLzV9hEgemw2yKA` **READY** → https://remex-atelier.vercel.app
- Alias before this stamp was still UI-5 `11406c3` / `dpl_boxRtYBsw4QApNXGYxA5CjdAGhbe`. Production was redeployed from `main` @ `ff9fab7` and the alias moved when that deployment reached READY.
- DoD: **11/11 PASS** (375 and 1440)
- C6: **do not open**
- Planned map C0–C5: **CLOSED**
- Dev: standby. Next polish slice only if the owner wants the loop to continue.

## Done When (live prod)

| # | Check | Verdict | Evidence |
| --- | --- | --- | --- |
| 1 | Home has one ProductStage teaching Propose → Approve → Record | **PASS** | One `[data-product-stage]` on `/`. Gate, examples, brief, roadmap, and close add their own facts and mount zero stages. Visible “Propose → Approve → Record” count on home body text: 0. |
| 2 | Design / Build / Operations readable as the catalog | **PASS** | Hero links 18px / 600 / `rgb(29, 29, 31)`. Services names “Agent product design / Agent build / Agent operations” 32px at 1440 and 24px at 375, weight 600, ink, opacity 1 after scroll. Lede “Design, Build, and Operations.” |
| 3 | Selected examples are short method-proof cards | **PASS** | H2 “Selected examples”. Lede denies a product catalog. Cards 114 / 142 / 117 / 135 characters. Each links “Read the full example →”. |
| 4 | No Seattle / global-clients / English-first / only-four-agents | **PASS** | Body scan of `/` `/services` `/work` `/approach` `/contact` `/work/atelier-concierge/story` at 375 and 1440: no Seattle, no “global clients”, no English-first. The only “four agents” hit is the Services FAQ “Do you sell four agents?” answered “No. The four desks on the site are selected examples — proof of method, not the catalog.” |
| 5 | Four-link nav Work · Services · Approach · Contact | **PASS** | 1440: those four links visible in the header, nav height 46. 375: same four links in the Menu disclosure, each 48px. No extra primary links. |
| 6 | Product footer, no gray Prototype / About slab | **PASS** | Every checked route: lockup “Remex Studio”; legal “Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC”; wayfinding those four links. Footer background `rgb(255, 255, 255)`. Prototype and About are transparent text (`rgba(0, 0, 0, 0)`), radius 0, shadow none. |
| 7 | Approach prints the three names together | **PASS** | `.approach-studio__line` is “Remex Studio · 机羽云 Studio · Jiyuyun Studio LLC”. Facts repeat the three names. Three bands. Zero product stages. |
| 8 | Stage scrub on that module only | **PASS** | One `.pin-spacer`, parent is the hero stage. 1440 and 375 both step Propose → Approve → Record. Approve pill `rgb(29, 29, 31)`. Body and html overflow stay `visible`. Scroll reaches the document end. |
| 9 | Reduced motion: three frames, all text, no trap | **PASS** | `prefers-reduced-motion: reduce`: zero pins. Propose / Approve / Record are `position: static`, opacity 1, line height 71–119. Scroll reaches the document end. Overflow `visible`. |
| 10 | `/services` is not a second home stage | **PASS** | H1 “Services”. Zero `[data-product-stage]`. Home headline absent. Three rows Design / Build / Operations, stills about 190px (not the 520 home stage). |
| 11 | `/work` short plus story entry; story narrow plus stills | **PASS** | Teasers stay the short lines above. “Read the full example →” height 44, hrefs the four story routes. Demand story: narrative width 680 at 1440 and 343 at 375; five stills 200–234px; zero product stages. |

Soft (not FAIL → BACKLOG): Propose-first default stays accepted. StageStill `aria-hidden` DNA and compact `desk-ui__fact` stay soft. Record-beat pill fill is the gutter `rgb(245, 245, 247)`; Approve is the filled beat.

---

# REVIEW — C4 CLOSED

- Slice: C4 stage scroll motion
- Canon: **PASS**
- Commit: `ad1afd3` (`fix(home): keep hero copy at the top of the stage pin`)
- Merge: `0038290` on `main` (`Merge pull request #47 from remexstudio/cursor/c4-scrub-stage-states-ed2f`)
- C4 CLOSED. Canon Cycle continues at C5.

Soft ADD (accepted, do not reopen unless broken): Propose-first default. The home stage opens on Propose and still scrubs Propose → Approve → Record.

---

# REVIEW — C3 CLOSED

- Slice: C3 home, one stage, one loop
- Canon: **PASS**
- Commit: `ff610e4` (`feat(home): one stage one loop for C3`)
- Merge: `7953363` on `main` (`Merge pull request #46 from remexstudio/cursor/c3-one-stage-one-loop-9c1d`)
- C3 CLOSED. Canon Cycle continues at C4.

---

# REVIEW — C2 CLOSED

- Slice: C2 Approach legal
- Canon: **PASS**
- Commit: `45e6761` (`docs(ops): record C2 measured approach name checks`)
- Merge: `a5139cc` on `main` (`Merge pull request #45 from remexstudio/cursor/c2-approach-names-1f53`)
- C2 CLOSED. Canon Cycle continues at C3.

---

# REVIEW — C1 CLOSED

- Slice: C1 product footer
- Canon: **PASS**
- Commit: `c86afe0` (`feat(site): replace lab footer with product footer for C1`)
- Merge: `963df8d` on `main` (`Merge pull request #44 from remexstudio/cursor/c1-product-footer-2e54`)
- C1 CLOSED. Canon Cycle continues at C2.

---

# REVIEW — C0 CLOSED

- Slice: C0 `docs/CANON.md`
- Canon: **PASS**
- Commit: `b25bc43` (`docs(canon): add CANON.md for C0`)
- Merge: `9015ee1` on `main` (`Merge pull request #43 from remexstudio/cursor/canon-c0-065a`)
- C0 CLOSED. Canon Cycle continues at C1.

---

# REVIEW — UI appearance DoD CLOSED

- Tip: `11406c3`
- Prod: `dpl_boxRtYBsw4QApNXGYxA5CjdAGhbe`
- DoD: **7/7 PASS** (Leader)
- UI-6: **do not open**
- Soft ADD: backlog only

---

# REVIEW — UI-5 CLOSED

- Slice: UI-5 still fidelity + appearance DoD on production
- DEV: **PASS**
- Apple / UX / Vision / Leader: **PASS**
- Tip: `11406c3` on `main` (`Merge pull request #41 from remexstudio/cursor/ui-5-still-fidelity-388f`)
- Prod: `dpl_boxRtYBsw4QApNXGYxA5CjdAGhbe` → https://remex-atelier.vercel.app
- Unanimous PM PASS on UI-5. Leader DoD **PASS**. UI-5 CLOSED. UI campaign appearance CLOSED.

## Done When (live prod)

| # | Check | Verdict | Evidence |
| --- | --- | --- | --- |
| 1 | Home first viewport ≠ title + gray JOB/GATE card | **PASS** | 1440: ProductStage Propose→Approve→Record, Approve filled, stage **520**, Design/Build/Operations strip in-viewport (top 854 / 900), Start a brief pill `#1d1d1f` / 44. 375: stage under type, Approve filled, not a gray card. |
| 2 | Display Geist/system 600 ~-0.03em | **PASS** | h1 Geist 600; 1440 **80px / -2.4px** (= -0.03em); 375 **56px / -1.68px** (= -0.03em). Not Source Sans 400. |
| 3 | Dark `#home-gate` #000 + dark ProductStage + distinct H2/lede | **PASS** | Gate bg `rgb(0,0,0)`; `product-stage--dark` 520; H2 “A human still decides.” vs lede “Irreversible actions stay behind a named person.” |
| 4 | Four-link frosted nav 44–48 everywhere | **PASS** | Work · Services · Approach · Contact on `/` `/services` `/work` `/approach` `/contact` `/work/atelier-concierge/story`; nav **46**; frost `rgba(255,255,255,0.72)` + blur 20px. |
| 5 | Inner pages not home-hero clones | **PASS** | `/services` 3 rows + stills; `/work` short teasers + entry; story reading **680** + Ask→Recommend→Gate→Record stills; `/approach` method/refuse/path bands; `/contact` inset hairline sheet + black pill. |
| 6 | 375 and 1440 hold stage/layout | **PASS** | 1440 first viewport packs type + stage 520 + strip. 375 stacks type then stage 520; strip below fold (UI-4 hold). |
| 7 | No Seattle / Global clients / English-first / `#1d4ed8` | **PASS** | Body + CSS scan clean. CTA `#1d1d1f`. Routes locked. |

Soft ADD (not FAIL → BACKLOG): StageStill `aria-hidden` DNA via adjacent copy; compact `desk-ui__fact`.

---

# REVIEW — UI-4 CLOSED

- Slice: UI-4 375 / 1280 / 1440 layout hold
- DEV: **PASS**
- Apple / UX / Vision / Leader: **PASS**
- Tip: `d375f98` on `main` (`Merge pull request #40 from remexstudio/cursor/ui-4-layout-hold-c2ee`)
- Unanimous PASS. UI-4 CLOSED.
