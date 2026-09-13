import type { Metadata } from "next";
import { ChangePanel } from "@/components/northline/ChangePanel";
import { DemoShell } from "@/components/northline/DemoShell";

export const metadata: Metadata = {
  title: "Change · Northline",
  description:
    "Propose ledger change tickets — Approve or Reject, never Execute.",
};

export default function NorthlineChangePage() {
  return (
    <DemoShell current="/demo/northline/change">
      <main id="main">
        <p className="type-meta">Change</p>
        <h1 className="type-display mt-3 text-4xl text-accent">
          Propose not Execute
        </h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Tickets wait for a human gate. This prototype never posts to a live
          ledger.
        </p>
        <div className="mt-10">
          <ChangePanel />
        </div>
      </main>
    </DemoShell>
  );
}
