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
    <div className="pulse-loop">
      <p className="pulse-notice">Prototype · not a client engagement</p>

      <section aria-labelledby="loop-step" className="pulse-panel">
        <div className="pulse-panel__meta">
          <p className="type-meta">Loop step · {progressLabel}</p>
          {completed ? (
            <p className="type-meta pulse-panel__done" aria-live="polite">
              Loop complete
            </p>
          ) : null}
        </div>
        <div
          className="pulse-step-panel"
          data-entered={stepEntered ? "true" : "false"}
        >
          <h2 id="loop-step" className="pulse-step-title">
            {step.title}
          </h2>
          <p className="pulse-step-detail" aria-live="polite">
            {step.detail}
          </p>
        </div>
        <ol className="pulse-chips">
          {pulseLoop.map((item, i) => {
            const active = i === index && !completed;
            const done = completed || i < index;
            const state = active ? "active" : done ? "done" : "idle";
            return (
              <li key={item.id} className={`pulse-chip pulse-chip--${state}`}>
                <span className="sr-only">
                  {active ? "Current. " : done ? "Done. " : "Waiting. "}
                </span>
                {item.title}
              </li>
            );
          })}
        </ol>
        <div className="pulse-actions">
          <button
            type="button"
            onClick={advance}
            disabled={completed}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            {completed ? "Loop finished" : "Run step"}
          </button>
          <button type="button" onClick={reset} className="btn-secondary">
            Reset loop
          </button>
        </div>
      </section>

      <section aria-labelledby="roster">
        <h3 id="roster" className="type-meta">
          Notify roster
        </h3>
        <ul className="pulse-roster">
          {pulseRoster.map((seat) => {
            const isNotified = notified.has(seat.id);
            return (
              <li key={seat.id} className="pulse-seat">
                <p className="pulse-seat__name">{seat.name}</p>
                <p className="type-meta">{seat.role}</p>
                <p className="type-meta pulse-seat__state">
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
        <ol className="pulse-log" aria-live="polite">
          {events.map((event) => (
            <li key={event.id} className="pulse-event">
              <div className="pulse-event__meta">
                <span className="type-meta">{event.step}</span>
                <time dateTime={event.at} className="type-meta tabular-nums">
                  {formatEventTime(event.at)}
                </time>
              </div>
              <p className="pulse-event__summary">{event.summary}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
