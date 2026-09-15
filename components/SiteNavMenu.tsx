"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

export type SiteNavItem = {
  href: string;
  label: string;
};

const DESKTOP_MQ = "(min-width: 900px)";

export function isPrimaryCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

type SiteNavMenuProps = {
  primary: readonly SiteNavItem[];
};

/**
 * Narrow primary nav — disclosure panel, no body overflow lock, no Lenis.
 * Desktop (≥900px) hides this control; inline links stay in SiteChrome.
 */
export function SiteNavMenu({ primary }: SiteNavMenuProps) {
  const pathname = usePathname();
  const reactId = useId();
  const panelId = `site-nav-panel-${reactId.replace(/:/g, "")}`;
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = rootRef.current;
    if (!root) return;

    const focusFirstPanelLink = () => {
      const firstLink = root.querySelector<HTMLAnchorElement>(
        ".site-nav__panel a[href]",
      );
      firstLink?.focus({ preventScroll: true });
    };
    const frame = window.requestAnimationFrame(focusFirstPanelLink);

    const focusables = () =>
      Array.from(
        root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).filter((el) => !el.hasAttribute("inert"));

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!root.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div className="site-nav__menu" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="site-nav__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <div
        id={panelId}
        className="site-nav__panel"
        data-open={open ? "true" : undefined}
        inert={!open}
      >
        <nav aria-label="Primary" className="site-nav__panel-nav">
          <ul className="site-nav__panel-list">
            {primary.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={
                    isPrimaryCurrent(pathname, item.href) ? "page" : undefined
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
