# Scroll score

Pinned-stage scroll film for Remex Studio marketing. Marketing stills only. No live widgets, fake checkout, real refunds, or auto-posting. Prefer transform/opacity; respect `prefers-reduced-motion`. Pin ids are the contract for later GSAP ScrollTrigger work.

## Home — six pinned scenes

| Scene | Pin target | Visual on stage | Headline (exact) | Supporting line (exact) |
| --- | --- | --- | --- | --- |
| S1 Promise | `#home-s1` | Silent product frame | Agents, built to the brief. | One workflow. One agent. A human still decides. |
| S2 The job | `#home-s2` | The job title lights up | Most tools answer. | Ours is hired for one job. |
| S3 The gate | `#home-s3` | Propose then Approve | The agent proposes. | A person approves. The record stays. |
| S4 Four jobs | `#home-s4` | Four stills linking to the four stories | Four jobs we know how to hire an agent for. | Atelier Concierge. Ledger Clerk. Morning Remex. Exception Copilot. |
| S5 Method | `#home-s5` | Three method beats | Design the job. | Build the gate. Keep the record. |
| S6 Close | `#home-s6` | Close CTA | Start a brief. | Tell us the painful workflow. We design the agent and the gate. |

### S5 Method — three lines (exact)

1. Design the job.
2. Build the gate.
3. Keep the record.

On stage, treat the three lines as sequential beats under the same pin. Headline column carries line 1; supporting column carries lines 2–3 as written above (no slash on ship).

## Four product stories — five scenes each

Same grammar on every story: pain → agent appears → human gate → record → Start a brief. One sentence per scene. Routes below are the score paths (slug fix: `exception-copilot`).

### 1. Atelier Concierge — `/work/atelier-concierge`

| Scene | Beat | Line (exact) |
| --- | --- | --- |
| 1 | pain | Concierge notes scatter across fittings, holds, and aftercare. |
| 2 | agent appears | Atelier Concierge drafts the next step for each client thread. |
| 3 | human gate | A stylist approves before anything reaches the client. |
| 4 | record | Every proposal and approval stays on the desk log. |
| 5 | Start a brief | Start a brief. |

### 2. Ledger Clerk — `/work/ledger-clerk`

| Scene | Beat | Line (exact) |
| --- | --- | --- |
| 1 | pain | Month-end questions bury the team in the same spreadsheet hunt. |
| 2 | agent appears | Ledger Clerk cites the source before it answers. |
| 3 | human gate | A controller signs the change before books move. |
| 4 | record | Ask, source, and approval sit in one change log. |
| 5 | Start a brief | Start a brief. |

### 3. Morning Remex — `/work/morning-remex`

| Scene | Beat | Line (exact) |
| --- | --- | --- |
| 1 | pain | Overnight threads arrive without a single readable brief. |
| 2 | agent appears | Morning Remex drafts the morning packet from the inbox. |
| 3 | human gate | An operator edits tone before the digest goes out. |
| 4 | record | Brief, thread, and send decision stay linked. |
| 5 | Start a brief | Start a brief. |

### 4. Exception Copilot — `/work/exception-copilot`

| Scene | Beat | Line (exact) |
| --- | --- | --- |
| 1 | pain | Exceptions pile up faster than policy can be reread. |
| 2 | agent appears | Exception Copilot ranks the queue and drafts a disposition. |
| 3 | human gate | A lead approves before inventory or credit moves. |
| 4 | record | Case, policy cite, and decision stay on the ticket. |
| 5 | Start a brief | Start a brief. |

## Implementation notes (score only)

- Home: six chaptered pins (`#home-s1` … `#home-s6`); one idea per scene.
- Product stories: five pins each; still frames only; CTA scene uses approved headline **Start a brief.**
- Do not implement ScrollTrigger in this slice — score docs only.
