import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  routeLoader$,
  type StaticGenerateHandler,
} from "@builder.io/qwik-city";
// import { useProjects } from "~/routes/projects";
import { projectsApi } from "~/api";
import NotFound from "~/components/NotFound";
import markdown from "~/utils/markdown";

import styles from "~/components/markdown.module.css";
import { CommonLayout } from "~/components/layout/page";

export const useProject = routeLoader$(async (ctx) => {
  const api = projectsApi().find((project) => project.slug === ctx.params.slug);
  if (!api) return ctx.fail(404, { notFound: "Project not found" });
  api.content = await markdown(api.content);
  return api;
});

export default component$(() => {
  const project = useProject();

  if (project.value.notFound)
    return (
      <NotFound>
        <span>Project not found</span>
      </NotFound>
    );

  if (!project.value.publishedAt) return <div>unknown error</div>;

  return (
    <div>
      <CommonLayout project={project.value} />
      <div
        class={styles.markdown}
        dangerouslySetInnerHTML={project.value.content}
      />
    </div>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: projectsApi().map(({ slug }) => {
      return { slug };
    }),
  };
};

export const head: DocumentHead = ({ resolveValue, params }) => {
  const project = resolveValue(useProject);
  return {
    title: `Project "${project.title}"`,
    meta: [
      {
        name: "description",
        content: project.summary,
      },
      {
        name: "id",
        content: params.slug,
      },
    ],
  };
};
