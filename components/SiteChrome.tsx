import Link from "next/link";

type SiteChromeProps = {
  children: React.ReactNode;
};

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteChrome({ children }: SiteChromeProps) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-6 py-16 sm:px-10 sm:py-24">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <Link
          href="/"
          className="font-serif text-sm tracking-[0.14em] text-accent no-underline"
        >
          REMEX STUDIO
        </Link>
        <nav
          aria-label="Primary"
          className="type-meta flex flex-wrap justify-end gap-x-4 gap-y-2 sm:gap-x-5"
        >
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted no-underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="mt-20 border-t border-rule pt-6">
        <p className="type-meta">A Seattle studio.</p>
      </footer>
    </div>
  );
}
