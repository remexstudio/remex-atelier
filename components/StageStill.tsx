type StageStillProps = {
  seat?: string;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
};

/** Fabricated product-stage chrome for inner-page stills. Not a live widget. */
export function StageStill({
  seat = "One seat",
  children,
  className,
  compact = false,
}: StageStillProps) {
  return (
    <div
      className={[
        "stage-still",
        compact ? "stage-still--compact" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <div className="stage-still__specular" />
      <div className="stage-still__chrome">
        <span className="stage-still__lights" />
        <p className="stage-still__seat">{seat}</p>
      </div>
      <div className="stage-still__body">{children}</div>
    </div>
  );
}

const SERVICE_STILLS = {
  design: {
    seat: "Job spec",
    rail: ["Seat", "Inputs", "Done"] as const,
    active: "Inputs",
    kicker: "Write the job",
    line: "Who sits. What arrives. What done looks like.",
    pill: "Design",
  },
  build: {
    seat: "First seat",
    rail: ["Propose", "Approve", "Record"] as const,
    active: "Approve",
    kicker: "Named person",
    line: "The loop ships. A human still decides.",
    pill: "Approve",
  },
  operations: {
    seat: "Same desk",
    rail: ["Evals", "Gate", "Record"] as const,
    active: "Gate",
    kicker: "Tighten",
    line: "Hold the first gate before a next seat opens.",
    pill: "Hold",
  },
} as const;

export function ServiceStageStill({
  id,
}: {
  id: keyof typeof SERVICE_STILLS;
}) {
  const still = SERVICE_STILLS[id];

  return (
    <StageStill seat={still.seat} compact className="svc-row__still">
      <ol className="stage-still__rail">
        {still.rail.map((step) => (
          <li
            key={step}
            className="stage-still__step"
            data-active={step === still.active ? "true" : "false"}
          >
            {step}
          </li>
        ))}
      </ol>
      <div className="stage-still__panel">
        <p className="stage-still__kicker">{still.kicker}</p>
        <p className="stage-still__line">{still.line}</p>
        <span className="stage-still__pill">{still.pill}</span>
      </div>
    </StageStill>
  );
}
