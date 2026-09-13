# Status

- Phase: S9 delivered (pending Leader PASS)
- Current TASK: S9
- Closed: S0–S8 PASS (S8 delivery SHA 4e19568cab745096b1fe15c5bf7c442b66643bef)
- Repo: https://github.com/remexstudio/remex-atelier
- Preview: https://remex-atelier.vercel.app
- Vercel team: `qinlinj-projects` (no remexstudio Vercel team on deploy auth)
- DoD: studio v1 **green** (checklist below)

## Studio v1 definition of done

Checked against repo + local `pnpm build` / smoke on S9. Live alias may lag or sit behind Deployment Protection; see Preview notes.

### Marketing routes

| Route | Result |
| --- | --- |
| `/` | green |
| `/work` | green |
| `/work/lumen-atelier` | green |
| `/work/northline` | green |
| `/work/kite` | green |
| `/work/paperline` | green |
| `/services` | green |
| `/approach` | green |
| `/lab` | green |
| `/lab/pulse` | green |
| `/about` | green |
| `/contact` | green |

### Demo families

| Family | Result |
| --- | --- |
| Lumen (`/demo/lumen` + consult, try-on, bag, pay, desk) | green |
| Northline (`/demo/northline` + ask, source, change, log) | green |
| Kite (`/demo/kite` + brief, thread/[id], digest) | green |
| Paperline (`/demo/paperline` + queue, case/[id], policy) | green |

### Product / content locks

| Item | Result |
| --- | --- |
| English UI only | green |
| Study footer: `Studio study. Client identity anonymized.` | green |
| No founder PII | green |
| No fake % | green |
| No purple / neon SaaS chrome | green |
| Responsive intent (375 / 1280 targets in design docs) | green |

### A11y / metadata

| Item | Result |
| --- | --- |
| `:focus-visible` on interactive controls | green |
| Form labels (contact + demo fields) | green |
| Metadata + Open Graph (home, work, studies) | green |
| `prefers-reduced-motion` respected | green |

### Deploy / build

| Item | Result |
| --- | --- |
| Preview URL documented (`https://remex-atelier.vercel.app`) | green |
| `qinlinj-projects` + Deployment Protection caveat documented | green |
| `pnpm build` passes | green (S9) |

### vercel-optimize (optional)

No metric-backed audit this slice (CLI not linked in the S9 box; Observability not in scope). Ship is a static marketing + demo App Router site. No invented cost or performance claims. Revisit with `vercel-optimize` after production traffic and a linked CLI session.
