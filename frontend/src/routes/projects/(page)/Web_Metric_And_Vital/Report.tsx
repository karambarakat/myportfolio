import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const height = useSignal<number | undefined>(0);
  return (
    <iframe
      onLoad$={(ev, elem) => {
        const element = elem.contentWindow as Window;
        if (!element) return;

        const styles = document.createElement("Style");
        styles.innerHTML = `
          html {
            overflow: hidden;
          }
          body {
            overflow: visible;
          }
          article.lh-root {
            background: transparent;
          }
          .lh-topbar {
            display: none!important;
          }
        `;

        element.document.head.appendChild(styles);
        height.value = element.document.body.scrollHeight || 0;

        element.document.addEventListener("click", () => {
          setTimeout(() => {
            height.value = element.document.body.scrollHeight || 0;
          }, 150);
        });
      }}
      style={{
        height: (height.value && height.value + 100 + "px") || "100vh",
        opacity: height.value ? 1 : 0,
      }}
      class="w-full min-h-full"
      src="/lighthouse.html"
    />
  );
});
