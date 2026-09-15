"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import { BRIEF_ASKS } from "@/lib/brief-asks";
import {
  EXAMPLES,
  INDEX_LABEL,
  INDEX_LEDE,
  READ_FULL_EXAMPLE,
} from "@/lib/selected-examples";
import { CATALOG_LINES } from "@/lib/services-catalog";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/*
 * HARD BAN (scroll stack): no Lenis, no ScrollTrigger.normalizeScroll(),
 * no body/html overflow lock while pinned — native scroll only (zero-jank).
 * V5-3: shallow default. No home pin. Prefer once-reveal (transform/opacity).
 * Reduced motion / JS-off: full commercial payload stays readable.
 */

const MECHANISM = [
  {
    title: "Propose",
    body: "The agent drafts the next action, recommendation, or disposition. It does not execute irreversible work on its own.",
  },
  {
    title: "Approve",
    body: "A named person on the client side accepts, edits, or rejects before anything ships, posts, charges, or moves money.",
  },
  {
    title: "Record",
    body: "The proposal, decision, and outcome stay linked in an auditable log the team can reopen later.",
  },
] as const;

const ROADMAP = [
  {
    label: "Now",
    body: "Scoped custom agents. One workflow. One seat. A human still decides.",
  },
  {
    label: "Next",
    body: "Repeated modules become internal tools / small products. Direction only.",
  },
  {
    label: "Later",
    body: "Studio-owned products that still ship with a gate. Direction only.",
  },
] as const;

const CLOSE_CHAPTERS = [
  { href: "#home-services", label: "Services" },
  { href: "#home-method", label: "Method" },
  { href: "#home-examples", label: "Examples" },
  { href: "#home-brief", label: "Brief" },
  { href: "#home-roadmap", label: "Roadmap" },
] as const;

const STATIC_SEL =
  "[data-reveal], [data-svc-col], [data-ex-row], [data-spec-row], [data-road-row], [data-close-map] a";

function showStatic() {
  gsap.set(STATIC_SEL, {
    clearProps: "transform,opacity,visibility,filter",
    autoAlpha: 1,
  });
  gsap.set(".home-mod__stage, .home-method__still, .home-ex", {
    clearProps: "transform,opacity,visibility",
    autoAlpha: 1,
  });
}

function ExampleStill({
  still,
}: {
  still: (typeof EXAMPLES)[number]["still"];
}) {
  if (still === "still-a") {
    return (
      <div className="home-ex__still media-stage media-stage--cq" aria-hidden="true">
        <p className="media-stage__kicker">Gate</p>
        <p className="media-stage__fact">Human before pay</p>
        <p className="media-stage__sub">skin → hero → try-on → bag</p>
      </div>
    );
  }

  if (still === "still-b") {
    return (
      <div className="home-ex__still media-stage media-stage--lc" aria-hidden="true">
        <p className="media-stage__kicker">Gate</p>
        <p className="media-stage__fact">Propose ≠ Execute</p>
        <p className="media-stage__sub">cite stays with the ask</p>
        <p className="media-stage__cite">§12.4 · Close pack</p>
      </div>
    );
  }

  if (still === "still-c") {
    return (
      <div className="home-ex__still media-stage media-stage--mr" aria-hidden="true">
        <p className="media-stage__kicker">Triage</p>
        <p className="media-stage__fact">Priority · Watch · Noise</p>
        <p className="media-stage__sub">Human before send</p>
      </div>
    );
  }

  return (
    <div className="home-ex__still media-stage media-stage--ec" aria-hidden="true">
      <p className="media-stage__kicker">Queue</p>
      <p className="media-stage__fact">Human before money</p>
      <p className="media-stage__sub">queue · policy · case note</p>
    </div>
  );
}

