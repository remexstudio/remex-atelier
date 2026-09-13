import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Remex Studio turns one brief into a working agent: product judgment and agent execution.",
};

const steps = [
  {
    title: "Brief",
    body: "Name the painful workflow, the guest or operator, and the hard constraints. If it should not be an agent, we say so.",
  },
  {
    title: "Shape",
    body: "Product judgment decides what the agent owns versus what a human must approve. We draw the handoff line before we write tools.",
  },
  {
    title: "Build",
    body: "The agent executes inside that line: citations, propose-not-execute gates, and mock-safe demos when live systems are out of scope.",
  },
  {
    title: "Molt",
    body: "Ship, watch the seams, then molt. The next brief is smaller and sharper than the first.",
  },
] as const;

export default function ApproachPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Approach</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Product judgment. Agent execution.
        </h1>
        <p className="type-body mt-4 max-w-prose text-muted">
          Remex Studio is an atelier for agents. A person holds the brief and
          the product calls. The agent runs the loop, never the other way
          around.
        </p>

        <section className="mt-14" aria-labelledby="division">
          <h2
            id="division"
            className="type-display border-t border-rule pt-5 text-2xl text-accent"
          >
            Division of labor
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="type-display text-lg text-accent">Product / PM</h3>
              <ul className="type-body mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                <li>Owns the brief and success criteria</li>
                <li>Decides what requires human approval</li>
                <li>Keeps scope honest when demos tempt scope creep</li>
              </ul>
            </div>
            <div>
              <h3 className="type-display text-lg text-accent">Agent</h3>
              <ul className="type-body mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                <li>Executes the path inside the brief</li>
                <li>Surfaces citations, tickets, and handoff summaries</li>
                <li>Never auto-publishes, pays out, or invents metrics</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="loop">
          <h2
            id="loop"
            className="type-display border-t border-rule pt-5 text-2xl text-accent"
          >
            How briefs become agents
          </h2>
          <ol className="mt-8 space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-rule pt-6">
                <p className="type-meta">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="type-display mt-2 text-xl text-accent">
                  {step.title}
                </h3>
                <p className="type-body mt-3 text-sm text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <p className="mt-14">
          <Link
            href="/work"
            className="text-sm font-medium text-accent no-underline underline-offset-4"
          >
            See how this reads on a study
          </Link>
        </p>
      </main>
    </SiteChrome>
  );
}
