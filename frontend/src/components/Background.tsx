/* eslint-disable qwik/jsx-img */
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import { component$ } from "@builder.io/qwik";

const Background = function ({
  children: content,
}: {
  children?: JSX.Element;
}) {
  return (
    <div class="relative overflow-hidden">
      <div class={["pointer-events-none absolute inset-0"]}>
        <div class="container p-0! mx-auto">
          <div class="container-shift-200px">
            <Illuminate />
          </div>
        </div>
      </div>

      {/* <div class="absolute inset-0 opacity-20 dark:op-5">
        <svg width="100%" height="100%">
          <filter id="svg_noise_background">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#svg_noise_background)"
          />
        </svg>
      </div> */}

      <div class="isolate">{content}</div>
    </div>
  );
};

export default Background;

const Illuminate = component$(function () {
  // const inverted = useSignal(false);

  return (
    <div class="relative isolate min-h-800px min-h-800px mix-blend-exclusion">
      <img
        id="background-pattern"
        src="/public/hov/shades.png"
        height={800}
        width={1200}
        class={[
          "max-w-initial absolute inset-0 z-3",
          "dark:mix-blend-difference",
        ]}
        loading="lazy"
        alt="background-pattern"
      />

      <div class="absolute inset-0 z-4 mix-blend-multiply dark:mix-blend-overlay">
        <img
          id="background-pattern"
          src="/public/hov/shades.png"
          style={{
            "mask-image": `url(/public/hov/selector.png)`,
            "-webkit-mask-image": `url(/public/hov/selector.png)`,
            "-webkit-mask-position-x": "-250px",
            "-webkit-mask-position-y": "-350px",
            "mask-position": "0px 0px",
            "mask-repeat": "no-repeat",
            "-webkit-mask-repeat": "no-repeat",
          }}
          height={800}
          width={1200}
          class={["max-w-initial"]}
          loading="lazy"
          alt="background-pattern"
        />
      </div>

      <div class="bg-white absolute w-full h-full inset-0" />
    </div>
  );
});
