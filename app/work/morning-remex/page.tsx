import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { StoryScenes } from "@/components/StoryScenes";

export const metadata: Metadata = {
  title: "Morning Remex",
  description:
    "Product story: Morning Remex — draft the morning packet with an operator gate.",
  openGraph: {
    title: "Morning Remex · Remex Studio",
    description:
      "Product story: Morning Remex — draft the morning packet with an operator gate.",
    url: "/work/morning-remex",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Morning Remex · Remex Studio",
    description:
      "Product story: Morning Remex — draft the morning packet with an operator gate.",
  },
};

const SCENES = [
  {
    id: "story-s1",
    beat: "pain" as const,
    line: "Overnight threads arrive without a single readable brief.",
  },
  {
    id: "story-s2",
    beat: "agent" as const,
    line: "Morning Remex drafts the morning packet from the inbox.",
  },
  {
    id: "story-s3",
    beat: "gate" as const,
    line: "An operator edits tone before the digest goes out.",
  },
  {
    id: "story-s4",
    beat: "record" as const,
    line: "Brief, thread, and send decision stay linked.",
  },
  {
    id: "story-s5",
    beat: "cta" as const,
    line: "Start a brief.",
  },
] as const;

export default function MorningRemexStoryPage() {
  return (
    <SiteChrome
      variant="film"
      footerLine="Studio study. Client identity anonymized."
    >
      <StoryScenes productName="Morning Remex" scenes={SCENES} />
    </SiteChrome>
  );
}
