import Link from "next/link";
import { DemoNav } from "@/components/northline/DemoNav";
import type { NorthlineDemoHref } from "@/components/northline/data";

type DemoShellProps = {
  current: NorthlineDemoHref;
  children: React.ReactNode;
};

export function DemoShell({ current, children }: DemoShellProps) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col px-6 py-16 sm:px-10 sm:py-24">
      <header className="mb-10 flex items-baseline justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-sm tracking-[0.14em] text-accent no-underline"
        >
          REMEX STUDIO
        </Link>
        <nav aria-label="Primary" className="type-meta flex gap-5">
          <Link href="/work" className="text-muted no-underline">
            Work
          </Link>
          <Link href="/work/northline" className="text-muted no-underline">
            Study
          </Link>
        </nav>
      </header>
      <DemoNav current={current} />
      <div className="flex-1">{children}</div>
      <footer className="mt-20 border-t border-rule pt-6">
        <p className="type-meta">
          Mock ledger only. Studio study. Client identity anonymized.
        </p>
      </footer>
    </div>
  );
}
