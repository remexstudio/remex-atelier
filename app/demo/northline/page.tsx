import type { Metadata } from "next";
import Link from "next/link";
import { DemoShell } from "@/components/northline/DemoShell";
import { northlineDemoSteps } from "@/components/northline/data";

export const metadata: Metadata = {
  title: "Northline demo",
  description: "Ledger Clerk prototype hub — ask, source, change, log.",
};

const stepCopy: Record<string, string> = {
  "/demo/northline/ask": "Preset questions with cited answers.",
  "/demo/northline/source": "Inspect the mock ledger corpus.",
  "/demo/northline/change":
    "Propose tickets. Approve or Reject — never Execute.",
  "/demo/northline/log": "Audit trail for asks and gates.",
};

export default function NorthlineHubPage() {
  const steps = northlineDemoSteps.filter(
    (step) => step.href !== "/demo/northline",
  );

  return (
    <DemoShell current="/demo/northline">
      <main id="main">
        <p className="type-meta">Prototype</p>
        <h1 className="type-display mt-3 text-4xl text-accent">
          Ledger Clerk
        </h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Cited answers over a fictional ledger. Changes stay proposed until a
          human Approves or Rejects.
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
          href="/work/northline"
          className="mt-10 inline-flex text-sm text-accent"
        >
          Back to the study
        </Link>
      </main>
    </DemoShell>
  );
}
