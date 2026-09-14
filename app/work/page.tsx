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

function WorkStill({ still }: { still: (typeof STORIES)[number]["still"] }) {
  if (still === "still-a") {
    return (
      <div
        className="work-story-card__still work-story-card__still--still-a still-dna still-dna--cq still-dna--facts"
        aria-hidden="true"
      >
        <p className="still-dna__fact">LUM-1042</p>
        <p className="still-dna__sub">skin → hero → try-on → bag → pay</p>
        <div className="cq-pay__gate">
          <span className="cq-pay__chip">Propose</span>
          <span className="cq-pay__arrow" />
          <span className="cq-pay__chip cq-pay__chip--approve">Approve</span>
        </div>
      </div>
    );
  }

  if (still === "still-b") {
    return (
      <div
        className="work-story-card__still work-story-card__still--still-b still-dna still-dna--lc still-dna--facts"
        aria-hidden="true"
      >
        <p className="still-dna__fact">Propose≠Execute</p>
        <p className="still-dna__sub">cite</p>
        <span className="lc-controller__cite">§12.4 · Close pack</span>
      </div>
    );
  }

  if (still === "still-c") {
    return (
      <div
        className="work-story-card__still work-story-card__still--still-c still-dna still-dna--mr still-dna--facts"
        aria-hidden="true"
      >
        <div className="mr-triage">
          <span className="mr-triage__lane mr-triage__lane--pri">Priority</span>
          <span className="mr-triage__lane mr-triage__lane--watch">Watch</span>
          <span className="mr-triage__lane mr-triage__lane--noise">Noise</span>
        </div>
        <p className="still-dna__sub">P · W · N</p>
      </div>
    );
  }

  return (
    <div
      className="work-story-card__still work-story-card__still--still-d still-dna still-dna--ec still-dna--facts"
      aria-hidden="true"
    >
      <p className="still-dna__fact">queue · policy</p>
      <div className="ec-desk">
        <span className="ec-desk__chip ec-desk__chip--u1">U1</span>
        <span className="ec-desk__chip ec-desk__chip--u2">U2</span>
        <span className="ec-desk__chip ec-desk__chip--u3">U3</span>
        <span className="ec-desk__chip ec-desk__chip--policy">Policy</span>
      </div>
    </div>
  );
}

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
                <WorkStill still={story.still} />
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
