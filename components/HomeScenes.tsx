"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/*
 * HARD BAN (scroll stack): no Lenis, no ScrollTrigger.normalizeScroll(),
 * no body/html overflow lock while pinned — native scroll only (zero-jank).
 * Pin contract: ONLY #home-gate, and only when pinOk
 * (prefers-reduced-motion: no-preference) and (min-height: 520px) and (min-width: 720px).
 * End ceiling: +=80%. Reduced motion / narrow / short → static stack, all facts visible.
 */

const JOBS = [
  { href: "/work/atelier-concierge", label: "Atelier Concierge", tone: "concierge" },
  { href: "/work/ledger-clerk", label: "Ledger Clerk", tone: "ledger" },
  { href: "/work/morning-remex", label: "Morning Remex", tone: "morning" },
  { href: "/work/exception-copilot", label: "Exception Copilot", tone: "exception" },
] as const;

type JobTone = (typeof JOBS)[number]["tone"];

function JobStill({ tone }: { tone: JobTone }) {
  if (tone === "concierge") {
    return (
      <div className="job-card__still still-dna still-dna--cq still-dna--facts" aria-hidden="true">
        <p className="still-dna__fact">LUM-1042</p>
        <p className="still-dna__sub">skin → hero → try-on → bag → pay</p>
      </div>
    );
  }

  if (tone === "ledger") {
    return (
      <div className="job-card__still still-dna still-dna--lc still-dna--facts" aria-hidden="true">
        <p className="still-dna__fact">Propose≠Execute</p>
        <p className="still-dna__sub">cite</p>
        <span className="lc-controller__cite">§12.4 · Close pack</span>
      </div>
    );
  }

  if (tone === "morning") {
    return (
      <div className="job-card__still still-dna still-dna--mr still-dna--facts" aria-hidden="true">
        <p className="still-dna__fact">P · W · N</p>
        <div className="mr-triage" aria-hidden="true">
          <span className="mr-triage__lane mr-triage__lane--pri">P</span>
          <span className="mr-triage__lane mr-triage__lane--watch">W</span>
          <span className="mr-triage__lane mr-triage__lane--noise">N</span>
        </div>
        <p className="still-dna__sub">Priority · Watch · Noise</p>
      </div>
    );
  }

  return (
    <div className="job-card__still still-dna still-dna--ec still-dna--facts" aria-hidden="true">
      <p className="still-dna__fact">queue · policy</p>
      <div className="ec-desk">
        <span className="ec-desk__chip ec-desk__chip--u1">U1</span>
        <span className="ec-desk__chip ec-desk__chip--u2">U2</span>
        <span className="ec-desk__chip ec-desk__chip--u3">U3</span>
        <span className="ec-desk__chip ec-desk__chip--policy">Policy</span>
      </div>
    </div>
  );
}

const REFUSE = [
  "An hours factory or staffed body shop",
  "A generic chatbot or chatbot widget",
  "“ChatGPT for X” wrappers",
  "A cloud-migration mill",
  "Replacing the client team",
] as const;

const BRIEF_ASKS = [
  "Which workflow hurts.",
  "Who approves.",
  "What the agent may never do.",
  "What record you must keep.",
] as const;

const METHOD = [
  {
    title: "Design the job.",
    body: "Name the seat, the inputs, and the done state.",
    glyph: "job",
  },
  {
    title: "Build the gate.",
    body: "Decide what requires a human before ship, post, charge, or money move.",
    glyph: "gate",
  },
  {
    title: "Keep the record.",
    body: "Link proposal, decision, and outcome so the team can reopen it.",
    glyph: "record",
  },
] as const;

type MethodGlyphKind = (typeof METHOD)[number]["glyph"];

function MethodGlyph({ kind }: { kind: MethodGlyphKind }) {
  if (kind === "job") {
    return (
      <div
        className="home-method-col__glyph home-method-col__glyph--job"
        aria-hidden="true"
      >
        <span className="method-glyph__chip">Seat</span>
        <span className="method-glyph__chip">Inputs</span>
        <span className="method-glyph__chip method-glyph__chip--done">Done</span>
      </div>
    );
  }

  if (kind === "gate") {
    return (
      <div
        className="home-method-col__glyph home-method-col__glyph--gate"
        aria-hidden="true"
      >
        <span className="method-glyph__step">Propose</span>
        <span className="method-glyph__arrow" />
        <span className="method-glyph__step method-glyph__step--human">Human</span>
      </div>
    );
  }

  return (
    <div
      className="home-method-col__glyph home-method-col__glyph--record"
      aria-hidden="true"
    >
      <span className="method-glyph__bead">
        <span className="method-glyph__dot" />
        <span className="method-glyph__bead-label">Proposal</span>
      </span>
      <span className="method-glyph__link" />
      <span className="method-glyph__bead">
        <span className="method-glyph__dot" />
        <span className="method-glyph__bead-label">Decision</span>
      </span>
      <span className="method-glyph__link" />
      <span className="method-glyph__bead">
        <span className="method-glyph__dot" />
        <span className="method-glyph__bead-label">Outcome</span>
      </span>
    </div>
  );
}

