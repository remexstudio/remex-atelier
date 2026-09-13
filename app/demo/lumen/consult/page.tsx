import type { Metadata } from "next";
import { ConsultFlow } from "@/components/lumen/ConsultFlow";
import { DemoShell } from "@/components/lumen/DemoShell";

export const metadata: Metadata = {
  title: "Consult · Lumen",
  description: "Ask skin and occasion; recommend one hero SKU.",
};

export default function LumenConsultPage() {
  return (
    <DemoShell current="/demo/lumen/consult">
      <main id="main">
        <p className="type-meta">Consult</p>
        <h1 className="type-display mt-3 text-4xl text-accent">
          Skin and occasion
        </h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Two questions. One recommendation. The concierge does not browse the
          shelf for you.
        </p>
        <div className="mt-10">
          <ConsultFlow />
        </div>
      </main>
    </DemoShell>
  );
}
