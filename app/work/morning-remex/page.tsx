import type { Metadata } from "next";
import { MorningRemexChapter } from "@/components/MorningRemexChapter";
import { SiteChrome } from "@/components/SiteChrome";
import { ATTENTION, STUDY_FOOTER } from "@/lib/selected-examples";

export const metadata: Metadata = {
  title: ATTENTION.display,
  description: ATTENTION.description,
  openGraph: {
    title: `${ATTENTION.display} · Remex Studio`,
    description: ATTENTION.description,
    url: "/work/morning-remex",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: `${ATTENTION.display} · Remex Studio`,
    description: ATTENTION.description,
  },
};

export default function MorningRemexStoryPage() {
  return (
    <SiteChrome variant="film" footerLine={STUDY_FOOTER}>
      <MorningRemexChapter />
    </SiteChrome>
  );
}
