import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: 'Northline Analytics',
  description:
    'Studio study: Ledger Clerk for Northline Analytics — cited answers with Propose not Execute.',
  openGraph: {
    title: "Northline Analytics · Remex Studio",
    description:
      'Studio study: Ledger Clerk for Northline Analytics — cited answers with Propose not Execute.',
    url: "/work/northline",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Northline Analytics · Remex Studio",
    description:
      'Studio study: Ledger Clerk for Northline Analytics — cited answers with Propose not Execute.',
  },
};

export default function NorthlineStudyPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Study</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Northline Analytics
        </h1>
        <p className="type-body mt-3 text-lg text-muted">Ledger Clerk</p>

        <div className="mt-12 space-y-10">
          <section aria-labelledby="client">
            <h2
              id="client"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              Client card
            </h2>
            <p className="type-body mt-4 text-muted">
              Northline Analytics is a fictional data team. The brief asked for
              a ledger clerk that answers with citations and never posts a
              change without a human gate.
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
              Analysts need fast answers over the books, then a propose path for
              adjustments. Approve and Reject must be explicit. Every step lands
              in an audit log.
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
              English only. No real bank connections. No fake conversion
              metrics. Agents may Propose; they must not Execute. Rejected
              tickets stay visible.
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
              Ask with citations, source browser, change tickets with Approve
              and Reject, and a durable audit log for the demo session.
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
              Ask the clerk, inspect sources, then propose a change that waits
              for a human.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/demo/northline" className="btn-primary no-underline">
                Open Northline demo
              </Link>
              <Link
                href="/demo/northline/ask"
                className="inline-flex items-center border border-rule px-5 py-2.5 text-sm text-accent no-underline"
              >
                Start ask
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
              <li>Pick a preset question on Ask.</li>
              <li>Read the answer with citations into the mock corpus.</li>
              <li>Open Source to inspect the cited packets.</li>
              <li>
                Propose a change ticket — Approve or Reject, never Execute.
              </li>
              <li>Confirm the path in the audit log.</li>
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
              Stronger locator linking and a dual-review queue before any live
              ledger write. Keep Propose not Execute.
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
              Need an agent that cites the books and waits for your gate?
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
