/* eslint-disable qwik/jsx-img */
import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";

const AspectRatio = component$(function ({ ratio }: { ratio: number }) {
  useStylesScoped$(`
       .ar-container {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: var(--ar-ratio);
        }
        .ar-container > :global(*) {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        } 
    `);

  return (
    <div class="ar-container" style={{ "--ar-ratio": ratio + "%" }}>
      <Slot />
    </div>
  );
});

export const Img = component$(function ({
  src,
  alt,
  class: className,
}: {
  src: string;
  alt?: string;
  class?: string;
}) {
  return <img class={className} src={src} alt={alt} />;
});

export const Svg = component$(function ({
  class: className,
}: {
  class?: string;
}) {
  useStylesScoped$(`
    .svg-container :global(svg) {
         width: 100%;
         height: 100%;
     }
 `);
  return (
    <div class={["svg-container", className]}>
      <Slot />
    </div>
  );
});

export default { Root: AspectRatio, Img, Svg };
