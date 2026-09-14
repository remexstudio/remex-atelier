import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { StoryScenes } from "@/components/StoryScenes";

export const metadata: Metadata = {
  title: "Atelier Concierge",
  description:
    "Product story: Atelier Concierge — propose next steps with a stylist gate.",
  openGraph: {
    title: "Atelier Concierge · Remex Studio",
    description:
      "Product story: Atelier Concierge — propose next steps with a stylist gate.",
    url: "/work/atelier-concierge",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Atelier Concierge · Remex Studio",
    description:
      "Product story: Atelier Concierge — propose next steps with a stylist gate.",
  },
};

const SCENES = [
  {
    id: "story-s1",
    beat: "pain" as const,
    line: "Concierge notes scatter across fittings, holds, and aftercare.",
  },
  {
    id: "story-s2",
    beat: "agent" as const,
    line: "Atelier Concierge drafts the next step for each client thread.",
  },
  {
    id: "story-s3",
    beat: "gate" as const,
    line: "A stylist approves before anything reaches the client.",
  },
  {
    id: "story-s4",
    beat: "record" as const,
    line: "Every proposal and approval stays on the desk log.",
  },
  {
    id: "story-s5",
    beat: "cta" as const,
    line: "Start a brief.",
  },
] as const;

export default function AtelierConciergeStoryPage() {
  return (
    <SiteChrome
      variant="film"
      footerLine="Studio study. Client identity anonymized."
    >
      <StoryScenes productName="Atelier Concierge" scenes={SCENES} />
    </SiteChrome>
  );
}
