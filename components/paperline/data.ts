export type Severity = "low" | "medium" | "high";
export type TicketStatus = "open" | "waiting" | "approved" | "rejected";

export type TimelineEvent = {
  at: string;
  label: string;
  detail: string;
};

export type Ticket = {
  id: string;
  title: string;
  severity: Severity;
  status: TicketStatus;
  summary: string;
  suggestedActions: string[];
  refundRequiresApproval: boolean;
  timeline: TimelineEvent[];
};

/** Synthetic exception queue: fictional retail desk, no real payouts. */
export const queue: Ticket[] = [
  {
    id: "PL-2401",
    title: "Duplicate charge on order 88421",
    severity: "high",
    status: "open",
    summary: "Guest reports two captures for one shipment.",
    suggestedActions: [
      "Confirm capture IDs",
      "Propose refund for duplicate only",
      "Wait for human Approve",
    ],
    refundRequiresApproval: true,
    timeline: [
      {
        at: "2026-09-12T09:10:00Z",
        label: "Ticket opened",
        detail: "Guest chat · anonymized",
      },
      {
        at: "2026-09-12T09:12:00Z",
        label: "Suggested action",
        detail: "Refund path requires Approve. No payout executed.",
      },
    ],
  },
  {
    id: "PL-2402",
    title: "Warehouse short-ship",
    severity: "medium",
    status: "open",
    summary: "Line item missing; guest wants replace or refund path.",
    suggestedActions: [
      "Offer replacement",
      "Propose partial refund",
      "Route to warehouse note",
    ],
    refundRequiresApproval: true,
    timeline: [
      {
        at: "2026-09-12T10:01:00Z",
        label: "Ticket opened",
        detail: "Fulfillment exception",
      },
      {
        at: "2026-09-12T10:05:00Z",
        label: "Suggestion",
        detail: "Replacement preferred before refund",
      },
    ],
  },
  {
    id: "PL-2403",
    title: "Return label expired",
    severity: "low",
    status: "waiting",
    summary: "Suggest reissue label; no payout yet.",
    suggestedActions: ["Reissue label", "Extend return window 7 days"],
    refundRequiresApproval: false,
    timeline: [
      {
        at: "2026-09-11T16:40:00Z",
        label: "Ticket opened",
        detail: "Returns desk",
      },
      {
        at: "2026-09-11T16:44:00Z",
        label: "Waiting",
        detail: "Guest to confirm address",
      },
    ],
  },
  {
    id: "PL-2404",
    title: "Promo code stacked twice",
    severity: "medium",
    status: "open",
    summary: "Policy may allow one stack; needs approval for goodwill.",
    suggestedActions: [
      "Cite policy section 2",
      "Propose goodwill credit",
      "Require Approve",
    ],
    refundRequiresApproval: true,
    timeline: [
      {
        at: "2026-09-12T11:20:00Z",
        label: "Ticket opened",
        detail: "Checkout audit",
      },
    ],
  },
  {
    id: "PL-2405",
    title: "Damaged parcel photo set",
    severity: "high",
    status: "open",
    summary: "Refund suggestion requires human approval. No real payout.",
    suggestedActions: [
      "Review photos",
      "Propose full refund",
      "Hold until Approve",
    ],
    refundRequiresApproval: true,
    timeline: [
      {
        at: "2026-09-12T12:02:00Z",
        label: "Ticket opened",
        detail: "Photos attached (mock)",
      },
      {
        at: "2026-09-12T12:06:00Z",
        label: "Policy check",
        detail: "Damage refunds need Approve",
      },
    ],
  },
  {
    id: "PL-2406",
    title: "Address correction mid-flight",
    severity: "low",
    status: "waiting",
    summary: "Carrier fee may apply; propose fee waiver ticket.",
    suggestedActions: ["Propose fee waiver", "Confirm carrier window"],
    refundRequiresApproval: true,
    timeline: [
      {
        at: "2026-09-12T13:15:00Z",
        label: "Ticket opened",
        detail: "Address change request",
      },
    ],
  },
];

export function ticketById(id: string): Ticket | undefined {
  return queue.find((t) => t.id === id);
}

export const policySections = [
  {
    id: "refunds",
    title: "Refunds",
    body: "Exception Copilot may propose a refund. It never executes a payout. Approve is required before any money movement in a live system. This demo has no processor.",
  },
  {
    id: "replacements",
    title: "Replacements",
    body: "Prefer replacement when inventory allows. Short-ships route a warehouse note before refund proposals.",
  },
  {
    id: "goodwill",
    title: "Goodwill credits",
    body: "Promo stacking and goodwill credits need an explicit Approve. Agents cite policy; they do not invent conversion gains.",
  },
] as const;

export const paperlineDemoSteps = [
  { href: "/demo/paperline", label: "Hub" },
  { href: "/demo/paperline/queue", label: "Queue" },
  { href: "/demo/paperline/case/PL-2401", label: "Case" },
  { href: "/demo/paperline/policy", label: "Policy" },
] as const;

export type PaperlineDemoHref = (typeof paperlineDemoSteps)[number]["href"];

export const severityLabels: Record<Severity, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

export const statusLabels: Record<TicketStatus, string> = {
  open: "Open",
  waiting: "Waiting",
  approved: "Approved",
  rejected: "Rejected",
};
