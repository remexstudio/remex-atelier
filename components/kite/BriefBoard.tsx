import Link from "next/link";
import {
  bucketLabels,
  bucketOrder,
  morningItems,
} from "@/components/kite/data";

export function BriefBoard() {
  return (
    <div className="space-y-10">
      {bucketOrder.map((bucket) => {
        const items = morningItems.filter((item) => item.bucket === bucket);
        return (
          <section key={bucket} aria-labelledby={`bucket-${bucket}`}>
            <h2
              id={`bucket-${bucket}`}
              className="type-display border-t border-rule pt-5 text-xl text-accent"
            >
              {bucketLabels[bucket]}
            </h2>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/demo/kite/thread/${item.id}`}
                    className="teaser-card block border border-rule px-5 py-4 no-underline"
                  >
                    <p className="text-sm text-accent">{item.title}</p>
                    <p className="type-body mt-2 text-sm text-muted">
                      {item.summary}
                    </p>
                    <p className="type-meta mt-2">
                      {item.channel} · {item.id}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <p className="type-meta">
        Synthetic posts only. Morning Remex never auto-publishes.
      </p>
    </div>
  );
}
