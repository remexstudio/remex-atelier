"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import {
  EXAMPLE_CLOSER,
  EXCEPTION,
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
      aria-label={EXCEPTION.display}
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
          {EXCEPTION.display}
        </h1>
        <p className="ex-seat" data-ex-reveal>
          {EXCEPTION.seat}
        </p>
        <p className="ex-constraint" data-ex-reveal>
          {EXCEPTION.constraint}
        </p>
      </header>

      <article
        id="ex-narrative"
        data-ex-mod
        className="ex-narrative"
        aria-label="Case"
      >
        {EXCEPTION.narrative.map((paragraph) => (
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
                <div className="ec-still--pile">
                  <div className="ec-ticket ec-ticket--a">
                    <span className="ec-ticket__badge">EX-441</span>
                    <span className="still-fact">Refund hold</span>
                  </div>
                  <div className="ec-ticket ec-ticket--b">
                    <span className="ec-ticket__badge">EX-438</span>
                    <span className="still-fact still-fact--muted">Restock</span>
                  </div>
                  <div className="ec-ticket ec-ticket--c">
                    <span className="ec-ticket__badge">EX-429</span>
                    <span className="still-fact still-fact--muted">Policy</span>
                  </div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {EXCEPTION.stills[0].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <ol className="ec-queue ec-queue--ex">
                  <li className="ec-queue__item ec-queue__item--hot">
                    <span className="ec-queue__rank ec-rank__row ec-rank__row--hot">
                      1
                    </span>
                    <div className="ec-ticket ec-ticket--a">
                      <span className="ec-ticket__badge">EX-441</span>
                      <span className="still-fact">Refund hold</span>
                    </div>
                  </li>
                  <li className="ec-queue__item">
                    <span className="ec-queue__rank ec-rank__row ec-rank__row--mid">
                      2
                    </span>
                    <div className="ec-ticket ec-ticket--b">
                      <span className="ec-ticket__badge">EX-438</span>
                      <span className="still-fact still-fact--muted">
                        Restock
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
              <figcaption className="ex-still__caption">
                {EXCEPTION.stills[1].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="ec-cite">
                  <span className="ec-cite__mark">§4.2</span>
                  <p className="still-fact">Restock</p>
                </div>
                <div className="ec-lead__disposition">
                  <span className="ec-lead__cite">§4.2 · Restock window</span>
                  <p className="still-fact">Policy cite</p>
                  <span className="ec-lead__amount">Refund held</span>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {EXCEPTION.stills[2].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="ec-note">
                  <span className="ec-note__label">Case note</span>
                  <p className="still-fact">Draft</p>
                </div>
                <div className="ec-money">
                  <span className="ec-money__lock" />
                  <span className="ec-money__label">Human</span>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {EXCEPTION.stills[3].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="ec-spine">
                  <p className="ec-timeline__title">Case timeline</p>
                  <div className="ec-spine__row">
                    <span className="ec-timeline__dot" />
                    <span className="ec-timeline__key">Policy cite</span>
                    <span className="still-fact">§4.2</span>
                  </div>
                  <div className="ec-spine__row">
                    <span className="ec-timeline__dot" />
                    <span className="ec-timeline__key">Disposition</span>
                    <span className="still-fact">Refund held</span>
                  </div>
                  <div className="ec-spine__row">
                    <span className="ec-timeline__dot ec-timeline__dot--ink" />
                    <span className="ec-timeline__key ec-timeline__key--ink">
                      Decision
                    </span>
                    <span className="still-fact still-fact--ink">Ops lead</span>
                  </div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {EXCEPTION.stills[4].caption}
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
