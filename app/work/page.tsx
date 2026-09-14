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
    dna: "LUM-1042",
  },
  {
    href: "/work/ledger-clerk",
    name: "Ledger Clerk",
    still: "still-b" as const,
    dna: "Never Execute",
  },
  {
    href: "/work/morning-remex",
    name: "Morning Remex",
    still: "still-c" as const,
    dna: "Human before send",
  },
  {
    href: "/work/exception-copilot",
    name: "Exception Copilot",
    still: "still-d" as const,
    dna: "Refund hold",
  },
] as const;

function WorkStill({ still }: { still: (typeof STORIES)[number]["still"] }) {
  if (still === "still-a") {
    return (
      <div
        className="work-story-card__still work-story-card__still--still-a still-dna still-dna--cq still-dna--facts"
        aria-hidden="true"
      >
        <div className="cq-pay cq-pay--wall">
          <div className="cq-pay__bag">
            <p className="still-fact still-fact--kicker">Bag · before pay</p>
            <p className="cq-ticket__id">LUM-1042</p>
            <p className="still-fact still-fact--muted">
              skin → hero → try-on → bag → pay
            </p>
          </div>
          <div className="cq-pay__gate">
            <span className="cq-pay__chip">Propose</span>
            <span className="cq-pay__arrow" />
            <span className="cq-pay__chip cq-pay__chip--approve">Approve</span>
          </div>
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
        <div className="lc-cta-still__mark lc-cta-still__mark--wall">
          <span className="lc-propose__mark">Propose</span>
          <p className="work-wall__never">Never Execute</p>
          <span className="lc-controller__cite">§12.4 · Close pack</span>
        </div>
      </div>
    );
  }

  if (still === "still-c") {
    return (
      <div
        className="work-story-card__still work-story-card__still--still-c still-dna still-dna--mr still-dna--facts"
        aria-hidden="true"
      >
        <div className="mr-cta-rail__lanes mr-cta-rail__lanes--wall">
          <div className="mr-cta-rail__lane mr-cta-rail__lane--pri">
            <span className="mr-triage__lane mr-triage__lane--pri">P</span>
            <p className="mr-pwn__name">Priority</p>
          </div>
          <div className="mr-cta-rail__lane mr-cta-rail__lane--watch">
            <span className="mr-triage__lane mr-triage__lane--watch">W</span>
            <p className="mr-pwn__name">Watch</p>
          </div>
          <div className="mr-cta-rail__lane mr-cta-rail__lane--noise">
            <span className="mr-triage__lane mr-triage__lane--noise">N</span>
            <p className="mr-pwn__name">Noise</p>
          </div>
        </div>
        <p className="still-dna__sub">Human before send</p>
      </div>
    );
  }

  return (
    <div
      className="work-story-card__still work-story-card__still--still-d still-dna still-dna--ec still-dna--facts"
      aria-hidden="true"
    >
      <div className="ec-cta-stack ec-cta-stack--wall">
        <div className="ec-ticket ec-ticket--a">
          <span className="ec-ticket__badge">EX-441</span>
          <span className="still-fact">Refund hold</span>
        </div>
        <div className="ec-ticket ec-ticket--b">
          <span className="ec-cite__mark">§4.2</span>
          <span className="still-fact">Policy cite</span>
        </div>
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
                  <span className="work-story-card__line">{story.dna}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </SiteChrome>
  );
}
