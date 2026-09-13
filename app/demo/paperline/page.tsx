import type { Metadata } from "next";
import Link from "next/link";
import { DemoShell } from "@/components/paperline/DemoShell";
import { paperlineDemoSteps } from "@/components/paperline/data";

export const metadata: Metadata = {
  title: "Paperline demo",
  description:
    "Exception Copilot hub: queue, case, policy. No real payouts.",
};

const stepCopy: Record<string, string> = {
  "/demo/paperline/queue": "Six tickets ready for triage.",
  "/demo/paperline/case/PL-2401": "Timeline, suggestions, refund gate.",
  "/demo/paperline/policy": "Written rules the copilot cites.",
};

export default function PaperlineHubPage() {
  const steps = paperlineDemoSteps.filter(
    (step) => step.href !== "/demo/paperline",
  );

  return (
    <DemoShell current="/demo/paperline">
      <main id="main">
        <p className="type-meta">Prototype</p>
        <h1 className="type-display mt-3 text-4xl text-accent">
          Exception Copilot
        </h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Triage exceptions. Propose refunds. Never pay out without Approve.
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
          href="/work/paperline"
          className="mt-10 inline-flex text-sm text-accent"
        >
          Back to the study
        </Link>
      </main>
    </DemoShell>
  );
}
