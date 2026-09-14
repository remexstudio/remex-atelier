import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteChrome } from "@/components/SiteChrome";
import { BRIEF_ASKS } from "@/lib/brief-asks";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a brief with Remex Studio.",
  openGraph: {
    title: "Contact · Remex Studio",
    description: "Start a brief with Remex Studio.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact · Remex Studio",
    description: "Start a brief with Remex Studio.",
  },
};

export default function ContactPage() {
  return (
    <SiteChrome variant="film" footerLine="Seattle studio. Global clients.">
      <main id="main" className="contact-page">
        <div className="contact-panel">
          <p className="contact-kicker">Contact</p>
          <h1 className="contact-title">Start a brief.</h1>
          <p className="contact-lede">What a brief asks.</p>
          <ol className="contact-asks">
            {BRIEF_ASKS.map((ask) => (
              <li key={ask}>{ask}</li>
            ))}
          </ol>
          <p className="contact-lede">We reply when there is a fit.</p>
          <p className="contact-mail">
            Or write{" "}
            <a href="mailto:hello@remexstudio.com">hello@remexstudio.com</a>.
          </p>
          <div className="contact-form-wrap">
            <ContactForm />
          </div>
        </div>
      </main>
    </SiteChrome>
  );
}
