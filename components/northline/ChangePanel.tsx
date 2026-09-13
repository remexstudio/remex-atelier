"use client";

import { changeDrafts } from "@/components/northline/data";
import { useNorthline } from "@/components/northline/NorthlineProvider";

function statusLabel(status: string): string {
  if (status === "idle") return "ready";
  return status;
}

export function ChangePanel() {
  const { ready, ticketStatus, proposeChange, decideChange } = useNorthline();

  return (
    <div className="space-y-6">
      <p className="type-body text-sm text-muted">
        Ledger Clerk may Propose. It never Executes. Approve or Reject is the
        human gate.
      </p>
      {changeDrafts.map((draft) => {
        const status = ticketStatus[draft.id] ?? "idle";
        return (
          <article
            key={draft.id}
            className="border border-rule bg-paper/70 px-5 py-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="type-meta">{draft.id}</p>
                <h2 className="type-display mt-2 text-xl text-accent">
                  {draft.title}
                </h2>
              </div>
              <span
                key={status}
                className="border border-rule px-2 py-0.5 text-[11px] tracking-wide text-muted"
                role="status"
                aria-live="polite"
              >
                {statusLabel(status)}
              </span>
            </div>
            <p className="type-body mt-4 text-sm text-muted">
              {draft.rationale}
            </p>
            <p className="type-body mt-3 text-sm text-muted">
              <span className="text-accent">Impact · </span>
              {draft.impact}
            </p>
            <div
              className="mt-6 flex flex-wrap gap-3"
              role="group"
              aria-label={`Gate for ${draft.id}`}
            >
              {status === "idle" || status === "rejected" ? (
                <button
                  type="button"
                  disabled={!ready}
                  onClick={() => proposeChange(draft.id, draft.title)}
                  className="btn-primary disabled:opacity-50"
                >
                  Propose
                </button>
              ) : null}
              {status === "proposed" ? (
                <>
                  <button
                    type="button"
                    disabled={!ready}
                    onClick={() =>
                      decideChange(draft.id, draft.title, "approval")
                    }
                    className="btn-primary disabled:opacity-50"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    disabled={!ready}
                    onClick={() =>
                      decideChange(draft.id, draft.title, "rejection")
                    }
                    className="inline-flex items-center border border-rule px-4 py-2 text-sm text-accent disabled:opacity-50"
                  >
                    Reject
                  </button>
                </>
              ) : null}
              {status === "approved" ? (
                <p
                  className="type-body text-sm text-muted"
                  role="status"
                  aria-live="polite"
                >
                  Approved — still no Execute in this prototype.
                </p>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
