import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Lab prototypes. Not client engagements.",
  openGraph: {
    title: "Lab · Remex Studio",
    description:
      "Lab prototypes. Not client engagements.",
    url: "/lab",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Lab · Remex Studio",
    description:
      "Lab prototypes. Not client engagements.",
  },
};

const PULSE_STEPS = ["See", "Notify", "Log", "Follow"] as const;

export default function LabPage() {
  return (
    <SiteChrome variant="film">
      <main id="main" className="film-page lab-page">
        <aside className="film-panel lab-banner" aria-label="Lab notice">
          <p className="film-kicker">Lab</p>
          <p className="lab-banner__mark">
            Prototype · not a client engagement
          </p>
          <p className="film-lede">
            Small loops for testing craft. Not a client engagement.
          </p>
        </aside>

        <article className="film-panel lab-card">
          <p className="lab-card__flag">Prototype · not a client engagement</p>
          <h1 className="film-title">Lab</h1>
          <h2 className="lab-card__name">Pulse</h2>
          <p className="film-lede">
            See a metric, notify a roster, log the event, follow up the rest.
          </p>
          <div className="lab-still" aria-hidden="true">
            {PULSE_STEPS.map((step) => (
              <span key={step} className="lab-still__chip">
                {step}
              </span>
            ))}
          </div>
          <p className="film-actions">
            <Link href="/lab/pulse" className="film-cta">
              Open Pulse
            </Link>
          </p>
        </article>
      </main>
    </SiteChrome>
  );
}
