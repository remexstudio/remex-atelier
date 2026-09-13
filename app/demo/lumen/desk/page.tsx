import type { Metadata } from "next";
import { DeskAftercare } from "@/components/lumen/DeskAftercare";
import { DemoShell } from "@/components/lumen/DemoShell";

export const metadata: Metadata = {
  title: "Desk · Lumen",
  description: "Aftercare desk for order LUM-1042 with human handoff summary.",
};

export default function LumenDeskPage() {
  return (
    <DemoShell current="/demo/lumen/desk">
      <main id="main">
        <p className="type-meta">Desk</p>
        <h1 className="type-display mt-3 text-4xl text-accent">Aftercare</h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Order LUM-1042 is open for care notes. Request human when the guest
          needs a person — the session summary travels with the handoff.
        </p>
        <div className="mt-10">
          <DeskAftercare />
        </div>
      </main>
    </DemoShell>
  );
}
