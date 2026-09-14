"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Product chapter motion: once-reveal only. No pin / no long scrub runway.
 * prefers-reduced-motion → showStatic; all module facts stay visible. */

const REVEAL_SEL = "[data-cq-reveal]";

function showStatic(root: HTMLElement) {
  root.classList.remove("cq-film--motion");
  gsap.set(root.querySelectorAll(REVEAL_SEL), {
    clearProps: "transform,opacity,visibility",
    autoAlpha: 1,
  });
  gsap.set(root.querySelectorAll(".cq-still, .cq-flow__step, .cq-pipeline"), {
    clearProps: "transform,opacity,visibility",
    autoAlpha: 1,
  });
}

export function AtelierConciergeChapter() {
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

          root.classList.add("cq-film--motion");

          gsap.utils
            .toArray<HTMLElement>(root.querySelectorAll("[data-cq-mod]"))
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
            root.classList.remove("cq-film--motion");
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
      className="cq-film"
      aria-label="Atelier Concierge"
    >
      {/* Job + user */}
      <section
        id="cq-job"
        data-cq-mod
        className="cq-mod cq-mod--job"
        aria-labelledby="cq-job-h"
      >
        <div className="cq-mod__inner cq-mod__inner--job">
          <p className="cq-kicker" data-cq-reveal>
            Atelier Concierge
          </p>
          <h1 id="cq-job-h" className="cq-headline" data-cq-reveal>
            Concierge desk for high-touch retail clients who expect one clear next step.
          </h1>
          <div className="cq-still cq-still--desk" data-cq-reveal aria-hidden="true">
            <div className="cq-desk">
              <span className="cq-desk__chip">Skin</span>
              <span className="cq-desk__chip">Occasion</span>
              <span className="cq-desk__chip cq-desk__chip--ink">Next step</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section
        id="cq-pain"
        data-cq-mod
        className="cq-mod cq-mod--pain"
        aria-labelledby="cq-pain-h"
      >
        <div className="cq-mod__inner cq-mod__inner--split">
          <div className="cq-mod__copy">
            <h2 id="cq-pain-h" className="cq-headline cq-headline--sm" data-cq-reveal>
              Skin, occasion, and fit notes scatter across fittings, holds, and aftercare.
            </h2>
          </div>
          <div className="cq-still cq-still--scatter" data-cq-reveal aria-hidden="true">
            <div className="cq-note cq-note--a">Skin</div>
            <div className="cq-note cq-note--b">Occasion</div>
            <div className="cq-note cq-note--c">Fit</div>
            <div className="cq-note cq-note--d">Hold</div>
          </div>
        </div>
      </section>

      {/* Flow DNA: skin → hero → try-on → bag (+ abilities) */}
      <section
        id="cq-flow"
        data-cq-mod
        className="cq-mod cq-mod--flow"
        aria-labelledby="cq-flow-h"
      >
        <div className="cq-mod__inner">
          <h2 id="cq-flow-h" className="cq-eyebrow" data-cq-reveal>
            From skin to bag
          </h2>

          <ol className="cq-pipeline" aria-label="Concierge flow">
            <li className="cq-flow__step" data-cq-reveal>
              <div className="cq-flow__still cq-flow__still--skin" aria-hidden="true">
                <span className="cq-swatch cq-swatch--warm" />
                <span className="cq-swatch cq-swatch--cool" />
                <span className="cq-tag">Occasion</span>
              </div>
              <p className="cq-flow__label">Skin + occasion</p>
            </li>
            <li className="cq-flow__arrow" aria-hidden="true" data-cq-reveal>
              →
            </li>
            <li className="cq-flow__step" data-cq-reveal>
              <div className="cq-flow__still cq-flow__still--hero" aria-hidden="true">
                <div className="cq-sku">
                  <span className="cq-sku__mark" />
                  <span className="cq-sku__bar" />
                </div>
              </div>
              <p className="cq-flow__label">One hero</p>
            </li>
            <li className="cq-flow__arrow" aria-hidden="true" data-cq-reveal>
              →
            </li>
            <li className="cq-flow__step" data-cq-reveal>
              <div className="cq-flow__still cq-flow__still--tryon" aria-hidden="true">
                <div className="cq-tryon">
                  <span className="cq-tryon__figure" />
                  <span className="cq-tryon__frame" />
                </div>
              </div>
              <p className="cq-flow__label">Try-on</p>
            </li>
            <li className="cq-flow__arrow" aria-hidden="true" data-cq-reveal>
              →
            </li>
            <li className="cq-flow__step" data-cq-reveal>
              <div className="cq-flow__still cq-flow__still--bag" aria-hidden="true">
                <div className="cq-bag">
                  <span className="cq-bag__row" />
                  <span className="cq-bag__row cq-bag__row--mid" />
                  <span className="cq-bag__row cq-bag__row--short" />
                </div>
              </div>
              <p className="cq-flow__label">Bag draft</p>
            </li>
          </ol>

          <ul className="cq-abilities">
            <li data-cq-reveal>
              <span className="cq-abilities__n">01</span>
              <p>Map skin and occasion to one hero SKU.</p>
            </li>
            <li data-cq-reveal>
              <span className="cq-abilities__n">02</span>
              <p>Stage a try-on still for the stylist desk.</p>
            </li>
            <li data-cq-reveal>
              <span className="cq-abilities__n">03</span>
              <p>Draft the bag for human review before pay.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Gate — human at pay */}
      <section
        id="cq-gate"
        data-cq-mod
        className="cq-mod cq-mod--gate"
        aria-labelledby="cq-gate-h"
      >
        <div className="cq-mod__inner cq-mod__inner--split">
          <div className="cq-mod__copy">
            <h2 id="cq-gate-h" className="cq-headline cq-headline--sm" data-cq-reveal>
              Human at pay. A stylist approves; nothing charges without that person.
            </h2>
          </div>
          <div className="cq-still cq-still--pay" data-cq-reveal aria-hidden="true">
            <div className="cq-pay">
              <div className="cq-pay__bag">
                <span className="cq-pay__row" />
                <span className="cq-pay__row cq-pay__row--mid" />
              </div>
              <div className="cq-pay__gate">
                <span className="cq-pay__chip">Propose</span>
                <span className="cq-pay__arrow" />
                <span className="cq-pay__chip cq-pay__chip--approve">
                  Stylist
                </span>
                <span className="cq-pay__arrow" />
                <span className="cq-pay__chip cq-pay__chip--hold">Pay held</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Record */}
      <section
        id="cq-record"
        data-cq-mod
        className="cq-mod cq-mod--record"
        aria-labelledby="cq-record-h"
      >
        <div className="cq-mod__inner cq-mod__inner--split">
          <div className="cq-still cq-still--ticket" data-cq-reveal aria-hidden="true">
            <div className="cq-ticket">
              <div className="cq-ticket__chrome">
                <span />
                <span />
                <span />
              </div>
              <p className="cq-ticket__id">LUM-1042</p>
              <div className="cq-ticket__thread">
                <span className="cq-ticket__dot" />
                <span className="cq-ticket__bar cq-ticket__bar--wide" />
              </div>
              <div className="cq-ticket__thread">
                <span className="cq-ticket__dot" />
                <span className="cq-ticket__bar" />
              </div>
              <div className="cq-ticket__thread">
                <span className="cq-ticket__dot cq-ticket__dot--ink" />
                <span className="cq-ticket__bar cq-ticket__bar--mid" />
              </div>
            </div>
          </div>
          <div className="cq-mod__copy">
            <h2 id="cq-record-h" className="cq-headline cq-headline--sm" data-cq-reveal>
              Consult thread stays with ticket LUM-1042.
            </h2>
          </div>
        </div>
      </section>

      {/* Refusal */}
      <section
        id="cq-refusal"
        data-cq-mod
        className="cq-mod cq-mod--refusal"
        aria-labelledby="cq-refusal-h"
      >
        <div className="cq-mod__inner cq-mod__inner--refusal">
          <h2 id="cq-refusal-h" className="cq-eyebrow" data-cq-reveal>
            Refusal
          </h2>
          <p className="cq-headline cq-headline--sm" data-cq-reveal>
            Will not invent catalog SKUs. Will not charge without approval.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cq-cta"
        data-cq-mod
        className="cq-mod cq-mod--cta"
        aria-labelledby="cq-cta-h"
      >
        <div className="cq-mod__inner cq-mod__inner--cta">
          <h2 id="cq-cta-h" className="cq-headline" data-cq-reveal>
            Start a brief.
          </h2>
          <p className="cq-cta-wrap" data-cq-reveal>
            <Link href="/contact" className="home-cta">
              Start a brief.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
