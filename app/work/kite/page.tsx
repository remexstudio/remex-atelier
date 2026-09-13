import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Kite & Co.",
  description:
    "Studio study: Morning Remex for Kite & Co. — priority brief without auto-publish.",
};

export default function KiteStudyPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Study</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Kite &amp; Co.
        </h1>
        <p className="type-body mt-3 text-lg text-muted">Morning Remex</p>

        <div className="mt-12 space-y-10">
          <section aria-labelledby="client">
            <h2
              id="client"
              className="type-display border-t border-rule pt-5 text-2xl text-accent"
            >
              Client card
            </h2>
            <p className="type-body mt-4 text-muted">
              Kite &amp; Co. is a fictional brand communications desk. The brief
              asked for a morning agent that sorts Priority, Watch, and Noise —
              then drafts replies without ever posting on its own.
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
              Operators wake to a sorted brief, open a thread, draft in two
              tones, and escalate when a human must publish. Synthetic posts
              only. Never auto-publish.
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
              English only. No real social networks. No fake engagement
              percentages. Two draft tones. Escalate is explicit.
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
              Morning brief buckets, thread detail, dual-tone drafts with
              escalate, and a digest that never claims a live post.
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
              Open the morning brief, then a thread. Publish stays human.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/demo/kite" className="btn-primary no-underline">
                Open Kite demo
              </Link>
              <Link
                href="/demo/kite/brief"
                className="inline-flex items-center border border-rule px-5 py-2.5 text-sm text-accent no-underline"
              >
                Morning brief
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
              <li>Sort overnight signals into Priority, Watch, and Noise.</li>
              <li>Open a thread and draft warm or crisp tone.</li>
              <li>Escalate the draft — never auto-publish.</li>
              <li>Digest records what waited for a human.</li>
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
              Richer watchlists and a stricter embargo gate before any escalated
              draft can leave the desk.
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
              Need a morning agent that respects the publish line?
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
