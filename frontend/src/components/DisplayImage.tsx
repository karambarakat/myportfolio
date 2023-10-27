import { component$ } from "@builder.io/qwik";
import AspectRatio from "./AspectRatio";

import NoPreview from "~/../public/noPreview.svg?raw";
import { FE } from "~/api";

const DisplayImage = component$(function ({
  src,
  ratio,
}: {
  src?: string;
  ratio?: number;
}) {
  console.log({ src });

  return (
    <div class="rounded-xl ">
      <AspectRatio.Root ratio={ratio || 66}>
        {!src ? (
          <AspectRatio.Svg>
            <div
              class="rounded-xl w-full h-full p-5 bg-white"
              dangerouslySetInnerHTML={NoPreview}
            />
          </AspectRatio.Svg>
        ) : (
          <AspectRatio.Img
            class="rounded-xl"
            src={FE(src)}
            alt="Display Image"
          />
        )}
      </AspectRatio.Root>
    </div>
  );
});

export default DisplayImage;
