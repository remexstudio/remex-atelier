import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Agent Apps, Agent Ops, and Advisory from Remex Studio: agents built to the brief.",
  openGraph: {
    title: "Services · Remex Studio",
    description:
      "Agent Apps, Agent Ops, and Advisory from Remex Studio: agents built to the brief.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Services · Remex Studio",
    description:
      "Agent Apps, Agent Ops, and Advisory from Remex Studio: agents built to the brief.",
  },
};

const offers = [
  {
    name: "Agent Apps",
    body: "Shippable agent products that own one painful workflow end to end, from the first brief through a path guests or operators can use.",
  },
  {
    name: "Agent Ops",
    body: "Citations, approvals, evals, and human handoff. The operating layer that keeps an agent accountable after launch.",
  },
  {
    name: "Advisory",
    body: "Whether the thing should be an agent at all. Scope the brief, name the constraints, and walk away if a smaller tool is honest.",
  },
] as const;

export default function ServicesPage() {
  return (
    <SiteChrome variant="film" footerLine="Seattle studio. Global clients.">
      <main id="main" className="film-page svc-page">
        <header className="film-panel">
          <p className="film-kicker">Services</p>
          <h1 className="film-title">Three ways to work with us</h1>
          <p className="film-lede">
            One brief at a time. We build the agent, the operating layer around
            it, or the decision that says not yet.
          </p>
        </header>

        <section className="film-panel" aria-labelledby="svc-offers-h">
          <h2 id="svc-offers-h" className="film-section-title">
            Offers
          </h2>
          <ol className="svc-offers">
            {offers.map((offer) => (
              <li key={offer.name} className="svc-offer">
                <h3 className="svc-offer__name">{offer.name}</h3>
                <p className="svc-offer__body">{offer.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="film-panel film-close" aria-labelledby="svc-close-h">
          <h2 id="svc-close-h" className="film-close-title">
            Start a brief.
          </h2>
          <p className="film-lede">
            Ready with a workflow that hurts every week? Bring the brief.
          </p>
          <div className="film-actions">
            <Link href="/contact" className="film-cta">
              Start a brief.
            </Link>
            <Link href="/approach" className="film-text-link">
              Read the approach
            </Link>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
