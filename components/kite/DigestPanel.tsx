import { morningItems } from "@/components/kite/data";

export function DigestPanel() {
  const priority = morningItems.filter((i) => i.bucket === "priority");
  const watch = morningItems.filter((i) => i.bucket === "watch");
  const noise = morningItems.filter((i) => i.bucket === "noise");

  return (
    <div className="space-y-8">
      <section
        className="border border-rule bg-paper/70 px-5 py-6"
        aria-labelledby="digest-summary"
      >
        <h2 id="digest-summary" className="type-display text-xl text-accent">
          Morning digest
        </h2>
        <p className="type-body mt-3 text-sm text-muted">
          {priority.length} priority · {watch.length} watch · {noise.length}{" "}
          noise. Nothing was published by the agent.
        </p>
      </section>

      <section aria-labelledby="waiting">
        <h3 id="waiting" className="type-display text-xl text-accent">
          Waiting on humans
        </h3>
        <ul className="mt-4 space-y-3">
          {priority.map((item) => (
            <li
              key={item.id}
              className="border border-rule px-4 py-3 text-sm text-muted"
            >
              <span className="text-accent">{item.title}</span>
              <span className="type-meta mt-1 block">
                Draft ready for escalate — not posted.
              </span>
            </li>
          ))}
        </ul>
      </section>

      <p className="type-meta">
        Digest is a record, not a publisher. Synthetic posts only.
      </p>
    </div>
  );
}
