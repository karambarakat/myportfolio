import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { MoArrowLeft } from "@qwikest/icons/monoicons";
import { projectsApi } from "~/api";
import ProjectSummary from "~/components/ProjectSummary";
import { Client, cacheExchange, fetchExchange, gql } from "@urql/core";
// import { frag } from "~/gql";

const client = new Client({
  url: "http://localhost:1337/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

export const useProjects = routeLoader$(async () => {
  const fragment = gql`
    fragment Project on ProjectEntity {
      id
      attributes {
        title
        content
        summary
        github
        live
        displayPicture {
          data {
            attributes {
              url
            }
          }
        }
        skills {
          data {
            attributes {
              title
            }
          }
        }
        createdAt
        updatedAt
      }
    }
  `;

  const query = gql`
    # Write your query or mutation here
    query GetAllProjects {
      projects {
        data {
          ...Project
        }
      }
    }

    ${fragment}
  `;

  const res = await client.query(query, {}).toPromise();

  return [...projectsApi(), ...res.data];
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
