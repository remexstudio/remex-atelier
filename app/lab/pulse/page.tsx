import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { PulseLoop } from "@/components/lab/PulseLoop";

export const metadata: Metadata = {
  title: "Pulse",
  description:
    "Pulse prototype: see metric, notify roster, log event, follow up rest. Not a client engagement.",
  openGraph: {
    title: "Pulse · Remex Studio",
    description:
      "Pulse prototype: see metric, notify roster, log event, follow up rest. Not a client engagement.",
    url: "/lab/pulse",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pulse · Remex Studio",
    description:
      "Pulse prototype: see metric, notify roster, log event, follow up rest. Not a client engagement.",
  },
};

export default function PulsePage() {
  return (
    <SiteChrome variant="film">
      <main id="main" className="film-page lab-page lab-page--pulse">
        <aside className="film-panel lab-banner" aria-label="Pulse notice">
          <p className="film-kicker">Lab · Pulse</p>
          <p className="lab-banner__mark">
            Prototype · not a client engagement
          </p>
          <p className="film-lede">
            A loop for internal attention. This is a prototype, not a client
            engagement.
          </p>
        </aside>

        <header className="film-panel">
          <p className="film-kicker">Loop</p>
          <h1 className="film-title">Pulse</h1>
          <p className="film-lede">
            See a metric, notify a roster, log the event, follow up the rest.
          </p>
        </header>

        <section
          className="film-panel lab-loop"
          aria-label="Pulse prototype loop"
        >
          <PulseLoop />
        </section>

        <p className="film-panel film-actions">
          <Link href="/lab" className="film-text-link">
            Back to Lab
          </Link>
        </p>
      </main>
    </SiteChrome>
  );
}
