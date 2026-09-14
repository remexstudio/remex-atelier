import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That route is not on the map. Return home, or open Work for the product stories.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">404</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:text-5xl">
          Page not found
        </h1>
        <p className="type-body mt-4 max-w-md text-muted">
          That route is not on the map. Return home, or open Work for the
          product stories.
        </p>
        <p className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary no-underline">
            Back home
          </Link>
          <Link href="/work" className="btn-secondary no-underline">
            Browse work
          </Link>
        </p>
      </main>
    </SiteChrome>
  );
}
