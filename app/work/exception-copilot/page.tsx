import type { Metadata } from "next";
import { ExceptionCopilotChapter } from "@/components/ExceptionCopilotChapter";
import { SiteChrome } from "@/components/SiteChrome";
import { EXCEPTION, STUDY_FOOTER } from "@/lib/selected-examples";

export const metadata: Metadata = {
  title: EXCEPTION.display,
  description: EXCEPTION.description,
  openGraph: {
    title: `${EXCEPTION.display} · Remex Studio`,
    description: EXCEPTION.description,
    url: "/work/exception-copilot",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: `${EXCEPTION.display} · Remex Studio`,
    description: EXCEPTION.description,
  },
};

export default function ExceptionCopilotStoryPage() {
  return (
    <SiteChrome variant="film" footerLine={STUDY_FOOTER}>
      <ExceptionCopilotChapter />
    </SiteChrome>
  );
}
