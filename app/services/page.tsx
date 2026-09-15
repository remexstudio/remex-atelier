import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import {
  CATALOG_LINES,
  CATALOG_MAY,
  CATALOG_MAY_NOT,
  ENGAGEMENT_BEATS,
  ENGAGEMENT_LABELS,
  FOR_WHOM,
  NOT_FOR,
  SERVICES_FAQ,
  TRUST_STANCE,
} from "@/lib/services-catalog";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Agent product design, Agent build, and Agent operations. One workflow. One agent. A human still decides.",
  openGraph: {
    title: "Services · Remex Studio",
    description:
      "Agent product design, Agent build, and Agent operations. One workflow. One agent. A human still decides.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Services · Remex Studio",
    description:
      "Agent product design, Agent build, and Agent operations. One workflow. One agent. A human still decides.",
  },
};

export default function ServicesPage() {
  return (
    <SiteChrome variant="film" footerLine="Seattle studio. Global clients.">
      <main id="main" className="svc-page">
        <header className="svc-hero">
          <div className="svc-band svc-band--narrow">
            <p className="svc-kicker">Services</p>
            <h1 className="svc-display">Agents, built to the brief.</h1>
            <p className="svc-lede">
              We design the job an agent is allowed to do — and the gate it
              cannot cross.
            </p>
            <p className="svc-support">
              One workflow. One agent. A human still decides.
            </p>
          </div>
        </header>

        <section className="svc-catalog" aria-labelledby="svc-catalog-h">
          <div className="svc-band">
            <h2 id="svc-catalog-h" className="svc-section-title">
              Catalog
            </h2>
            <p className="svc-section-lede">
              Remex designs, ships, and tightens custom AI agents for one
              painful company workflow at a time — with a human gate as the
              product surface.
            </p>
            <ol className="svc-lines">
              {CATALOG_LINES.map((line) => (
                <li key={line.id} className="svc-line">
                  <h3 className="svc-line__name">{line.name}</h3>
                  <p className="svc-line__p">
                    <span className="svc-line__label">Who.</span> {line.who}
                  </p>
                  <p className="svc-line__p">
                    <span className="svc-line__label">Deliverable.</span>{" "}
                    {line.deliverable}
                  </p>
                  <p className="svc-line__p">
                    <span className="svc-line__label">Refuse.</span>{" "}
                    {line.refuse}
                  </p>
                  <p className="svc-line__p">
                    <span className="svc-line__label">Done.</span> {line.done}
                  </p>
                  {line.note ? (
                    <p className="svc-line__note">{line.note}</p>
                  ) : null}
                  {line.id === "build" ? (
                    <div className="svc-may">
                      <div>
                        <h4 className="svc-may__h">May</h4>
                        <ul className="svc-may__list">
                          {CATALOG_MAY.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="svc-may__h">May not</h4>
                        <ul className="svc-may__list">
                          {CATALOG_MAY_NOT.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="svc-scope">
              First seats are narrowly scoped. One workflow. One agent. A
              human still decides.
            </p>
          </div>
        </section>

        <section className="svc-engage" aria-labelledby="svc-engage-h">
          <div className="svc-band svc-band--split">
            <figure className="svc-still" aria-hidden="true">
              <figcaption className="svc-still__caption">
                Engagement
              </figcaption>
              <ol className="svc-still__steps">
                {ENGAGEMENT_LABELS.map((label, index) => (
                  <li key={label} className="svc-still__step">
                    <span className="svc-still__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="svc-still__label">{label}</span>
                  </li>
                ))}
              </ol>
            </figure>
            <div className="svc-engage__copy">
              <h2 id="svc-engage-h" className="svc-section-title">
                Engagement shape
              </h2>
              <p className="svc-section-lede">
                Start a brief → Design job+gate → Ship first seat → Operate /
                decide second seat
              </p>
              <ol className="svc-beats">
                {ENGAGEMENT_BEATS.map((beat) => (
                  <li key={beat.label} className="svc-beat">
                    <h3 className="svc-beat__label">{beat.label}</h3>
                    <p className="svc-beat__meaning">{beat.meaning}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="svc-fit" aria-labelledby="svc-fit-h">
          <div className="svc-band">
            <h2 id="svc-fit-h" className="svc-section-title">
              For / Not for
            </h2>
            <div className="svc-fit__grid">
              <div className="svc-fit__col">
                <h3 className="svc-fit__h">For</h3>
                <ul className="svc-fit__list">
                  {FOR_WHOM.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="svc-fit__col">
                <h3 className="svc-fit__h">Not for</h3>
                <ul className="svc-fit__list">
                  {NOT_FOR.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="svc-trust" aria-labelledby="svc-trust-h">
          <div className="svc-band svc-band--narrow">
            <h2 id="svc-trust-h" className="svc-section-title">
              Trust stance
            </h2>
            <p className="svc-trust__p">{TRUST_STANCE}</p>
          </div>
        </section>

        <section className="svc-faq" aria-labelledby="svc-faq-h">
          <div className="svc-band svc-band--narrow">
            <h2 id="svc-faq-h" className="svc-section-title">
              FAQ
            </h2>
            <dl className="svc-faq__list">
              {SERVICES_FAQ.map((item) => (
                <div key={item.q} className="svc-faq__item">
                  <dt className="svc-faq__q">{item.q}</dt>
                  <dd className="svc-faq__a">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="svc-close" aria-labelledby="svc-close-h">
          <div className="svc-band svc-band--narrow">
            <h2 id="svc-close-h" className="svc-display svc-display--close">
              Start a brief.
            </h2>
            <p className="svc-lede">
              Name which workflow hurts, who approves, what the agent may
              never do, and what record you must keep.
            </p>
            <div className="svc-actions">
              <Link href="/contact" className="film-cta">
                Start a brief.
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
