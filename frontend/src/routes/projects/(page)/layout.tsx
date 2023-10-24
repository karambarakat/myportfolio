import { Slot, component$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";
import { CommonLayout } from "~/components/layout/page";
import markdown from "~/components/markdown.module.css";

export default component$(() => {
  const { frontmatter } = useDocumentHead();
  return (
    <div>
      <CommonLayout project={frontmatter.project as any} />
      <div class={markdown.markdown}>
        <Slot />
      </div>
    </div>
  );
});
