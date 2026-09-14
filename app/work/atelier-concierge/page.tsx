import type { Metadata } from "next";
import { AtelierConciergeChapter } from "@/components/AtelierConciergeChapter";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Atelier Concierge",
  description:
    "Product story: Atelier Concierge — skin and occasion to one hero, try-on, bag, human at pay.",
  openGraph: {
    title: "Atelier Concierge · Remex Studio",
    description:
      "Product story: Atelier Concierge — skin and occasion to one hero, try-on, bag, human at pay.",
    url: "/work/atelier-concierge",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Atelier Concierge · Remex Studio",
    description:
      "Product story: Atelier Concierge — skin and occasion to one hero, try-on, bag, human at pay.",
  },
};

export default function AtelierConciergeStoryPage() {
  return (
    <SiteChrome
      variant="film"
      footerLine="Studio study. Client identity anonymized."
    >
      <AtelierConciergeChapter />
    </SiteChrome>
  );
}
