import type { Metadata } from "next";
import { DemoShell } from "@/components/northline/DemoShell";
import { LogPanel } from "@/components/northline/LogPanel";

export const metadata: Metadata = {
  title: "Log · Northline",
  description: "Audit log for Ledger Clerk asks, proposals, and gates.",
};

export default function NorthlineLogPage() {
  return (
    <DemoShell current="/demo/northline/log">
      <main id="main">
        <p className="type-meta">Log</p>
        <h1 className="type-display mt-3 text-4xl text-accent">Audit log</h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Asks, proposals, approvals, and rejections for this demo session.
        </p>
        <div className="mt-10">
          <LogPanel />
        </div>
      </main>
    </DemoShell>
  );
}
