import Link from "next/link";

type SiteChromeProps = {
  children: React.ReactNode;
};

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-6 py-16 sm:px-10 sm:py-24">
      <header className="flex items-baseline justify-between gap-6">
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
          <Link href="/contact" className="text-muted no-underline">
            Contact
          </Link>
        </nav>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="mt-20 border-t border-rule pt-6">
        <p className="type-meta">A Seattle studio.</p>
      </footer>
    </div>
  );
}
