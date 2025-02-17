import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
    Link,
    routeLoader$,
    type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import NotFound from "~/components/NotFound";
import Github from "~/../public/github.svg?jsx";
import Live from "~/../public/live.svg?jsx";
import styles from "~/components/markdown.module.css";
import { MoChevronRight } from "@qwikest/icons/monoicons";
import { DateTime } from "luxon";
import { DisplayImage } from "..";
import { fetchProject, fetchProjects, Project, server_client } from "~/utils/pocketbase";
import * as v from "valibot";

const params = v.object({
    slug: v.string(),
});


export const useProject = routeLoader$(async function() {
    // @ts-ignore
    let req = this as any as RequestEvent;
    let base_url = req?.env?.get("POCKETBASE_URL");
    let token = req?.env?.get("POCKETBASE_TOKEN");
    let id = v.parse(params, req?.params).slug;
    if (!base_url || !token) {
        throw new Error("var POCKETBASE_URL and P... should set");
    }

    return await fetchProject(server_client({ base_url, token }), id);
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
    if (!project.value)
        return (
            <NotFound>
                <span>Project not found</span>
            </NotFound>
        );

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

export const onStaticGenerate: StaticGenerateHandler = async function() {
    // @ts-ignore
    let req = this as any as RequestEvent;
    let base_url = req?.env?.get("POCKETBASE_URL");
    let token = req?.env?.get("POCKETBASE_TOKEN");
    if (!base_url || !token) {
        throw new Error("var POCKETBASE_URL and P... should set");
    }

    const query = await fetchProjects(server_client({ base_url, token }));

    if (!query) return { params: [] };

    return {
        params: query.map((id) => {
            return { slug: id.slug };
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
