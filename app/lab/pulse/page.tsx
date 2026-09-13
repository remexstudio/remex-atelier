import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { PulseLoop } from "@/components/lab/PulseLoop";

export const metadata: Metadata = {
  title: "Pulse",
  description:
    "Pulse prototype: see metric, notify roster, log event, follow up rest.",
};

export default function PulsePage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Lab</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Pulse
        </h1>
        <p className="type-body mt-4 max-w-prose text-muted">
          A four-step loop for internal attention. Labeled clearly as a
          prototype.
        </p>
        <div className="mt-10">
          <PulseLoop />
        </div>
        <Link
          href="/lab"
          className="mt-12 inline-flex text-sm font-medium text-accent no-underline"
        >
          Back to Lab
        </Link>
      </main>
    </SiteChrome>
  );
}
