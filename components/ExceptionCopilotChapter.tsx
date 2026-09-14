"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Product chapter motion: once-reveal only. No pin / no long scrub runway.
 * prefers-reduced-motion → showStatic; all module facts stay visible. */

const REVEAL_SEL = "[data-ec-reveal]";

function showStatic(root: HTMLElement) {
  root.classList.remove("ec-film--motion");
  gsap.set(root.querySelectorAll(REVEAL_SEL), {
    clearProps: "transform,opacity,visibility",
    autoAlpha: 1,
  });
  gsap.set(root.querySelectorAll(".ec-still, .ec-flow__step, .ec-pipeline"), {
    clearProps: "transform,opacity,visibility",
    autoAlpha: 1,
  });
}

export function ExceptionCopilotChapter() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

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
            showStatic(root);
            return;
          }

          root.classList.add("ec-film--motion");

          gsap.utils
            .toArray<HTMLElement>(root.querySelectorAll("[data-ec-mod]"))
            .forEach((mod) => {
              const items = mod.querySelectorAll<HTMLElement>(REVEAL_SEL);
              if (!items.length) return;

              gsap.set(items, { autoAlpha: 0, y: 22 });

              gsap.to(items, {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                ease: "power3.out",
                stagger: 0.07,
                scrollTrigger: {
                  trigger: mod,
                  start: "top 78%",
                  once: true,
                  invalidateOnRefresh: true,
                },
              });
            });

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh);
          if (document.fonts?.ready) {
            void document.fonts.ready.then(() => refresh());
          }

          return () => {
            window.removeEventListener("load", refresh);
            root.classList.remove("ec-film--motion");
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
    <main
      id="main"
      ref={rootRef}
      className="ec-film"
      aria-label="Exception Copilot"
    >
      {/* Job + user */}
      <section
        id="ec-job"
        data-ec-mod
        className="ec-mod ec-mod--job"
        aria-labelledby="ec-job-h"
      >
        <div className="ec-mod__inner ec-mod__inner--job">
          <p className="ec-kicker" data-ec-reveal>
            Exception Copilot
          </p>
          <h1 id="ec-job-h" className="ec-headline" data-ec-reveal>
            Ops lead clearing exception queues against written policy.
          </h1>
          <div className="ec-still ec-still--desk" data-ec-reveal aria-hidden="true">
            <div className="ec-desk">
              <span className="ec-desk__chip ec-desk__chip--u1">U1</span>
              <span className="ec-desk__chip ec-desk__chip--u2">U2</span>
              <span className="ec-desk__chip ec-desk__chip--u3">U3</span>
              <span className="ec-desk__chip ec-desk__chip--policy">Policy</span>
              <span className="ec-desk__chip ec-desk__chip--ink">Ops lead</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section
        id="ec-pain"
        data-ec-mod
        className="ec-mod ec-mod--pain"
        aria-labelledby="ec-pain-h"
      >
        <div className="ec-mod__inner ec-mod__inner--split">
          <div className="ec-mod__copy">
            <h2 id="ec-pain-h" className="ec-headline ec-headline--sm" data-ec-reveal>
              Exceptions pile faster than policy can be reread.
            </h2>
          </div>
          <div className="ec-still ec-still--pile" data-ec-reveal aria-hidden="true">
            <div className="ec-ticket ec-ticket--a">
              <span className="ec-ticket__badge">EX-441</span>
              <span className="ec-ticket__bar ec-ticket__bar--wide" />
            </div>
            <div className="ec-ticket ec-ticket--b">
              <span className="ec-ticket__badge">EX-438</span>
              <span className="ec-ticket__bar" />
            </div>
            <div className="ec-ticket ec-ticket--c">
              <span className="ec-ticket__badge">EX-429</span>
              <span className="ec-ticket__bar ec-ticket__bar--mid" />
            </div>
            <div className="ec-ticket ec-ticket--d">
              <span className="ec-ticket__badge">EX-417</span>
              <span className="ec-ticket__bar ec-ticket__bar--short" />
            </div>
          </div>
        </div>
      </section>

      {/* Flow DNA: queue rank → policy cite disposition → case note → human for refunds */}
      <section
        id="ec-flow"
        data-ec-mod
        className="ec-mod ec-mod--flow"
        aria-labelledby="ec-flow-h"
      >
        <div className="ec-mod__inner">
          <h2 id="ec-flow-h" className="ec-eyebrow" data-ec-reveal>
            Rank before money moves
          </h2>

          <ol className="ec-pipeline" aria-label="Exception Copilot flow">
            <li className="ec-flow__step" data-ec-reveal>
              <div className="ec-flow__still ec-flow__still--rank" aria-hidden="true">
                <div className="ec-rank">
                  <span className="ec-rank__row ec-rank__row--hot">1</span>
                  <span className="ec-rank__row ec-rank__row--mid">2</span>
                  <span className="ec-rank__row">3</span>
                </div>
              </div>
              <p className="ec-flow__label">Queue rank</p>
            </li>
            <li className="ec-flow__arrow" aria-hidden="true" data-ec-reveal>
              →
            </li>
            <li className="ec-flow__step" data-ec-reveal>
              <div className="ec-flow__still ec-flow__still--cite" aria-hidden="true">
                <div className="ec-cite">
                  <span className="ec-cite__mark">§4.2</span>
                  <span className="ec-cite__bar" />
                  <span className="ec-cite__bar ec-cite__bar--short" />
                </div>
              </div>
              <p className="ec-flow__label">Policy cite disposition</p>
            </li>
            <li className="ec-flow__arrow" aria-hidden="true" data-ec-reveal>
              →
            </li>
            <li className="ec-flow__step" data-ec-reveal>
              <div className="ec-flow__still ec-flow__still--note" aria-hidden="true">
                <div className="ec-note">
                  <span className="ec-note__label">Case note</span>
                  <span className="ec-note__line" />
                  <span className="ec-note__line ec-note__line--mid" />
                  <span className="ec-note__line ec-note__line--short" />
                </div>
              </div>
              <p className="ec-flow__label">Case note</p>
            </li>
            <li className="ec-flow__arrow" aria-hidden="true" data-ec-reveal>
              →
            </li>
            <li className="ec-flow__step" data-ec-reveal>
              <div className="ec-flow__still ec-flow__still--money" aria-hidden="true">
                <div className="ec-money">
                  <span className="ec-money__lock" />
                  <span className="ec-money__label">Human</span>
                </div>
              </div>
              <p className="ec-flow__label">Human for refunds</p>
            </li>
          </ol>

          <ul className="ec-abilities">
            <li data-ec-reveal>
              <span className="ec-abilities__n">01</span>
              <p>Rank the exception queue by urgency and policy fit.</p>
            </li>
            <li data-ec-reveal>
              <span className="ec-abilities__n">02</span>
              <p>Suggest a policy disposition with the cite attached.</p>
            </li>
            <li data-ec-reveal>
              <span className="ec-abilities__n">03</span>
              <p>Draft the case note for the lead.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Gate — human for refunds / irreversible money */}
      <section
        id="ec-gate"
        data-ec-mod
        className="ec-mod ec-mod--gate"
        aria-labelledby="ec-gate-h"
      >
        <div className="ec-mod__inner ec-mod__inner--split">
          <div className="ec-mod__copy">
            <h2 id="ec-gate-h" className="ec-headline ec-headline--sm" data-ec-reveal>
              A human handles refunds and irreversible money moves.
            </h2>
          </div>
          <div className="ec-still ec-still--lead" data-ec-reveal aria-hidden="true">
            <div className="ec-lead">
              <div className="ec-lead__disposition">
                <span className="ec-lead__cite">§4.2 · Restock window</span>
                <span className="ec-lead__bar" />
                <span className="ec-lead__bar ec-lead__bar--mid" />
                <span className="ec-lead__amount">Refund held</span>
              </div>
              <div className="ec-lead__gate">
                <span className="ec-lead__chip">Disposition</span>
                <span className="ec-lead__arrow" />
                <span className="ec-lead__chip ec-lead__chip--name">Ops lead</span>
                <span className="ec-lead__arrow" />
                <span className="ec-lead__chip ec-lead__chip--hold">Money held</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Record — case timeline */}
      <section
        id="ec-record"
        data-ec-mod
        className="ec-mod ec-mod--record"
        aria-labelledby="ec-record-h"
      >
        <div className="ec-mod__inner ec-mod__inner--split">
          <div className="ec-still ec-still--timeline" data-ec-reveal aria-hidden="true">
            <div className="ec-timeline">
              <div className="ec-timeline__chrome">
                <span />
                <span />
                <span />
              </div>
              <p className="ec-timeline__title">Case timeline</p>
              <div className="ec-timeline__row">
                <span className="ec-timeline__dot" />
                <span className="ec-timeline__key">Policy cite</span>
                <span className="ec-timeline__bar ec-timeline__bar--wide" />
              </div>
              <div className="ec-timeline__row">
                <span className="ec-timeline__dot" />
                <span className="ec-timeline__key">Disposition</span>
                <span className="ec-timeline__bar" />
              </div>
              <div className="ec-timeline__row">
                <span className="ec-timeline__dot ec-timeline__dot--ink" />
                <span className="ec-timeline__key ec-timeline__key--ink">Decision</span>
                <span className="ec-timeline__bar ec-timeline__bar--mid" />
              </div>
            </div>
          </div>
          <div className="ec-mod__copy">
            <h2 id="ec-record-h" className="ec-headline ec-headline--sm" data-ec-reveal>
              Case timeline keeps policy cite and decision together.
            </h2>
          </div>
        </div>
      </section>

      {/* Refusal */}
      <section
        id="ec-refusal"
        data-ec-mod
        className="ec-mod ec-mod--refusal"
        aria-labelledby="ec-refusal-h"
      >
        <div className="ec-mod__inner ec-mod__inner--refusal">
          <h2 id="ec-refusal-h" className="ec-eyebrow" data-ec-reveal>
            Refusal
          </h2>
          <p className="ec-headline ec-headline--sm" data-ec-reveal>
            Will not issue refunds or move money without a human.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="ec-cta"
        data-ec-mod
        className="ec-mod ec-mod--cta"
        aria-labelledby="ec-cta-h"
      >
        <div className="ec-mod__inner ec-mod__inner--cta">
          <h2 id="ec-cta-h" className="ec-headline" data-ec-reveal>
            Start a brief.
          </h2>
          <p className="ec-cta-wrap" data-ec-reveal>
            <Link href="/contact" className="home-cta">
              Start a brief.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
