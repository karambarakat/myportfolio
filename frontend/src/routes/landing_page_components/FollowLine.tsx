import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";

const FollowLine = component$(() => {
  // const length = useSignal<string>("3222.52");
  // const path = useSignal<SVGPathElement>();

  // useVisibleTask$(
  //   () => {
  //     length.value = path.value?.getTotalLength().toFixed(2) ?? "0";
  //   },
  //   { strategy: "document-ready" },
  // );

  useStylesScoped$(`
  path {
    stroke-dasharray: 3223px;

    animation: rotate 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    
    animation-iteration-count: 1;
    animation-fill-mode: both;

    transform-origin: center;
  }

  @keyframes rotate {
    from {
      stroke-dashoffset: 3223px;
    }
  }
  `);

  return (
    <>
      <div class="flex justify-center translate-y--144px overflow-hidden">
        <div class="relative">
          <svg
            window:onScroll$={(_, target) => {
              const prog =
                (window.document.documentElement.scrollTop -
                  window.innerHeight * 0.2) /
                (target.clientHeight - 100);
              if (prog > 1.1) return;
              (target as SVGElement).style.setProperty(
                "--scroll",
                String(prog),
              );
            }}
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 2200"
            preserveAspectRatio="xMidYMin meet"
            width="1200"
            height="2200"
          >
            <path
              // fill-rule="evenodd"
              fill-opacity="0"
              class="stroke-black dark:stroke-white stroke-as-text"
              stroke-width="2"
              d="m600 0c0 0 0 42 0 96 0 54-14.2 180.6-237.8 272-233.4 95.5-264.4 304.5-259.1 469.8 5.3 162.6 79.3 355.6 239 472.3 97.7 71.4 257.7 147.4 375.5 93.7 55.6-25.3 61.4-100.7 24.5-125.8-36.1-24.6-91.9-21.3-131.7 18-78 77.2-8.5 201.5-10.5 599.2-0.2 54.3 0.6 247.7 0.6 307.8"
            />
          </svg>
          <div class="absolute left-0 h-0 w-full grid content-center top-38% max-w-80vw">
            <div class="w-1200px">
              <Slot />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export const HeroLine = component$(() => {
  useStylesScoped$(`
    svg {
      position: absolute;
      width: 100%;
      top: calc(50vh + 50px);
      height: calc(50vh - 190px);
    }
  `);

  useStylesScoped$(`
    .animate-path {
      animation: rotate 1s linear infinite;
      animation-play-state: paused;
      animation-delay: calc(var(--scroll) * -1s);

      animation-iteration-count: 1;
      animation-fill-mode: both;
    }

    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
  `);

  return (
    <div class="flex justify-center ">
      <svg
        viewBox="0 0 1200 100"
        width="1200"
        class="min-w-1200px max-w-1200px h-310px"
        preserveAspectRatio="none"
      >
        <path
          d="m600 -15,v130"
          fill-opacity="0"
          class="stroke-black dark:stroke-white stroke-as-text"
          stroke-width="2"
        />
      </svg>
    </div>
  );
});

export default FollowLine;
