export type SkinTone = "fair" | "light" | "medium" | "deep";
export type Occasion = "everyday" | "evening" | "travel" | "photo";

export const skinOptions: { id: SkinTone; label: string; hint: string }[] = [
  { id: "fair", label: "Fair", hint: "Cool or pink undertone" },
  { id: "light", label: "Light", hint: "Neutral to warm" },
  { id: "medium", label: "Medium", hint: "Golden or olive" },
  { id: "deep", label: "Deep", hint: "Rich warm undertone" },
];

export const occasionOptions: {
  id: Occasion;
  label: string;
  hint: string;
}[] = [
  { id: "everyday", label: "Everyday", hint: "Soft coverage, desk to dinner" },
  { id: "evening", label: "Evening", hint: "Low light, longer wear" },
  { id: "travel", label: "Travel", hint: "Humidity and long days" },
  { id: "photo", label: "Photo", hint: "Even finish under flash" },
];

/** Single hero SKU for the Atelier Concierge demo. */
export const heroSku = {
  id: "LUM-ST-01",
  name: "Softlight Serum Tint",
  shade: "Warm Porcelain 02",
  price: 48,
  currency: "USD",
  size: "30 ml",
  finish: "Soft luminous",
  coverage: "Sheer to light",
  summary:
    "A serum-weight tint that evens tone without masking skin. Built for guests who want one product, not a kit.",
  notes: ["Fragrance-free", "Non-comedogenic", "SPF 20"],
} as const;

export type HeroSku = typeof heroSku;

export function recommendHero(
  skin: SkinTone,
  occasion: Occasion,
): {
  sku: HeroSku;
  rationale: string;
} {
  const skinLine =
    skin === "fair" || skin === "light"
      ? "Warm Porcelain 02 keeps fair-to-light skin bright without ash."
      : skin === "medium"
        ? "Warm Porcelain 02 reads as a soft veil on medium skin under atelier lighting."
        : "Warm Porcelain 02 is the demo shade; a live catalog would map deep undertones next.";

  const occasionLine =
    occasion === "everyday"
      ? "Everyday wear favors sheer build and a clean midday refresh."
      : occasion === "evening"
        ? "Evening wear leans on the luminous finish under warm lamps."
        : occasion === "travel"
          ? "Travel favors the serum base — less cake, fewer touch-ups."
          : "Photo occasions need even reflectance; Softlight avoids flash hotspots.";

  return {
    sku: heroSku,
    rationale: `${skinLine} ${occasionLine} The concierge returns one hero SKU — not a shelf.`,
  };
}

export const aftercareOrder = {
  id: "LUM-1042",
  placedAt: "2026-09-10T16:42:00Z",
  status: "Fulfilled · aftercare open",
  guest: "Guest · anonymized",
  shipment: {
    carrier: "Studio Courier (mock)",
    tracking: "LUM-SHIP-1042",
    eta: "Delivered · Sep 12, 2026",
    destination: "Seattle studio desk · anonymized",
  },
  items: [
    {
      skuId: heroSku.id,
      name: heroSku.name,
      shade: heroSku.shade,
      qty: 1,
      price: heroSku.price,
    },
  ],
  total: heroSku.price,
  careNotes: [
    "Shake once before first use.",
    "Apply over moisturizer; wait sixty seconds before sunscreen.",
    "If wear thins by hour eight, blot then press — do not layer powder on top.",
  ],
} as const;

export const sessionSummary = {
  title: "Concierge session summary",
  generatedFor: "Human desk handoff",
  orderId: aftercareOrder.id,
  bullets: [
    "Guest selected skin: medium · occasion: evening.",
    `Agent recommended ${heroSku.name} (${heroSku.id}) — single hero SKU.`,
    "Try-on overlay reviewed; guest kept Softlight finish on.",
    "Bag confirmed · mock pay completed · no card captured.",
    "Aftercare order LUM-1042 opened for human follow-up.",
  ],
  riskFlags: ["None · mock session"],
  suggestedReply:
    "Confirm shade match under daylight, offer a travel mini on the next molt, and log any sensitivity notes.",
} as const;

export const workStudies = [
  {
    slug: "lumen-atelier",
    client: "Lumen Atelier",
    product: "Atelier Concierge",
    status: "live" as const,
    blurb:
      "Beauty retail agent: skin and occasion in, one hero SKU out — then try-on, bag, pay, and desk.",
    href: "/work/lumen-atelier",
  },
  {
    slug: "northline",
    client: "Northline Analytics",
    product: "Ledger Clerk",
    status: "live" as const,
    blurb:
      "Cited answers over the books, with a human gate before any change lands.",
    href: "/work/northline",
  },
  {
    slug: "kite",
    client: "Kite & Co.",
    product: "Morning Remex",
    status: "in-progress" as const,
    blurb:
      "A morning brief that threads overnight signals into Priority, Watch, and Noise — never auto-publish.",
    href: null,
  },
  {
    slug: "paperline",
    client: "Paperline Retail",
    product: "Exception Copilot",
    status: "in-progress" as const,
    blurb:
      "Exception queue with timeline, suggested actions, and refund approval — no real payouts.",
    href: null,
  },
] as const;

export const lumenDemoSteps = [
  { href: "/demo/lumen", label: "Hub" },
  { href: "/demo/lumen/consult", label: "Consult" },
  { href: "/demo/lumen/try-on", label: "Try-on" },
  { href: "/demo/lumen/bag", label: "Bag" },
  { href: "/demo/lumen/pay", label: "Pay" },
  { href: "/demo/lumen/desk", label: "Desk" },
] as const;
