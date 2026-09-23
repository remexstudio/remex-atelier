type StageStillProps = {
  seat?: string;
  beat?: string;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
  /** DNA fact outside the decorative shell so it stays readable. */
  read?: string;
};

/** Fabricated product-stage chrome for inner-page stills. Not a live widget. */
export function StageStill({
  seat = "One seat",
  beat,
  children,
  className,
  compact = false,
  read,
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
    >
      <div className="stage-still__media" aria-hidden="true">
        <div className="stage-still__specular" />
        <div className="stage-still__inset" />
        <div className="stage-still__chrome">
          <span className="stage-still__lights" />
          <p className="stage-still__seat">{seat}</p>
          {beat ? <p className="stage-still__beat">{beat}</p> : null}
        </div>
        <div className="stage-still__body">{children}</div>
      </div>
      {read ? <p className="stage-still__read">{read}</p> : null}
    </div>
  );
}

function SpecRow({
  label,
  value,
  on = false,
}: {
  label: string;
  value: string;
  on?: boolean;
}) {
  return (
    <div className="desk-ui__row" data-on={on ? "true" : "false"}>
      <span className="desk-ui__label">{label}</span>
      <span className="desk-ui__value">{value}</span>
    </div>
  );
}

function ServiceDesignStill() {
  return (
    <div className="desk-ui desk-ui--spec">
      <p className="desk-ui__kicker">Spec</p>
      <div className="desk-ui__sheet">
        <SpecRow label="Seat" value="Who sits" />
        <SpecRow label="Inputs" value="What arrives" on />
        <SpecRow label="Done" value="What done is" />
      </div>
      <span className="desk-ui__pill" data-state="quiet">
        Design
      </span>
    </div>
  );
}

function ServiceBuildStill() {
  return (
    <div className="desk-ui desk-ui--gate">
      <p className="desk-ui__kicker">First seat</p>
      <div className="desk-ui__sheet">
        <SpecRow label="Seat" value="One job" />
        <SpecRow label="Gate" value="Named person" on />
        <SpecRow label="Ship" value="This desk" />
      </div>
      <span className="desk-ui__pill" data-filled="true">
        Build
      </span>
    </div>
  );
}

function ServiceOpsStill() {
  return (
    <div className="desk-ui desk-ui--ops">
      <p className="desk-ui__kicker">Tighten</p>
      <div className="desk-ui__sheet">
        <SpecRow label="Evals" value="Same desk" />
        <SpecRow label="Gate" value="Hold first" on />
        <SpecRow label="Record" value="Reopen" />
      </div>
      <span className="desk-ui__pill" data-filled="true">
        Hold
      </span>
    </div>
  );
}

const SERVICE_STILLS = {
  design: { seat: "Job spec", Still: ServiceDesignStill },
  build: { seat: "First seat", Still: ServiceBuildStill },
  operations: { seat: "Same desk", Still: ServiceOpsStill },
} as const;

export function ServiceStageStill({
  id,
}: {
  id: keyof typeof SERVICE_STILLS;
}) {
  const still = SERVICE_STILLS[id];
  const Inner = still.Still;

  return (
    <StageStill
      seat={still.seat}
      compact
      className={`svc-row__still svc-row__still--${id}`}
    >
      <Inner />
    </StageStill>
  );
}

function DemandTeaser() {
  return (
    <div className="desk-ui desk-ui--demand">
      <p className="desk-ui__kicker">Gate</p>
      <div className="desk-ui__sheet">
        <SpecRow label="Bag" value="Held" />
        <SpecRow label="Pay" value="Human" on />
      </div>
    </div>
  );
}

function KnowledgeTeaser() {
  return (
    <div className="desk-ui desk-ui--knowledge">
      <p className="desk-ui__kicker">Gate</p>
      <div className="desk-ui__split" aria-hidden="true">
        <span data-on="true">Propose</span>
        <span data-off="true">Execute</span>
      </div>
      <p className="desk-ui__cite">Corpus · §12.4</p>
    </div>
  );
}

function AttentionTeaser() {
  return (
    <div className="desk-ui desk-ui--attention">
      <p className="desk-ui__kicker">Recommend</p>
      <ol className="desk-ui__triage">
        <li data-lane="p">Priority</li>
        <li data-lane="w">Watch</li>
        <li data-lane="n">Noise</li>
      </ol>
    </div>
  );
}

function ExceptionTeaser() {
  return (
    <div className="desk-ui desk-ui--exception">
      <p className="desk-ui__kicker">Gate</p>
      <div className="desk-ui__sheet">
        <SpecRow label="EX-441" value="Refund hold" on />
        <SpecRow label="§4.2" value="Held" />
      </div>
    </div>
  );
}

