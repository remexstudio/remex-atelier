"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const JOBS = [
  { href: "/work/atelier-concierge", label: "Atelier Concierge" },
  { href: "/work/ledger-clerk", label: "Ledger Clerk" },
  { href: "/work/morning-remex", label: "Morning Remex" },
  { href: "/work/exception-copilot", label: "Exception Copilot" },
] as const;

const MOTION_SEL =
  ".home-scene__stage, [data-scene-copy], [data-method-beat], [data-job-card], [data-gate-chip], [data-job-title]";

function showStatic() {
  gsap.set(MOTION_SEL, { clearProps: "transform,opacity,visibility", autoAlpha: 1 });
}

export function HomeScenes() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Prefer native scroll + static stack when motion is reduced or viewport is short.
      mm.add(
        {
          reduce: "(prefers-reduced-motion: reduce)",
          short: "(max-height: 519px)",
          pinOk:
            "(prefers-reduced-motion: no-preference) and (min-height: 520px)",
        },
        (context) => {
          const { reduce, short, pinOk } = context.conditions as {
            reduce: boolean;
            short: boolean;
            pinOk: boolean;
          };

          if (reduce || short || !pinOk) {
            showStatic();
            return;
          }

          const scenes = gsap.utils.toArray<HTMLElement>(".home-scene");

          scenes.forEach((scene) => {
            const stage = scene.querySelector<HTMLElement>(".home-scene__stage");
            const copy = scene.querySelectorAll<HTMLElement>("[data-scene-copy]");
            const beats = scene.querySelectorAll<HTMLElement>("[data-method-beat]");
            const cards = scene.querySelectorAll<HTMLElement>("[data-job-card]");
            const gate = scene.querySelectorAll<HTMLElement>("[data-gate-chip]");
            const jobTitle = scene.querySelector<HTMLElement>("[data-job-title]");

            const animated: HTMLElement[] = [];
            if (stage) animated.push(stage);
            copy.forEach((el) => animated.push(el));
            beats.forEach((el) => animated.push(el));
            cards.forEach((el) => animated.push(el));
            gate.forEach((el) => animated.push(el));
            if (jobTitle) animated.push(jobTitle);

            // Compositor-only prep; autoAlpha keeps unfocused until scrubbed in.
            gsap.set(animated, { autoAlpha: 0 });

            const tl = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: scene,
                start: "top top",
                // Keep pin short enough to read without scroll hijack.
                end: "+=90%",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            if (stage) {
              tl.fromTo(
                stage,
                { autoAlpha: 0, y: 28, scale: 0.98 },
                { autoAlpha: 1, y: 0, scale: 1, duration: 0.35 },
                0,
              );
            }

            if (copy.length) {
              tl.fromTo(
                copy,
                { autoAlpha: 0, y: 24 },
                { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.4 },
                0.1,
              );
            }

            if (jobTitle) {
              tl.fromTo(
                jobTitle,
                { autoAlpha: 0.22 },
                { autoAlpha: 1, duration: 0.5 },
                0.35,
              );
            }

            if (gate.length) {
              tl.fromTo(
                gate,
                { autoAlpha: 0, y: 16 },
                { autoAlpha: 1, y: 0, stagger: 0.18, duration: 0.35 },
                0.28,
              );
            }

            if (cards.length) {
              tl.fromTo(
                cards,
                { autoAlpha: 0, y: 20 },
                { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.35 },
                0.22,
              );
            }

            if (beats.length) {
              tl.fromTo(
                beats,
                { autoAlpha: 0, y: 22 },
                { autoAlpha: 1, y: 0, stagger: 0.24, duration: 0.4 },
                0.15,
              );
            }

            // Brief hold so the last beat stays readable before unpin.
            tl.to({}, { duration: 0.2 });
          });

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh);
          let fontsReady = false;
          if (document.fonts?.ready) {
            void document.fonts.ready.then(() => {
              fontsReady = true;
              refresh();
            });
          }

          return () => {
            window.removeEventListener("load", refresh);
            if (fontsReady) {
              // no-op; refresh already applied
            }
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
    <main id="main" ref={rootRef} className="home-film">
      {/* S1 — Promise */}
      <section id="home-s1" className="home-scene" aria-labelledby="home-s1-h">
        <div className="home-scene__inner">
          <div className="home-scene__copy">
            <h1 id="home-s1-h" className="home-headline" data-scene-copy>
              Agents, built to the brief.
            </h1>
            <p className="home-support" data-scene-copy>
              One workflow. One agent. A human still decides.
            </p>
          </div>
          <div className="home-scene__stage" aria-hidden="true">
            <div className="product-frame">
              <div className="product-frame__chrome">
                <span />
                <span />
                <span />
              </div>
              <div className="product-frame__body">
                <div className="product-frame__row product-frame__row--quiet" />
                <div className="product-frame__row product-frame__row--mid" />
                <div className="product-frame__row product-frame__row--short" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S2 — The job */}
      <section id="home-s2" className="home-scene" aria-labelledby="home-s2-h">
        <div className="home-scene__inner">
          <div className="home-scene__copy">
            <h2 id="home-s2-h" className="home-headline" data-scene-copy>
              Most tools answer.
            </h2>
            <p className="home-support" data-scene-copy>
              Ours is hired for one job.
            </p>
          </div>
          <div className="home-scene__stage" aria-hidden="true">
            <div className="product-frame product-frame--job">
              <p className="job-title-light" data-job-title>
                Job title
              </p>
              <p className="job-title-meta">One brief. One seat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* S3 — The gate */}
      <section id="home-s3" className="home-scene" aria-labelledby="home-s3-h">
        <div className="home-scene__inner">
          <div className="home-scene__copy">
            <h2 id="home-s3-h" className="home-headline" data-scene-copy>
              The agent proposes.
            </h2>
            <p className="home-support" data-scene-copy>
              A person approves. The record stays.
            </p>
          </div>
          <div className="home-scene__stage" aria-hidden="true">
            <div className="gate-still">
              <div className="gate-chip" data-gate-chip>
                Propose
              </div>
              <div className="gate-arrow" aria-hidden="true" />
              <div className="gate-chip gate-chip--approve" data-gate-chip>
                Approve
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S4 — Four jobs */}
      <section id="home-s4" className="home-scene" aria-labelledby="home-s4-h">
        <div className="home-scene__inner home-scene__inner--wide">
          <div className="home-scene__copy">
            <h2 id="home-s4-h" className="home-headline" data-scene-copy>
              Four jobs we know how to hire an agent for.
            </h2>
            <p className="home-support" data-scene-copy>
              Atelier Concierge. Ledger Clerk. Morning Remex. Exception Copilot.
            </p>
          </div>
          <div className="home-scene__stage home-jobs">
            {JOBS.map((job) => (
              <Link
                key={job.href}
                href={job.href}
                className="job-card"
                data-job-card
              >
                <span className="job-card__still" aria-hidden="true" />
                <span className="job-card__label">{job.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S5 — Method: three sequential beats */}
      <section id="home-s5" className="home-scene" aria-labelledby="home-s5-h">
        <div className="home-scene__inner home-scene__inner--method">
          <div className="home-scene__stage home-method">
            <h2 id="home-s5-h" className="home-headline" data-method-beat>
              Design the job.
            </h2>
            <p className="home-headline home-method__line" data-method-beat>
              Build the gate.
            </p>
            <p className="home-headline home-method__line" data-method-beat>
              Keep the record.
            </p>
          </div>
        </div>
      </section>

      {/* S6 — Close */}
      <section id="home-s6" className="home-scene" aria-labelledby="home-s6-h">
        <div className="home-scene__inner home-scene__inner--close">
          <div className="home-scene__copy">
            <h2 id="home-s6-h" className="home-headline" data-scene-copy>
              Start a brief.
            </h2>
            <p className="home-support" data-scene-copy>
              Tell us the painful workflow. We design the agent and the gate.
            </p>
            <p className="home-cta-wrap" data-scene-copy>
              <Link href="/contact" className="home-cta">
                Start a brief.
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
