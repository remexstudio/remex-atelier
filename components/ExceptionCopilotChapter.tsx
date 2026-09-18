"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import { StoryDeskStill } from "@/components/StageStill";
import {
  EXAMPLE_CLOSER,
  EXCEPTION,
  INDEX_LABEL,
  START_A_BRIEF,
  STILL_BEAT_LABEL,
  STUDY_FOOTER,
} from "@/lib/selected-examples";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const REVEAL_SEL = "[data-ex-reveal]";

function showStatic(root: HTMLElement) {
  root.classList.remove("ex-case--motion");
  gsap.set(
    root.querySelectorAll(
      `${REVEAL_SEL}, .stage-still, .stage-still__panel, .ex-still__frame`,
    ),
    {
      clearProps: "transform,opacity,visibility",
      autoAlpha: 1,
    },
  );
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
        {EXCEPTION.narrative.map((paragraph, i) => (
          <div key={paragraph.slice(0, 48)} className="ex-narrative__block" data-ex-reveal>
            {EXCEPTION.headings[i] ? (
              <h2 className="ex-narrative__h">{EXCEPTION.headings[i]}</h2>
            ) : null}
            <p>{paragraph}</p>
          </div>
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
                <StoryDeskStill desk="exception" id="pile" />
              </div>
              <figcaption className="ex-still__caption">
                <span className="ex-still__beat">
                  {STILL_BEAT_LABEL[EXCEPTION.stills[0].beat]}
                </span>
                {EXCEPTION.stills[0].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <StoryDeskStill desk="exception" id="queue" />
              </div>
              <figcaption className="ex-still__caption">
                <span className="ex-still__beat">
                  {STILL_BEAT_LABEL[EXCEPTION.stills[1].beat]}
                </span>
                {EXCEPTION.stills[1].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <StoryDeskStill desk="exception" id="policy" />
              </div>
              <figcaption className="ex-still__caption">
                <span className="ex-still__beat">
                  {STILL_BEAT_LABEL[EXCEPTION.stills[2].beat]}
                </span>
                {EXCEPTION.stills[2].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <StoryDeskStill desk="exception" id="note" />
              </div>
              <figcaption className="ex-still__caption">
                <span className="ex-still__beat">
                  {STILL_BEAT_LABEL[EXCEPTION.stills[3].beat]}
                </span>
                {EXCEPTION.stills[3].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <StoryDeskStill desk="exception" id="timeline" />
              </div>
              <figcaption className="ex-still__caption">
                <span className="ex-still__beat">
                  {STILL_BEAT_LABEL[EXCEPTION.stills[4].beat]}
                </span>
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
          <Link href="/contact" className="home-cta cta-pill">
            {START_A_BRIEF}
          </Link>
        </p>
      </section>
    </main>
  );
}
