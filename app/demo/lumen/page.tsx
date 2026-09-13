import type { Metadata } from "next";
import Link from "next/link";
import { DemoShell } from "@/components/lumen/DemoShell";
import { heroSku, lumenDemoSteps } from "@/components/lumen/data";

export const metadata: Metadata = {
  title: "Lumen demo",
  description:
    "Atelier Concierge prototype hub — consult through aftercare desk.",
};

const stepCopy: Record<string, string> = {
  "/demo/lumen/consult": "Ask skin and occasion. Return one hero SKU.",
  "/demo/lumen/try-on": "Toggle a mock overlay on a blank canvas.",
  "/demo/lumen/bag": "Review the line item and quantity.",
  "/demo/lumen/pay": "Mock checkout — no processor, no charge.",
  "/demo/lumen/desk": "Aftercare order LUM-1042 and human handoff.",
};

export default function LumenDemoHubPage() {
  const steps = lumenDemoSteps.filter((step) => step.href !== "/demo/lumen");

  return (
    <DemoShell current="/demo/lumen">
      <main id="main">
        <p className="type-meta">Prototype</p>
        <h1 className="type-display mt-3 text-4xl text-accent">
          Lumen Concierge
        </h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          A beauty retail path from consult to desk. Hero product for this demo:{" "}
          {heroSku.name} ({heroSku.id}). Mock commerce only.
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
          href="/work/lumen-atelier"
          className="mt-10 inline-flex text-sm text-accent"
        >
          Back to the study
        </Link>
      </main>
    </DemoShell>
  );
}
