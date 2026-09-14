import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { StoryScenes } from "@/components/StoryScenes";

export const metadata: Metadata = {
  title: "Exception Copilot",
  description:
    "Product story: Exception Copilot — rank the queue with a lead gate.",
  openGraph: {
    title: "Exception Copilot · Remex Studio",
    description:
      "Product story: Exception Copilot — rank the queue with a lead gate.",
    url: "/work/exception-copilot",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Exception Copilot · Remex Studio",
    description:
      "Product story: Exception Copilot — rank the queue with a lead gate.",
  },
};

const SCENES = [
  {
    id: "story-s1",
    beat: "pain" as const,
    line: "Exceptions pile up faster than policy can be reread.",
  },
  {
    id: "story-s2",
    beat: "agent" as const,
    line: "Exception Copilot ranks the queue and drafts a disposition.",
  },
  {
    id: "story-s3",
    beat: "gate" as const,
    line: "A lead approves before inventory or credit moves.",
  },
  {
    id: "story-s4",
    beat: "record" as const,
    line: "Case, policy cite, and decision stay on the ticket.",
  },
  {
    id: "story-s5",
    beat: "cta" as const,
    line: "Start a brief.",
  },
] as const;

export default function ExceptionCopilotStoryPage() {
  return (
    <SiteChrome
      variant="film"
      footerLine="Studio study. Client identity anonymized."
    >
      <StoryScenes productName="Exception Copilot" scenes={SCENES} />
    </SiteChrome>
  );
}
