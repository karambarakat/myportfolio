import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, routeLoader$, useDocumentHead } from "@builder.io/qwik-city";
import { MoArrowLeft } from "@qwikest/icons/monoicons";
import { projectsApi } from "~/api";
import ProjectSummary from "~/components/ProjectSummary";

export const useProjects = routeLoader$(() => {
  return projectsApi();
});

export default component$(function () {
  const projects = useProjects();

  // useDocumentHead({
  //   title
  // })

  return (
    <div class="my-2">
      <div class="flex items-center gap-4 my-5 children:typo-lg">
        <MoArrowLeft />
        <Link href="/" class=" a cursor-pointer">
          <span>Go Home</span>
        </Link>
      </div>
      {/* <Link
        href="../"
        class="a my-2 typo-lg flex gap-2 items-center cursor-pointer w-fit"
      >
        <MoArrowLeft />
        <span>Go Home</span>
      </Link> */}
      {/* <div class="separator" /> */}
      <div class="grid grid-cols-2 gap-4 mt-5">
        {projects.value.map((pro) => {
          return <ProjectSummary key={pro.id} data={pro} />;
        })}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Projects",
  links: [{ href: "https://github.com/karambarakat", rel: "me" }],
  meta: [
    {
      name: "description",
      content: "View all projects",
    },
  ],
};
