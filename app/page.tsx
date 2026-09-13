import Link from "next/link";
import { LumenTeaser } from "@/components/LumenTeaser";
import { Offers } from "@/components/Offers";
import { SiteChrome } from "@/components/SiteChrome";

export default function Home() {
  return (
    <SiteChrome>
      <main id="main">
        <h1 className="type-display mt-14 text-4xl text-accent sm:mt-16 sm:text-5xl">
          Agents, built to the brief.
        </h1>
        <p className="type-body mt-6 max-w-md text-lg text-muted">
          A Seattle studio.
        </p>

        <Offers />

        <LumenTeaser />

        <p className="mt-14">
          <Link href="/contact" className="btn-primary no-underline">
            Start a brief
          </Link>
        </p>
      </main>
    </SiteChrome>
  );
}
