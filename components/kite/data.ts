export type Tone = "warm" | "crisp";
export type Bucket = "priority" | "watch" | "noise";

export type SyntheticPost = {
  id: string;
  bucket: Bucket;
  title: string;
  summary: string;
  channel: string;
  body: string;
};

/** Synthetic overnight signals — fictional desk, no real social networks. */
export const morningItems: SyntheticPost[] = [
  {
    id: "kite-01",
    bucket: "priority",
    title: "Launch window moved to Thursday",
    summary: "Retail partners need a revised teaser line before noon PT.",
    channel: "Comms desk",
    body: "Partner ops confirmed Thursday is the cleaner window. Draft a short note for the retail list. Do not post product photos — embargo still sealed.",
  },
  {
    id: "kite-02",
    bucket: "priority",
    title: "Press embargo still sealed",
    summary: "Legal has not cleared the kit. Hold all product imagery.",
    channel: "Legal relay",
    body: "Embargo remains active until legal clears the press kit. Escalate any draft that implies a live ship date with photography.",
  },
  {
    id: "kite-03",
    bucket: "watch",
    title: "Competitor teaser trending",
    summary: "Synthetic monitor only — tone is playful, not attacking.",
    channel: "Social listen",
    body: "A fictional competitor teaser is circulating. Watch for brand mentions. No reply unless Priority escalates.",
  },
  {
    id: "kite-04",
    bucket: "watch",
    title: "Influencer reply queue",
    summary: "Two drafts waiting for escalate — never auto-publish.",
    channel: "Creator ops",
    body: "Creator ops parked two reply drafts. Morning Remex may rewrite tone; publishing stays human.",
  },
  {
    id: "kite-05",
    bucket: "noise",
    title: "Generic AI hype thread",
    summary: "No brand mention. Safe to ignore this cycle.",
    channel: "Noise filter",
    body: "No actionable brand signal. Keep in Noise for the digest.",
  },
];

export const draftTones: Record<
  Tone,
  { label: string; sample: (item: SyntheticPost) => string }
> = {
  warm: {
    label: "Warm",
    sample: (item) =>
      `Thanks for the patience on this — ${item.title.toLowerCase()}. We will keep partners informed before noon PT and hold anything still under embargo.`,
  },
  crisp: {
    label: "Crisp",
    sample: (item) =>
      `Update: ${item.title}. Action before noon PT where required. Embargoed assets stay sealed until legal clears.`,
  },
};

export function itemById(id: string): SyntheticPost | undefined {
  return morningItems.find((item) => item.id === id);
}

export const kiteDemoSteps = [
  { href: "/demo/kite", label: "Hub" },
  { href: "/demo/kite/brief", label: "Brief" },
  { href: "/demo/kite/thread/kite-01", label: "Thread" },
  { href: "/demo/kite/digest", label: "Digest" },
] as const;

export type KiteDemoHref = (typeof kiteDemoSteps)[number]["href"];

export const bucketLabels: Record<Bucket, string> = {
  priority: "Priority",
  watch: "Watch",
  noise: "Noise",
};

export const bucketOrder: Bucket[] = ["priority", "watch", "noise"];
