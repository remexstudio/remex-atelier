import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "About",
  description:
    "Remex Studio: agents built to the brief. Jiyuyun Studio LLC.",
  openGraph: {
    title: "About · Remex Studio",
    description:
      "Remex Studio: agents built to the brief. Jiyuyun Studio LLC.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About · Remex Studio",
    description:
      "Remex Studio: agents built to the brief. Jiyuyun Studio LLC.",
  },
};

export default function AboutPage() {
  return (
    <SiteChrome variant="film">
      <main id="main" className="film-page about-page">
        <header className="film-panel">
          <p className="film-kicker">About</p>
          <h1 className="film-title">Remex Studio</h1>
          <p className="film-lede">Agents, built to the brief.</p>
          <p className="film-lede about-say">
            One painful workflow. One agent. A human gate.
          </p>
        </header>

        <section className="film-panel" aria-labelledby="about-legal-h">
          <h2 id="about-legal-h" className="film-section-title">
            Studio details
          </h2>
          <p className="film-lede">
            We turn one painful workflow into a working agent, then keep molting
            it. One brief at a time, with craft and a human gate.
          </p>
          <dl className="about-facts">
            <div className="about-fact">
              <dt>Legal</dt>
              <dd>Jiyuyun Studio LLC</dd>
            </div>
            <div className="about-fact">
              <dt>Wordmark</dt>
              <dd translate="no">REMEX STUDIO</dd>
            </div>
          </dl>
        </section>

        <section
          className="film-panel film-close"
          aria-labelledby="about-close-h"
        >
          <h2 id="about-close-h" className="film-close-title">
            Start a brief.
          </h2>
          <p className="film-lede">
            Tell us the painful workflow. We design the agent and the gate.
          </p>
          <p className="film-actions">
            <Link href="/contact" className="film-cta">
              Start a brief.
            </Link>
          </p>
        </section>
      </main>
    </SiteChrome>
  );
}
