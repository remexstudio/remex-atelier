"use client";

import Link from "next/link";
import { useState } from "react";
import { heroSku } from "@/components/lumen/data";

export function BagMock() {
  const [qty, setQty] = useState(1);
  const total = heroSku.price * qty;

  return (
    <div className="space-y-8">
      <div className="border border-rule bg-paper/70 px-5 py-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="type-meta">Line item</p>
            <h2 className="type-display mt-2 text-2xl text-accent">
              {heroSku.name}
            </h2>
            <p className="type-meta mt-2">
              {heroSku.id} · {heroSku.shade}
            </p>
            <p className="type-meta mt-1">${heroSku.price} each</p>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="qty" className="field-label mb-0">
              Qty
            </label>
            <select
              id="qty"
              value={qty}
              onChange={(event) => setQty(Number(event.target.value))}
              className="field-input w-auto"
            >
              {[1, 2, 3].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-rule pt-5">
          <p className="type-meta">Mock subtotal</p>
          <p className="text-base text-accent">${total}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/demo/lumen/pay" className="btn-primary no-underline">
          Continue to pay
        </Link>
        <Link
          href="/demo/lumen/consult"
          className="inline-flex items-center border border-rule px-5 py-2.5 text-sm text-accent no-underline"
        >
          Back to consult
        </Link>
      </div>
      <p className="type-meta">Mock bag only. Nothing is reserved or charged.</p>
    </div>
  );
}
