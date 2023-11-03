import { component$ } from "@builder.io/qwik";

const Footer = component$(() => {
  return (
    <>
      <div class="separator mt-8" />
      <footer class="text-center py-4">
        Built with Typescript, Qwik, UnoCss and Strapi | checkout the code on{" "}
        <a class="a" href="https://github.com/karambarakat/myportfolio">
          Github
        </a>
      </footer>
    </>
  );
});

export default Footer;
