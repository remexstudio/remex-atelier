import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import {
  EXAMPLES,
  INDEX_LABEL,
  INDEX_LEDE,
  OTHER_SEATS,
  OTHER_SEATS_HEADING,
  OTHER_SEATS_NOTE,
} from "@/lib/selected-examples";

export const metadata: Metadata = {
  title: INDEX_LABEL,
  description: INDEX_LEDE,
  openGraph: {
    title: `${INDEX_LABEL} · Remex Studio`,
    description: INDEX_LEDE,
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${INDEX_LABEL} · Remex Studio`,
    description: INDEX_LEDE,
  },
};

function WorkStill({ still }: { still: (typeof EXAMPLES)[number]["still"] }) {
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
          <h1 className="work-index__title">{INDEX_LABEL}</h1>
          <p className="work-index__lede">{INDEX_LEDE}</p>
        </div>

        <ul className="work-index__grid">
          {EXAMPLES.map((example) => (
            <li key={example.href}>
              <Link href={example.href} className="work-story-card">
                <WorkStill still={example.still} />
                <span className="work-story-card__body">
                  <span className="work-story-card__name">{example.display}</span>
                  <span className="work-story-card__line">{example.gateFact}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <section className="work-fits" aria-labelledby="work-fits-h">
          <h2 id="work-fits-h" className="work-fits__title">
            {OTHER_SEATS_HEADING}
          </h2>
          <p className="work-fits__note">{OTHER_SEATS_NOTE}</p>
          <ul className="work-fits__list">
            {OTHER_SEATS.map((seat) => (
              <li key={seat}>{seat}</li>
            ))}
          </ul>
        </section>
      </main>
    </SiteChrome>
  );
}
