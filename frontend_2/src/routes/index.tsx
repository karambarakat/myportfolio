import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { AboutMe, GetInContact, IndexStructure, Intro, Projects } from "~/components/landing_page";
// import { ResumeAsA } from "./links/resume";
// import { GithubAsA } from "./links/github";
import { get_all_projects } from "~/utils/data";
import {LinkAsA} from "./link/[link]";

export const use_query = routeLoader$(async function() {
    // @ts-ignore
    let req = this as any as RequestEvent;
    return get_all_projects(req)
});

export default component$(() => {
    const projects = use_query();
    return (
        <IndexStructure>
            <div q:slot="main">
                <Intro>
                    <span q:slot="h1">Hi 👋, My Name is Karam</span>
                    <span q:slot="h2">I'm full-stack developer based in the bay area</span>
                </Intro>
                <AboutMe>
                    <div q:slot="main">
                        <p>
                            Hi I’m Karam, I’m a full-stack developer developer currently finishing
                            computer engineering degree in SF State.
                        </p>
                        <p>
                            I love building elegant websites and web application using state-of-art technologies.
                        </p>
                        <p>
                            I'm looking for job opportunities in the bay area, if you're
                            interested in hiring, hit me up.
                        </p>
                    </div>
                    <div q:slot="call_of_action">
                        <LinkAsA name="Resume" >
                            View my Resume
                        </LinkAsA>{" "}
                        <LinkAsA name="Github">
                            View my Github
                        </LinkAsA>
                    </div>
                </AboutMe>
                <Projects projects={projects.value} />

                <GetInContact>
                    <span q:slot="message" >
                        I'm currently looking for jobs, you can say hi any time
                    </span>
                </GetInContact>
            </div>
            <div q:slot="footer">
                Built with Typescript, Qwik, UnoCss and Strapi | checkout the code on{" "}
                <a class="a" href="https://github.com/karambarakat/myportfolio">
                    Github
                </a>
            </div>
        </IndexStructure>
    );
});

export const head: DocumentHead = {
    title: "Welcome to my Portfolio",
    links: [{ href: "https://github.com/karambarakat", rel: "me" }],
    meta: [
        {
            name: "description",
            content: "Built with Typescript, Qwik, UnoCss and Strapi",
        },
    ],
};
