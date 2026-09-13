import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { heroSku } from "@/components/lumen/data";

export const metadata: Metadata = {
  title: 'Lumen Atelier',
  description:
    'Studio study: Atelier Concierge for Lumen Atelier — consult to aftercare.',
  openGraph: {
    title: "Lumen Atelier · Remex Studio",
    description:
      'Studio study: Atelier Concierge for Lumen Atelier — consult to aftercare.',
    url: "/work/lumen-atelier",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Lumen Atelier · Remex Studio",
    description:
      'Studio study: Atelier Concierge for Lumen Atelier — consult to aftercare.',
  },
};

export default function LumenAtelierStudyPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Study</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Lumen Atelier
        </h1>
        <p className="type-body mt-3 text-lg text-muted">Atelier Concierge</p>

        <div className="mt-12 space-y-10">
          <section aria-labelledby="client">
            <h2
              id="client"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              Client card
            </h2>
            <p className="type-body mt-4 text-muted">
              Lumen Atelier is a fictional beauty retailer. The brief asked for
              a concierge that feels like a counter, not a chatbot — one
              recommendation, then a clean path to try-on, bag, pay, and desk.
            </p>
          </section>

          <section aria-labelledby="brief">
            <h2
              id="brief"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              Brief
            </h2>
            <p className="type-body mt-4 text-muted">
              Guests arrive with skin and occasion, not a shopping list. The
              agent should ask two questions, recommend a single hero SKU, and
              carry the session through mock commerce into human aftercare.
            </p>
          </section>

          <section aria-labelledby="constraints">
            <h2
              id="constraints"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              Constraints
            </h2>
            <p className="type-body mt-4 text-muted">
              English only. No real brand logos. No fake conversion percentages.
              No live payments. Prefer editorial restraint over dashboard
              chrome. One hero product for the demo catalog.
            </p>
          </section>

          <section aria-labelledby="shipped">
            <h2
              id="shipped"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              What shipped
            </h2>
            <p className="type-body mt-4 text-muted">
              Consult → try-on overlay → bag → mock pay → desk for order
              LUM-1042. The hero SKU is {heroSku.name} ({heroSku.id}). Request
              human surfaces a session summary for handoff.
            </p>
          </section>

          <section aria-labelledby="prototype">
            <h2
              id="prototype"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              Live prototype
            </h2>
            <p className="type-body mt-4 text-muted">
              The concierge demo is interactive end to end. Start at the hub, or
              jump straight into consult.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/demo/lumen" className="btn-primary no-underline">
                Open Lumen demo
              </Link>
              <Link
                href="/demo/lumen/consult"
                className="inline-flex items-center border border-rule px-5 py-2.5 text-sm text-accent no-underline"
              >
                Start consult
              </Link>
            </div>
          </section>

          <section aria-labelledby="how">
            <h2
              id="how"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              How it runs
            </h2>
            <ol className="type-body mt-4 list-decimal space-y-2 pl-5 text-muted">
              <li>Guest picks skin and occasion on consult.</li>
              <li>Agent returns one hero SKU with a short rationale.</li>
              <li>Try-on toggles a mock overlay — no camera, no logos.</li>
              <li>Bag and pay stay local; pay never hits a processor.</li>
              <li>
                Desk opens aftercare order LUM-1042 with mock shipment; Request
                human shows the session summary.
              </li>
            </ol>
          </section>

          <section aria-labelledby="next">
            <h2
              id="next"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              Next molt
            </h2>
            <p className="type-body mt-4 text-muted">
              Shade mapping for deeper undertones, a travel mini attach, and a
              real approval gate before any live catalog write. Keep the one-SKU
              discipline.
            </p>
          </section>

          <section aria-labelledby="brief-cta">
            <h2
              id="brief-cta"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              Start a brief
            </h2>
            <p className="type-body mt-4 text-muted">
              Have a workflow that should feel like a counter, not a ticket
              queue? Bring it.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-6 inline-flex no-underline"
            >
              Start a brief
            </Link>
          </section>
        </div>

        <p className="type-meta mt-16 border-t border-rule pt-6">
          Studio study. Client identity anonymized.
        </p>
      </main>
    </SiteChrome>
  );
}
