import Link from "next/link";
import {
  queue,
  severityLabels,
  statusLabels,
} from "@/components/paperline/data";

export function QueueList() {
  return (
    <ul className="space-y-3" data-testid="paperline-queue">
      {queue.map((ticket) => (
        <li key={ticket.id}>
          <Link
            href={`/demo/paperline/case/${ticket.id}`}
            className="teaser-card block border border-rule bg-paper/70 px-5 py-4 no-underline"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="type-meta tabular-nums">{ticket.id}</p>
              <span className="border border-rule px-2 py-0.5 text-[11px] tracking-wide text-muted">
                {severityLabels[ticket.severity]} · {statusLabels[ticket.status]}
              </span>
            </div>
            <p className="mt-2 text-sm text-accent">{ticket.title}</p>
            <p className="type-body mt-2 text-sm text-muted">{ticket.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
