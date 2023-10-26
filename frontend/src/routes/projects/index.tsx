import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { MoArrowLeft } from "@qwikest/icons/monoicons";
import ProjectSummary from "~/components/ProjectSummary";
import { Project } from "~/fragments";
import type { ProjectFragment } from "~/gql/graphql";
import fetchGraphql from "~/utils/fetchGraphql";

export const useProjects = routeLoader$(async () => {
  const query: ProjectFragment[] = await fetchGraphql({
    query: /* GraphQL */ `
      query GetAllProjects {
        projects {
          data {
            ...ProjectEntity
          }
        }
      }
      ${Project}
    `,
  }).then((res) => res.data.projects.data);

  console.log("need reconciliation", { query });

  return [...query];
});

export default component$(function () {
  const projects = useProjects();

  return (
    <div class="my-2">
      <div class="flex items-center gap-4 my-5 children:typo-lg">
        <MoArrowLeft />
        <Link href="/" class=" a cursor-pointer">
          <span>Go Home</span>
        </Link>
      </div>
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
