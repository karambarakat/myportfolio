import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
    Link,
    routeLoader$,
    server$,
    type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import NotFound from "~/components/NotFound";
import markdown from "~/utils/markdown";
import Github from "~/../public/github.svg?jsx";
import Live from "~/../public/live.svg?jsx";
import styles from "~/components/markdown.module.css";
import type { ProjectFragment, ProjectMetaFragment } from "~/gql/graphql";
import fetchGraphql, { StrapiPicture } from "~/utils/fetchGraphql";
import { type Project, server_client } from "~/root";
import { ClientResponseError } from "pocketbase";
import { MoChevronRight } from "@qwikest/icons/monoicons";
import { DateTime } from "luxon";
import sanitize from "sanitize-html";
import { DisplayImage } from "..";

export const useProject = routeLoader$(async (ctx) => {
    let client = await server_client();
    let res = await client
        .collection("Project")
        .getFirstListItem(`slug="${ctx.params.slug}"`)
        .catch((e: ClientResponseError) => {
            // no way to catch notfound error?
            return e
        });

    if (res instanceof ClientResponseError) {
        console.error("error fetch /projects/:id", res);
        throw ctx.fail(404, { message: `Project with ${ctx.params.slug} not found` });
    }

    res.content = sanitize(res.content);
    res.summary = sanitize(res.summary);

    return res as any as Project
});
const CommonLayout = component$(
    ({ project }: { project: Project }) => {
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
                    <DisplayImage data={project} />
                </div>
                <h1 class="typo-h2 pb-0">{project.title}</h1>
                <p class="typo-dim">
                    created at{" "}
                    <time>
                        {DateTime.fromISO(project.created).toFormat("LLL dd yyyy")}
                    </time>
                </p>

                <div class="flex gap-3">
                    {project.github && (
                        <a target="_blank" href={project.github} class="a fill-as-a">
                            <Github
                                //@ts-ignore
                                height="16"
                                width="16"
                                class=" inline"
                            />{" "}
                            View Source Code
                        </a>
                    )}
                    {project.live && (
                        <a target="_blank" href={project.live} class="a fill-as-a">
                            <Live //@ts-ignore
                                height="16"
                                width="16"
                                class="inline"
                            />{" "}
                            View Live Code
                        </a>
                    )}
                </div>
                <Slot />
            </div>
        );
    },
);


export default component$(() => {
    const project = useProject();

    // unknown error
    if (!project.value?.created)
        return (
            <NotFound>
                <span>Project not found</span>
            </NotFound>
        );

    return (
        <div>
            <CommonLayout project={project.value } />
            <div
                class={styles.markdown}
                dangerouslySetInnerHTML={project.value.content}
            />
        </div>
    );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
    const query: string[] =
        (await fetchGraphql({
            query: /* GraphQL */ `
        query {
          projects {
            data {
              id
            }
          }
        }
      `,
        })
            .then((res) => res?.data?.projects?.data?.id)
            .catch(() => {
                return undefined;
            })) || [];

    return {
        params: query.map((id) => {
            return { slug: id };
        }),
    };
};

export const head: DocumentHead = ({ resolveValue, params }) => {
    const project = resolveValue(useProject);

    if (!project)
        return {
            title: "Project not found",
        };

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
