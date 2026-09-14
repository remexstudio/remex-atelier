import type { Metadata } from "next";
import { LedgerClerkChapter } from "@/components/LedgerClerkChapter";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Ledger Clerk",
  description:
    "Product story: Ledger Clerk — corpus cite, Propose never Execute, controller gate, audit log.",
  openGraph: {
    title: "Ledger Clerk · Remex Studio",
    description:
      "Product story: Ledger Clerk — corpus cite, Propose never Execute, controller gate, audit log.",
    url: "/work/ledger-clerk",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Ledger Clerk · Remex Studio",
    description:
      "Product story: Ledger Clerk — corpus cite, Propose never Execute, controller gate, audit log.",
  },
};

export default function LedgerClerkStoryPage() {
  return (
    <SiteChrome
      variant="film"
      footerLine="Studio study. Client identity anonymized."
    >
      <LedgerClerkChapter />
    </SiteChrome>
  );
}
