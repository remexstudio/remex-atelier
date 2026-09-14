import Link from "next/link";

type SiteChromeProps = {
  children: React.ReactNode;
  /** Full-bleed marketing film shell for `/`. */
  variant?: "default" | "film";
};

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteChrome({ children, variant = "default" }: SiteChromeProps) {
  const isFilm = variant === "film";

  return (
    <div
      className={
        isFilm
          ? "site-shell site-shell--film"
          : "site-shell site-shell--default"
      }
    >
      <header className="site-nav">
        <div className="site-nav__inner">
          <Link
            href="/"
            className="site-nav__mark font-serif text-sm tracking-[0.14em] text-accent no-underline"
          >
            REMEX STUDIO
          </Link>
          <nav
            aria-label="Primary"
            className="type-meta site-nav__links flex flex-wrap justify-end gap-x-4 gap-y-2 sm:gap-x-5"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted no-underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className={isFilm ? "site-shell__film-body" : "site-shell__body"}>
        {children}
      </div>

      <footer
        className={
          isFilm
            ? "site-footer site-footer--film"
            : "site-footer site-footer--default"
        }
      >
        <p className="type-meta">A Seattle studio.</p>
      </footer>
    </div>
  );
}
