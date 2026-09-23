import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { DeskTeaserStill } from "@/components/StageStill";
import {
  EXAMPLES,
  INDEX_LABEL,
  OTHER_SEATS,
  OTHER_SEATS_HEADING,
  OTHER_SEATS_NOTE,
  READ_FULL_EXAMPLE,
} from "@/lib/selected-examples";

const WORK_LEDE =
  "Proof of method. Each example is one seat — a job, a gate, and a record — not a catalog.";

export const metadata: Metadata = {
  title: INDEX_LABEL,
  description: WORK_LEDE,
  openGraph: {
    title: `${INDEX_LABEL} · Remex Studio`,
    description: WORK_LEDE,
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${INDEX_LABEL} · Remex Studio`,
    description: WORK_LEDE,
  },
};

function WorkStill({ still }: { still: (typeof EXAMPLES)[number]["still"] }) {
  return <DeskTeaserStill still={still} className="work-teaser__still" />;
}

export default function WorkPage() {
  return (
    <SiteChrome variant="film">
      <main id="main" className="work-index">
        <div className="work-index__intro">
          <h1 className="work-index__title">{INDEX_LABEL}</h1>
          <p className="work-index__lede">{WORK_LEDE}</p>
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
