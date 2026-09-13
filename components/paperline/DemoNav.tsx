import Link from "next/link";
import { paperlineDemoSteps } from "@/components/paperline/data";

type DemoNavProps = {
  current: string;
};

export function DemoNav({ current }: DemoNavProps) {
  return (
    <nav
      aria-label="Paperline demo steps"
      className="mb-10 flex flex-wrap gap-2 border-b border-rule pb-4"
    >
      {paperlineDemoSteps.map((step) => {
        const active =
          step.href === current ||
          (step.href.includes("/case/") && current.includes("/case/"));
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
