# Status

- Phase: **Studio v1 CLOSED** — DoD green
- Closed slices: S0–S9 (both DEV PASS + LEADER PASS)
- Final content SHA: 9f7ff95b23764b62b8b0e4795e97cd8984bdb608
- Tip: f75579a (ops stamp) + Leader S9 PASS docs
- Repo: https://github.com/remexstudio/remex-atelier
- Preview / production alias: https://remex-atelier.vercel.app
- Production deployment: dpl_98DJoTtpvD3Dg1snyLPVKxwR7kob
- Vercel team: `qinlinj-projects` (no remexstudio Vercel team on deploy auth; GitHub auto-deploy not linked — `repo_no_access`)
- Standby: yes. Personal site: not opened.

## Studio v1 definition of done

### Marketing routes

| Route | Result |
| --- | --- |
| `/` | green (local + live) |
| `/work` | green (local + live) |
| `/work/lumen-atelier` | green (local + live) |
| `/work/northline` | green (local + live) |
| `/work/kite` | green (local + live) |
| `/work/paperline` | green (local + live) |
| `/services` | green (local + live) |
| `/approach` | green (local + live) |
| `/lab` | green (local + live) |
| `/lab/pulse` | green (local + live) |
| `/about` | green (local + live) |
| `/contact` | green (local + live) |

### Demo families

| Family | Result |
| --- | --- |
| Lumen (`/demo/lumen` + consult, try-on, bag, pay, desk) | green (local + live) |
| Northline (`/demo/northline` + ask, source, change, log) | green (local + live) |
| Kite (`/demo/kite` + brief, thread/[id], digest) | green (local + live) |
| Paperline (`/demo/paperline` + queue, case/[id], policy) | green (local + live) |

### Product / content locks

| Item | Result |
| --- | --- |
| English UI only | green |
| Study footer: `Studio study. Client identity anonymized.` | green (live verified) |
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
| Preview URL live (`https://remex-atelier.vercel.app`) | green |
| `qinlinj-projects` + Deployment Protection caveat documented | green |
| `pnpm build` passes | green |
| Production README | green |

### vercel-optimize (optional)

Deferred — no metric-backed audit; no invented cost or performance claims.
