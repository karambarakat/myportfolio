import { component$ } from "@builder.io/qwik";
import sanitize from "sanitize-html";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, routeLoader$, useNavigate } from "@builder.io/qwik-city";
import { MoArrowLeft } from "@qwikest/icons/monoicons";
import NoPreview from "~/../public/noPreview.svg?raw";
import Github from "~/../public/github.svg?jsx";
import Live from "~/../public/live.svg?jsx";
import AspectRatio from "~/components/AspectRatio";
import { fetchProjects, Project } from "~/utils/pocketbase";

export const useProjectsOutputb__ = routeLoader$(async function() {
});

export const useProjects = routeLoader$(async function() {
    return await fetchProjects();
});


export default component$(function() {
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
                {projects.value?.map((pro) => {
                    return <ProjectSummary key={pro.slug} data={pro} />;
                })}
            </div>
        </div>
    );
});

type CollectionMeta = {
    collectionId: string,
    id: string,
};

export const DisplayImage = component$(
    (
        { data }: { data: CollectionMeta & { display_picture?: string } }
    ) => {
        let SafeNoPreview = sanitize(NoPreview);
        if (!import.meta.env.PUBLIC_IMG_URL) {
            console.error("PUBLIC_IMG_URL is not set in the environment variables.");
        }
        return (
            <div class="rounded-xl ">
                <AspectRatio.Root ratio={66}>
                    {!data.display_picture ? (
                        <AspectRatio.Svg>
                            <div
                                class="rounded-xl w-full h-full p-5 bg-white"
                                dangerouslySetInnerHTML={SafeNoPreview}
                            />
                        </AspectRatio.Svg>
                    ) : (
                        <AspectRatio.Img class="rounded-xl"
                            src={`${import.meta.env.PUBLIC_IMG_URL}/${data.collectionId}/${data.id}/${data.display_picture}`}
                            alt="Display Image"
                        />
                    )}
                </AspectRatio.Root>
            </div>
        );
    });

export const ProjectSummary = component$(function({
    data,
}: {
    data: Project;
}) {
    const nav = useNavigate();

    return (
        <div>
            <div
                role="link"
                onClick$={() => nav("/projects/" + data.slug)}
                class="cursor-pointer rounded-lg shadow-md overflow-hidden mb-2"
            >
                <DisplayImage data={data} />
            </div>
            <Link href={"/projects/" + data.slug} class="typo-lg cursor-pointer">
                {data.title}
            </Link>
            <p class="typo-dim "
                dangerouslySetInnerHTML={data.summary}
            />
            <div>
                <div class="flex gap-2">
                    {data.github && (
                        <a
                            target="_blank"
                            href={data.github}
                            class="a"
                            aria-label="view code on GitHub"
                        >
                            <Github
                                //@ts-ignore
                                height="24"
                                width="24"
                                class="fill-as-a inline"
                            />
                        </a>
                    )}
                    {data.live && (
                        <a
                            target="_blank"
                            href={data.live}
                            class="a"
                            aria-label="view live demo"
                        >
                            <Live //@ts-ignore
                                height="24"
                                width="24"
                                class="fill-as-a inline"
                            />
                        </a>
                    )}
                </div>
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
