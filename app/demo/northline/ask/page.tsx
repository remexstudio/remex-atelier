import type { Metadata } from "next";
import { AskPanel } from "@/components/northline/AskPanel";
import { DemoShell } from "@/components/northline/DemoShell";

export const metadata: Metadata = {
  title: "Ask · Northline",
  description: "Preset questions with cited answers from Ledger Clerk.",
};

export default function NorthlineAskPage() {
  return (
    <DemoShell current="/demo/northline/ask">
      <main id="main">
        <p className="type-meta">Ask</p>
        <h1 className="type-display mt-3 text-4xl text-accent">
          Cited answers
        </h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Pick a preset. The clerk answers from the mock corpus and lists
          citations — it does not invent books.
        </p>
        <div className="mt-10">
          <AskPanel />
        </div>
      </main>
    </DemoShell>
  );
}
