import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { StageStill } from "@/components/StageStill";
import {
  EXAMPLES,
  INDEX_LABEL,
  INDEX_LEDE,
  OTHER_SEATS,
  OTHER_SEATS_HEADING,
  OTHER_SEATS_NOTE,
  READ_FULL_EXAMPLE,
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
      <StageStill seat="Demand desk" compact className="work-teaser__still">
        <div className="media-stage media-stage--cq">
          <p className="media-stage__kicker">Bag · before pay</p>
          <p className="media-stage__fact">Human before pay</p>
          <p className="media-stage__sub">skin → hero → try-on → bag</p>
          <p className="media-stage__cite">LUM-1042</p>
        </div>
      </StageStill>
    );
  }

  if (still === "still-b") {
    return (
      <StageStill seat="Knowledge desk" compact className="work-teaser__still">
        <div className="media-stage media-stage--lc">
          <p className="media-stage__kicker">Corpus</p>
          <p className="media-stage__fact">Propose ≠ Execute</p>
          <p className="media-stage__sub">cite stays with the ask</p>
          <p className="media-stage__cite">§12.4 · Close pack</p>
        </div>
      </StageStill>
    );
  }

  if (still === "still-c") {
    return (
      <StageStill seat="Attention desk" compact className="work-teaser__still">
        <div className="media-stage media-stage--mr">
          <p className="media-stage__kicker">Morning packet</p>
          <p className="media-stage__fact">Human before send</p>
          <ol className="media-stage__lanes">
            <li className="media-stage__lane">
              <span className="media-stage__mark">P</span>
              <span>Priority</span>
            </li>
            <li className="media-stage__lane">
              <span className="media-stage__mark">W</span>
              <span>Watch</span>
            </li>
            <li className="media-stage__lane">
              <span className="media-stage__mark">N</span>
              <span>Noise</span>
            </li>
          </ol>
        </div>
      </StageStill>
    );
  }

  return (
    <StageStill seat="Exception desk" compact className="work-teaser__still">
      <div className="media-stage media-stage--ec">
        <p className="media-stage__kicker">Exception</p>
        <p className="media-stage__fact">Human before money</p>
        <p className="media-stage__sub">EX-441 · refund hold · §4.2</p>
      </div>
    </StageStill>
  );
}

export default function WorkPage() {
  return (
    <SiteChrome variant="film">
      <main id="main" className="work-index">
        <div className="work-index__intro">
          <h1 className="work-index__title">{INDEX_LABEL}</h1>
          <p className="work-index__lede">{INDEX_LEDE}</p>
        </div>

        <ul className="work-index__list">
          {EXAMPLES.map((example) => (
            <li key={example.href}>
              <article className="work-teaser">
                <WorkStill still={example.still} />
                <div className="work-teaser__body">
                  <h2 className="work-teaser__name">{example.display}</h2>
                  <p className="work-teaser__line">{example.description}</p>
                  <Link href={example.href} className="work-teaser__read">
                    {READ_FULL_EXAMPLE}
                  </Link>
                </div>
              </article>
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
