import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { MoArrowLeft } from "@qwikest/icons/monoicons";
import ProjectSummary from "~/components/ProjectSummary";
import { ProjectEntity } from "~/fragments";
import type { ProjectEntityFragment, ProjectMetaFragment } from "~/gql/graphql";
import fetchGraphql, { StrapiPicture } from "~/utils/fetchGraphql";
import data from "./(page)/data";
import { from_slug } from "./(page)/pictures";

export const projectSummary = async () => {
  const query: ProjectEntityFragment[] =
    (await fetchGraphql({
      query: /* GraphQL */ `
        query GetAllProjects {
          projects {
            data {
              ...ProjectEntity
            }
          }
        }
        ${ProjectEntity}
      `,
    }).then((res) => {
      return res?.data?.projects?.data;
    })) || [];

  return query.map((e) => {
    StrapiPicture(e.attributes?.displayPicture);
    return e.attributes;
  });
};

export const useProjects = routeLoader$(async () => {
  const query = await projectSummary();

  data.forEach((e) => {
    const img = from_slug(e.slug);
    if (img) {
      e.displayPicture = {
        data: {
          attributes: {
            url: img,
          },
        },
      };
    }
  });

  return [...query, ...data] as ProjectMetaFragment[];
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
          return <ProjectSummary key={pro.slug} data={pro} />;
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
