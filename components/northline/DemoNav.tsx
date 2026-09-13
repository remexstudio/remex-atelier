import Link from "next/link";
import {
  northlineDemoSteps,
  type NorthlineDemoHref,
} from "@/components/northline/data";

type DemoNavProps = {
  current: NorthlineDemoHref;
};

export function DemoNav({ current }: DemoNavProps) {
  return (
    <nav
      aria-label="Northline demo steps"
      className="mb-10 flex flex-wrap gap-2 border-b border-rule pb-4"
    >
      {northlineDemoSteps.map((step) => {
        const active = step.href === current;
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
