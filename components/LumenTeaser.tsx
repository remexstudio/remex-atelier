export function LumenTeaser() {
  return (
    <aside
      className="teaser-card mt-16 border border-rule p-6 sm:p-7"
      aria-labelledby="lumen-teaser-heading"
    >
      <p className="type-meta">Study</p>
      <h2
        id="lumen-teaser-heading"
        className="type-display mt-3 text-2xl text-accent sm:text-[1.75rem]"
      >
        Lumen Atelier
      </h2>
      <p className="type-body mt-3 max-w-prose text-base text-muted">
        Atelier Concierge drafts fitting-room notes and follow-ups so the floor
        team stays with the client.
      </p>
      <p className="type-meta mt-5">
        Studio study. Client identity anonymized.
      </p>
    </aside>
  );
}
