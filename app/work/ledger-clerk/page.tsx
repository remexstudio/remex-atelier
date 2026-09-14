import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { StoryScenes } from "@/components/StoryScenes";

export const metadata: Metadata = {
  title: "Ledger Clerk",
  description:
    "Product story: Ledger Clerk — cite the source before books move.",
  openGraph: {
    title: "Ledger Clerk · Remex Studio",
    description:
      "Product story: Ledger Clerk — cite the source before books move.",
    url: "/work/ledger-clerk",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Ledger Clerk · Remex Studio",
    description:
      "Product story: Ledger Clerk — cite the source before books move.",
  },
};

const SCENES = [
  {
    id: "story-s1",
    beat: "pain" as const,
    line: "Month-end questions bury the team in the same spreadsheet hunt.",
  },
  {
    id: "story-s2",
    beat: "agent" as const,
    line: "Ledger Clerk cites the source before it answers.",
  },
  {
    id: "story-s3",
    beat: "gate" as const,
    line: "A controller signs the change before books move.",
  },
  {
    id: "story-s4",
    beat: "record" as const,
    line: "Ask, source, and approval sit in one change log.",
  },
  {
    id: "story-s5",
    beat: "cta" as const,
    line: "Start a brief.",
  },
] as const;

export default function LedgerClerkStoryPage() {
  return (
    <SiteChrome
      variant="film"
      footerLine="Studio study. Client identity anonymized."
    >
      <StoryScenes productName="Ledger Clerk" scenes={SCENES} />
    </SiteChrome>
  );
}
