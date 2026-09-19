"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { BRIEF_ASKS } from "@/lib/brief-asks";

type Status = "idle" | "success";

const BRIEF_FIELDS = [
  {
    name: "workflow",
    label: BRIEF_ASKS[0],
    kind: "area",
    autoComplete: "off",
    placeholder: "The weekly close, overnight mail, exception queue…",
  },
  {
    name: "approver",
    label: BRIEF_ASKS[1],
    kind: "text",
    autoComplete: "off",
    placeholder: "Named person on the client side…",
  },
  {
    name: "never",
    label: BRIEF_ASKS[2],
    kind: "area",
    autoComplete: "off",
    placeholder: "Charge, post, execute, refund…",
  },
  {
    name: "record",
    label: BRIEF_ASKS[3],
    kind: "area",
    autoComplete: "off",
    placeholder: "Proposal, decision, and outcome stay linked…",
  },
] as const;

export function ContactForm() {
  const formId = useId();
  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const nameHintId = `${formId}-name-hint`;
  const emailHintId = `${formId}-email-hint`;
  const successId = `${formId}-success`;
  const successRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        className="contact-success"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        id={successId}
        tabIndex={-1}
      >
        <h2 className="contact-success__title">Brief noted</h2>
        <p className="contact-success__body">
          Thanks. We&rsquo;ll read it and reply when a fit is clear.
        </p>
        <p className="contact-success__meta">
          Studio preview. Nothing was sent.
        </p>
        <button
          type="button"
          className="contact-cta cta-pill"
          onClick={() => setStatus("idle")}
        >
          Write another brief
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label htmlFor={nameId} className="contact-label">
          Name
        </label>
        <p id={nameHintId} className="contact-hint">
          Who is sending the brief.
        </p>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          required
          spellCheck={false}
          className="contact-input"
          aria-describedby={nameHintId}
          placeholder="Alex Rivera…"
        />
      </div>
      <div className="contact-field">
        <label htmlFor={emailId} className="contact-label">
          Email
        </label>
        <p id={emailHintId} className="contact-hint">
          Where a reply should go.
        </p>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          spellCheck={false}
          className="contact-input"
          aria-describedby={emailHintId}
          placeholder="alex@studio.example…"
        />
      </div>
      {BRIEF_FIELDS.map((field) => {
        const fieldId = `${formId}-${field.name}`;
        return (
          <div key={field.name} className="contact-field">
            <label htmlFor={fieldId} className="contact-label">
              {field.label}
            </label>
            {field.kind === "text" ? (
              <input
                id={fieldId}
                name={field.name}
                type="text"
                autoComplete={field.autoComplete}
                required
                className="contact-input"
                placeholder={field.placeholder}
              />
            ) : (
              <textarea
                id={fieldId}
                name={field.name}
                autoComplete={field.autoComplete}
                required
                rows={3}
                className="contact-input contact-input--area contact-input--ask"
                placeholder={field.placeholder}
              />
            )}
          </div>
        );
      })}
      <div className="contact-actions">
        <button type="submit" className="contact-cta cta-pill">
          Send brief
        </button>
      </div>
    </form>
  );
}
