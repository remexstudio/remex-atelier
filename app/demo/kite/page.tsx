import type { Metadata } from "next";
import Link from "next/link";
import { DemoShell } from "@/components/kite/DemoShell";
import { kiteDemoSteps } from "@/components/kite/data";

export const metadata: Metadata = {
  title: "Kite demo",
  description:
    "Morning Remex prototype hub — brief, thread, digest. Never auto-publish.",
};

const stepCopy: Record<string, string> = {
  "/demo/kite/brief": "Priority / Watch / Noise for the morning.",
  "/demo/kite/thread/kite-01": "Open a thread, draft two tones, escalate.",
  "/demo/kite/digest": "What waited for a human — nothing auto-posted.",
};

export default function KiteHubPage() {
  const steps = kiteDemoSteps.filter((step) => step.href !== "/demo/kite");

  return (
    <DemoShell current="/demo/kite">
      <main id="main">
        <p className="type-meta">Prototype</p>
        <h1 className="type-display mt-3 text-4xl text-accent">
          Morning Remex
        </h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Sort overnight signals, draft carefully, escalate to a human. Never
          auto-publish.
        </p>

        <ol className="mt-12 space-y-4">
          {steps.map((step, index) => (
            <li key={step.href}>
              <Link
                href={step.href}
                className="teaser-card flex gap-4 border border-rule px-5 py-4 no-underline"
              >
                <span className="type-meta tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-sm text-accent">{step.label}</span>
                  <span className="type-meta mt-1 block">
                    {stepCopy[step.href]}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <Link
          href="/work/kite"
          className="mt-10 inline-flex text-sm text-accent"
        >
          Back to the study
        </Link>
      </main>
    </DemoShell>
  );
}
