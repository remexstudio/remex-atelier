"use client";

import { useEffect, useMemo, useState } from "react";
import {
  pulseLoop,
  pulseRoster,
  seedPulseEvents,
  type PulseEvent,
} from "@/components/lab/data";
import "@/components/lab/pulse.css";

function makeId(): string {
  return `PULSE-${Date.now().toString(36)}`;
}

function formatEventTime(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date(iso));
}

export function PulseLoop() {
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [events, setEvents] = useState<PulseEvent[]>(seedPulseEvents);
  const [stepEntered, setStepEntered] = useState(false);
  const step = pulseLoop[index];

  const progressLabel = useMemo(
    () => `${index + 1} / ${pulseLoop.length}`,
    [index],
  );

  useEffect(() => {
    setStepEntered(false);
    const frame = requestAnimationFrame(() => setStepEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [index, completed]);

  function advance() {
    if (completed) return;
    const current = pulseLoop[index];
    const entry: PulseEvent = {
      id: makeId(),
      at: new Date().toISOString(),
      step: current.id,
      summary: `${current.title}: ${current.detail.slice(0, 72)}`,
    };
    setEvents((prev) => [entry, ...prev]);
    if (index >= pulseLoop.length - 1) {
      setCompleted(true);
      return;
    }
    setIndex((prev) => prev + 1);
  }

  function reset() {
    setIndex(0);
    setCompleted(false);
    setEvents(seedPulseEvents);
  }

  const notified =
    index > 0 || completed
      ? new Set(["seat-a", "seat-b"])
      : new Set<string>();

  return (
    <div className="space-y-10">
      <p className="border border-rule bg-paper/70 px-4 py-3 text-sm text-muted">
        Prototype · not a client engagement
      </p>

      <section
        aria-labelledby="loop-step"
        className="border border-rule bg-paper/70 px-5 py-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="type-meta">Loop step · {progressLabel}</p>
          {completed ? (
            <p className="type-meta text-accent" aria-live="polite">
              Loop complete
            </p>
          ) : null}
        </div>
        <div
          className="pulse-step-panel mt-3"
          data-entered={stepEntered ? "true" : "false"}
        >
          <h2 id="loop-step" className="type-display text-2xl text-accent">
            {step.title}
          </h2>
          <p className="type-body mt-4 text-sm text-muted" aria-live="polite">
            {step.detail}
          </p>
        </div>
        <ol className="mt-6 flex flex-wrap gap-2">
          {pulseLoop.map((item, i) => {
            const active = i === index && !completed;
            const done = completed || i < index;
            return (
              <li
                key={item.id}
                className={
                  active
                    ? "border border-accent bg-accent px-3 py-1.5 text-xs tracking-wide text-paper"
                    : done
                      ? "border border-rule bg-paper px-3 py-1.5 text-xs tracking-wide text-ink"
                      : "border border-rule px-3 py-1.5 text-xs tracking-wide text-muted"
                }
              >
                {item.title}
              </li>
            );
          })}
        </ol>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={advance}
            disabled={completed}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            {completed ? "Loop finished" : "Run step"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center border border-rule bg-transparent px-4 py-2.5 text-sm font-medium text-accent"
          >
            Reset loop
          </button>
        </div>
      </section>

      <section aria-labelledby="roster">
        <h3 id="roster" className="type-meta">
          Notify roster
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {pulseRoster.map((seat) => {
            const isNotified = notified.has(seat.id);
            return (
              <li
                key={seat.id}
                className="border border-rule bg-paper/50 px-4 py-4"
              >
                <p className="text-sm font-medium text-accent">{seat.name}</p>
                <p className="type-meta mt-1">{seat.role}</p>
                <p className="type-meta mt-3">
                  {isNotified ? "Notified" : "Waiting"}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="log">
        <h3 id="log" className="type-meta">
          Event log
        </h3>
        <ol className="mt-4 space-y-3" aria-live="polite">
          {events.map((event) => (
            <li key={event.id} className="border border-rule px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="type-meta">{event.step}</span>
                <time dateTime={event.at} className="type-meta tabular-nums">
                  {formatEventTime(event.at)}
                </time>
              </div>
              <p className="type-body mt-2 text-sm text-muted">{event.summary}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
