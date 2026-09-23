"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import { ProductStage } from "@/components/ProductStage";
import { DeskTeaserStill } from "@/components/StageStill";
import { BRIEF_ASKS } from "@/lib/brief-asks";
import { ROADMAP } from "@/lib/roadmap";
import {
  EXAMPLES,
  INDEX_LABEL,
  INDEX_LEDE,
  READ_FULL_EXAMPLE,
} from "@/lib/selected-examples";
import { CATALOG_LINES, FOR_WHOM } from "@/lib/services-catalog";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/*
 * HARD BAN (scroll stack): no Lenis, no ScrollTrigger.normalizeScroll(),
 * no body/html overflow lock while pinned — native scroll only (zero-jank).
 * UI-1: no pin at load on the first viewport. Transform/opacity only.
 * Reduced motion / JS-off: full commercial payload stays readable.
 */

const SERVICE_STRIP = [
  { id: "design", short: "Design" },
  { id: "build", short: "Build" },
  { id: "operations", short: "Operations" },
] as const;

/**
 * One fact per offer. Build uses the ship outcome, not a second
 * Propose → Approve → Record bullet list (that loop lives on the stage).
 */
const OFFER_FACT: Record<(typeof CATALOG_LINES)[number]["id"], string> = {
  design: CATALOG_LINES[0].deliverable,
  build: CATALOG_LINES[1].done,
  operations: CATALOG_LINES[2].deliverable,
};

const CLOSE_CHAPTERS = [
  { href: "#home-services", label: "Services" },
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
    ".home-mod__stage, .home-hero__stage, .home-gate__stage, .product-stage, .product-stage__panel, .product-stage__ticket, .stage-still, .stage-still__panel, .desk-ui, .ex-still__frame, .ex-still__frame .stage-still",
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
  return <DeskTeaserStill still={still} className="home-ex__still" />;
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
          const heroStage = document.querySelector<HTMLElement>(
            "#home-hero [data-product-stage]",
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

          gsap.utils
            .toArray<HTMLElement>("[data-mod]:not(.home-mod--hero)")
            .forEach((mod) => {
              const items = mod.querySelectorAll<HTMLElement>(
                "[data-reveal], [data-ex-row], [data-spec-row], [data-road-row]",
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
           * C3: one stage. No pin on the first viewport.
           * Approve stays filled while the hero is on screen.
           * C4 owns the full three-state scrub; this hook only steps the
           * same stage after the hero has left, transform/opacity only.
           */
          if (heroStage) {
            const steps = ["propose", "approve", "record"] as const;
            const hero = heroStage.closest<HTMLElement>("#home-hero") || heroStage;

            ScrollTrigger.create({
              trigger: hero,
              start: "bottom top",
              end: "+=80%",
              scrub: 0.65,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const idx = Math.min(
                  steps.length - 1,
                  Math.floor(self.progress * steps.length),
                );
                setStageStep(heroStage, steps[idx]);
              },
              onLeaveBack: () => setStageStep(heroStage, "approve"),
              onRefresh: (self) => {
                if (self.progress === 0) setStageStep(heroStage, "approve");
              },
            });
          }

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh);
          if (document.fonts?.ready) {
            void document.fonts.ready.then(refresh);
          }

          return () => {
            window.removeEventListener("load", refresh);
            if (heroStage) setStageStep(heroStage, "approve");
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
          <div className="home-mod__copy home-mod__copy--hero">
            <h1 id="home-hero-h" className="home-headline home-headline--lg">
              Agents, built to the brief.
            </h1>
            <p className="home-support">
              We design the job an agent is allowed to do — and the gate it
              cannot cross.
            </p>
            <ul className="home-hero__catalog" aria-label="Services">
              {SERVICE_STRIP.map((line) => (
                <li key={line.id}>
                  <a href={`#${line.id}`}>{line.short}</a>
                </li>
              ))}
            </ul>
            <div className="home-hero__actions">
              <Link href="/contact" className="home-cta cta-pill">
                Start a brief.
              </Link>
            </div>
          </div>
          <div className="home-hero__stage">
            <ProductStage />
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
              Services
            </h2>
            <p className="home-support" data-reveal>
              Agent product design, Agent build, and Agent operations.
            </p>
            <p className="home-svc__for" data-reveal>
              <span className="home-svc__label">For</span>
              <span>{FOR_WHOM[0]}</span>
            </p>
          </div>
          <ol className="home-svc">
            {CATALOG_LINES.map((line) => (
              <li
                key={line.id}
                id={line.id}
                className="home-svc__col"
                data-reveal
              >
                <p className="home-svc__label">
                  {SERVICE_STRIP.find((item) => item.id === line.id)?.short}
                </p>
                <h3 className="home-svc__name">{line.name}</h3>
                <p className="home-svc__p">{OFFER_FACT[line.id]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="home-gate"
        data-mod
        className="home-mod home-mod--gate"
        aria-labelledby="home-gate-h"
      >
        <div className="home-mod__inner home-mod__inner--gate">
          <h2 id="home-gate-h" className="home-headline" data-reveal>
            A human still decides.
          </h2>
          <p className="home-support" data-reveal>
            Irreversible actions stay behind a named person.
          </p>
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