const TEASERS = {
  "still-a": {
    seat: "Demand desk",
    read: "LUM-1042 · Human before pay",
    Inner: DemandTeaser,
  },
  "still-b": {
    seat: "Knowledge desk",
    read: "Propose ≠ Execute",
    Inner: KnowledgeTeaser,
  },
  "still-c": {
    seat: "Attention desk",
    read: "Priority · Watch · Noise. Human before send.",
    Inner: AttentionTeaser,
  },
  "still-d": {
    seat: "Exception desk",
    read: "Refund hold. Human before money.",
    Inner: ExceptionTeaser,
  },
} as const;

export function DeskTeaserStill({
  still,
  className,
}: {
  still: keyof typeof TEASERS;
  className?: string;
}) {
  const teaser = TEASERS[still];
  const Inner = teaser.Inner;

  return (
    <StageStill seat={teaser.seat} compact read={teaser.read} className={className}>
      <Inner />
    </StageStill>
  );
}

function DemandStory({ id }: { id: string }) {
  if (id === "scatter") {
    return (
      <div className="desk-ui desk-ui--demand">
        <p className="desk-ui__kicker">Ask</p>
        <div className="desk-ui__notes">
          <span>Skin</span>
          <span>Occasion</span>
          <span>Fit</span>
          <span>Hold</span>
        </div>
      </div>
    );
  }

  if (id === "hero") {
    return (
      <div className="desk-ui desk-ui--demand">
        <p className="desk-ui__kicker">Recommend</p>
        <div className="desk-ui__hero">
          <span className="desk-ui__hero-mark">01</span>
          <span className="desk-ui__hero-line">One hero</span>
        </div>
        <p className="desk-ui__cite">House SKU · no invent</p>
      </div>
    );
  }

  if (id === "tryon") {
    return (
      <div className="desk-ui desk-ui--demand">
        <p className="desk-ui__kicker">Recommend</p>
        <div className="desk-ui__frame">
          <span className="desk-ui__frame-bar" />
          <span className="desk-ui__frame-label">Try-on still</span>
        </div>
        <p className="desk-ui__cite">Media the stylist can refuse</p>
      </div>
    );
  }

  if (id === "bag") {
    return (
      <div className="desk-ui desk-ui--demand">
        <p className="desk-ui__kicker">Gate</p>
        <div className="desk-ui__sheet">
          <SpecRow label="Bag" value="Draft" />
          <SpecRow label="Pay" value="Held" on />
        </div>
        <span className="desk-ui__pill" data-filled="true">
          Hold
        </span>
      </div>
    );
  }

  return (
    <div className="desk-ui desk-ui--demand">
      <p className="desk-ui__kicker">Record</p>
      <div className="desk-ui__sheet">
        <SpecRow label="Ticket" value="LUM-1042" on />
        <SpecRow label="Thread" value="Consult" />
      </div>
      <p className="desk-ui__cite">Skin · fit note · held</p>
    </div>
  );
}

function KnowledgeStory({ id }: { id: string }) {
  if (id === "sources") {
    return (
      <div className="desk-ui desk-ui--knowledge">
        <p className="desk-ui__kicker">Ask</p>
        <div className="desk-ui__sheet">
          <SpecRow label="§" value="GL extract" />
          <SpecRow label="§" value="Trial balance" />
          <SpecRow label="§" value="Close memo" />
        </div>
      </div>
    );
  }

  if (id === "corpus") {
    return (
      <div className="desk-ui desk-ui--knowledge">
        <p className="desk-ui__kicker">Recommend</p>
        <p className="desk-ui__cite">Cite stays with the ask</p>
      </div>
    );
  }

  if (id === "propose") {
    return (
      <div className="desk-ui desk-ui--knowledge">
        <p className="desk-ui__kicker">Recommend</p>
        <div className="desk-ui__split">
          <span data-on="true">Propose</span>
          <span data-off="true">Execute</span>
        </div>
      </div>
    );
  }

  if (id === "gate") {
    return (
      <div className="desk-ui desk-ui--knowledge">
        <p className="desk-ui__kicker">Gate</p>
        <div className="desk-ui__action">
          <span className="desk-ui__ghost">Reject</span>
          <span className="desk-ui__pill" data-filled="true">
            Approve
          </span>
        </div>
        <p className="desk-ui__cite">Named controller</p>
      </div>
    );
  }

  return (
    <div className="desk-ui desk-ui--knowledge">
      <p className="desk-ui__kicker">Record</p>
      <div className="desk-ui__sheet">
        <SpecRow label="Ask" value="Month-end" />
        <SpecRow label="Cite" value="§12.4" on />
        <SpecRow label="Decision" value="Held" />
      </div>
    </div>
  );
}

