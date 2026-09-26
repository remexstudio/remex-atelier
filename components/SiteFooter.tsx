import Link from "next/link";
import { isPrimaryCurrent, type SiteNavItem } from "@/components/SiteNavMenu";

const QUIET = [
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
] as const;

type SiteFooterProps = {
  links: readonly SiteNavItem[];
  pathname: string;
  /** Study disclaimer. Quiet text only — never a second chrome system. */
  footerLine?: string;
};

/**
 * Product close. Same on every main route.
 * Lockup, three-name legal row, primary four, then quiet Lab / About text.
 */
export function SiteFooter({ links, pathname, footerLine }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link href="/" className="site-footer__lockup" translate="no">
          Remex Studio
        </Link>
        <p className="site-footer__legal" translate="no">
          Remex Studio · <span lang="zh">机羽云 Studio</span> · Jiyuyun
          Studio&nbsp;LLC
        </p>
        {footerLine ? <p className="site-footer__note">{footerLine}</p> : null}
        <nav aria-label="Footer" className="site-footer__nav">
          <ul>
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={
                    isPrimaryCurrent(pathname, item.href) ? "page" : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Secondary" className="site-footer__quiet">
          {QUIET.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                isPrimaryCurrent(pathname, item.href) ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
