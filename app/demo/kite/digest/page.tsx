import type { Metadata } from "next";
import { DemoShell } from "@/components/kite/DemoShell";
import { DigestPanel } from "@/components/kite/DigestPanel";

export const metadata: Metadata = {
  title: "Digest · Kite",
  description: "Morning Remex digest — record of what waited for humans.",
};

export default function KiteDigestPage() {
  return (
    <DemoShell current="/demo/kite/digest">
      <main id="main">
        <p className="type-meta">Digest</p>
        <h1 className="type-display mt-3 text-4xl text-accent">What waited</h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          A record for the desk. Morning Remex does not publish from this page.
        </p>
        <div className="mt-10">
          <DigestPanel />
        </div>
      </main>
    </DemoShell>
  );
}
