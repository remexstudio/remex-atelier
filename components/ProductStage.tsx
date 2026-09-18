const STEPS = [
  {
    id: "propose",
    title: "Propose",
    kicker: "Draft",
    line: "The agent drafts the next action, recommendation, or disposition.",
  },
  {
    id: "approve",
    title: "Approve",
    kicker: "Named person",
    line: "A named person on the client side accepts, edits, or rejects before anything ships, posts, charges, or moves money.",
  },
  {
    id: "record",
    title: "Record",
    kicker: "Linked log",
    line: "The proposal, decision, and outcome stay linked in an auditable log the team can reopen later.",
  },
] as const;

const MECHANISM_LINE = "Propose → Approve → Record";

type ProductStageProps = {
  variant?: "light" | "dark";
};

export function ProductStage({ variant = "light" }: ProductStageProps) {
  const mechanismId =
    variant === "dark" ? "product-stage-gate-mech" : "product-stage-hero-mech";

  return (
    <div
      className={
        variant === "dark"
          ? "product-stage product-stage--dark"
          : "product-stage"
      }
      data-product-stage
      data-stage-variant={variant}
      data-active-step="approve"
      aria-labelledby={mechanismId}
    >
      <div className="product-stage__specular" aria-hidden="true" />
      <div className="product-stage__chrome">
        <span className="product-stage__lights" aria-hidden="true" />
        <p className="product-stage__seat">One seat</p>
      </div>
      <p id={mechanismId} className="product-stage__mechanism">
        {MECHANISM_LINE}
      </p>
      <ol className="product-stage__rail">
        {STEPS.map((step) => (
          <li
            key={step.id}
            className="product-stage__step"
            data-step={step.id}
            data-active={step.id === "approve" ? "true" : "false"}
          >
            {step.title}
          </li>
        ))}
      </ol>
      <div className="product-stage__panels">
        {STEPS.map((step) => (
          <div
            key={step.id}
            className="product-stage__panel"
            data-panel={step.id}
            data-active={step.id === "approve" ? "true" : "false"}
            aria-hidden={step.id === "approve" ? undefined : true}
          >
            <p className="product-stage__kicker">{step.kicker}</p>
            <p className="product-stage__line">{step.line}</p>
            <div className="product-stage__action">
              <span className="product-stage__pill">{step.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
