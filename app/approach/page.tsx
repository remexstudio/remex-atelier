import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Remex Studio designs the job, builds the gate, and keeps the record.",
};

const blocks = [
  {
    title: "Design the job",
    body: "Name one painful workflow and what the agent is hired to do. Scope the brief before tools. If it should not be an agent, we say so.",
  },
  {
    title: "Build the gate",
    body: "The agent proposes. A person approves. We draw the line the agent cannot cross before anything ships.",
  },
  {
    title: "Keep the record",
    body: "Every proposal, approval, and decision stays on the log. The brief, the gate, and the outcome stay linked.",
  },
] as const;

export default function ApproachPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Approach</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          How we hire an agent
        </h1>
        <p className="type-body mt-4 max-w-prose text-muted">
          One workflow. One agent. A human still decides.
        </p>

        <ol className="mt-14 divide-y divide-rule border-y border-rule">
          {blocks.map((block, index) => (
            <li
              key={block.title}
              className="grid gap-3 py-8 sm:grid-cols-[4rem_1fr] sm:gap-8"
            >
              <p className="type-meta pt-1">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="type-display text-2xl text-accent sm:text-[1.75rem]">
                  {block.title}
                </h2>
                <p className="type-body mt-3 max-w-prose text-base text-muted">
                  {block.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-14">
          <Link href="/contact" className="btn-primary no-underline">
            Start a brief.
          </Link>
        </p>
      </main>
    </SiteChrome>
  );
}
