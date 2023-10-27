import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  routeLoader$,
  type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import NotFound from "~/components/NotFound";
import markdown from "~/utils/markdown";

import styles from "~/components/markdown.module.css";
import { CommonLayout } from "~/components/layout/page";
import type { ProjectFragment, ProjectMetaFragment } from "~/gql/graphql";
import { Project } from "~/fragments";
import fetchGraphql from "~/utils/fetchGraphql";

export const useProject = routeLoader$(async (ctx) => {
  const query: ProjectFragment = await fetchGraphql({
    variables: {
      id: ctx.params.slug,
    },
    query: /* GraphQL */ `
      query GetOneProject($id: String!) {
        projects(filters: { slug: { eq: $id } }) {
          data {
            attributes {
              ...Project
            }
          }
        }
      }

      ${Project}
    `,
  }).then((res) => res?.data?.projects?.data[0]?.attributes);

  if (!query)
    ctx.fail(404, { message: `project with ${ctx.params.slug} not found` });

  query.content = await markdown(query.content);

  return query;
});

export default component$(() => {
  const project = useProject();

  // console.log(project.value);

  // unknown error
  if (!project.value.createdAt)
    return (
      <NotFound>
        <span>Project not found</span>
      </NotFound>
    );

  return (
    <div>
      <CommonLayout project={project.value as ProjectMetaFragment} />
      <div
        class={styles.markdown}
        dangerouslySetInnerHTML={project.value.content}
      />
    </div>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const query: string[] = await fetchGraphql({
    query: /* GraphQL */ `
      query {
        projects {
          data {
            id
          }
        }
      }
    `,
  }).then((res) => res.data.projects.data.id);

  return {
    params: query.map((id) => {
      return { slug: id };
    }),
  };
};

export const head: DocumentHead = ({ resolveValue, params }) => {
  const project = resolveValue(useProject);
  return {
    title: `Project "${project.title}"`,
    meta: [
      project.summary
        ? {
            name: "description",
            content: project.summary,
          }
        : {},
      {
        name: "id",
        content: params.slug,
      },
    ],
  };
};
