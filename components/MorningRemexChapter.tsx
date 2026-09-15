"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import {
  ATTENTION,
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
      aria-label={ATTENTION.display}
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
          {ATTENTION.display}
        </h1>
        <p className="ex-seat" data-ex-reveal>
          {ATTENTION.seat}
        </p>
        <p className="ex-constraint" data-ex-reveal>
          {ATTENTION.constraint}
        </p>
      </header>

      <article
        id="ex-narrative"
        data-ex-mod
        className="ex-narrative"
        aria-label="Case"
      >
        {ATTENTION.narrative.map((paragraph) => (
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
                <div className="mr-mail-stack">
                  <div className="mr-thread mr-thread--a">
                    <span className="still-fact">Overnight</span>
                  </div>
                  <div className="mr-thread mr-thread--b">
                    <span className="still-fact still-fact--muted">No brief</span>
                  </div>
                  <div className="mr-thread mr-thread--c">
                    <span className="still-fact still-fact--muted">Unread</span>
                  </div>
                  <div className="mr-thread mr-thread--d">
                    <span className="still-fact still-fact--muted">Noise</span>
                  </div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {ATTENTION.stills[0].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="mr-cta-rail__lanes">
                  <div className="mr-cta-rail__lane mr-cta-rail__lane--pri">
                    <span className="mr-triage__lane mr-triage__lane--pri">
                      P
                    </span>
                    <p className="mr-pwn__name">Priority</p>
                  </div>
                  <div className="mr-cta-rail__lane mr-cta-rail__lane--watch">
                    <span className="mr-triage__lane mr-triage__lane--watch">
                      W
                    </span>
                    <p className="mr-pwn__name">Watch</p>
                  </div>
                  <div className="mr-cta-rail__lane mr-cta-rail__lane--noise">
                    <span className="mr-triage__lane mr-triage__lane--noise">
                      N
                    </span>
                    <p className="mr-pwn__name">Noise</p>
                  </div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {ATTENTION.stills[1].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="mr-dual">
                  <div className="mr-dual__col mr-dual__col--a">
                    <span className="mr-operator__tag">Tone A</span>
                    <span className="mr-tones__card mr-tones__card--a">
                      Tone A
                    </span>
                  </div>
                  <div className="mr-dual__col mr-dual__col--b">
                    <span className="mr-operator__tag">Tone B</span>
                    <span className="mr-tones__card mr-tones__card--b">
                      Tone B
                    </span>
                  </div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {ATTENTION.stills[2].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="mr-escalate">
                  <span className="mr-escalate__flag">Escalate</span>
                  <p className="still-fact">Human before send</p>
                </div>
                <div className="mr-hold">
                  <span className="mr-hold__lock" />
                  <span className="mr-hold__label">Held</span>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {ATTENTION.stills[3].caption}
              </figcaption>
            </figure>
          </li>
          <li data-ex-reveal>
            <figure className="ex-still">
              <div className="ex-still__frame" aria-hidden="true">
                <div className="mr-packet mr-packet--linked">
                  <p className="mr-packet__title">Morning packet</p>
                  <div className="mr-packet__beads">
                    <div className="mr-packet__row">
                      <span className="mr-packet__key">Brief</span>
                      <span className="still-fact">Overnight</span>
                    </div>
                    <div className="mr-packet__row">
                      <span className="mr-packet__key">Draft</span>
                      <span className="still-fact">Two tones</span>
                    </div>
                    <div className="mr-packet__row">
                      <span className="mr-packet__key mr-packet__key--ink">
                        Escalate
                      </span>
                      <span className="still-fact still-fact--ink">
                        Human before send
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="ex-still__caption">
                {ATTENTION.stills[4].caption}
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
