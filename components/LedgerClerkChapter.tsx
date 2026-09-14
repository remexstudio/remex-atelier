"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Product chapter motion: once-reveal only. No pin / no long scrub runway.
 * prefers-reduced-motion → showStatic; all module facts stay visible. */

const REVEAL_SEL = "[data-lc-reveal]";

function showStatic(root: HTMLElement) {
  root.classList.remove("lc-film--motion");
  gsap.set(root.querySelectorAll(REVEAL_SEL), {
    clearProps: "transform,opacity,visibility",
    autoAlpha: 1,
  });
  gsap.set(root.querySelectorAll(".lc-still, .lc-flow__step, .lc-pipeline"), {
    clearProps: "transform,opacity,visibility",
    autoAlpha: 1,
  });
}

export function LedgerClerkChapter() {
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

          root.classList.add("lc-film--motion");

          gsap.utils
            .toArray<HTMLElement>(root.querySelectorAll("[data-lc-mod]"))
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
            root.classList.remove("lc-film--motion");
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
      className="lc-film"
      aria-label="Ledger Clerk"
    >
      {/* Job + user */}
      <section
        id="lc-job"
        data-lc-mod
        className="lc-mod lc-mod--job"
        aria-labelledby="lc-job-h"
      >
        <div className="lc-mod__inner lc-mod__inner--job">
          <p className="lc-kicker" data-lc-reveal>
            Ledger Clerk
          </p>
          <h1 id="lc-job-h" className="lc-headline" data-lc-reveal>
            Controller desk answering month-end questions from a fixed corpus.
          </h1>
          <div className="lc-still lc-still--desk" data-lc-reveal aria-hidden="true">
            <div className="lc-desk">
              <span className="lc-desk__chip">Corpus</span>
              <span className="lc-desk__chip">Month-end</span>
              <span className="lc-desk__chip lc-desk__chip--ink">Controller</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section
        id="lc-pain"
        data-lc-mod
        className="lc-mod lc-mod--pain"
        aria-labelledby="lc-pain-h"
      >
        <div className="lc-mod__inner lc-mod__inner--split">
          <div className="lc-mod__copy">
            <h2 id="lc-pain-h" className="lc-headline lc-headline--sm" data-lc-reveal>
              The same source hunt buries the team every close.
            </h2>
          </div>
          <div className="lc-still lc-still--scatter" data-lc-reveal aria-hidden="true">
            <div className="lc-sheet lc-sheet--a">GL extract</div>
            <div className="lc-sheet lc-sheet--b">Trial balance</div>
            <div className="lc-sheet lc-sheet--c">Close memo</div>
            <div className="lc-sheet lc-sheet--d">Prior cite</div>
          </div>
        </div>
      </section>

      {/* Flow DNA: corpus cite → Propose package → Approve/Reject → audit log */}
      <section
        id="lc-flow"
        data-lc-mod
        className="lc-mod lc-mod--flow"
        aria-labelledby="lc-flow-h"
      >
        <div className="lc-mod__inner">
          <h2 id="lc-flow-h" className="lc-eyebrow" data-lc-reveal>
            Cite before books move
          </h2>

          <ol className="lc-pipeline" aria-label="Ledger Clerk flow">
            <li className="lc-flow__step" data-lc-reveal>
              <div className="lc-flow__still lc-flow__still--corpus" aria-hidden="true">
                <div className="lc-corpus">
                  <span className="lc-corpus__spine" />
                  <span className="lc-corpus__page" />
                  <span className="lc-corpus__page lc-corpus__page--mid" />
                </div>
              </div>
              <p className="lc-flow__label">Corpus cite</p>
            </li>
            <li className="lc-flow__arrow" aria-hidden="true" data-lc-reveal>
              →
            </li>
            <li className="lc-flow__step" data-lc-reveal>
              <div className="lc-flow__still lc-flow__still--propose" aria-hidden="true">
                <div className="lc-propose">
                  <span className="lc-propose__mark">Propose</span>
                  <span className="lc-propose__bar" />
                  <span className="lc-propose__bar lc-propose__bar--short" />
                </div>
              </div>
              <p className="lc-flow__label">Propose package</p>
            </li>
            <li className="lc-flow__arrow" aria-hidden="true" data-lc-reveal>
              →
            </li>
            <li className="lc-flow__step" data-lc-reveal>
              <div className="lc-flow__still lc-flow__still--gate" aria-hidden="true">
                <div className="lc-gate-pair">
                  <span className="lc-gate-pair__btn lc-gate-pair__btn--ok">Approve</span>
                  <span className="lc-gate-pair__btn lc-gate-pair__btn--no">Reject</span>
                </div>
              </div>
              <p className="lc-flow__label">Approve / Reject</p>
            </li>
            <li className="lc-flow__arrow" aria-hidden="true" data-lc-reveal>
              →
            </li>
            <li className="lc-flow__step" data-lc-reveal>
              <div className="lc-flow__still lc-flow__still--audit" aria-hidden="true">
                <div className="lc-audit-mini">
                  <span className="lc-audit-mini__row" />
                  <span className="lc-audit-mini__row lc-audit-mini__row--mid" />
                  <span className="lc-audit-mini__row lc-audit-mini__row--ink" />
                </div>
              </div>
              <p className="lc-flow__label">Audit log</p>
            </li>
          </ol>

          <ul className="lc-abilities">
            <li data-lc-reveal>
              <span className="lc-abilities__n">01</span>
              <p>Answer from the corpus only.</p>
            </li>
            <li data-lc-reveal>
              <span className="lc-abilities__n">02</span>
              <p>Attach citations before the answer is shown.</p>
            </li>
            <li data-lc-reveal>
              <span className="lc-abilities__n">03</span>
              <p>Package a Propose draft. Never Execute.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Gate — named controller */}
      <section
        id="lc-gate"
        data-lc-mod
        className="lc-mod lc-mod--gate"
        aria-labelledby="lc-gate-h"
      >
        <div className="lc-mod__inner lc-mod__inner--split">
          <div className="lc-mod__copy">
            <h2 id="lc-gate-h" className="lc-headline lc-headline--sm" data-lc-reveal>
              Approve or Reject by a named controller before books move.
            </h2>
          </div>
          <div className="lc-still lc-still--controller" data-lc-reveal aria-hidden="true">
            <div className="lc-controller">
              <div className="lc-controller__draft">
                <span className="lc-controller__cite">§12.4 · Close pack</span>
                <span className="lc-controller__bar" />
                <span className="lc-controller__bar lc-controller__bar--mid" />
              </div>
              <div className="lc-controller__gate">
                <span className="lc-controller__chip">Propose</span>
                <span className="lc-controller__arrow" />
                <span className="lc-controller__chip lc-controller__chip--name">
                  Controller
                </span>
                <span className="lc-controller__arrow" />
                <span className="lc-controller__chip lc-controller__chip--hold">
                  Books held
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Record */}
      <section
        id="lc-record"
        data-lc-mod
        className="lc-mod lc-mod--record"
        aria-labelledby="lc-record-h"
      >
        <div className="lc-mod__inner lc-mod__inner--split">
          <div className="lc-still lc-still--log" data-lc-reveal aria-hidden="true">
            <div className="lc-log">
              <div className="lc-log__chrome">
                <span />
                <span />
                <span />
              </div>
              <p className="lc-log__title">Audit log</p>
              <div className="lc-log__row">
                <span className="lc-log__key">Ask</span>
                <span className="lc-log__bar lc-log__bar--wide" />
              </div>
              <div className="lc-log__row">
                <span className="lc-log__key">Citation</span>
                <span className="lc-log__bar" />
              </div>
              <div className="lc-log__row">
                <span className="lc-log__key lc-log__key--ink">Decision</span>
                <span className="lc-log__bar lc-log__bar--mid" />
              </div>
            </div>
          </div>
          <div className="lc-mod__copy">
            <h2 id="lc-record-h" className="lc-headline lc-headline--sm" data-lc-reveal>
              Ask, citation, and decision sit in one audit log.
            </h2>
          </div>
        </div>
      </section>

      {/* Refusal */}
      <section
        id="lc-refusal"
        data-lc-mod
        className="lc-mod lc-mod--refusal"
        aria-labelledby="lc-refusal-h"
      >
        <div className="lc-mod__inner lc-mod__inner--refusal">
          <h2 id="lc-refusal-h" className="lc-eyebrow" data-lc-reveal>
            Refusal
          </h2>
          <p className="lc-headline lc-headline--sm" data-lc-reveal>
            Will not answer outside the corpus. Will not Execute ledger changes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="lc-cta"
        data-lc-mod
        className="lc-mod lc-mod--cta"
        aria-labelledby="lc-cta-h"
      >
        <div className="lc-mod__inner lc-mod__inner--cta">
          <h2 id="lc-cta-h" className="lc-headline" data-lc-reveal>
            Start a brief.
          </h2>
          <p className="lc-cta-wrap" data-lc-reveal>
            <Link href="/contact" className="home-cta">
              Start a brief.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
