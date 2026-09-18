"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import { StageStill } from "@/components/StageStill";
import {
  EXAMPLE_CLOSER,
  INDEX_LABEL,
  KNOWLEDGE,
  START_A_BRIEF,
  STILL_BEAT_LABEL,
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
        {KNOWLEDGE.narrative.map((paragraph, i) => (
          <div key={paragraph.slice(0, 48)} className="ex-narrative__block" data-ex-reveal>
            {KNOWLEDGE.headings[i] ? (
              <h2 className="ex-narrative__h">{KNOWLEDGE.headings[i]}</h2>
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
                <StageStill seat="Knowledge desk">
                <div className="media-stage media-stage--lc">
                  <p className="media-stage__kicker">Source hunt</p>
                  <p className="media-stage__fact">Same close, same hunt</p>
                  <ol className="media-stage__lanes">
                    <li className="media-stage__lane">
                      <span className="media-stage__mark">§</span>
                      <span>GL extract</span>
                    </li>
                    <li className="media-stage__lane">
                      <span className="media-stage__mark">§</span>
                      <span>Trial balance</span>
                    </li>
                    <li className="media-stage__lane">
                      <span className="media-stage__mark">§</span>
                      <span>Close memo</span>
                    </li>
                    <li className="media-stage__lane">
                      <span className="media-stage__mark">§</span>
                      <span>Prior cite</span>
                    </li>
                  </ol>
                </div>
                </StageStill>
              </div>
              <figcaption className="ex-still__caption">
                <span className="ex-still__beat">
                  {STILL_BEAT_LABEL[KNOWLEDGE.stills[0].beat]}
                </span>
                {KNOWLEDGE.stills[0].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <StageStill seat="Knowledge desk">
                <div className="media-stage media-stage--lc">
                  <p className="media-stage__kicker">Corpus</p>
                  <p className="media-stage__fact">Answer from the book</p>
                  <p className="media-stage__sub">Citations stay with the ask.</p>
                </div>
                </StageStill>
              </div>
              <figcaption className="ex-still__caption">
                <span className="ex-still__beat">
                  {STILL_BEAT_LABEL[KNOWLEDGE.stills[1].beat]}
                </span>
                {KNOWLEDGE.stills[1].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <StageStill seat="Knowledge desk">
                <div className="media-stage media-stage--lc">
                  <p className="media-stage__kicker">Package</p>
                  <p className="media-stage__fact">Propose ≠ Execute</p>
                  <p className="media-stage__sub">A draft the controller can reopen.</p>
                </div>
                </StageStill>
              </div>
              <figcaption className="ex-still__caption">
                <span className="ex-still__beat">
                  {STILL_BEAT_LABEL[KNOWLEDGE.stills[2].beat]}
                </span>
                {KNOWLEDGE.stills[2].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <StageStill seat="Knowledge desk">
                <div className="media-stage media-stage--lc">
                  <p className="media-stage__kicker">Controller</p>
                  <p className="media-stage__fact">Human before execute</p>
                  <p className="media-stage__sub">Approve or reject. Never silent write.</p>
                </div>
                </StageStill>
              </div>
              <figcaption className="ex-still__caption">
                <span className="ex-still__beat">
                  {STILL_BEAT_LABEL[KNOWLEDGE.stills[3].beat]}
                </span>
                {KNOWLEDGE.stills[3].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <StageStill seat="Knowledge desk">
                <div className="media-stage media-stage--lc">
                  <p className="media-stage__kicker">Audit log</p>
                  <p className="media-stage__fact">Ask · cite · decision</p>
                  <p className="media-stage__cite">§12.4</p>
                  <p className="media-stage__sub">Month-end. Corpus cite. Approve / Reject.</p>
                </div>
                </StageStill>
              </div>
              <figcaption className="ex-still__caption">
                <span className="ex-still__beat">
                  {STILL_BEAT_LABEL[KNOWLEDGE.stills[4].beat]}
                </span>
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
