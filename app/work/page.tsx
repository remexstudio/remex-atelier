import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Four product stories from Remex Studio — agents built to the brief.",
  openGraph: {
    title: "Work · Remex Studio",
    description:
      "Four product stories from Remex Studio — agents built to the brief.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Work · Remex Studio",
    description:
      "Four product stories from Remex Studio — agents built to the brief.",
  },
};

const STORIES = [
  {
    href: "/work/atelier-concierge",
    name: "Atelier Concierge",
    still: "still-a" as const,
    line: "Client threads, fittings, and aftercare.",
  },
  {
    href: "/work/ledger-clerk",
    name: "Ledger Clerk",
    still: "still-b" as const,
    line: "Month-end questions and cited answers.",
  },
  {
    href: "/work/morning-remex",
    name: "Morning Remex",
    still: "still-c" as const,
    line: "Overnight threads into a morning packet.",
  },
  {
    href: "/work/exception-copilot",
    name: "Exception Copilot",
    still: "still-d" as const,
    line: "Exception queue and disposition drafts.",
  },
] as const;

export default function WorkPage() {
  return (
    <SiteChrome variant="film">
      <main id="main" className="work-index">
        <div className="work-index__intro">
          <p className="type-meta">Work</p>
          <h1 className="work-index__title">Product stories</h1>
          <p className="work-index__lede">
            Four jobs we know how to hire an agent for. Marketing stills —
            scroll each story for the gate and the record.
          </p>
        </div>

        <ul className="work-index__grid">
          {STORIES.map((story) => (
            <li key={story.href}>
              <Link href={story.href} className="work-story-card">
                <span
                  className={`work-story-card__still work-story-card__still--${story.still}`}
                  aria-hidden="true"
                />
                <span className="work-story-card__body">
                  <span className="work-story-card__name">{story.name}</span>
                  <span className="work-story-card__line">{story.line}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </SiteChrome>
  );
}
