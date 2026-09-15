"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import {
  DEMAND,
  EXAMPLE_CLOSER,
  INDEX_LABEL,
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
      aria-label={DEMAND.display}
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
          {DEMAND.display}
        </h1>
        <p className="ex-seat" data-ex-reveal>
          {DEMAND.seat}
        </p>
        <p className="ex-constraint" data-ex-reveal>
          {DEMAND.constraint}
        </p>
      </header>

      <article
        id="ex-narrative"
        data-ex-mod
        className="ex-narrative"
        aria-label="Case"
      >
        {DEMAND.narrative.map((paragraph) => (
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
                <div className="cq-scatter-field cq-scatter-field--ex">
                  <div className="cq-note cq-note--a">Skin</div>
                  <div className="cq-note cq-note--b">Occasion</div>
                  <div className="cq-note cq-note--c">Fit</div>
                  <div className="cq-note cq-note--d">Hold</div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {DEMAND.stills[0].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="cq-sku">
                  <p className="still-fact">Hero</p>
                  <p className="still-fact still-fact--muted">One SKU</p>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {DEMAND.stills[1].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="cq-tryon">
                  <span className="cq-tryon__figure" />
                  <span className="cq-tryon__frame" />
                </div>
                <p className="still-fact">Try-on</p>
              </div>
              <figcaption className="ex-still__caption">
                {DEMAND.stills[2].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="cq-pay">
                  <div className="cq-pay__bag">
                    <p className="still-fact still-fact--kicker">
                      Bag · before pay
                    </p>
                    <p className="still-fact still-fact--muted">Stylist gate</p>
                  </div>
                  <div className="cq-pay__gate">
                    <span className="cq-pay__chip">Propose</span>
                    <span className="cq-pay__arrow" />
                    <span className="cq-pay__chip cq-pay__chip--approve">
                      Stylist
                    </span>
                    <span className="cq-pay__arrow" />
                    <span className="cq-pay__chip cq-pay__chip--hold">
                      Pay held
                    </span>
                  </div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {DEMAND.stills[3].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="cq-ticket cq-ticket--ribbon">
                  <p className="still-fact still-fact--kicker">Consult thread</p>
                  <p className="cq-ticket__id">LUM-1042</p>
                  <div className="cq-ticket__thread">
                    <span className="still-fact">Skin</span>
                  </div>
                  <div className="cq-ticket__thread">
                    <span className="still-fact still-fact--muted">Fit note</span>
                  </div>
                  <div className="cq-ticket__thread">
                    <span className="still-fact">Held</span>
                  </div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {DEMAND.stills[4].caption}
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
