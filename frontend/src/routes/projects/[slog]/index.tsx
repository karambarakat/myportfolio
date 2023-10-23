import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  Link,
  routeLoader$,
  type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { MoChevronRight } from "@qwikest/icons/monoicons";
// import { useProjects } from "~/routes/projects";
import { projectsApi } from "~/api";
import DisplayImage from "~/components/DisplayImage";

import Github from "~/../public/github.svg?jsx";
import Live from "~/../public/live.svg?jsx";

import { DateTime } from "luxon";
import NotFound from "~/components/NotFound";
import markdown from "~/utils/markdown";

import styles from "./styles.module.css";

export const useProject = routeLoader$(async (ctx) => {
  const api = projectsApi().find((project) => project.slog === ctx.params.slog);

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
      <div class="flex items-center gap-4 my-5 children:typo-lg">
        <Link href="/" class=" a cursor-pointer">
          <span>Home</span>
        </Link>
        <MoChevronRight />
        <Link href="/projects" class="a  cursor-pointer">
          <span>Projects</span>
        </Link>
      </div>
      <div class="rounded-xl pb-5">
        <DisplayImage src={project.value.displayPicture?.src} />
      </div>
      <h1 class="typo-h2 pb-0">{project.value.title}</h1>
      <p class="typo-dim">
        created at{" "}
        <time>
          {DateTime.fromISO(project.value.publishedAt).toFormat("LLL dd yyyy")}
        </time>
      </p>

      <div class="flex gap-3">
        {project.value.github && (
          <a target="_blank" href={project.value.github} class="a fill-as-a">
            <Github
              //@ts-ignore
              height="16"
              width="16"
              class=" inline"
            />{" "}
            View Source Code
          </a>
        )}
        {project.value.live && (
          <a target="_blank" href={project.value.live} class="a fill-as-a">
            <Live //@ts-ignore
              height="16"
              width="16"
              class="inline"
            />{" "}
            View Live Code
          </a>
        )}
      </div>

      <div
        class={styles.markdown}
        dangerouslySetInnerHTML={project.value.content}
      />
    </div>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: projectsApi().map(({ slog }) => {
      return { slog };
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
        content: params.slog,
      },
    ],
  };
};
