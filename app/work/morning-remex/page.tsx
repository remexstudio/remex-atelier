import type { Metadata } from "next";
import { MorningRemexChapter } from "@/components/MorningRemexChapter";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Morning Remex",
  description:
    "Product story: Morning Remex — Priority/Watch/Noise triage, two-tone drafts, escalate, never auto-publish.",
  openGraph: {
    title: "Morning Remex · Remex Studio",
    description:
      "Product story: Morning Remex — Priority/Watch/Noise triage, two-tone drafts, escalate, never auto-publish.",
    url: "/work/morning-remex",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Morning Remex · Remex Studio",
    description:
      "Product story: Morning Remex — Priority/Watch/Noise triage, two-tone drafts, escalate, never auto-publish.",
  },
};

export default function MorningRemexStoryPage() {
  return (
    <SiteChrome
      variant="film"
      footerLine="Studio study. Client identity anonymized."
    >
      <MorningRemexChapter />
    </SiteChrome>
  );
}
