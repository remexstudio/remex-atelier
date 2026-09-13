import type { Metadata } from "next";
import { DemoShell } from "@/components/northline/DemoShell";
import { sources } from "@/components/northline/data";

export const metadata: Metadata = {
  title: "Source · Northline",
  description: "Mock ledger corpus for Ledger Clerk citations.",
};

export default function NorthlineSourcePage() {
  return (
    <DemoShell current="/demo/northline/source">
      <main id="main">
        <p className="type-meta">Source</p>
        <h1 className="type-display mt-3 text-4xl text-accent">Corpus</h1>
        <p className="type-body mt-4 max-w-xl text-muted">
          Fictional packets only. No live bank feeds. Locators match the Ask
          citations.
        </p>
        <ul className="mt-10 space-y-5">
          {sources.map((source) => (
            <li
              key={source.id}
              className="border border-rule bg-paper/70 px-5 py-5"
            >
              <p className="type-meta">
                {source.id} · {source.kind}
              </p>
              <h2 className="type-display mt-2 text-xl text-accent">
                {source.title}
              </h2>
              <p className="type-meta mt-2">{source.period}</p>
              {source.pages ? (
                <p className="type-meta mt-1">{source.pages}</p>
              ) : null}
              <p className="type-body mt-4 text-sm text-muted">
                {source.excerpt}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </DemoShell>
  );
}
