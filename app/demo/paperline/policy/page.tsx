import type { Metadata } from "next";
import { DemoShell } from "@/components/paperline/DemoShell";
import { policySections } from "@/components/paperline/data";

export const metadata: Metadata = {
  title: "Policy · Paperline",
  description:
    "Exception Copilot policy: refunds require Approve; no real payouts.",
};

export default function PaperlinePolicyPage() {
  return (
    <DemoShell current="/demo/paperline/policy">
      <main id="main">
        <p className="type-meta">Policy</p>
        <h1 className="type-display mt-3 text-4xl text-accent">Desk rules</h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          The copilot cites these rules. It does not invent metrics or move
          money.
        </p>
        <div className="mt-10 space-y-8">
          {policySections.map((section) => (
            <section
              key={section.id}
              aria-labelledby={section.id}
              className="border-t border-rule pt-6"
            >
              <h2
                id={section.id}
                className="type-display text-2xl text-accent"
              >
                {section.title}
              </h2>
              <p className="type-body mt-4 text-sm text-muted">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
    </DemoShell>
  );
}
