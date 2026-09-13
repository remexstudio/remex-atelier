"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { askPresets } from "@/components/northline/data";
import { useNorthline } from "@/components/northline/NorthlineProvider";
import "@/components/northline/northline.css";

export function AskPanel() {
  const { ready, lastAnswer, lastCitations, submitAsk } = useNorthline();
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!lastAnswer) {
      setEntered(false);
      return;
    }
    setEntered(false);
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [lastAnswer?.id]);

  return (
    <div className="space-y-8">
      <fieldset className="space-y-4" disabled={!ready}>
        <legend className="field-label">Preset questions</legend>
        <div className="space-y-3">
          {askPresets.map((preset) => {
            const selected = lastAnswer?.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => submitAsk(preset.id)}
                aria-pressed={selected}
                className={
                  selected
                    ? "w-full border border-accent bg-paper px-4 py-3 text-left"
                    : "w-full border border-rule bg-paper/60 px-4 py-3 text-left"
                }
              >
                <span className="block text-sm text-accent">
                  {preset.question}
                </span>
                <span className="type-meta mt-1 block">{preset.id}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div
        className="border border-rule bg-paper/70 px-5 py-6"
        role="status"
        aria-live="polite"
      >
        {!lastAnswer ? (
          <p className="type-body text-sm text-muted">
            Choose a question. The clerk answers with citations — it does not
            invent a ledger.
          </p>
        ) : (
          <div
            key={lastAnswer.id}
            className="nl-answer space-y-4"
            data-entered={entered ? "true" : "false"}
          >
            <p className="type-meta">Answer</p>
            <p className="text-sm text-accent">{lastAnswer.question}</p>
            <p className="type-body text-sm text-muted">{lastAnswer.answer}</p>
            <div>
              <h2 className="text-sm text-accent">Citations</h2>
              <ul className="mt-3 space-y-2">
                {lastCitations.map((c) => (
                  <li
                    key={`${c.sourceId}-${c.locator}`}
                    className="border border-rule px-3 py-2 text-sm text-muted"
                  >
                    <span className="text-accent">{c.sourceId}</span>
                    {" · "}
                    {c.locator}
                    <span className="type-meta mt-1 block">{c.note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/demo/northline/source"
              className="inline-flex text-sm text-accent"
            >
              Open sources
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
