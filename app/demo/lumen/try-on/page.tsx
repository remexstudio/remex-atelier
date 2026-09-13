import type { Metadata } from "next";
import { DemoShell } from "@/components/lumen/DemoShell";
import { TryOnMock } from "@/components/lumen/TryOnMock";

export const metadata: Metadata = {
  title: "Try-on · Lumen",
  description: "Mock try-on overlay for Softlight Serum Tint.",
};

export default function LumenTryOnPage() {
  return (
    <DemoShell current="/demo/lumen/try-on">
      <main id="main">
        <p className="type-meta">Try-on</p>
        <h1 className="type-display mt-3 text-4xl text-accent">Overlay mock</h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          A blank canvas with a luminous wash. Toggle the overlay — no camera
          stream, no brand assets.
        </p>
        <div className="mt-10">
          <TryOnMock />
        </div>
      </main>
    </DemoShell>
  );
}
