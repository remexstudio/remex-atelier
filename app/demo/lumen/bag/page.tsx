import type { Metadata } from "next";
import { BagMock } from "@/components/lumen/BagMock";
import { DemoShell } from "@/components/lumen/DemoShell";

export const metadata: Metadata = {
  title: "Bag · Lumen",
  description: "Mock bag for the Lumen Atelier Concierge demo.",
};

export default function LumenBagPage() {
  return (
    <DemoShell current="/demo/lumen/bag">
      <main id="main">
        <p className="type-meta">Bag</p>
        <h1 className="type-display mt-3 text-4xl text-accent">Your bag</h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          One hero line. Adjust quantity, then continue to mock pay.
        </p>
        <div className="mt-10">
          <BagMock />
        </div>
      </main>
    </DemoShell>
  );
}
