import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { workStudies } from "@/components/lumen/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Studio studies from Remex Studio — anonymized client work.",
  openGraph: {
    title: "Work · Remex Studio",
    description: "Studio studies from Remex Studio — anonymized client work.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Work · Remex Studio",
    description: "Studio studies from Remex Studio — anonymized client work.",
  },
};

export default function WorkPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Work</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Studies
        </h1>
        <p className="type-body mt-4 max-w-prose text-muted">
          Four briefs. Live studies open as they ship. Client identity
          anonymized on every page.
        </p>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {workStudies.map((study) => {
            const live = study.status === "live";
            const card = (
              <article className="teaser-card flex h-full flex-col border border-rule px-5 py-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="type-meta">{study.product}</p>
                  <span
                    className={
                      live
                        ? "border border-accent bg-accent px-2 py-0.5 text-[11px] tracking-wide text-paper"
                        : "border border-rule px-2 py-0.5 text-[11px] tracking-wide text-muted"
                    }
                  >
                    {live ? "Live" : "In progress"}
                  </span>
                </div>
                <h2 className="type-display mt-4 text-2xl text-accent">
                  {study.client}
                </h2>
                <p className="type-body mt-3 flex-1 text-sm text-muted">
                  {study.blurb}
                </p>
                {live ? (
                  <p className="mt-6 text-sm text-accent">Open study</p>
                ) : (
                  <p className="type-meta mt-6">Study landing soon</p>
                )}
              </article>
            );

            return (
              <li key={study.slug}>
                {study.href ? (
                  <Link href={study.href} className="group block h-full no-underline">
                    {card}
                  </Link>
                ) : (
                  <div className="h-full opacity-90" aria-disabled="true">
                    {card}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </main>
    </SiteChrome>
  );
}
