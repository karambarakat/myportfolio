import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";

import ScrollIcon from "../../../public/scroll.svg?jsx";

const Scroll = component$(() => {
  const hide = useSignal(false);
  useOnWindow(
    "scroll",
    $(() => {
      hide.value = window.document.documentElement.scrollTop !== 0;
    }),
  );

  return (
    <div class={["fixed bottom-40px w-full flex justify-center pt-30px "]}>
      <ScrollIcon
        class={[
          "w-40px h-40px fill-as-text stroke-as-text",

          "animated animated-infinite animated-bounce animated-duration-1.75s",
          "transition-transform,opacity",
          hide.value
            ? "op-0 animated-paused translate-y-15px"
            : "animated-running",
        ]}
      />
    </div>
  );
});

export default Scroll;
