import type { Metadata } from "next";
import { DemoShell } from "@/components/lumen/DemoShell";
import { PayMock } from "@/components/lumen/PayMock";

export const metadata: Metadata = {
  title: "Pay · Lumen",
  description: "Mock payment for the Lumen demo — no real charges.",
};

export default function LumenPayPage() {
  return (
    <DemoShell current="/demo/lumen/pay">
      <main id="main">
        <p className="type-meta">Pay</p>
        <h1 className="type-display mt-3 text-4xl text-accent">Mock checkout</h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Form fields are for the prototype only. Nothing is tokenized or
          charged.
        </p>
        <div className="mt-10">
          <PayMock />
        </div>
      </main>
    </DemoShell>
  );
}
