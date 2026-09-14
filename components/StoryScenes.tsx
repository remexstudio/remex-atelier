"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type StoryBeat = "pain" | "agent" | "gate" | "record" | "cta";

export type StoryScene = {
  id: string;
  beat: StoryBeat;
  /** Exact locked line from scroll-score (scene 5 uses Start a brief.) */
  line: string;
};

export type StoryScenesProps = {
  productName: string;
  scenes: readonly StoryScene[];
};

const MOTION_SEL =
  ".story-scene__stage, [data-scene-copy], [data-story-chip], .story-still";

function showStatic() {
  gsap.set(MOTION_SEL, { clearProps: "transform,opacity,visibility", autoAlpha: 1 });
}

function Still({ beat, productName }: { beat: StoryBeat; productName: string }) {
  if (beat === "pain") {
    return (
      <div className="story-still story-still--pain" aria-hidden="true">
        <div className="story-still__note story-still__note--a" />
        <div className="story-still__note story-still__note--b" />
        <div className="story-still__note story-still__note--c" />
        <div className="story-still__note story-still__note--d" />
      </div>
    );
  }

  if (beat === "agent") {
    return (
      <div className="story-still" aria-hidden="true">
        <div className="product-frame">
          <div className="product-frame__chrome">
            <span />
            <span />
            <span />
          </div>
          <div className="product-frame__body">
            <p className="story-still__agent-label">{productName}</p>
            <div className="product-frame__row product-frame__row--mid" />
            <div className="product-frame__row product-frame__row--quiet" />
            <div className="product-frame__row product-frame__row--short" />
          </div>
        </div>
      </div>
    );
  }

  if (beat === "gate") {
    return (
      <div className="story-still" aria-hidden="true">
        <div className="gate-still">
          <div className="gate-chip" data-story-chip>
            Propose
          </div>
          <div className="gate-arrow" aria-hidden="true" />
          <div className="gate-chip gate-chip--approve" data-story-chip>
            Approve
          </div>
        </div>
      </div>
    );
  }

  if (beat === "record") {
    return (
      <div className="story-still" aria-hidden="true">
        <div className="product-frame product-frame--record">
          <div className="product-frame__chrome">
            <span />
            <span />
            <span />
          </div>
          <div className="product-frame__body story-log">
            <div className="story-log__row">
              <span className="story-log__dot" />
              <span className="story-log__bar story-log__bar--wide" />
            </div>
            <div className="story-log__row">
              <span className="story-log__dot" />
              <span className="story-log__bar" />
            </div>
            <div className="story-log__row">
              <span className="story-log__dot story-log__dot--ink" />
              <span className="story-log__bar story-log__bar--mid" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="story-still story-still--cta" aria-hidden="true">
      <div className="product-frame product-frame--job">
        <p className="job-title-meta">One painful workflow. One agent. A human gate.</p>
      </div>
    </div>
  );
}

export function StoryScenes({ productName, scenes }: StoryScenesProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

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

          const sceneEls = gsap.utils.toArray<HTMLElement>(".story-scene");

          sceneEls.forEach((scene) => {
            const stage = scene.querySelector<HTMLElement>(".story-scene__stage");
            const copy = scene.querySelectorAll<HTMLElement>("[data-scene-copy]");
            const chips = scene.querySelectorAll<HTMLElement>("[data-story-chip]");

            const animated: HTMLElement[] = [];
            if (stage) animated.push(stage);
            copy.forEach((el) => animated.push(el));
            chips.forEach((el) => animated.push(el));
            gsap.set(animated, { autoAlpha: 0 });

            const tl = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: scene,
                start: "top top",
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

            if (chips.length) {
              tl.fromTo(
                chips,
                { autoAlpha: 0, y: 16 },
                { autoAlpha: 1, y: 0, stagger: 0.18, duration: 0.35 },
                0.28,
              );
            }

            tl.to({}, { duration: 0.2 });
          });

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh);
          if (document.fonts?.ready) {
            void document.fonts.ready.then(() => refresh());
          }

          return () => {
            window.removeEventListener("load", refresh);
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
    <main id="main" ref={rootRef} className="story-film">
      {scenes.map((scene, index) => {
        const isCta = scene.beat === "cta";
        const headingId = `${scene.id}-h`;

        return (
          <section
            key={scene.id}
            id={scene.id}
            className="story-scene"
            aria-labelledby={headingId}
          >
            <div
              className={
                isCta
                  ? "story-scene__inner story-scene__inner--cta"
                  : "story-scene__inner"
              }
            >
              <div className="story-scene__copy">
                {index === 0 ? (
                  <h1 className="story-kicker" data-scene-copy>
                    {productName}
                  </h1>
                ) : null}
                <h2 id={headingId} className="story-headline" data-scene-copy>
                  {scene.line}
                </h2>
                {isCta ? (
                  <p className="home-cta-wrap" data-scene-copy>
                    <Link href="/contact" className="home-cta">
                      Start a brief.
                    </Link>
                  </p>
                ) : null}
              </div>
              <div className="story-scene__stage">
                <Still beat={scene.beat} productName={productName} />
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
