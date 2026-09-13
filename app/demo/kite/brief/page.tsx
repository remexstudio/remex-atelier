import type { Metadata } from "next";
import { BriefBoard } from "@/components/kite/BriefBoard";
import { DemoShell } from "@/components/kite/DemoShell";

export const metadata: Metadata = {
  title: "Brief · Kite",
  description: "Morning Remex Priority / Watch / Noise brief.",
};

export default function KiteBriefPage() {
  return (
    <DemoShell current="/demo/kite/brief">
      <main id="main">
        <p className="type-meta">Brief</p>
        <h1 className="type-display mt-3 text-4xl text-accent">
          Morning board
        </h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Synthetic overnight signals sorted for a human desk. Open a thread to
          draft.
        </p>
        <div className="mt-10">
          <BriefBoard />
        </div>
      </main>
    </DemoShell>
  );
}
