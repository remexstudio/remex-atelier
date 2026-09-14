"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteChromeProps = {
  children: React.ReactNode;
  /** Full-bleed marketing film shell for `/` and product stories. */
  variant?: "default" | "film";
  /** Optional footer line (e.g. story pages). Defaults to studio mark. */
  footerLine?: string;
};

/**
 * Primary nav — marketing routes only. Never link /demo/* here.
 * Services / About stay off-primary (footer secondary). Lab is Prototype-labeled.
 */
const NAV = [
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/lab", label: "Lab" },
  { href: "/contact", label: "Contact" },
] as const;

const FOOTER_SECONDARY = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;

/** Home film chapter map — targets land with V3-2 nine modules. */
const CHAPTERS = [
  { href: "/#home-gate", label: "Gate" },
  { href: "/#home-jobs", label: "Jobs" },
  { href: "/#home-brief", label: "Brief" },
  { href: "/#home-roadmap", label: "Roadmap" },
] as const;

export function SiteChrome({
  children,
  variant = "default",
  footerLine = "A Seattle studio.",
}: SiteChromeProps) {
  const pathname = usePathname();
  const showHomeChapters = pathname === "/";
  const isFilm = variant === "film";

  return (
    <div
      className={[
        "site-shell",
        isFilm ? "site-shell--film" : "site-shell--default",
        showHomeChapters ? "site-shell--home-chapters" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className="site-nav">
        <div className="site-nav__inner">
          <Link
            href="/"
            className="site-nav__mark font-serif text-sm tracking-[0.14em] text-accent no-underline"
          >
            REMEX STUDIO
          </Link>
          <div className="site-nav__cluster">
            <nav
              aria-label="Primary"
              className="type-meta site-nav__links"
            >
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted no-underline"
                  aria-label={
                    item.href === "/lab" ? "Lab prototypes" : undefined
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {showHomeChapters ? (
              <nav aria-label="Home chapters" className="site-nav__chapters-wrap">
                <ul className="site-nav__chapters">
                  {CHAPTERS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </div>
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
        <div className="site-footer__row">
          <p className="type-meta">{footerLine}</p>
          <nav aria-label="Secondary" className="site-footer__links">
            {FOOTER_SECONDARY.map((item) => (
              <Link key={item.href} href={item.href} className="no-underline">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
