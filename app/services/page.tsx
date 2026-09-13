import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Agent Apps, Agent Ops, and Advisory from Remex Studio: agents built to the brief.",
};

const offers = [
  {
    name: "Agent Apps",
    body: "Shippable agent products that own one painful workflow end to end, from the first brief through a path guests or operators can use.",
  },
  {
    name: "Agent Ops",
    body: "Citations, approvals, evals, and human handoff. The operating layer that keeps an agent accountable after the demo fades.",
  },
  {
    name: "Advisory",
    body: "Whether the thing should be an agent at all. Scope the brief, name the constraints, and walk away if a simpler tool is honest.",
  },
] as const;

export default function ServicesPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Services</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Three ways to work with us
        </h1>
        <p className="type-body mt-4 max-w-prose text-muted">
          One brief at a time. We build the agent, the operating layer around
          it, or the decision that says not yet.
        </p>

        <ul className="mt-14 divide-y divide-rule border-y border-rule">
          {offers.map((offer) => (
            <li
              key={offer.name}
              className="grid gap-2 py-6 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <h2 className="type-display text-xl text-accent sm:text-[1.35rem]">
                {offer.name}
              </h2>
              <p className="type-body text-base text-muted">{offer.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 border-t border-rule pt-10">
          <p className="type-body max-w-prose text-muted">
            Ready with a workflow that hurts every week? Bring the brief.
          </p>
          <p className="mt-6">
            <Link href="/contact" className="btn-primary no-underline">
              Start a brief
            </Link>
          </p>
        </div>
      </main>
    </SiteChrome>
  );
}
