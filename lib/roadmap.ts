/** V6 / V7-2 lock — Now / Next / Later. Direction only. No dates. No store. */

export const ROADMAP = [
  {
    label: "Now",
    summary:
      "Ship one gated seat. One workflow. One agent. A human still decides.",
    base: "Ship one gated seat.",
    detail:
      "One workflow. One agent. A human still decides. Each engagement picks one painful seat, draws the human gate, and ships a Propose → Approve → Record loop the desk can trust before the next seat opens.",
  },
  {
    label: "Next",
    summary:
      "Reuse the method — job spec, gate, and record — on a new seat.",
    base: "Reuse the method on a new seat.",
    detail:
      "Job spec + gate + record, reused on a new seat. Not a deeper pass on the four named desks. Not four SKUs.",
  },
  {
    label: "Later",
    summary:
      "Modules / studio-owned products that still ship with a gate. Direction only.",
    base: "Modules / studio-owned gated products.",
    detail:
      "Direction only. Studio-owned products that still ship with a gate. No dates. No store.",
  },
] as const;
