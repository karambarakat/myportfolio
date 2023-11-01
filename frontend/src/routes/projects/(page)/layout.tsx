import { Slot, component$, useTask$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { CommonLayout } from "~/components/layout/page";
import markdown from "~/components/markdown.module.css";
import type { ProjectMetaFragment } from "~/gql/graphql";
import { from_slug } from "./pictures";

export default component$(() => {
  const { frontmatter } = useDocumentHead();

  const location = useLocation();

  useTask$(() => {
    // server only code, because there is no `track` dependency
    const img = from_slug(location.url.pathname.split("/")[2]);

    if (img) {
      frontmatter.project.displayPicture = {
        data: {
          attributes: {
            url: img,
          },
        },
      } satisfies ProjectMetaFragment["displayPicture"];
    }
  });

  return (
    <div>
      <CommonLayout project={frontmatter.project as ProjectMetaFragment} />
      <div class={markdown.markdown}>
        <Slot />
      </div>
    </div>
  );
});
