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
          <div className="gate-chip">Propose</div>
          <div className="gate-arrow" aria-hidden="true" />
          <div className="gate-chip gate-chip--approve">Approve</div>
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
        <p className="job-title-meta">
          One painful workflow. One agent. A human gate.
        </p>
      </div>
    </div>
  );
}

function showStatic(root: HTMLElement) {
  root.classList.remove("story-film--motion");
  gsap.set(
    root.querySelectorAll(
      ".story-beat, .story-stage-layer, .story-chapter__stage, [data-scene-copy]",
    ),
    { clearProps: "transform,opacity,visibility", autoAlpha: 1 },
  );
}

export function StoryScenes({ productName, scenes }: StoryScenesProps) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

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
            showStatic(root);
            return;
          }

          root.classList.add("story-film--motion");

          const chapter = root.querySelector<HTMLElement>(".story-chapter");
          const stage = root.querySelector<HTMLElement>(".story-chapter__stage");
          const beats = gsap.utils.toArray<HTMLElement>(".story-beat");
          const layers = gsap.utils.toArray<HTMLElement>(".story-stage-layer");

          if (!chapter || beats.length === 0) return;

          // Stage shell always present — never black out the chapter.
          if (stage) gsap.set(stage, { autoAlpha: 1 });

          gsap.set(beats, { autoAlpha: 0, y: 18 });
          gsap.set(beats[0], { autoAlpha: 1, y: 0 });

          if (layers.length) {
            gsap.set(layers, { autoAlpha: 0 });
            gsap.set(layers[0], { autoAlpha: 1 });
          }

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: chapter,
              start: "top top",
              // Five copy beats × ~80–90% viewport → one long pin runway.
              end: "+=420%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          const hold = 0.85;
          const cross = 0.55;

          for (let i = 0; i < beats.length; i++) {
            // Linger on the current idea.
            tl.to({}, { duration: hold });

            if (i < beats.length - 1) {
              tl.to(
                beats[i],
                { autoAlpha: 0, y: -14, duration: cross },
                ">",
              );
              tl.fromTo(
                beats[i + 1],
                { autoAlpha: 0, y: 18 },
                { autoAlpha: 1, y: 0, duration: cross },
                "<",
              );

              if (layers[i] && layers[i + 1]) {
                tl.to(layers[i], { autoAlpha: 0, duration: cross }, "<");
                tl.fromTo(
                  layers[i + 1],
                  { autoAlpha: 0, scale: 0.985 },
                  { autoAlpha: 1, scale: 1, duration: cross },
                  "<",
                );
              }
            }
          }

          // Final hold so CTA stays readable before unpin.
          tl.to({}, { duration: hold });

          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh);
          if (document.fonts?.ready) {
            void document.fonts.ready.then(() => refresh());
          }

          return () => {
            window.removeEventListener("load", refresh);
            root.classList.remove("story-film--motion");
          };
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef, dependencies: [productName, scenes] },
  );

  return (
    <main
      id="main"
      ref={rootRef}
      className="story-film"
      aria-label={productName}
    >
      <div className="story-chapter">
        <div className="story-chapter__inner">
          <div className="story-chapter__copy">
            {scenes.map((scene, index) => {
              const isCta = scene.beat === "cta";
              const headingId = `${scene.id}-h`;
              const HeadingTag = index === 0 ? "h1" : "h2";

              return (
                <div
                  key={scene.id}
                  id={scene.id}
                  className={
                    isCta ? "story-beat story-beat--cta" : "story-beat"
                  }
                  aria-labelledby={headingId}
                >
                  <HeadingTag
                    id={headingId}
                    className="story-headline"
                    data-scene-copy
                  >
                    {scene.line}
                  </HeadingTag>
                  {isCta ? (
                    <p className="home-cta-wrap" data-scene-copy>
                      <Link href="/contact" className="home-cta">
                        Start a brief.
                      </Link>
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="story-chapter__stage" aria-hidden="true">
            <div className="story-stage-chrome">
              <span className="story-stage-chrome__label">{productName}</span>
            </div>
            <div className="story-stage-stack">
              {scenes.map((scene) => (
                <div
                  key={`still-${scene.id}`}
                  className="story-stage-layer"
                  data-story-still={scene.beat}
                >
                  <Still beat={scene.beat} productName={productName} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
