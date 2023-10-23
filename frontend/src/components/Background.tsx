/* eslint-disable qwik/jsx-img */
import type { JSX } from "@builder.io/qwik/jsx-runtime";
import {
  $,
  component$,
  useOnWindow,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";

import BgSelector from "../../public/hov/selector.png";
import BgShades from "../../public/hov/shades.png";

const Background = function ({
  children: content,
}: {
  children?: JSX.Element;
}) {
  return (
    <div class="relative overflow-hidden">
      <div class="pointer-events-none absolute inset-0">
        <div class="container p-0! mx-auto">
          <div class="container-shift-200px">
            <Illuminate />
          </div>
        </div>
      </div>

      <div class="absolute inset-0 opacity-5">
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
      </div>

      <div class="isolate">{content}</div>
    </div>
  );
};

export default Background;

const Illuminate = component$(function () {
  const ref = useSignal<HTMLDivElement>();
  const loc = useSignal({ x: -250, y: -350 });

  useOnWindow(
    "mousemove",
    $((e) => {
      const event = e as MouseEvent;

      if (!ref.value) return;

      const svg = ref.value.getBoundingClientRect();
      loc.value = { x: event.clientX - svg.x, y: event.clientY - svg.y };
    })
  );

  useStylesScoped$(`
    #background-mouse-effect {
        mask-image: url(${BgSelector});
        mask-position: var(--x) var(--y);
        mask-repeat: no-repeat;

        -webkit-mask-image: url(${BgSelector});
        -webkit-mask-position: var(--x) var(--y);
        -webkit-mask-repeat: no-repeat;
    }
  `);

  return (
    <div class="relative isolate min-h-800px min-h-800px mix-blend-exclusion">
      <img
        id="background-pattern"
        src={BgShades}
        height={800}
        width={1200}
        class={[
          "max-w-initial absolute inset-0 z-3",
          "dark:mix-blend-difference",
        ]}
        loading="lazy"
      />

      <div class="absolute inset-0 z-4 mix-blend-multiply dark:mix-blend-overlay">
        <img
          ref={ref}
          id="background-mouse-effect"
          src={BgShades}
          style={{
            "--x": loc.value.x - 517 + "px",
            "--y": loc.value.y - 517 + "px",
          }}
          height={800}
          width={1200}
          class={["max-w-initial"]}
          loading="lazy"
        />
      </div>

      <div class="bg-white absolute w-full h-full inset-0" />
    </div>
  );
});
