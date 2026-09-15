import type { Metadata } from "next";
import { AtelierConciergeChapter } from "@/components/AtelierConciergeChapter";
import { SiteChrome } from "@/components/SiteChrome";
import { DEMAND, STUDY_FOOTER } from "@/lib/selected-examples";

export const metadata: Metadata = {
  title: DEMAND.display,
  description: DEMAND.description,
  openGraph: {
    title: `${DEMAND.display} · Remex Studio`,
    description: DEMAND.description,
    url: "/work/atelier-concierge",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: `${DEMAND.display} · Remex Studio`,
    description: DEMAND.description,
  },
};

export default function AtelierConciergeStoryPage() {
  return (
    <SiteChrome variant="film" footerLine={STUDY_FOOTER}>
      <AtelierConciergeChapter />
    </SiteChrome>
  );
}
