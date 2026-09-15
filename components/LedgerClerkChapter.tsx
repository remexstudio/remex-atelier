"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import {
  EXAMPLE_CLOSER,
  INDEX_LABEL,
  KNOWLEDGE,
  START_A_BRIEF,
  STUDY_FOOTER,
} from "@/lib/selected-examples";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const REVEAL_SEL = "[data-ex-reveal]";

function showStatic(root: HTMLElement) {
  root.classList.remove("ex-case--motion");
  gsap.set(root.querySelectorAll(REVEAL_SEL), {
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

          root.classList.add("ex-case--motion");

          gsap.utils
            .toArray<HTMLElement>(root.querySelectorAll("[data-ex-mod]"))
            .forEach((mod) => {
              const items = mod.querySelectorAll<HTMLElement>(REVEAL_SEL);
              if (!items.length) return;

              gsap.set(items, { autoAlpha: 0, y: 14 });

              gsap.to(items, {
                autoAlpha: 1,
                y: 0,
                duration: 0.48,
                ease: "power3.out",
                stagger: 0.05,
                scrollTrigger: {
                  trigger: mod,
                  start: "top 82%",
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
            root.classList.remove("ex-case--motion");
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
      className="ex-case"
      aria-label={KNOWLEDGE.display}
    >
      <header
        id="ex-context"
        data-ex-mod
        className="ex-context"
        aria-labelledby="ex-h"
      >
        <p className="ex-kicker" data-ex-reveal>
          {INDEX_LABEL}
        </p>
        <h1 id="ex-h" className="ex-display" data-ex-reveal>
          {KNOWLEDGE.display}
        </h1>
        <p className="ex-seat" data-ex-reveal>
          {KNOWLEDGE.seat}
        </p>
        <p className="ex-constraint" data-ex-reveal>
          {KNOWLEDGE.constraint}
        </p>
      </header>

      <article
        id="ex-narrative"
        data-ex-mod
        className="ex-narrative"
        aria-label="Case"
      >
        {KNOWLEDGE.narrative.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} data-ex-reveal>
            {paragraph}
          </p>
        ))}
      </article>

      <section
        id="ex-stills"
        data-ex-mod
        className="ex-stills"
        aria-labelledby="ex-stills-h"
      >
        <h2 id="ex-stills-h" className="ex-stills__title" data-ex-reveal>
          Stills
        </h2>
        <ol className="ex-stills__list">
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <ol className="lc-cite-stack lc-cite-stack--sources lc-cite-stack--ex">
                  <li className="lc-cite-stack__item">
                    <span className="lc-cite-stack__ref">§</span>
                    <div className="lc-sheet lc-sheet--a">GL extract</div>
                  </li>
                  <li className="lc-cite-stack__item">
                    <span className="lc-cite-stack__ref">§</span>
                    <div className="lc-sheet lc-sheet--b">Trial balance</div>
                  </li>
                  <li className="lc-cite-stack__item">
                    <span className="lc-cite-stack__ref">§</span>
                    <div className="lc-sheet lc-sheet--c">Close memo</div>
                  </li>
                  <li className="lc-cite-stack__item">
                    <span className="lc-cite-stack__ref">§</span>
                    <div className="lc-sheet lc-sheet--d">Prior cite</div>
                  </li>
                </ol>
              </div>
              <figcaption className="ex-still__caption">
                {KNOWLEDGE.stills[0].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="lc-corpus">
                  <span className="lc-corpus__spine" />
                  <div className="lc-corpus__pages">
                    <p className="still-fact">Corpus</p>
                    <p className="still-fact still-fact--muted">Cite</p>
                  </div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {KNOWLEDGE.stills[1].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="lc-propose">
                  <span className="lc-propose__mark">Propose</span>
                  <p className="still-fact">Never Execute</p>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {KNOWLEDGE.stills[2].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="lc-controller__gate">
                  <span className="lc-controller__chip">Propose</span>
                  <span className="lc-controller__arrow" />
                  <span className="lc-controller__chip lc-controller__chip--name">
                    Controller
                  </span>
                </div>
                <div className="lc-gate-pair">
                  <span className="lc-gate-pair__btn lc-gate-pair__btn--ok">
                    Approve
                  </span>
                  <span className="lc-gate-pair__btn lc-gate-pair__btn--no">
                    Reject
                  </span>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {KNOWLEDGE.stills[3].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="lc-register">
                  <p className="lc-log__title">Audit log</p>
                  <p className="still-fact still-fact--muted">§12.4</p>
                  <div className="lc-register__row">
                    <span className="lc-log__key">Ask</span>
                    <span className="still-fact">Month-end</span>
                  </div>
                  <div className="lc-register__row">
                    <span className="lc-log__key">Citation</span>
                    <span className="still-fact">Corpus cite</span>
                  </div>
                  <div className="lc-register__row">
                    <span className="lc-log__key lc-log__key--ink">Decision</span>
                    <span className="still-fact still-fact--ink">
                      Approve / Reject
                    </span>
                  </div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {KNOWLEDGE.stills[4].caption}
              </figcaption>
            </figure>
          </li>
        </ol>
      </section>

      <section
        id="ex-close"
        data-ex-mod
        className="ex-close"
        aria-labelledby="ex-close-h"
      >
        <p id="ex-close-h" className="ex-close__line" data-ex-reveal>
          {EXAMPLE_CLOSER}
        </p>
        <p className="ex-study" data-ex-reveal>
          {STUDY_FOOTER}
        </p>
        <p className="ex-cta chapter-cta" data-ex-reveal>
          <Link href="/contact" className="home-cta">
            {START_A_BRIEF}
          </Link>
        </p>
      </section>
    </main>
  );
}
