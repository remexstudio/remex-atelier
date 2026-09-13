"use client";

import { useState } from "react";
import { aftercareOrder, sessionSummary } from "@/components/lumen/data";

export function DeskAftercare() {
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div className="space-y-8">
      <section
        className="border border-rule bg-paper/70 px-5 py-6"
        aria-labelledby="order-heading"
      >
        <p className="type-meta">Aftercare order</p>
        <h2 id="order-heading" className="type-display mt-2 text-2xl text-accent">
          {aftercareOrder.id}
        </h2>
        <p className="type-meta mt-2">{aftercareOrder.status}</p>
        <p className="type-meta mt-1">{aftercareOrder.guest}</p>

        <div className="mt-6 border-t border-rule pt-5">
          <h3 className="text-sm text-accent">Mock shipment</h3>
          <dl className="mt-3 space-y-2 text-sm text-muted">
            <div className="flex flex-wrap justify-between gap-2">
              <dt>Carrier</dt>
              <dd className="text-accent">{aftercareOrder.shipment.carrier}</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <dt>Tracking</dt>
              <dd className="text-accent">{aftercareOrder.shipment.tracking}</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <dt>Status</dt>
              <dd className="text-accent">{aftercareOrder.shipment.eta}</dd>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <dt>Destination</dt>
              <dd className="text-accent">{aftercareOrder.shipment.destination}</dd>
            </div>
          </dl>
        </div>

        <ul className="mt-6 space-y-3 border-t border-rule pt-5">
          {aftercareOrder.items.map((item) => (
            <li key={item.skuId} className="flex justify-between gap-4 text-sm">
              <span className="text-accent">
                {item.name}
                <span className="mt-1 block text-muted">
                  {item.shade} · qty {item.qty}
                </span>
              </span>
              <span className="text-muted">${item.price}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <h3 className="text-sm text-accent">Care notes</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            {aftercareOrder.careNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setShowSummary(true)}
          className="btn-primary"
        >
          Request human
        </button>
        {showSummary ? (
          <button
            type="button"
            onClick={() => setShowSummary(false)}
            className="inline-flex items-center border border-rule px-5 py-2.5 text-sm text-accent"
          >
            Hide summary
          </button>
        ) : null}
      </div>

      {showSummary ? (
        <section
          className="border border-rule bg-paper px-5 py-6"
          aria-labelledby="summary-heading"
          role="status"
          aria-live="polite"
        >
          <p className="type-meta">{sessionSummary.generatedFor}</p>
          <h2
            id="summary-heading"
            className="type-display mt-2 text-xl text-accent"
          >
            {sessionSummary.title}
          </h2>
          <p className="type-meta mt-2">Order {sessionSummary.orderId}</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            {sessionSummary.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className="type-meta mt-5">
            Risk flags: {sessionSummary.riskFlags.join("; ")}
          </p>
          <p className="type-body mt-4 max-w-2xl text-sm text-accent">
            Suggested reply: {sessionSummary.suggestedReply}
          </p>
        </section>
      ) : null}
    </div>
  );
}
