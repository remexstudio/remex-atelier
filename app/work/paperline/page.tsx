import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: 'Paperline Retail',
  description:
    'Studio study: Exception Copilot for Paperline Retail: queue, case, policy, refund approval.',
  openGraph: {
    title: "Paperline Retail · Remex Studio",
    description:
      'Studio study: Exception Copilot for Paperline Retail: queue, case, policy, refund approval.',
    url: "/work/paperline",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Paperline Retail · Remex Studio",
    description:
      'Studio study: Exception Copilot for Paperline Retail: queue, case, policy, refund approval.',
  },
};

export default function PaperlineStudyPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Study</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Paperline Retail
        </h1>
        <p className="type-body mt-3 text-lg text-muted">Exception Copilot</p>

        <div className="mt-12 space-y-10">
          <section aria-labelledby="client">
            <h2
              id="client"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              Client card
            </h2>
            <p className="type-body mt-4 text-muted">
              Paperline Retail is a fictional mid-size commerce desk. The brief
              asked for an exception copilot that triages tickets without moving
              money on its own.
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
              Six open exceptions. Each case shows a timeline and suggested
              actions. Refunds require Approve. No real payouts.
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
              Studio study only. No payment processor. No fake recovery percentages.
              Policy page stays readable.
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
              Queue of six tickets, case detail with timeline, refund approval
              gate, and a policy page.
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
              Open the queue, then a case. Refunds wait for Approve.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/demo/paperline" className="btn-primary no-underline">
                Open Paperline demo
              </Link>
              <Link
                href="/demo/paperline/queue"
                className="inline-flex items-center border border-rule px-5 py-2.5 text-sm text-accent no-underline"
              >
                Open queue
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
              <li>Scan the six-ticket queue.</li>
              <li>Open a case for timeline and suggested actions.</li>
              <li>Approve or reject refund proposals. Never auto-pay.</li>
              <li>Check policy for the written rules.</li>
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
              Carrier webhooks and a stricter dual-approve for high-severity
              refunds.
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
              Need an exception desk that respects the money line?
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
