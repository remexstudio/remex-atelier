"use client";

import { useNorthline } from "@/components/northline/NorthlineProvider";

export function LogPanel() {
  const { ready, log } = useNorthline();

  if (!ready) {
    return <p className="type-body text-sm text-muted">Loading audit log…</p>;
  }

  return (
    <ol className="space-y-4">
      {log.map((entry) => (
        <li
          key={entry.id}
          className="border border-rule bg-paper/70 px-5 py-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="border border-rule px-2 py-0.5 text-[11px] tracking-wide text-muted">
              {entry.kind}
            </span>
            <time
              dateTime={entry.at}
              className="type-meta tabular-nums"
            >
              {entry.at}
            </time>
          </div>
          <p className="mt-3 text-sm text-accent">{entry.summary}</p>
          {entry.detail ? (
            <p className="type-body mt-2 text-sm text-muted">{entry.detail}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
