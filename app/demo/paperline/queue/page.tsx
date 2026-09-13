import type { Metadata } from "next";
import { DemoShell } from "@/components/paperline/DemoShell";
import { QueueList } from "@/components/paperline/QueueList";
import { queue } from "@/components/paperline/data";

export const metadata: Metadata = {
  title: "Queue · Paperline",
  description: "Six-ticket exception queue for Exception Copilot.",
};

export default function PaperlineQueuePage() {
  return (
    <DemoShell current="/demo/paperline/queue">
      <main id="main">
        <p className="type-meta">Queue</p>
        <h1 className="type-display mt-3 text-4xl text-accent">Exceptions</h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          {queue.length} tickets. Open a case for timeline and gates.
        </p>
        <div className="mt-10">
          <QueueList />
        </div>
      </main>
    </DemoShell>
  );
}
