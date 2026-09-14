import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Remex Studio designs the job, builds the gate, and keeps the record.",
  openGraph: {
    title: "Approach · Remex Studio",
    description:
      "How Remex Studio designs the job, builds the gate, and keeps the record.",
    url: "/approach",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Approach · Remex Studio",
    description:
      "How Remex Studio designs the job, builds the gate, and keeps the record.",
  },
};

const METHODS = [
  {
    id: "design-the-job",
    title: "Design the job",
    lead: "Name the seat, the inputs, and the done state.",
    body: "We hire an agent for one painful workflow — not a vague assistant for everything. The brief names who sits in the seat, what arrives on the desk, and what “done” looks like before tools enter the room. If the work should not be an agent, we say so.",
  },
  {
    id: "build-the-gate",
    title: "Build the gate",
    lead: "Decide what requires a human before ship, post, charge, or money move.",
    body: "The agent proposes. A person approves. The record stays.",
    mechanism: [
      {
        label: "Propose",
        text: "The agent drafts the next action, recommendation, or disposition. It does not execute irreversible work on its own.",
      },
      {
        label: "Approve",
        text: "A named person on the client side accepts, edits, or rejects before anything ships, posts, charges, or moves money.",
      },
      {
        label: "Record",
        text: "The proposal, decision, and outcome stay linked in an auditable log the team can reopen later.",
      },
    ],
  },
  {
    id: "keep-the-record",
    title: "Keep the record",
    lead: "Link proposal, decision, and outcome so the team can reopen it.",
    body: "Every proposal, approval, and outcome stays on one thread the team can reopen later. The brief, the gate, and the result stay linked — so the desk can explain what happened without hunting across tools.",
  },
] as const;

const REFUSE = [
  "An hours factory or staffed body shop",
  "A generic chatbot or chatbot widget",
  "“ChatGPT for X” wrappers",
  "A cloud-migration mill",
  "Replacing the client team",
] as const;

const ROADMAP = [
  {
    label: "Now",
    base: "Ship gated agents for one workflow at a time.",
    detail:
      "Each engagement picks one painful seat, draws the human gate, and ships a Propose → Approve → Record loop the desk can trust before the next seat opens.",
  },
  {
    label: "Next",
    base: "Deepen records and chapter wayfinding across the four jobs.",
    detail:
      "Tighten audit trails, still DNA, and chapter jumps across Atelier Concierge, Ledger Clerk, Morning Remex, and Exception Copilot so each gate and record stays scannable.",
  },
  {
    label: "Later",
    base: "Broaden seats only after gates and records hold.",
    detail:
      "New seats open only when the human gate and the linked record already hold on the jobs we know. Scope grows after the mechanism proves itself — not before.",
  },
] as const;

const NAME_MEANING = [
  { glyph: "机", gloss: "machine" },
  { glyph: "羽", gloss: "remex flight feather (control surface)" },
  { glyph: "云", gloss: "work runs in the cloud" },
] as const;

export default function ApproachPage() {
  return (
    <SiteChrome variant="film" footerLine="Seattle studio. Global clients.">
      <main id="main" className="approach-page">
        <header className="approach-hero">
          <p className="approach-kicker">Approach</p>
          <h1 className="approach-title">
            Design the job. Build the gate. Keep the record.
          </h1>
          <p className="approach-lede">
            Remex Studio designs custom AI agents as products. One painful
            workflow. One agent. A human gate.
          </p>
          <p className="approach-place">Seattle studio. Global clients.</p>
        </header>

        <section
          className="approach-section approach-methods"
          aria-labelledby="approach-methods-h"
        >
          <h2 id="approach-methods-h" className="approach-section__title">
            How we hire an agent
          </h2>
          <ol className="approach-method-list">
            {METHODS.map((method, index) => (
              <li key={method.id} className="approach-method" id={method.id}>
                <p className="approach-method__n" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="approach-method__body">
                  <h3 className="approach-method__title">{method.title}</h3>
                  <p className="approach-method__lead">{method.lead}</p>
                  <p className="approach-method__copy">{method.body}</p>
                  {"mechanism" in method && method.mechanism ? (
                    <ul className="approach-mechanism">
                      {method.mechanism.map((step) => (
                        <li key={step.label} className="approach-mechanism__item">
                          <span className="approach-mechanism__label">
                            {step.label}
                          </span>
                          <p className="approach-mechanism__text">{step.text}</p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="approach-section approach-name"
          aria-labelledby="approach-name-h"
        >
          <h2 id="approach-name-h" className="approach-section__title">
            Name meaning
          </h2>
          <p className="approach-name__intro">
            Remex Studio takes its name from the remiges — the flight feathers
            that steer the wing. The Chinese mark behind the studio reads as
            machine, feather, and cloud.
          </p>
          <ul className="approach-name__list">
            {NAME_MEANING.map((item) => (
              <li key={item.glyph} className="approach-name__row">
                <span className="approach-name__glyph" lang="zh-Hans">
                  {item.glyph}
                </span>
                <span className="approach-name__eq" aria-hidden="true">
                  =
                </span>
                <span className="approach-name__gloss">{item.gloss}</span>
              </li>
            ))}
            <li className="approach-name__row">
              <span className="approach-name__glyph approach-name__glyph--latin">
                Remex
              </span>
              <span className="approach-name__eq" aria-hidden="true">
                =
              </span>
              <span className="approach-name__gloss">remiges</span>
            </li>
          </ul>
        </section>

        <section
          className="approach-section approach-studio"
          aria-labelledby="approach-studio-h"
        >
          <h2 id="approach-studio-h" className="approach-section__title">
            Studio
          </h2>
          <dl className="approach-studio__facts">
            <div className="approach-studio__fact">
              <dt>Legal</dt>
              <dd>Jiyuyun Studio LLC</dd>
            </div>
            <div className="approach-studio__fact">
              <dt>Place</dt>
              <dd>Seattle studio. Global clients.</dd>
            </div>
          </dl>
        </section>

        <section
          className="approach-section approach-refuse"
          aria-labelledby="approach-refuse-h"
        >
          <h2 id="approach-refuse-h" className="approach-section__title">
            What we do not sell
          </h2>
          <ul className="approach-refuse__list">
            {REFUSE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section
          className="approach-section approach-roadmap"
          aria-labelledby="approach-roadmap-h"
        >
          <h2 id="approach-roadmap-h" className="approach-section__title">
            Now. Next. Later.
          </h2>
          <ol className="approach-roadmap__list">
            {ROADMAP.map((row) => (
              <li key={row.label} className="approach-roadmap__row">
                <span className="approach-roadmap__label">{row.label}</span>
                <div className="approach-roadmap__copy">
                  <p className="approach-roadmap__base">{row.base}</p>
                  <p className="approach-roadmap__detail">{row.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="approach-section approach-close"
          aria-labelledby="approach-close-h"
        >
          <h2 id="approach-close-h" className="approach-close__title">
            Start a brief.
          </h2>
          <p className="approach-close__lede">
            Tell us the painful workflow. We design the agent and the gate.
          </p>
          <p className="approach-close__cta-wrap">
            <Link href="/contact" className="approach-cta">
              Start a brief.
            </Link>
          </p>
        </section>
      </main>
    </SiteChrome>
  );
}
