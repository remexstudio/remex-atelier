import type { Metadata } from "next";
import { ExceptionCopilotChapter } from "@/components/ExceptionCopilotChapter";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Exception Copilot",
  description:
    "Product story: Exception Copilot — queue rank, policy cite disposition, case note, human for refunds, case timeline.",
  openGraph: {
    title: "Exception Copilot · Remex Studio",
    description:
      "Product story: Exception Copilot — queue rank, policy cite disposition, case note, human for refunds, case timeline.",
    url: "/work/exception-copilot",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Exception Copilot · Remex Studio",
    description:
      "Product story: Exception Copilot — queue rank, policy cite disposition, case note, human for refunds, case timeline.",
  },
};

export default function ExceptionCopilotStoryPage() {
  return (
    <SiteChrome
      variant="film"
      footerLine="Studio study. Client identity anonymized."
    >
      <ExceptionCopilotChapter />
    </SiteChrome>
  );
}
