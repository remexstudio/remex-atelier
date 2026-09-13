"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { heroSku } from "@/components/lumen/data";

type Status = "idle" | "success";

export function PayMock() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className="success-banner"
        role="status"
        aria-live="polite"
      >
        <p className="type-display text-2xl text-accent">Payment mocked.</p>
        <p className="type-body mt-3 max-w-md text-sm text-muted">
          No card was charged. Studio v1 uses a local success state so the
          aftercare desk can open without a processor.
        </p>
        <Link
          href="/demo/lumen/desk"
          className="btn-primary mt-6 inline-flex no-underline"
        >
          Open aftercare desk
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="border border-rule bg-paper/70 px-5 py-5">
        <p className="type-meta">Charge preview</p>
        <p className="type-display mt-2 text-xl text-accent">{heroSku.name}</p>
        <p className="type-meta mt-1">
          {heroSku.shade} · ${heroSku.price}
        </p>
      </div>

      <div>
        <label htmlFor="name-on-card" className="field-label">
          Name on card
        </label>
        <input
          id="name-on-card"
          name="nameOnCard"
          type="text"
          required
          autoComplete="cc-name"
          className="field-input"
          placeholder="Alex Rivera…"
          spellCheck={false}
        />
      </div>

      <div>
        <label htmlFor="card-number" className="field-label">
          Card number
        </label>
        <input
          id="card-number"
          name="cardNumber"
          type="text"
          required
          inputMode="numeric"
          autoComplete="cc-number"
          className="field-input"
          placeholder="4242 4242 4242 4242…"
          spellCheck={false}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="expiry" className="field-label">
            Expiry
          </label>
          <input
            id="expiry"
            name="expiry"
            type="text"
            required
            autoComplete="cc-exp"
            className="field-input"
            placeholder="12/28…"
            spellCheck={false}
          />
        </div>
        <div>
          <label htmlFor="cvc" className="field-label">
            CVC
          </label>
          <input
            id="cvc"
            name="cvc"
            type="text"
            required
            autoComplete="cc-csc"
            className="field-input"
            placeholder="123…"
            spellCheck={false}
          />
        </div>
      </div>

      <button type="submit" className="btn-primary">
        Place mock order
      </button>
      <p className="type-meta">
        No real payments. Fields stay in the browser and are discarded on
        submit.
      </p>
    </form>
  );
}
