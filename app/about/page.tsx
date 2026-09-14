import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "About",
  description:
    "Remex Studio: a Seattle atelier for agents built to the brief. Jiyuyun Studio LLC.",
};

const meanings = [
  {
    title: "Remex",
    body: "The pinion feather that gives lift. Molting is iteration; each brief sheds what no longer flies.",
  },
  {
    title: "Cloud",
    body: "Where agents run and memory accumulates: the place the work continues between human sessions.",
  },
  {
    title: "Studio",
    body: "An atelier. One brief at a time. Editorial craft with production discipline.",
  },
] as const;

export default function AboutPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">About</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Remex Studio
        </h1>
        <p className="type-body mt-4 text-lg text-muted">
          Agents, built to the brief.
        </p>
        <p className="type-body mt-6 max-w-prose text-muted">
          We turn one painful workflow into a working agent, then keep molting
          it. A Seattle atelier — one brief at a time, with craft and a human
          gate. Not a foundation-model company, not a speech lab.
        </p>

        <section className="mt-14" aria-labelledby="name">
          <h2
            id="name"
            className="type-display border-t border-rule pt-5 text-2xl text-accent"
          >
            What the name holds
          </h2>
          <ul className="mt-8 space-y-6">
            {meanings.map((item) => (
              <li key={item.title} className="border-t border-rule pt-5">
                <h3 className="type-display text-lg text-accent">{item.title}</h3>
                <p className="type-body mt-2 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14" aria-labelledby="legal">
          <h2
            id="legal"
            className="type-display border-t border-rule pt-5 text-2xl text-accent"
          >
            Studio details
          </h2>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="font-medium text-accent">Geography</dt>
              <dd className="type-body mt-1 text-muted">A Seattle studio.</dd>
            </div>
            <div>
              <dt className="font-medium text-accent">Legal</dt>
              <dd className="type-body mt-1 text-muted">Jiyuyun Studio LLC</dd>
            </div>
            <div>
              <dt className="font-medium text-accent">Wordmark</dt>
              <dd className="type-body mt-1 text-muted">REMEX STUDIO</dd>
            </div>
          </dl>
        </section>

        <p className="mt-14">
          <Link href="/contact" className="btn-primary no-underline">
            Start a brief
          </Link>
        </p>
      </main>
    </SiteChrome>
  );
}
