import type { Metadata } from "next";
import { LedgerClerkChapter } from "@/components/LedgerClerkChapter";
import { SiteChrome } from "@/components/SiteChrome";
import { KNOWLEDGE, STUDY_FOOTER } from "@/lib/selected-examples";

export const metadata: Metadata = {
  title: KNOWLEDGE.display,
  description: KNOWLEDGE.description,
  openGraph: {
    title: `${KNOWLEDGE.display} · Remex Studio`,
    description: KNOWLEDGE.description,
    url: "/work/ledger-clerk/story",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: `${KNOWLEDGE.display} · Remex Studio`,
    description: KNOWLEDGE.description,
  },
};

export default function LedgerClerkStoryPage() {
  return (
    <SiteChrome variant="film" footerLine={STUDY_FOOTER}>
      <LedgerClerkChapter />
    </SiteChrome>
  );
}
