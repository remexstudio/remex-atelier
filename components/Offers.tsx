const OFFERS = [
  {
    name: "Agent Apps",
    blurb: "Shippable agent products scoped to one painful workflow.",
  },
  {
    name: "Agent Ops",
    blurb:
      "Citations, approvals, evals, and handoff so the agent stays trustworthy.",
  },
  {
    name: "Advisory",
    blurb: "A clear call on whether the thing should be an agent at all.",
  },
] as const;

export function Offers() {
  return (
    <section aria-labelledby="offers-heading" className="mt-16">
      <h2 id="offers-heading" className="type-meta font-normal text-muted">
        Offers
      </h2>
      <ul className="mt-6 divide-y divide-rule border-y border-rule">
        {OFFERS.map((offer) => (
          <li
            key={offer.name}
            className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:gap-8"
          >
            <h3 className="type-display text-xl text-accent sm:text-[1.35rem]">
              {offer.name}
            </h3>
            <p className="type-body text-base text-muted">{offer.blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
