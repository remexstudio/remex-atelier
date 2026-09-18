const STEPS = [
  {
    id: "propose",
    title: "Propose",
    kicker: "Draft",
    line: "The agent drafts the next action, recommendation, or disposition.",
    action: "Propose",
  },
  {
    id: "approve",
    title: "Approve",
    kicker: "Named person",
    line: "A named person on the client side accepts, edits, or rejects before anything ships, posts, charges, or moves money.",
    action: "Approve",
  },
  {
    id: "record",
    title: "Record",
    kicker: "Linked log",
    line: "The proposal, decision, and outcome stay linked in an auditable log the team can reopen later.",
    action: "Record",
  },
] as const;

const FIELDS = [
  { label: "Draft", value: "Propose" },
  { label: "Named person", value: "Approve" },
  { label: "Linked log", value: "Record" },
] as const;

const MECHANISM_LINE = "Propose → Approve → Record";

type ProductStageProps = {
  variant?: "light" | "dark";
};

function StagePanel({
  step,
}: {
  step: (typeof STEPS)[number];
}) {
  const filled = step.id === "approve";

  return (
    <div
      className="product-stage__panel"
      data-panel={step.id}
      data-active={filled ? "true" : "false"}
      aria-hidden={filled ? undefined : true}
    >
      <div className="product-stage__ticket">
        <p className="product-stage__kicker">{step.kicker}</p>
        <p className="product-stage__title">{step.title}</p>
        <p className="product-stage__line">{step.line}</p>
        <dl className="product-stage__fields">
          {FIELDS.map((field) => (
            <div key={field.label} className="product-stage__field">
              <dt>{field.label}</dt>
              <dd data-on={field.value === step.title ? "true" : "false"}>
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="product-stage__action">
          {filled ? (
            <>
              <span className="product-stage__ghost">Edit</span>
              <span className="product-stage__ghost">Reject</span>
              <span className="product-stage__pill" data-filled="true">
                {step.action}
              </span>
            </>
          ) : (
            <span className="product-stage__pill">{step.action}</span>
          )}
        </div>
      </div>
    </div>
  );
}

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
        <p id={mechanismId} className="product-stage__mechanism">
          {MECHANISM_LINE}
        </p>
      </div>
      <div className="product-stage__desk">
        <ol className="product-stage__rail">
          {STEPS.map((step) => (
            <li
              key={step.id}
              className="product-stage__step"
              data-step={step.id}
              data-active={step.id === "approve" ? "true" : "false"}
            >
              <span className="product-stage__step-mark" aria-hidden="true" />
              {step.title}
            </li>
          ))}
        </ol>
        <div className="product-stage__canvas">
          {STEPS.map((step) => (
            <StagePanel key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
}
