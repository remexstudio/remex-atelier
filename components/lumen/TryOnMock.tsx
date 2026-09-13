"use client";

import Link from "next/link";
import { useState } from "react";
import { heroSku } from "@/components/lumen/data";

export function TryOnMock() {
  const [overlayOn, setOverlayOn] = useState(true);

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden border border-rule bg-[#ebe4da]">
        <div className="aspect-[4/3] w-full sm:aspect-[16/9]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-40 w-40 rounded-full bg-[#d7cfc3] sm:h-52 sm:w-52"
              aria-hidden
            />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-[var(--ease-out)] ${
              overlayOn ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!overlayOn}
          >
            <div className="h-40 w-40 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(232,214,190,0.85),rgba(196,168,140,0.55)_55%,transparent_70%)] mix-blend-multiply sm:h-52 sm:w-52" />
          </div>
          <p className="absolute bottom-4 left-4 bg-paper/85 px-3 py-1.5 text-xs text-muted">
            Mock canvas · no camera · no brand logos
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => setOverlayOn((value) => !value)}
          aria-pressed={overlayOn}
          className="inline-flex items-center border border-rule bg-paper px-4 py-2 text-sm text-accent"
        >
          {overlayOn ? "Hide overlay" : "Show overlay"}
        </button>
        <p className="type-meta" aria-live="polite">
          {overlayOn
            ? `${heroSku.name} overlay on · ${heroSku.finish}`
            : "Overlay off · bare mock canvas"}
        </p>
      </div>

      <div className="border border-rule bg-paper/70 px-5 py-5">
        <h2 className="type-display text-xl text-accent">{heroSku.name}</h2>
        <p className="type-meta mt-2">
          {heroSku.shade} · {heroSku.coverage} · {heroSku.size}
        </p>
        <p className="type-body mt-3 max-w-xl text-sm text-muted">
          {heroSku.summary}
        </p>
        <Link
          href="/demo/lumen/bag"
          className="btn-primary mt-5 inline-flex no-underline"
        >
          Keep and bag
        </Link>
      </div>
    </div>
  );
}
