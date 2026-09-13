export type SourceDoc = {
  id: string;
  title: string;
  kind: string;
  period: string;
  excerpt: string;
  pages?: string;
};

export type Citation = {
  sourceId: string;
  locator: string;
  note: string;
};

export type AskPreset = {
  id: string;
  question: string;
  answer: string;
  citations: Citation[];
};

export type ChangeDraft = {
  id: string;
  title: string;
  rationale: string;
  impact: string;
  requiresApproval: true;
};

export type LogKind = "ask" | "proposal" | "approval" | "rejection";

export type AuditEntry = {
  id: string;
  at: string;
  kind: LogKind;
  summary: string;
  detail?: string;
};

/** Mock ledger corpus — fictional, no real brands. */
export const sources: SourceDoc[] = [
  {
    id: "SRC-GL-Q2",
    title: "General ledger extract — Q2 2026",
    kind: "Ledger export",
    period: "2026-04-01 → 2026-06-30",
    excerpt:
      "Account 4100 Professional services revenue: $1,284,600 credit. Account 5200 Cloud infrastructure: $186,420 debit. Soft close stamped 2026-07-08.",
    pages: "pp. 12–18",
  },
  {
    id: "SRC-AP-SEP",
    title: "Accounts payable aging — September cut",
    kind: "Aging workbook",
    period: "As of 2026-09-01",
    excerpt:
      "Vendor V-204 (Northline mock vendor) current $42,100; 31–60 $8,400; 61+ $0. Total open AP $312,880.",
    pages: "Sheet Aging",
  },
  {
    id: "SRC-BANK-AUG",
    title: "Bank reconciliation — August 2026",
    kind: "Reconciliation packet",
    period: "2026-08-01 → 2026-08-31",
    excerpt:
      "Book balance $904,220. Outstanding checks $18,650. Deposits in transit $6,200. Cleared variance $0 after soft-close adjustments.",
    pages: "pp. 1–4",
  },
  {
    id: "SRC-POL-REV4",
    title: "Change-control policy — Rev 4",
    kind: "Policy",
    period: "Effective 2026-03-15",
    excerpt:
      "Ledger writes require a proposed ticket, dual review, and an explicit Approve. Agents may Propose; they must not Execute. Rejected tickets stay in the audit log.",
    pages: "§3 Approvals",
  },
];

export const askPresets: AskPreset[] = [
  {
    id: "Q-REV-Q2",
    question: "What was professional services revenue in Q2 2026?",
    answer:
      "Professional services revenue (account 4100) closed at $1,284,600 credit for Q2 2026. The soft close was stamped 2026-07-08 on the general ledger extract.",
    citations: [
      {
        sourceId: "SRC-GL-Q2",
        locator: "pp. 12–18 · acct 4100",
        note: "Credit balance for Professional services revenue.",
      },
    ],
  },
  {
    id: "Q-AP-OPEN",
    question: "How much AP is open as of the September cut?",
    answer:
      "Total open accounts payable is $312,880 as of 2026-09-01. Vendor V-204 shows $42,100 current and $8,400 in 31–60; nothing past 61 days.",
    citations: [
      {
        sourceId: "SRC-AP-SEP",
        locator: "Sheet Aging",
        note: "Roll-up of open AP and V-204 bucket detail.",
      },
    ],
  },
  {
    id: "Q-BANK-AUG",
    question: "Did August bank rec clear with zero variance?",
    answer:
      "Yes. After outstanding checks ($18,650) and deposits in transit ($6,200), the August reconciliation cleared with $0 variance against book balance $904,220.",
    citations: [
      {
        sourceId: "SRC-BANK-AUG",
        locator: "pp. 1–4",
        note: "Cleared variance line after soft-close adjustments.",
      },
      {
        sourceId: "SRC-POL-REV4",
        locator: "§3 Approvals",
        note: "Policy reminder: agents propose adjustments; humans approve.",
      },
    ],
  },
  {
    id: "Q-CLOUD-SPEND",
    question: "What did we book to cloud infrastructure in Q2?",
    answer:
      "Cloud infrastructure (account 5200) shows $186,420 debit in the Q2 general ledger extract. No further breakdown is in the demo corpus.",
    citations: [
      {
        sourceId: "SRC-GL-Q2",
        locator: "pp. 12–18 · acct 5200",
        note: "Debit total for Cloud infrastructure.",
      },
    ],
  },
];

export const changeDrafts: ChangeDraft[] = [
  {
    id: "CHG-ACC-01",
    title: "Reclass cloud overage to prepaid",
    rationale:
      "Q2 cloud spend includes $12,400 that belongs in prepaid for September capacity. Clerk proposes a reclass; it does not post.",
    impact: "Dr Prepaid 1400 $12,400 · Cr Cloud infrastructure 5200 $12,400",
    requiresApproval: true,
  },
  {
    id: "CHG-AP-02",
    title: "Clear stale AP hold on V-204",
    rationale:
      "Aging shows $8,400 in 31–60 for V-204 with matching goods receipt. Propose release of the hold pending controller Approve.",
    impact: "Release hold · no P&L impact if matched; else short-pay ticket",
    requiresApproval: true,
  },
];

export const seedLog: AuditEntry[] = [
  {
    id: "LOG-001",
    at: "2026-09-12T15:02:00Z",
    kind: "ask",
    summary: "Asked Q2 professional services revenue",
    detail: "Answer cited SRC-GL-Q2 · acct 4100",
  },
  {
    id: "LOG-002",
    at: "2026-09-12T15:08:00Z",
    kind: "proposal",
    summary: "Proposed CHG-ACC-01 reclass to prepaid",
    detail: "Status: awaiting human gate",
  },
  {
    id: "LOG-003",
    at: "2026-09-12T16:21:00Z",
    kind: "approval",
    summary: "Approved CHG-ACC-01",
    detail: "Human gate · Propose path only — no Execute",
  },
];

export function sourceById(id: string): SourceDoc | undefined {
  return sources.find((source) => source.id === id);
}

export const northlineDemoSteps = [
  { href: "/demo/northline", label: "Hub" },
  { href: "/demo/northline/ask", label: "Ask" },
  { href: "/demo/northline/source", label: "Source" },
  { href: "/demo/northline/change", label: "Change" },
  { href: "/demo/northline/log", label: "Log" },
] as const;

export type NorthlineDemoHref = (typeof northlineDemoSteps)[number]["href"];
