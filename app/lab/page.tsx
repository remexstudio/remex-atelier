import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Remex Studio lab: prototypes that are not client engagements.",
};

export default function LabPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Lab</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Prototypes
        </h1>
        <p className="type-body mt-4 max-w-prose text-muted">
          Small loops we run to test craft. Not client work. Not studies.
        </p>

        <article className="mt-12 border border-rule bg-paper/50 px-6 py-6">
          <p className="type-meta">Prototype · not a client engagement</p>
          <h2 className="type-display mt-3 text-2xl text-accent">Pulse</h2>
          <p className="type-body mt-3 text-sm text-muted">
            See a metric, notify a roster, log the event, follow up the rest.
          </p>
          <Link href="/lab/pulse" className="btn-primary mt-6 no-underline">
            Open Pulse
          </Link>
        </article>
      </main>
    </SiteChrome>
  );
}
