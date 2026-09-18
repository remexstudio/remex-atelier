"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import { ProductStage } from "@/components/ProductStage";
import { BRIEF_ASKS } from "@/lib/brief-asks";
import { ROADMAP } from "@/lib/roadmap";
import {
  EXAMPLES,
  INDEX_LABEL,
  INDEX_LEDE,
  READ_FULL_EXAMPLE,
} from "@/lib/selected-examples";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/*
 * HARD BAN (scroll stack): no Lenis, no ScrollTrigger.normalizeScroll(),
 * no body/html overflow lock while pinned — native scroll only (zero-jank).
 * V7-0: pin+scrub only on the home product STAGE. Transform/opacity only.
 * Reduced motion / JS-off: full commercial payload stays readable.
 */

const SERVICE_STRIP = [
  { id: "design", short: "Design", name: "Agent product design" },
  { id: "build", short: "Build", name: "Agent build" },
  { id: "operations", short: "Operations", name: "Agent operations" },
] as const;

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

const CLOSE_CHAPTERS = [
  { href: "#home-services", label: "Services" },
  { href: "#home-method", label: "Method" },
  { href: "#home-gate", label: "Gate" },
  { href: "#home-examples", label: "Examples" },
  { href: "#home-brief", label: "Brief" },
  { href: "#home-roadmap", label: "Roadmap" },
] as const;

const STATIC_SEL =
  "[data-reveal], [data-svc-col], [data-ex-row], [data-spec-row], [data-road-row], [data-close-map] a, [data-step], [data-panel]";

function showStatic() {
  gsap.set(STATIC_SEL, {
    clearProps: "transform,opacity,visibility,filter",
    autoAlpha: 1,
  });
  gsap.set(
    ".home-mod__stage, .product-stage, .product-stage__panel, .stage-still, .stage-still__panel, .ex-still__frame, .ex-still__frame .stage-still",
    {
      clearProps: "transform,opacity,visibility",
      autoAlpha: 1,
    },
  );
}

function setStageStep(root: HTMLElement, step: "propose" | "approve" | "record") {
  root.setAttribute("data-active-step", step);
  root.querySelectorAll<HTMLElement>("[data-step]").forEach((el) => {
    el.setAttribute("data-active", el.dataset.step === step ? "true" : "false");
  });
  root.querySelectorAll<HTMLElement>("[data-panel]").forEach((el) => {
    const active = el.dataset.panel === step;
    el.setAttribute("data-active", active ? "true" : "false");
    if (active) el.removeAttribute("aria-hidden");
    else el.setAttribute("aria-hidden", "true");
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

          const stages = document.querySelectorAll<HTMLElement>(
            "[data-product-stage]",
          );
          stages.forEach((node) => setStageStep(node, "approve"));
          const stage = document.querySelector<HTMLElement>(
            "[data-product-pin] [data-product-stage]",
          );

          if (reduce || !motionOk) {
            showStatic();
            stages.forEach((node) => {
              node.querySelectorAll<HTMLElement>("[data-panel]").forEach((el) => {
                el.removeAttribute("aria-hidden");
                el.setAttribute("data-active", "true");
              });
            });
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

          /*
           * V7-0: pin+scrub is allowed only on this stage, but pinning at
           * load stole the first viewport (Approve → Propose, strip below fold).
           * Keep Approve filled. Optional short transform/opacity scrub only
           * after the hero has left the first screen.
           */
          if (stage) {
            const pin = stage.closest<HTMLElement>("[data-product-pin]") || stage;
            const steps = ["propose", "approve", "record"] as const;

            ScrollTrigger.create({
              trigger: pin,
              start: "top top",
              end: "+=80%",
              scrub: 0.65,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (self.progress === 0) {
                  setStageStep(stage, "approve");
                  return;
                }
                const idx = Math.min(
                  steps.length - 1,
                  Math.floor(self.progress * steps.length),
                );
                setStageStep(stage, steps[idx]);
              },
              onLeaveBack: () => setStageStep(stage, "approve"),
            });
          }

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh);
          if (document.fonts?.ready) {
            void document.fonts.ready.then(refresh);
          }

          return () => {
            window.removeEventListener("load", refresh);
            if (stage) setStageStep(stage, "approve");
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
          <div className="home-mod__copy">
            <h1 id="home-hero-h" className="home-headline home-headline--lg" data-reveal>
              Agents, built to the brief.
            </h1>
            <p className="home-support" data-reveal>
              We design the job an agent is allowed to do — and the gate it
              cannot cross.
            </p>
            <div className="home-hero__actions" data-reveal>
              <Link href="/contact" className="home-cta cta-pill">
                Start a brief.
              </Link>
              <Link href="/services" className="home-text-link">
                See services
              </Link>
            </div>
          </div>
          <div className="home-hero__pin" data-product-pin>
            <ProductStage />
          </div>
        </div>
        <ol
          id="home-services"
          className="home-hero__strip"
          aria-label="Services"
        >
          {SERVICE_STRIP.map((line) => (
            <li key={line.id} className="home-hero__svc" data-svc-col>
              <span className="home-hero__svc-short">{line.short}</span>
              <span className="home-hero__svc-name">{line.name}</span>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="home-method"
        data-mod
        className="home-mod home-mod--method home-mod--hire"
        aria-labelledby="home-method-h"
      >
        <div className="home-mod__inner home-mod__inner--hire">
          <div className="home-mod__copy">
            <h2 id="home-method-h" className="home-headline" data-reveal>
              The agent proposes. A person approves. The record stays.
            </h2>
            <p className="home-support" data-reveal>
              One workflow. One agent. A human still decides.
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
        id="home-gate"
        data-mod
        className="home-mod home-mod--gate"
        aria-labelledby="home-gate-h"
      >
        <div className="home-mod__inner home-mod__inner--gate">
          <div className="home-mod__copy">
            <h2 id="home-gate-h" className="home-headline" data-reveal>
              A human still decides.
            </h2>
            <p className="home-support" data-reveal>
              Irreversible actions stay behind a named person.
            </p>
          </div>
          <ProductStage variant="dark" />
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
                <p className="home-timeline__body">{row.summary}</p>
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
              <Link href="/contact" className="home-cta cta-pill">
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
