import {
  $,
  Slot,
  component$,
  useOnWindow,
  useStylesScoped$,
} from "@builder.io/qwik";

const RotateAsYouGo = component$(() => {
  useOnWindow(
    "scroll",
    $(() => {
      document.body.style.setProperty(
        "--scroll",
        `${
          window.document.documentElement.scrollTop /
          (document.body.offsetHeight - window.innerHeight)
        }`,
      );
    }),
  );

  useStylesScoped$(`
    .rotate-as-you-go {
      animation: rotate 1s linear infinite;
      animation-play-state: paused;
      animation-delay: calc(var(--scroll) * -1s);
    
      animation-iteration-count: 1;
      animation-fill-mode: both;
  
      transform-origin: center;
  
    }
    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
    `);

  return (
    <div class="rotate-as-you-go">
      <Slot />
    </div>
  );
});

export default RotateAsYouGo;
