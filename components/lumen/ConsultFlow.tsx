"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  occasionOptions,
  recommendHero,
  skinOptions,
  type Occasion,
  type SkinTone,
} from "@/components/lumen/data";

export function ConsultFlow() {
  const [skin, setSkin] = useState<SkinTone | null>(null);
  const [occasion, setOccasion] = useState<Occasion | null>(null);

  const result = useMemo(() => {
    if (!skin || !occasion) return null;
    return recommendHero(skin, occasion);
  }, [skin, occasion]);

  return (
    <div className="space-y-10">
      <fieldset className="space-y-4">
        <legend className="field-label">Skin</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {skinOptions.map((option) => {
            const selected = skin === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSkin(option.id)}
                aria-pressed={selected}
                className={
                  selected
                    ? "border border-accent bg-paper px-4 py-3 text-left"
                    : "border border-rule bg-paper/60 px-4 py-3 text-left"
                }
              >
                <span className="block text-sm text-accent">{option.label}</span>
                <span className="mt-1 block text-xs text-muted">
                  {option.hint}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="field-label">Occasion</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {occasionOptions.map((option) => {
            const selected = occasion === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setOccasion(option.id)}
                aria-pressed={selected}
                className={
                  selected
                    ? "border border-accent bg-paper px-4 py-3 text-left"
                    : "border border-rule bg-paper/60 px-4 py-3 text-left"
                }
              >
                <span className="block text-sm text-accent">{option.label}</span>
                <span className="mt-1 block text-xs text-muted">
                  {option.hint}
                </span>
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
        {!result ? (
          <p className="type-body text-sm text-muted">
            Choose skin and occasion. The concierge will return one hero SKU.
          </p>
        ) : (
          <div className="space-y-4">
            <p className="type-meta">Hero recommendation</p>
            <h2 className="type-display text-2xl text-accent">
              {result.sku.name}
            </h2>
            <p className="type-meta">
              {result.sku.id} · {result.sku.shade} · ${result.sku.price}
            </p>
            <p className="type-body max-w-2xl text-sm text-muted">
              {result.rationale}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/demo/lumen/try-on" className="btn-primary no-underline">
                Open try-on
              </Link>
              <Link
                href="/demo/lumen/bag"
                className="inline-flex items-center border border-rule px-4 py-2 text-sm text-accent no-underline"
              >
                Add to bag
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
