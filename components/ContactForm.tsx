"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";

type Status = "idle" | "success";

export function ContactForm() {
  const formId = useId();
  const nameId = `${formId}-name`;
  const emailId = `${formId}-email`;
  const briefId = `${formId}-brief`;
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
        <h2 className="contact-success__title">Brief received</h2>
        <p className="contact-success__body">
          Thanks. We&rsquo;ll read it and reply when a fit is clear.
        </p>
        <p className="contact-success__meta">
          This is a studio mock — no message was sent.
        </p>
        <button
          type="button"
          className="contact-cta"
          onClick={() => setStatus("idle")}
        >
          Send another brief
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="contact-field">
        <label htmlFor={nameId} className="contact-label">
          Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          required
          spellCheck={false}
          className="contact-input"
          placeholder="Alex Rivera…"
        />
      </div>
      <div className="contact-field">
        <label htmlFor={emailId} className="contact-label">
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          spellCheck={false}
          className="contact-input"
          placeholder="alex@studio.example…"
        />
      </div>
      <div className="contact-field">
        <label htmlFor={briefId} className="contact-label">
          Brief
        </label>
        <textarea
          id={briefId}
          name="brief"
          autoComplete="off"
          required
          rows={6}
          className="contact-input contact-input--area"
          placeholder="What workflow hurts, who owns it, and what success looks like…"
        />
      </div>
      <div className="contact-actions">
        <button type="submit" className="contact-cta">
          Send brief
        </button>
      </div>
    </form>
  );
}
