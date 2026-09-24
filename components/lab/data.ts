export type PulseStep = {
  id: string;
  title: string;
  detail: string;
};

export const pulseLoop: PulseStep[] = [
  {
    id: "see",
    title: "See metric",
    detail:
      "Watch one prototype signal: a mock roster ping. No client SLA.",
  },
  {
    id: "notify",
    title: "Notify roster",
    detail:
      "Fan out a quiet note to an internal roster of three seats. Demo only: no SMS or email provider.",
  },
  {
    id: "log",
    title: "Log event",
    detail:
      "Append an event to the local pulse log with a timestamp and who was notified.",
  },
  {
    id: "follow",
    title: "Follow up rest",
    detail:
      "Schedule a rest follow-up for anyone who did not acknowledge. Still a prototype path.",
  },
];

export const pulseRoster = [
  { id: "seat-a", name: "Desk A", role: "On-call" },
  { id: "seat-b", name: "Desk B", role: "Backup" },
  { id: "seat-c", name: "Desk C", role: "Observer" },
] as const;

export type PulseEvent = {
  id: string;
  at: string;
  step: string;
  summary: string;
};

export const seedPulseEvents: PulseEvent[] = [
  {
    id: "PULSE-001",
    at: "2026-09-12T18:00:00Z",
    step: "see",
    summary: "Mock metric crossed soft threshold (prototype).",
  },
  {
    id: "PULSE-002",
    at: "2026-09-12T18:01:00Z",
    step: "notify",
    summary: "Notified Desk A and Desk B on the roster.",
  },
  {
    id: "PULSE-003",
    at: "2026-09-12T18:02:00Z",
    step: "log",
    summary: "Event logged. No client engagement claim.",
  },
];
