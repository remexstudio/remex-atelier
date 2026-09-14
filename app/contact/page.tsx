import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a brief with Remex Studio.",
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <main id="main">
        <p className="type-meta mt-14 sm:mt-16">Contact</p>
        <h1 className="type-display mt-3 text-4xl text-accent sm:mt-3 sm:text-5xl">
          Start a brief.
        </h1>
        <p className="type-body mt-6 max-w-md text-lg text-muted">
          Tell us the workflow, the owner, and what done looks like. We reply
          when there is a fit.
        </p>
        <p className="type-body mt-4 max-w-md text-base text-muted">
          Or write{" "}
          <a
            href="mailto:hello@remexstudio.com"
            className="font-medium text-accent"
          >
            hello@remexstudio.com
          </a>
          .
        </p>
        <div className="mt-12 max-w-md">
          <ContactForm />
        </div>
      </main>
    </SiteChrome>
  );
}
