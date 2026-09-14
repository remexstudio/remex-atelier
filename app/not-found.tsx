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
    <SiteChrome variant="film">
      <main id="main" className="film-page not-found-page">
        <header className="film-panel">
          <p className="film-kicker">404</p>
          <h1 className="film-title">Page not found</h1>
          <p className="film-lede">
            That route is not on the map. Return home, or open Work for the
            product stories.
          </p>
          <div className="film-actions">
            <Link href="/" className="btn-primary no-underline">
              Back home
            </Link>
            <Link href="/work" className="btn-secondary no-underline">
              Browse work
            </Link>
          </div>
        </header>
      </main>
    </SiteChrome>
  );
}