export function HomeScenes() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          motionOk: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { reduce, motionOk } = context.conditions as {
            reduce: boolean;
            motionOk: boolean;
          };

          if (reduce || !motionOk) {
            showStatic();
            return;
          }

          gsap.utils.toArray<HTMLElement>("[data-mod]").forEach((mod) => {
            const items = mod.querySelectorAll<HTMLElement>(
              "[data-reveal], [data-svc-col], [data-ex-row], [data-spec-row], [data-road-row]",
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
              We design the job an agent is allowed to do — and the gate it
              cannot cross.
            </p>
            <p className="home-support" data-reveal>
              One workflow. One agent. A human still decides.
            </p>
          </div>
          <div className="home-mod__stage" data-parallax aria-hidden="true">
            <div className="hero-still">
              <div className="hero-still__row">
                <p className="hero-still__kicker">Job</p>
                <p className="hero-still__line">One workflow. One seat.</p>
              </div>
              <div className="hero-still__rule" />
              <div className="hero-still__row">
                <p className="hero-still__kicker">Gate</p>
                <p className="hero-still__line">A human still decides.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="home-services"
        data-mod
        className="home-mod home-mod--services"
        aria-labelledby="home-services-h"
      >
        <div className="home-mod__inner home-mod__inner--services">
          <div className="home-mod__copy">
            <h2 id="home-services-h" className="home-headline" data-reveal>
              Agent product design. Agent build. Agent operations.
            </h2>
            <p className="home-support" data-reveal>
              Remex Studio designs custom AI agents as products.
            </p>
          </div>
          <ol className="home-svc">
            {CATALOG_LINES.map((line) => (
              <li key={line.id} className="home-svc__col" data-svc-col>
                <h3 className="home-svc__name">{line.name}</h3>
                <p className="home-svc__p">
                  <span className="home-svc__label">Who.</span> {line.who}
                </p>
                <p className="home-svc__p">
                  <span className="home-svc__label">Done.</span> {line.done}
                </p>
              </li>
            ))}
          </ol>
          <p className="home-cta-wrap" data-reveal>
            <Link href="/services" className="home-text-link">
              Services
            </Link>
          </p>
        </div>
      </section>

      <section
        id="home-method"
        data-mod
        className="home-mod home-mod--method"
        aria-labelledby="home-method-h"
      >
        <div className="home-mod__inner home-mod__inner--split">
          <div className="home-mod__stage" data-parallax aria-hidden="true">
            <div className="home-method__still">
              <div className="home-method__sheet">
                <p className="home-method__kicker">Job</p>
                <p className="home-method__fact">
                  Who sits in the seat. What done looks like.
                </p>
                <p className="home-method__kicker">Gate</p>
                <p className="home-method__fact">
                  The line the agent cannot cross.
                </p>
                <p className="home-method__kicker">Record</p>
                <p className="home-method__fact">
                  Propose. Approve. Reopen later.
                </p>
              </div>
            </div>
          </div>
          <div className="home-mod__copy">
            <h2 id="home-method-h" className="home-headline" data-reveal>
              The agent proposes. A person approves. The record stays.
            </h2>
            <p className="home-support" data-reveal>
              A human still decides.
            </p>
            <ol className="home-method__steps">
              {MECHANISM.map((step) => (
                <li key={step.title} data-reveal>
                  <strong>{step.title}.</strong> {step.body}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="home-examples"
        data-mod
        className="home-mod home-mod--examples"
        aria-labelledby="home-examples-h"
      >
        <div className="home-mod__inner home-mod__inner--examples">
          <div className="home-mod__copy">
            <h2 id="home-examples-h" className="home-headline" data-reveal>
              {INDEX_LABEL}
            </h2>
            <p className="home-support" data-reveal>
              {INDEX_LEDE}
            </p>
          </div>
          <ul className="home-ex">
            {EXAMPLES.map((example) => (
              <li key={example.slug} className="home-ex__row" data-ex-row>
                <article className="home-ex__link">
                  <ExampleStill still={example.still} />
                  <div className="home-ex__copy">
                    <h3 className="home-ex__name">{example.display}</h3>
                    <p className="home-ex__gate">{example.description}</p>
                    <Link href={example.href} className="home-ex__read">
                      {READ_FULL_EXAMPLE}
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="home-brief"
        data-mod
        className="home-mod home-mod--specs"
        aria-labelledby="home-brief-h"
      >
        <div className="home-mod__inner home-mod__inner--specs">
          <h2 id="home-brief-h" className="home-headline" data-reveal>
            How a brief starts
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
          <p className="home-support" data-reveal>
            Direction only. Not a shipped catalog.
          </p>
          <ol className="home-timeline">
            {ROADMAP.map((row) => (
              <li key={row.label} className="home-timeline__row" data-road-row>
                <span className="home-timeline__label">{row.label}</span>
                <p className="home-timeline__body">{row.body}</p>
              </li>
            ))}
          </ol>
          <p className="home-cta-wrap" data-reveal>
            <Link href="/approach" className="home-text-link">
              Approach
            </Link>
          </p>
        </div>
      </section>

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
