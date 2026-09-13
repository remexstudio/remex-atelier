"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  bucketLabels,
  draftTones,
  type SyntheticPost,
  type Tone,
} from "@/components/kite/data";
import "@/components/kite/kite.css";

export function ThreadDraft({ item }: { item: SyntheticPost }) {
  const [tone, setTone] = useState<Tone>("warm");
  const [escalated, setEscalated] = useState(false);
  const [draftEntered, setDraftEntered] = useState(false);
  const [escalateEntered, setEscalateEntered] = useState(false);
  const draft = useMemo(() => draftTones[tone].sample(item), [tone, item]);

  useEffect(() => {
    setDraftEntered(false);
    const frame = requestAnimationFrame(() => setDraftEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [tone, item.id]);

  useEffect(() => {
    if (!escalated) {
      setEscalateEntered(false);
      return;
    }
    setEscalateEntered(false);
    const frame = requestAnimationFrame(() => setEscalateEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [escalated]);

  return (
    <div className="space-y-8">
      <article className="border border-rule bg-paper/70 px-5 py-6">
        <p className="type-meta">
          {bucketLabels[item.bucket]} · {item.channel}
        </p>
        <h2 className="type-display mt-3 text-2xl text-accent">{item.title}</h2>
        <p className="type-body mt-4 text-sm text-muted">{item.body}</p>
      </article>

      <fieldset className="space-y-3">
        <legend className="field-label">Draft tone</legend>
        <div className="flex flex-wrap gap-3">
          {(Object.keys(draftTones) as Tone[]).map((key) => {
            const selected = tone === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={selected}
                onClick={() => setTone(key)}
                className={
                  selected
                    ? "border border-accent bg-paper px-4 py-2 text-sm text-accent"
                    : "border border-rule bg-paper/40 px-4 py-2 text-sm text-muted"
                }
              >
                {draftTones[key].label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div
        key={`${item.id}-${tone}`}
        className="kite-draft border border-rule bg-paper/70 px-5 py-6"
        data-entered={draftEntered ? "true" : "false"}
        role="status"
        aria-live="polite"
      >
        <p className="type-meta">Draft · {draftTones[tone].label}</p>
        <p className="type-body mt-3 text-sm text-muted">{draft}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setEscalated(true)}
          className="btn-primary"
        >
          Escalate draft
        </button>
        <Link
          href="/demo/kite/digest"
          className="inline-flex items-center border border-rule px-4 py-2 text-sm text-accent no-underline"
        >
          Open digest
        </Link>
      </div>

      {escalated ? (
        <p
          className="kite-escalate text-sm text-muted"
          data-entered={escalateEntered ? "true" : "false"}
          role="status"
        >
          Escalated to a human publisher. Morning Remex will not auto-publish
          this draft.
        </p>
      ) : (
        <p className="text-sm text-muted">
          Publishing stays human. There is no Publish button in this prototype.
        </p>
      )}
    </div>
  );
}
