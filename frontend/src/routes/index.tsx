import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import PersonalImage from "/Personal_Image.jpg";

export default component$(() => {
  return (
    <>
      <Hero />
    </>
  );
});

function Hero() {
  return (
    <div class="pt-200px height:pt-25px">
      <div class="text-center">
        <h1 class="typo-h1">Hi 👋, My Name is Karam</h1>
        <h2 class="typo-h2 mb-8">I'm web developer based in the bay area</h2>
      </div>
      <div class="flex gap-8 items-start">
        <img
          class="hidden sm:block rounded-3"
          alt="image of me"
          src={PersonalImage}
          height={330}
          width={248}
        />
        <div class="text-center sm:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint
          aliquam excepturi assumenda recusandae modi consequatur. Enim eius
          voluptatibus cum ducimus illum magnam ex, non nesciunt, aspernatur
          exercitationem unde quia?
        </div>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero commodi ad
      qui, modi omnis a! Facere, laborum. Repudiandae accusamus quam illum?
      Magnam culpa a earum recusandae non vero vel rerum. Lorem ipsum dolor sit
      amet consectetur adip isicing elit. Libero commodi ad qui, modi omnis a!
      Facere, laborum. Repudiandae accusamus quam illum? Magnam culpa a earum
      recusandae non vero vel rerum. Lorem ipsum dolor sit amet consectetur
      adipisicing elit . Libero commodi ad qui, modi omnis a! Facere, laborum.
      Repudiandae accusamus quam illum? Magnam culpa a earum recusandae non vero
      vel rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
      commodi ad qui, modi omnis a! Facere, laborum. Repudiandae accusamus quam
      illum? Magnam culpa a earum recusandae non vero vel rerum. Lorem ipsum
      dolor sit amet consectetur adiparum recusandae non vero vel rerum. Lorem
      ipsum dolor sit amet consectetur adip isicing elit. Libero commodi ad qui,
      modi omnis a! Facere, laborum. Repudiandae accusamus quam illum? Magnam
      culpa a earum recusandae non vero vel rerum. Lorem ipsum dolor sit amet
      consectetur adipisicing elit . Libero commodi ad qui, modi omnis a!
      Facere, laborum. Repudiandae accusamus quam illum? Magnam culpa a earum
      recusandae non vero vel rerum. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Libero commodi ad qui, modi omnis a! Facere, laborum.
      Repudiandae accusamus quam illum? Magnam culpa a earum recusandae non vero
      vel rerum. Lorem ipsum dolor sit amet consectetur adiparum recusandae non
      vero vel rerum. Lorem ipsum dolor sit amet consectetur adip isicing elit.
      Libero commodi ad qui, modi omnis a! Facere, laborum. Repudiandae
      accusamus quam illum? Magnam culpa a earum recusandae non vero vel rerum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit . Libero commodi
      ad qui, modi omnis a! Facere, laborum. Repudiandae accusamus quam illum?
      Magnam culpa a earum recusandae non vero vel rerum. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Libero commodi ad qui, modi omnis a!
      Facere, laborum. Repudiandae accusamus quam illum? Magnam culpa a earum
      recusandae non vero vel rerum. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Libero commodi ad qui, modi omnis a! Facere, laborum.
      Repudiandae accusamus quam illum? Magnam culpa a earum recusandae non vero
      vel rerum. Lorem ipsum dolor sit amet consectetur adi pisicing elit.
      Libero commodi ad qui, modi omnis a! Facere, laborum. Repudiandae
      accusamus quam illum? Magnam culpa a earum recusandae non vero vel rerum.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero commodi ad
      qui, modi omnis a! Facere, laborum. Repudiandae accusamus quam illum?
      Magnam culpa a earum recusandae non vero vel rerum.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero commodi ad
      qui, modi omnis a! Facere, laborum. Repudiandae accusamus quam illum?
      Magnam culpa a earum recusandae non vero vel rerum.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero commodi ad
      qui, modi omnis a! Facere, laborum. Repudiandae accusamus quam illum?
      Magnam culpa a earum recusandae non vero vel rerum.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero commodi ad
      qui, modi omnis a! Facere, laborum. Repudiandae accusamus quam illum?
      Magnam culpa a earum recusandae non vero vel rerum.
      <br />
    </div>
  );
}

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
