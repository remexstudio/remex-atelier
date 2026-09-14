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
  gsap.set(
    root.querySelectorAll(
      ".mr-still, .mr-mail-stack, .mr-pwn, .mr-pwn__lane, .mr-dual, .mr-dual__col, .mr-packet",
    ),
    {
      clearProps: "transform,opacity,visibility",
      autoAlpha: 1,
    },
  );
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
              <span className="mr-desk__chip">Never auto-publish</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain — overnight mail stack, not a split */}
      <section
        id="mr-pain"
        data-mr-mod
        className="mr-mod mr-mod--pain"
        aria-labelledby="mr-pain-h"
      >
        <div className="mr-mod__inner mr-mod__inner--mail">
          <h2 id="mr-pain-h" className="mr-headline mr-headline--sm" data-mr-reveal>
            Overnight mail arrives without a single readable brief.
          </h2>
          <div className="mr-mail-stack" data-mr-reveal aria-hidden="true">
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
      </section>

      {/* Grammar 1: P / W / N triage lanes */}
      <section
        id="mr-flow"
        data-mr-mod
        className="mr-mod mr-mod--flow"
        aria-labelledby="mr-flow-h"
      >
        <div className="mr-mod__inner mr-mod__inner--pwn">
          <h2 id="mr-flow-h" className="mr-eyebrow" data-mr-reveal>
            Triage before send
          </h2>
          <p className="mr-flow__label mr-flow__label--lead" data-mr-reveal>
            Priority / Watch / Noise
          </p>

          <div className="mr-pwn" aria-label="Morning Remex triage">
            <div className="mr-pwn__lane mr-pwn__lane--pri" data-mr-reveal>
              <span className="mr-triage__lane mr-triage__lane--pri">P</span>
              <p className="mr-pwn__name">Priority</p>
              <div className="mr-thread mr-thread--a">
                <span className="still-fact">Needs ops</span>
              </div>
              <div className="mr-thread mr-thread--b">
                <span className="still-fact still-fact--muted">Escalate</span>
              </div>
            </div>
            <div className="mr-pwn__lane mr-pwn__lane--watch" data-mr-reveal>
              <span className="mr-triage__lane mr-triage__lane--watch">W</span>
              <p className="mr-pwn__name">Watch</p>
              <div className="mr-thread mr-thread--c">
                <span className="still-fact still-fact--muted">Hold</span>
              </div>
            </div>
            <div className="mr-pwn__lane mr-pwn__lane--noise" data-mr-reveal>
              <span className="mr-triage__lane mr-triage__lane--noise">N</span>
              <p className="mr-pwn__name">Noise</p>
              <div className="mr-thread mr-thread--d">
                <span className="still-fact still-fact--muted">Archive</span>
              </div>
            </div>
          </div>

          <div className="mr-pwn__ability" data-mr-reveal>
            <span className="mr-abilities__n">01</span>
            <p>Sort threads into Priority, Watch, and Noise.</p>
          </div>
        </div>
      </section>

      {/* Grammar 2: dual-tone draft columns */}
      <section
        id="mr-gate"
        data-mr-mod
        className="mr-mod mr-mod--gate"
        aria-labelledby="mr-gate-h"
      >
        <div className="mr-mod__inner mr-mod__inner--dual">
          <p className="mr-flow__label mr-flow__label--lead" data-mr-reveal>
            Two-tone drafts
          </p>

          <div className="mr-dual">
            <div className="mr-dual__col mr-dual__col--a" data-mr-reveal>
              <span className="mr-operator__tag">Tone A</span>
              <span className="mr-tones__card mr-tones__card--a">Tone A</span>
              <p className="still-fact still-fact--muted">Operator</p>
            </div>
            <div className="mr-dual__col mr-dual__col--b" data-mr-reveal>
              <span className="mr-operator__tag">Tone B</span>
              <span className="mr-tones__card mr-tones__card--b">Tone B</span>
              <p className="still-fact still-fact--muted">Send held</p>
            </div>
          </div>

          <div className="mr-dual__ability" data-mr-reveal>
            <span className="mr-abilities__n">02</span>
            <p>Draft in two tones for the operator to choose.</p>
          </div>

          <div className="mr-pwn__flags" data-mr-reveal>
            <div className="mr-escalate">
              <span className="mr-escalate__flag">Escalate</span>
              <p className="still-fact">Human before send</p>
            </div>
            <p className="mr-flow__label">Escalate</p>
            <div className="mr-hold">
              <span className="mr-hold__lock" />
              <span className="mr-hold__label">Held</span>
            </div>
            <p className="mr-flow__label">Never auto-publish</p>
          </div>

          <div className="mr-dual__ability" data-mr-reveal>
            <span className="mr-abilities__n">03</span>
            <p>Escalate threads that need a human before send.</p>
          </div>

          <h2 id="mr-gate-h" className="mr-headline mr-headline--sm" data-mr-reveal>
            Never auto-publish. An operator edits before anything goes out.
          </h2>

          <div className="mr-operator__gate" data-mr-reveal aria-hidden="true">
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
      </section>

      {/* Record — linked morning packet strip */}
      <section
        id="mr-record"
        data-mr-mod
        className="mr-mod mr-mod--record"
        aria-labelledby="mr-record-h"
      >
        <div className="mr-mod__inner mr-mod__inner--packet">
          <h2 id="mr-record-h" className="mr-headline mr-headline--sm" data-mr-reveal>
            Brief, draft, and escalate decision stay linked.
          </h2>
          <div className="mr-packet mr-packet--linked" data-mr-reveal aria-hidden="true">
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
                <span className="mr-packet__key mr-packet__key--ink">Escalate</span>
                <span className="still-fact still-fact--ink">Human before send</span>
              </div>
            </div>
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
          <p className="mr-cta-wrap chapter-cta" data-mr-reveal>
            <Link href="/contact" className="home-cta">
              Start a brief.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