function AttentionStory({ id }: { id: string }) {
  if (id === "mail") {
    return (
      <div className="desk-ui desk-ui--attention">
        <p className="desk-ui__kicker">Ask</p>
        <div className="desk-ui__stack">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (id === "lanes") {
    return (
      <div className="desk-ui desk-ui--attention">
        <p className="desk-ui__kicker">Recommend</p>
        <ol className="desk-ui__triage">
          <li data-lane="p">Priority</li>
          <li data-lane="w">Watch</li>
          <li data-lane="n">Noise</li>
        </ol>
      </div>
    );
  }

  if (id === "tones") {
    return (
      <div className="desk-ui desk-ui--attention">
        <p className="desk-ui__kicker">Recommend</p>
        <div className="desk-ui__split">
          <span>Tone A</span>
          <span>Tone B</span>
        </div>
        <p className="desk-ui__cite">Neither sends</p>
      </div>
    );
  }

  if (id === "hold") {
    return (
      <div className="desk-ui desk-ui--attention">
        <p className="desk-ui__kicker">Gate</p>
        <span className="desk-ui__pill" data-filled="true">
          Hold
        </span>
      </div>
    );
  }

  return (
    <div className="desk-ui desk-ui--attention">
      <p className="desk-ui__kicker">Record</p>
      <div className="desk-ui__sheet">
        <SpecRow label="Brief" value="Packet" />
        <SpecRow label="Draft" value="Two tones" />
        <SpecRow label="Escalate" value="Linked" on />
      </div>
    </div>
  );
}

function ExceptionStory({ id }: { id: string }) {
  if (id === "pile") {
    return (
      <div className="desk-ui desk-ui--exception">
        <p className="desk-ui__kicker">Ask</p>
        <div className="desk-ui__sheet">
          <SpecRow label="EX-441" value="Refund" />
          <SpecRow label="EX-438" value="Restock" />
          <SpecRow label="EX-429" value="Policy" />
        </div>
      </div>
    );
  }

  if (id === "queue") {
    return (
      <div className="desk-ui desk-ui--exception">
        <p className="desk-ui__kicker">Recommend</p>
        <div className="desk-ui__sheet">
          <SpecRow label="1" value="EX-441 · hold" on />
          <SpecRow label="2" value="EX-438 · restock" />
        </div>
      </div>
    );
  }

  if (id === "policy") {
    return (
      <div className="desk-ui desk-ui--exception">
        <p className="desk-ui__kicker">Recommend</p>
        <p className="desk-ui__cite">§4.2 · Restock window</p>
      </div>
    );
  }

  if (id === "note") {
    return (
      <div className="desk-ui desk-ui--exception">
        <p className="desk-ui__kicker">Gate</p>
        <span className="desk-ui__pill" data-filled="true">
          Refund hold
        </span>
      </div>
    );
  }

  return (
    <div className="desk-ui desk-ui--exception">
      <p className="desk-ui__kicker">Record</p>
      <div className="desk-ui__sheet">
        <SpecRow label="Cite" value="§4.2" />
        <SpecRow label="Hold" value="Refund" on />
        <SpecRow label="Lead" value="Decision" />
      </div>
    </div>
  );
}

const STORY = {
  demand: {
    seat: "Demand desk",
    ids: ["scatter", "hero", "tryon", "bag", "ticket"] as const,
    Inner: DemandStory,
  },
  knowledge: {
    seat: "Knowledge desk",
    ids: ["sources", "corpus", "propose", "gate", "audit"] as const,
    Inner: KnowledgeStory,
  },
  attention: {
    seat: "Attention desk",
    ids: ["mail", "lanes", "tones", "hold", "packet"] as const,
    Inner: AttentionStory,
  },
  exception: {
    seat: "Exception desk",
    ids: ["pile", "queue", "policy", "note", "timeline"] as const,
    Inner: ExceptionStory,
  },
} as const;

const STORY_READ: Record<keyof typeof STORY, Partial<Record<string, string>>> = {
  demand: {
    scatter: "Notes before a next step",
    bag: "Human before pay",
    ticket: "LUM-1042",
  },
  knowledge: {
    corpus: "Answer from the book",
    propose: "Propose ≠ Execute",
  },
  attention: {
    mail: "No single brief",
    lanes: "Priority · Watch · Noise",
    hold: "Human before send",
  },
  exception: {
    policy: "Cite, then hold",
    note: "Refund hold. Human before money.",
  },
};

export function StoryDeskStill({
  desk,
  id,
}: {
  desk: keyof typeof STORY;
  id: string;
}) {
  const story = STORY[desk];
  const Inner = story.Inner;

  return (
    <StageStill seat={story.seat} read={STORY_READ[desk][id]}>
      <Inner id={id} />
    </StageStill>
  );
}
