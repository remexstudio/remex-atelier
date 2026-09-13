import Link from "next/link";
import { kiteDemoSteps } from "@/components/kite/data";

type DemoNavProps = {
  current: string;
};

export function DemoNav({ current }: DemoNavProps) {
  return (
    <nav
      aria-label="Kite demo steps"
      className="mb-10 flex flex-wrap gap-2 border-b border-rule pb-4"
    >
      {kiteDemoSteps.map((step) => {
        const active =
          step.href === current ||
          (step.href.includes("/thread/") && current.includes("/thread/"));
        return (
          <Link
            key={step.href}
            href={step.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "border border-accent bg-accent px-3 py-1.5 text-xs tracking-wide text-paper no-underline"
                : "border border-rule px-3 py-1.5 text-xs tracking-wide text-muted no-underline"
            }
          >
            {step.label}
          </Link>
        );
      })}
    </nav>
  );
}
