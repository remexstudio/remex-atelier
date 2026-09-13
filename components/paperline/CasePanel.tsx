"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  severityLabels,
  statusLabels,
  type Ticket,
} from "@/components/paperline/data";
import "@/components/paperline/paperline.css";

type Decision = "none" | "approved" | "rejected";

function formatEventTime(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date(iso));
}

export function CasePanel({ ticket }: { ticket: Ticket }) {
  const [decision, setDecision] = useState<Decision>("none");
  const [statusEntered, setStatusEntered] = useState(false);

  useEffect(() => {
    setStatusEntered(false);
    const frame = requestAnimationFrame(() => setStatusEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [decision]);

  const statusCopy =
    decision === "none"
      ? "Awaiting human gate."
      : decision === "approved"
        ? "Proposal approved in the demo log. Still no real payout."
        : "Proposal rejected. Ticket retained for audit.";

  return (
    <div className="space-y-8">
      <article className="border border-rule bg-paper/70 px-5 py-6">
        <p className="type-meta">
          {ticket.id} · {severityLabels[ticket.severity]} ·{" "}
          {statusLabels[ticket.status]}
        </p>
        <h2 className="type-display mt-3 text-2xl text-accent">{ticket.title}</h2>
        <p className="type-body mt-4 text-sm text-muted">{ticket.summary}</p>
      </article>

      <section aria-labelledby="timeline">
        <h3 id="timeline" className="type-meta">
          Timeline
        </h3>
        <ol className="mt-4 space-y-3">
          {ticket.timeline.map((event) => (
            <li
              key={event.at + event.label}
              className="border border-rule px-4 py-3"
            >
              <time dateTime={event.at} className="type-meta tabular-nums">
                {formatEventTime(event.at)}
              </time>
              <p className="mt-1 text-sm text-accent">{event.label}</p>
              <p className="type-body mt-1 text-sm text-muted">{event.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="actions">
        <h3 id="actions" className="type-meta">
          Suggested actions
        </h3>
        <ul className="type-body mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
          {ticket.suggestedActions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </section>

      {ticket.refundRequiresApproval ? (
        <section
          className="border border-rule bg-paper/70 px-5 py-6"
          aria-labelledby="refund-gate"
        >
          <h3 id="refund-gate" className="type-display text-xl text-accent">
            Refund gate
          </h3>
          <p className="type-body mt-3 text-sm text-muted">
            Refunds need Approve. This prototype never pays out.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setDecision("approved")}
              className="btn-primary"
              aria-pressed={decision === "approved"}
            >
              Approve proposal
            </button>
            <button
              type="button"
              onClick={() => setDecision("rejected")}
              className="inline-flex items-center border border-rule px-4 py-2 text-sm text-accent"
              aria-pressed={decision === "rejected"}
            >
              Reject proposal
            </button>
          </div>
          <p
            key={decision}
            className="paperline-gate-status mt-4 text-sm text-muted"
            data-entered={statusEntered ? "true" : "false"}
            role="status"
            aria-live="polite"
          >
            {statusCopy}
          </p>
        </section>
      ) : (
        <p className="text-sm text-muted">No refund proposal on this ticket.</p>
      )}

      <Link
        href="/demo/paperline/policy"
        className="inline-flex text-sm text-accent"
      >
        Read policy
      </Link>
    </div>
  );
}