const ROADMAP = [
  {
    label: "Now",
    body: "Now: ship gated agents for one workflow at a time.",
  },
  {
    label: "Next",
    body: "Next: deepen records and chapter wayfinding across the four jobs.",
  },
  {
    label: "Later",
    body: "Later: broaden seats only after gates and records hold.",
  },
] as const;

const CLOSE_CHAPTERS = [
  { href: "#home-gate", label: "Gate" },
  { href: "#home-jobs", label: "Jobs" },
  { href: "#home-brief", label: "Brief" },
  { href: "#home-roadmap", label: "Roadmap" },
] as const;

const STATIC_SEL =
  "[data-reveal], [data-gate-step], [data-job-card], [data-bento-pane], [data-spec-row], [data-method-col], [data-road-row], [data-close-map] a";

function showStatic() {
  gsap.set(STATIC_SEL, {
    clearProps: "transform,opacity,visibility,filter",
    autoAlpha: 1,
  });
  gsap.set(".home-mod__stage, .home-gate__still, .home-jobs-rail", {
    clearProps: "transform,opacity,visibility",
    autoAlpha: 1,
  });
}

export function HomeScenes() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          pinOk:
            "(prefers-reduced-motion: no-preference) and (min-height: 520px) and (min-width: 720px)",
          motionOk:
            "(prefers-reduced-motion: no-preference)",
          narrow:
            "(max-width: 719px)",
        },
        (context) => {
          const { reduce, pinOk, motionOk, narrow } = context.conditions as {
            reduce: boolean;
            pinOk: boolean;
            motionOk: boolean;
            narrow: boolean;
          };

          if (reduce || !motionOk) {
            showStatic();
            return;
          }

          /* Narrow: never hide gate copy/steps — three bullets visible without scrub */
          if (narrow || !pinOk) {
            gsap.set(
              "#home-gate [data-reveal], #home-gate [data-gate-step], #home-gate [data-gate-chip], #home-gate .home-gate__still",
              { clearProps: "transform,opacity,visibility", autoAlpha: 1 },
            );
          }

          /* ——— Shallow once-reveals (no pin) ——— */
          gsap.utils
            .toArray<HTMLElement>("[data-mod]:not(#home-gate)")
            .forEach((mod) => {
              const items = mod.querySelectorAll<HTMLElement>(
                "[data-reveal], [data-job-card], [data-bento-pane], [data-spec-row], [data-method-col], [data-road-row]",
              );
              if (!items.length) return;

              gsap.set(items, { autoAlpha: 0, y: 28 });

              gsap.to(items, {
                autoAlpha: 1,
                y: 0,
                duration: 0.85,
                ease: "power3.out",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: mod,
                  start: "top 78%",
                  once: true,
                  invalidateOnRefresh: true,
                },
              });
            });

          /* Soft stage lift on hero / hire (transform only) */
          gsap.utils
            .toArray<HTMLElement>(".home-mod__stage[data-parallax]")
            .forEach((stage) => {
              gsap.fromTo(
                stage,
                { y: 18 },
                {
                  y: 0,
                  ease: "none",
                  scrollTrigger: {
                    trigger: stage.closest("[data-mod]") || stage,
                    start: "top bottom",
                    end: "top 35%",
                    scrub: 1,
                    invalidateOnRefresh: true,
                  },
                },
              );
            });

          /* ——— ONLY pin: #home-gate, end ≤ +=80% ——— */
          const gate = document.getElementById("home-gate");
          if (gate && pinOk) {
            const steps = gate.querySelectorAll<HTMLElement>("[data-gate-step]");
            const chips = gate.querySelectorAll<HTMLElement>("[data-gate-chip]");
            const copy = gate.querySelectorAll<HTMLElement>("[data-reveal]");

            gsap.set(copy, { autoAlpha: 0, y: 20 });
            gsap.set(steps, { autoAlpha: 0, y: 16 });
            gsap.set(chips, { autoAlpha: 0.35, scale: 0.97 });

            const tl = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: gate,
                start: "top top",
                end: "+=80%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            tl.to(copy, { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.35 }, 0)
              .to(
                chips,
                { autoAlpha: 1, scale: 1, stagger: 0.18, duration: 0.4 },
                0.15,
              )
              .to(
                steps,
                { autoAlpha: 1, y: 0, stagger: 0.22, duration: 0.4 },
                0.28,
              )
              .to({}, { duration: 0.2 });
          } else if (gate) {
            /* Short viewport: no pin; full gate facts stay static */
            gsap.set(
              gate.querySelectorAll(
                "[data-reveal], [data-gate-step], [data-gate-chip]",
              ),
              { clearProps: "transform,opacity,visibility", autoAlpha: 1 },
            );
          }

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh);
          if (document.fonts?.ready) {
            void document.fonts.ready.then(refresh);
          }

          return () => {
            window.removeEventListener("load", refresh);
          };
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <main id="main" ref={rootRef} className="home-film">
      {/* H1 — hero */}
      <section
        id="home-hero"
        data-mod
        className="home-mod home-mod--hero"
        aria-labelledby="home-hero-h"
      >
        <div className="home-mod__inner home-mod__inner--hero">
          <div className="home-mod__copy home-mod__copy--center">
            <h1 id="home-hero-h" className="home-headline home-headline--lg" data-reveal>
              Agents, built to the brief.
            </h1>
            <p className="home-support" data-reveal>
              Remex Studio designs custom AI agents as products.
            </p>
            <p className="home-support" data-reveal>
              One workflow. One agent. A human still decides.
            </p>
          </div>
          <div className="home-mod__stage" data-parallax aria-hidden="true">
            <div className="product-frame product-frame--gate">
              <div className="product-frame__stage">
                <p className="product-frame__id">LUM-1042</p>
                <p className="product-frame__flow">Skin → hero → try-on → bag → pay</p>
                <div className="cq-pay product-frame__pay">
                  <div className="cq-pay__gate">
                    <span className="cq-pay__chip">Propose</span>
                    <span className="cq-pay__arrow" />
                    <span className="cq-pay__chip cq-pay__chip--approve">Approve</span>
                    <span className="cq-pay__arrow" />
                    <span className="cq-pay__chip product-frame__record">Record</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 — shallow-deep hire */}
      <section
        id="home-hire"
        data-mod
        className="home-mod home-mod--hire"
        aria-labelledby="home-hire-h"
      >
        <div className="home-mod__inner home-mod__inner--split">
          <div className="home-mod__stage" data-parallax aria-hidden="true">
            <div className="hire-still">
              <div className="hire-still__card">
                <span className="hire-still__lamp" />
                <p className="hire-still__seat">One seat</p>
                <p className="hire-still__meta">One job</p>
                <p className="hire-still__job">One painful workflow</p>
              </div>
              <div className="hire-still__gate">
                <span className="hire-still__gate-lamp" />
                Human gate
              </div>
            </div>
          </div>
          <div className="home-mod__copy">
            <h2 id="home-hire-h" className="home-headline" data-reveal>
              One painful workflow. One agent. A human gate.
            </h2>
            <p className="home-support" data-reveal>
              Most tools answer everything. We hire an agent for one job.
            </p>
            <p className="home-support home-support--meta" data-reveal>
              Seattle studio. Global clients.
            </p>
          </div>
        </div>
      </section>

      {/* H3 — pin-stage gate (ONLY pin) */}
      <section
        id="home-gate"
        data-mod
        className="home-mod home-mod--gate"
        aria-labelledby="home-gate-h"
      >
        <div className="home-mod__inner home-mod__inner--gate">
          <div className="home-mod__copy">
            <h2 id="home-gate-h" className="home-headline" data-reveal>
              The agent proposes. A person approves. The record stays.
            </h2>
          </div>
          <div className="home-gate__still" aria-hidden="true">
            <div className="gate-chip" data-gate-chip>
              Propose
            </div>
            <div className="gate-arrow" />
            <div className="gate-chip gate-chip--approve" data-gate-chip>
              Approve
            </div>
            <div className="gate-arrow" />
            <div className="gate-chip gate-chip--record" data-gate-chip>
              Record
            </div>
          </div>
          <ul className="home-gate__steps">
            <li data-gate-step>
              <strong>Propose.</strong> The agent drafts the next action,
              recommendation, or disposition. It does not execute irreversible
              work on its own.
            </li>
            <li data-gate-step>
              <strong>Approve.</strong> A named person on the client side
              accepts, edits, or rejects before anything ships, posts, charges,
              or moves money.
            </li>
            <li data-gate-step>
              <strong>Record.</strong> The proposal, decision, and outcome stay
              linked in an auditable log the team can reopen later.
            </li>
          </ul>
        </div>
      </section>

      {/* H4 — horizontal rail */}
      <section
        id="home-jobs"
        data-mod
        className="home-mod home-mod--jobs"
        aria-labelledby="home-jobs-h"
      >
        <div className="home-mod__inner home-mod__inner--rail">
          <div className="home-mod__copy">
            <h2 id="home-jobs-h" className="home-headline" data-reveal>
              Four jobs we know how to hire an agent for.
            </h2>
            <p className="home-support" data-reveal>
              Atelier Concierge. Ledger Clerk. Morning Remex. Exception Copilot.
            </p>
          </div>
          <div className="home-jobs-rail" role="list">
            {JOBS.map((job) => (
              <Link
                key={job.href}
                href={job.href}
                className={`job-card job-card--${job.tone}`}
                data-job-card
                role="listitem"
              >
                <JobStill tone={job.tone} />
                <span className="job-card__label">{job.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* H5 — bento for / not for */}
      <section
        id="home-for"
        data-mod
        className="home-mod home-mod--bento"
        aria-labelledby="home-for-h"
      >
        <div className="home-mod__inner home-mod__inner--bento">
          <h2 id="home-for-h" className="home-headline" data-reveal>
            We design the job an agent is allowed to do — and the gate it cannot cross.
          </h2>
          <div className="home-bento">
            <div className="home-bento__pane home-bento__pane--fit" data-bento-pane>
              <h3 className="home-bento__label">For</h3>
              <p className="home-bento__body">
                Teams with one painful workflow and a human who must stay in the loop.
              </p>
            </div>
            <div
              className="home-bento__pane home-bento__pane--refuse"
              data-bento-pane
            >
              <h3 className="home-bento__label">Not for</h3>
              <p className="home-bento__lede">What we do not sell</p>
              <ul className="home-bento__list">
                {REFUSE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* H6 — specs cluster */}
      <section
        id="home-brief"
        data-mod
        className="home-mod home-mod--specs"
        aria-labelledby="home-brief-h"
      >
        <div className="home-mod__inner home-mod__inner--specs">
          <h2 id="home-brief-h" className="home-headline" data-reveal>
            What a brief asks.
          </h2>
          <ol className="home-specs">
            {BRIEF_ASKS.map((ask, i) => (
              <li key={ask} className="home-specs__row" data-spec-row>
                <span className="home-specs__n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="home-specs__q">{ask}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* H7 — method columns */}
      <section
        id="home-method"
        data-mod
        className="home-mod home-mod--method"
        aria-labelledby="home-method-h"
      >
        <div className="home-mod__inner home-mod__inner--method">
          <h2 id="home-method-h" className="home-headline home-headline--method" data-reveal>
            Design the job. Build the gate. Keep the record.
          </h2>
          <div className="home-method-cols">
            {METHOD.map((col) => (
              <article key={col.title} className="home-method-col" data-method-col>
                <MethodGlyph kind={col.glyph} />
                <h3 className="home-method-col__title">{col.title}</h3>
                <p className="home-method-col__body">{col.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* H8 — timeline */}
      <section
        id="home-roadmap"
        data-mod
        className="home-mod home-mod--timeline"
        aria-labelledby="home-roadmap-h"
      >
        <div className="home-mod__inner home-mod__inner--timeline">
          <h2 id="home-roadmap-h" className="home-headline" data-reveal>
            Now. Next. Later.
          </h2>
          <ol className="home-timeline">
            {ROADMAP.map((row) => (
              <li key={row.label} className="home-timeline__row" data-road-row>
                <span className="home-timeline__label">{row.label}</span>
                <p className="home-timeline__body">{row.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* H9 — footer map close */}
      <section
        id="home-close"
        data-mod
        className="home-mod home-mod--close"
        aria-labelledby="home-close-h"
      >
        <div className="home-mod__inner home-mod__inner--close">
          <div className="home-mod__copy">
            <h2 id="home-close-h" className="home-headline" data-reveal>
              Start a brief.
            </h2>
            <p className="home-support" data-reveal>
              Tell us the painful workflow. We design the agent and the gate.
            </p>
            <p className="home-cta-wrap" data-reveal>
              <Link href="/contact" className="home-cta">
                Start a brief.
              </Link>
            </p>
          </div>
          <nav className="home-close-map" data-close-map aria-label="Home chapters">
            <ul>
              {CLOSE_CHAPTERS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}
