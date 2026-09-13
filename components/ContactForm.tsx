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
        className="success-banner"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        id={successId}
        tabIndex={-1}
      >
        <h2 className="type-display text-2xl text-accent">Brief received</h2>
        <p className="type-body mt-3 text-base text-muted">
          Thanks. We&rsquo;ll read it and reply when a fit is clear.
        </p>
        <p className="type-meta mt-5">
          This is a studio mock — no message was sent.
        </p>
        <button
          type="button"
          className="btn-primary mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another brief
        </button>
      </div>
    );
  }

  return (
    <form className="mt-2 flex flex-col gap-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameId} className="field-label">
          Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          required
          spellCheck={false}
          className="field-input"
          placeholder="Alex Rivera…"
        />
      </div>
      <div>
        <label htmlFor={emailId} className="field-label">
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
          className="field-input"
          placeholder="alex@studio.example…"
        />
      </div>
      <div>
        <label htmlFor={briefId} className="field-label">
          Brief
        </label>
        <textarea
          id={briefId}
          name="brief"
          autoComplete="off"
          required
          rows={6}
          className="field-input min-h-[9rem] resize-y"
          placeholder="What workflow hurts, who owns it, and what success looks like…"
        />
      </div>
      <div className="pt-2">
        <button type="submit" className="btn-primary">
          Send brief
        </button>
      </div>
    </form>
  );
}
