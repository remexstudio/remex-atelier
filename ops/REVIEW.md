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
