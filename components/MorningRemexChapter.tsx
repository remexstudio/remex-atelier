"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Product chapter motion: once-reveal only. No pin / no long scrub runway.
 * prefers-reduced-motion → showStatic; all module facts stay visible. */

const REVEAL_SEL = "[data-mr-reveal]";

function showStatic(root: HTMLElement) {
  root.classList.remove("mr-film--motion");
  gsap.set(root.querySelectorAll(REVEAL_SEL), {
    clearProps: "transform,opacity,visibility",
    autoAlpha: 1,
  });
  gsap.set(root.querySelectorAll(".mr-still, .mr-flow__step, .mr-pipeline"), {
    clearProps: "transform,opacity,visibility",
    autoAlpha: 1,
  });
}

export function MorningRemexChapter() {
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

          root.classList.add("mr-film--motion");

          gsap.utils
            .toArray<HTMLElement>(root.querySelectorAll("[data-mr-mod]"))
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
            root.classList.remove("mr-film--motion");
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
      className="mr-film"
      aria-label="Morning Remex"
    >
      {/* Job + user */}
      <section
        id="mr-job"
        data-mr-mod
        className="mr-mod mr-mod--job"
        aria-labelledby="mr-job-h"
      >
        <div className="mr-mod__inner mr-mod__inner--job">
          <p className="mr-kicker" data-mr-reveal>
            Morning Remex
          </p>
          <h1 id="mr-job-h" className="mr-headline" data-mr-reveal>
            Operator desk turning overnight threads into one morning packet.
          </h1>
          <div className="mr-still mr-still--desk" data-mr-reveal aria-hidden="true">
            <div className="mr-desk">
              <span className="mr-desk__chip mr-desk__chip--pri">Priority</span>
              <span className="mr-desk__chip mr-desk__chip--watch">Watch</span>
              <span className="mr-desk__chip mr-desk__chip--noise">Noise</span>
              <span className="mr-desk__chip mr-desk__chip--ink">Packet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section
        id="mr-pain"
        data-mr-mod
        className="mr-mod mr-mod--pain"
        aria-labelledby="mr-pain-h"
      >
        <div className="mr-mod__inner mr-mod__inner--split">
          <div className="mr-mod__copy">
            <h2 id="mr-pain-h" className="mr-headline mr-headline--sm" data-mr-reveal>
              Overnight mail arrives without a single readable brief.
            </h2>
          </div>
          <div className="mr-still mr-still--inbox" data-mr-reveal aria-hidden="true">
            <div className="mr-thread mr-thread--a">
              <span className="mr-thread__dot" />
              <span className="mr-thread__bar mr-thread__bar--wide" />
            </div>
            <div className="mr-thread mr-thread--b">
              <span className="mr-thread__dot" />
              <span className="mr-thread__bar" />
            </div>
            <div className="mr-thread mr-thread--c">
              <span className="mr-thread__dot" />
              <span className="mr-thread__bar mr-thread__bar--mid" />
            </div>
            <div className="mr-thread mr-thread--d">
              <span className="mr-thread__dot" />
              <span className="mr-thread__bar mr-thread__bar--short" />
            </div>
          </div>
        </div>
      </section>

      {/* Flow DNA: Priority/Watch/Noise → two-tone drafts → escalate → never auto-publish */}
      <section
        id="mr-flow"
        data-mr-mod
        className="mr-mod mr-mod--flow"
        aria-labelledby="mr-flow-h"
      >
        <div className="mr-mod__inner">
          <h2 id="mr-flow-h" className="mr-eyebrow" data-mr-reveal>
            Triage before send
          </h2>

          <ol className="mr-pipeline" aria-label="Morning Remex flow">
            <li className="mr-flow__step" data-mr-reveal>
              <div className="mr-flow__still mr-flow__still--triage" aria-hidden="true">
                <div className="mr-triage">
                  <span className="mr-triage__lane mr-triage__lane--pri">P</span>
                  <span className="mr-triage__lane mr-triage__lane--watch">W</span>
                  <span className="mr-triage__lane mr-triage__lane--noise">N</span>
                </div>
              </div>
              <p className="mr-flow__label">Priority / Watch / Noise</p>
            </li>
            <li className="mr-flow__arrow" aria-hidden="true" data-mr-reveal>
              →
            </li>
            <li className="mr-flow__step" data-mr-reveal>
              <div className="mr-flow__still mr-flow__still--tones" aria-hidden="true">
                <div className="mr-tones">
                  <span className="mr-tones__card mr-tones__card--a">Tone A</span>
                  <span className="mr-tones__card mr-tones__card--b">Tone B</span>
                </div>
              </div>
              <p className="mr-flow__label">Two-tone drafts</p>
            </li>
            <li className="mr-flow__arrow" aria-hidden="true" data-mr-reveal>
              →
            </li>
            <li className="mr-flow__step" data-mr-reveal>
              <div className="mr-flow__still mr-flow__still--escalate" aria-hidden="true">
                <div className="mr-escalate">
                  <span className="mr-escalate__flag">Escalate</span>
                  <span className="mr-escalate__bar" />
                  <span className="mr-escalate__bar mr-escalate__bar--short" />
                </div>
              </div>
              <p className="mr-flow__label">Escalate</p>
            </li>
            <li className="mr-flow__arrow" aria-hidden="true" data-mr-reveal>
              →
            </li>
            <li className="mr-flow__step" data-mr-reveal>
              <div className="mr-flow__still mr-flow__still--hold" aria-hidden="true">
                <div className="mr-hold">
                  <span className="mr-hold__lock" />
                  <span className="mr-hold__label">Held</span>
                </div>
              </div>
              <p className="mr-flow__label">Never auto-publish</p>
            </li>
          </ol>

          <ul className="mr-abilities">
            <li data-mr-reveal>
              <span className="mr-abilities__n">01</span>
              <p>Sort threads into Priority, Watch, and Noise.</p>
            </li>
            <li data-mr-reveal>
              <span className="mr-abilities__n">02</span>
              <p>Draft in two tones for the operator to choose.</p>
            </li>
            <li data-mr-reveal>
              <span className="mr-abilities__n">03</span>
              <p>Escalate threads that need a human before send.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Gate — never auto-publish */}
      <section
        id="mr-gate"
        data-mr-mod
        className="mr-mod mr-mod--gate"
        aria-labelledby="mr-gate-h"
      >
        <div className="mr-mod__inner mr-mod__inner--split">
          <div className="mr-mod__copy">
            <h2 id="mr-gate-h" className="mr-headline mr-headline--sm" data-mr-reveal>
              Never auto-publish. An operator edits before anything goes out.
            </h2>
          </div>
          <div className="mr-still mr-still--operator" data-mr-reveal aria-hidden="true">
            <div className="mr-operator">
              <div className="mr-operator__drafts">
                <div className="mr-operator__tone mr-operator__tone--a">
                  <span className="mr-operator__tag">Tone A</span>
                  <span className="mr-operator__line" />
                  <span className="mr-operator__line mr-operator__line--mid" />
                </div>
                <div className="mr-operator__tone mr-operator__tone--b">
                  <span className="mr-operator__tag">Tone B</span>
                  <span className="mr-operator__line" />
                  <span className="mr-operator__line mr-operator__line--short" />
                </div>
              </div>
              <div className="mr-operator__gate">
                <span className="mr-operator__chip">Draft</span>
                <span className="mr-operator__arrow" />
                <span className="mr-operator__chip mr-operator__chip--name">
                  Operator
                </span>
                <span className="mr-operator__arrow" />
                <span className="mr-operator__chip mr-operator__chip--hold">
                  Send held
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Record */}
      <section
        id="mr-record"
        data-mr-mod
        className="mr-mod mr-mod--record"
        aria-labelledby="mr-record-h"
      >
        <div className="mr-mod__inner mr-mod__inner--split">
          <div className="mr-still mr-still--packet" data-mr-reveal aria-hidden="true">
            <div className="mr-packet">
              <div className="mr-packet__chrome">
                <span />
                <span />
                <span />
              </div>
              <p className="mr-packet__title">Morning packet</p>
              <div className="mr-packet__row">
                <span className="mr-packet__key">Brief</span>
                <span className="mr-packet__bar mr-packet__bar--wide" />
              </div>
              <div className="mr-packet__row">
                <span className="mr-packet__key">Draft</span>
                <span className="mr-packet__bar" />
              </div>
              <div className="mr-packet__row">
                <span className="mr-packet__key mr-packet__key--ink">Escalate</span>
                <span className="mr-packet__bar mr-packet__bar--mid" />
              </div>
            </div>
          </div>
          <div className="mr-mod__copy">
            <h2 id="mr-record-h" className="mr-headline mr-headline--sm" data-mr-reveal>
              Brief, draft, and escalate decision stay linked.
            </h2>
          </div>
        </div>
      </section>

      {/* Refusal */}
      <section
        id="mr-refusal"
        data-mr-mod
        className="mr-mod mr-mod--refusal"
        aria-labelledby="mr-refusal-h"
      >
        <div className="mr-mod__inner mr-mod__inner--refusal">
          <h2 id="mr-refusal-h" className="mr-eyebrow" data-mr-reveal>
            Refusal
          </h2>
          <p className="mr-headline mr-headline--sm" data-mr-reveal>
            Will not auto-publish digests or posts.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="mr-cta"
        data-mr-mod
        className="mr-mod mr-mod--cta"
        aria-labelledby="mr-cta-h"
      >
        <div className="mr-mod__inner mr-mod__inner--cta">
          <h2 id="mr-cta-h" className="mr-headline" data-mr-reveal>
            Start a brief.
          </h2>
          <p className="mr-cta-wrap" data-mr-reveal>
            <Link href="/contact" className="home-cta">
              Start a brief.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
