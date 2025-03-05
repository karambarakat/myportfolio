import { component$ } from "@builder.io/qwik";
import { RequestEvent, routeLoader$ } from "@builder.io/qwik-city";
import { get_all_projects } from "~/utils/data";

export const use_query = routeLoader$(async function() {
    // @ts-ignore
    let req = this as any as RequestEvent;
    return get_all_projects(req)
});

export default component$(() => {
    const projects = use_query();
    return (
        <div>
            <h2 class="text-center text-16">All Projects</h2>
            <p class="text-center">
                list of all my projects, you can check live-preview or codebase
            </p>

            <div class="main-grid my-5 w-800px m-auto max-w-90vw py-10">
                {
                    projects.value.map((project) => {
                        return (
                            <div key={project.id}>
                                {project.title}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
});

