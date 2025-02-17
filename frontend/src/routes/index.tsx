import { Slot, component$, useId, useOnWindow, useSignal, useStylesScoped$, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import PocketBase from "pocketbase";
import { $ } from "@builder.io/qwik";
import { client } from "~/utils/pocketbase";
import { RequestEvent, server$, type DocumentHead } from "@builder.io/qwik-city";
import BgSelector from "~/../public/hov/selector.webp";
import BgShades from "~/../public/hov/shades.png";
import ScrollIcon from "~/../public/scroll.svg?jsx";
import Github from "~/../public/github.svg?jsx";
import Live from "~/../public/live.svg?jsx";
import { BsLinkedin, BsGithub } from "@qwikest/icons/bootstrap";
import { SiFreelancer } from "@qwikest/icons/simpleicons";
import { TbMailFilled } from "@qwikest/icons/tablericons";
import { routeLoader$ } from "@builder.io/qwik-city";
import { ProjectSummary } from "./projects";
import { ResumeAsA } from "./links/resume";
import { GithubAsA } from "./links/github";
import { fetchProjects, server_client } from "~/utils/pocketbase";

export default component$(() => {
    return (
        <div class="min-h-100vh flex flex-col">
            <div class="flex-1">
                <div class="relative">
                    <div class="absolute w-full overflow-hidden">
                        <div class="grid place-content-center w-screen h-screen overflow-hidden overflow-y-visible">
                            <div class="min-w-1200px min-h-800px">
                                <Illuminate />
                            </div>
                        </div>
                    </div>
                </div>

                <ScrollUp>
                    <Intro />
                </ScrollUp>

                <div class="mt--30vh height:mt-200px">
                    <AnimatedLine>
                        <AboutMe />
                    </AnimatedLine>
                </div>

                <Scroll />

                {/* 
                <CenterTitle>
                    <FeaturedProject />
                </CenterTitle> 
                */}

                <MoreProjects />
                <GetInContact />
            </div>
            <Footer />
        </div>)
});

const Intro = component$(() => {
    return (
        <div class="h-full p-2 text-center grid place-items-center place-content-center relative">
            <h1 class="typo-h1">Hi 👋, My Name is Karam</h1>
            <h2 class="typo-h2 mb-8">I'm full-stack developer based in the bay area</h2>
        </div>
    );
});

const AboutMe = component$(() => {
    return (
        <div
            class="
  max-w-95vw
  lt-xl:(m-auto grid justify-items-center text-center)
  "
        >
            <div
                class="
  base rounded p-5
    children:mb-2 text-6
    "
            >
                <div class="children:mb-5 w-500px text-6 max-w-screen">
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
                    <div class="flex flex-col gap-x-2">
                        <ResumeAsA >
                            View my Resume
                        </ResumeAsA>{" "}
                        <GithubAsA>
                            View my Github
                        </GithubAsA>
                    </div>
                </div>
            </div>
        </div>
    );
});

const FeaturedProject = component$(() => {
    return (
        <div class="text-center flex flex-col items-center">
            <h2 class="text-16">Featured Project</h2>
            <div class="flex flex-col items-center">
                <p class="max-w-600px text-8 font-1 mb-2">
                    I made this project to learn more about web development and learn
                    about maintaining a large project with many moving parts.
                </p>
                <div class="flex gap-6 text-6 font-3">
                    <a class="a" href="https://github.com/karambarakat/MoneyTracker">
                        <Github
                            //@ts-ignore
                            height="38"
                            width="38"
                            class="fill-as-a inline"
                        />{" "}
                        View Code
                    </a>
                    <a class="a" href="https://tracker.karam.page">
                        <Live //@ts-ignore
                            height="38"
                            width="38"
                            class="fill-as-a inline"
                        />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
});

export const useProjects = routeLoader$(async function() {
    // @ts-ignore
    let req = this as any as RequestEvent;
    let base_url = req?.env?.get("POCKETBASE_URL");
    let token = req?.env?.get("POCKETBASE_TOKEN");
    if (!base_url || !token) {
        throw new Error("var POCKETBASE_URL and P... should set");
    }

    return await fetchProjects(server_client({ base_url, token }));
})

export const MoreProjects = component$(() => {
    const projects = useProjects();

    return (
        <div>
            <h2 class="text-center text-16">All Projects</h2>
            <p class="text-center">
                list of all my projects, you can check live-preview or codebase
            </p>

            <div class="main-grid my-5 w-800px m-auto max-w-90vw py-10">
                {
                    projects.value?.map((pro) => {
                        return <ProjectSummary key={pro.slug} data={pro} />;
                    })
                }
            </div>
        </div>
    );
});

const GetInContact = component$(() => {
    return (
        <div class="h-[calc(100vh-90px)] grid place-content-center">
            <h2 class="text-center text-16">Get in Contact</h2>
            <p class="text-center text-8 font-1">
                I'm currently looking for jobs, you can say hi any time
            </p>
            <div class="flex gap-4 justify-center mt-4">
                {[
                    {
                        text: "Email",
                        href: "mailto:hi@karam.page",
                        Img: TbMailFilled,
                    },
                    {
                        text: "Github",
                        href: "https://github.com/karambarakat/myportfolio",
                        Img: BsGithub,
                    },
                    {
                        text: "Freelancer",
                        href: "https://www.freelancer.com/u/KennethBarakat",
                        Img: SiFreelancer,
                    },
                    {
                        text: "LinkedIn",
                        href: "https://www.linkedin.com/in/kenn-barakat-775931262/",
                        Img: BsLinkedin,
                    },
                ].map((item) => {
                    return (
                        <a
                            href={item.href}
                            class="cursor-pointer text-17px"
                            target="_blank"
                            key={item.text}
                        >
                            <div class="children:fill-blue children:text-blue" style={{ fontSize: "32px" }}>
                                <item.Img
                                    //@ts-ignore
                                    alt={item.text}
                                />
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
});

const CenterTitle = component$(() => {
    const id = useId();

    // useVisibleTask$(
    //   () => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.timeline({
    //       scrollTrigger: {
    //         scrub: true,
    //         pin: true,
    //         start: "top 0%",
    //         trigger: `#${id}`,
    //         end: "bottom 0%",
    //       },
    //     });
    //   },
    //   { strategy: "document-ready" },
    // );

    useStylesScoped$(`
    .root {
      margin-top: -150px;
    }
    h2 {
      margin-top: 150px;
    }
    .svg-container :global(svg) {
      position: absolute;
      
      z-index: -1;
    }
  `);

    return (
        <div id={id} class="root h-screen relative">
            <div class="bg ">
                <div class="grid justify-center base p-5 rounded-xl">
                    <Slot />
                </div>
            </div>
        </div>
    );
});

const ScrollUp = component$(() => {
    useStylesScoped$(`
    .slide-up-on-scroll {
      transition: transform 0.2s ease-out;
      transform: translateY(calc(var(--scroll) * -100%));
    }
    `);

    return (
        <div
            window:onScroll$={(_, target) => {
                const { y } = target.getBoundingClientRect();
                const scrollTop = window.document.documentElement.scrollTop;
                const val = (scrollTop - y) / window.innerHeight;

                if (val > 0.5) return;

                const child = target.firstChild as HTMLDivElement;
                child.style.setProperty("--scroll", `${val}`);
            }}
        >
            <div class="slide-up-on-scroll h-screen">
                <Slot />
            </div>
        </div>
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



// export const useProjects = routeLoader$(async () => {
//     // const query = await projectSummary();
//     // data.forEach((e) => {
//     //     const img = from_slug(e.slug);
//     //     if (img) {
//     //         e.displayPicture = {
//     //             data: {
//     //                 attributes: {
//     //                     url: img,
//     //                 },
//     //             },
//     //         };
//     //     }
//     // });
//     const data = await [];
//     return data as {}[];
// });

export const Footer = component$(() => {
    return (
        <>
            <div class="separator mt-8" />
            <footer class="text-center py-4">
                Built with Typescript, Qwik, UnoCss and Strapi | checkout the code on{" "}
                <a class="a" href="https://github.com/karambarakat/myportfolio">
                    Github
                </a>
            </footer>
        </>
    );
});

export const Illuminate = component$(function() {
    const ref = useSignal<HTMLDivElement>();
    const loc = useSignal({ x: -250, y: -350 });

    // useOnWindow(
    //     "mousemove",
    //     $((e) => {
    //         const event = e as MouseEvent;
    //
    //         if (!ref.value) return;
    //
    //         const svg = ref.value.getBoundingClientRect();
    //         loc.value = { x: event.clientX - svg.x, y: event.clientY - svg.y };
    //     }),
    // );

    useStylesScoped$(`
    #background-mouse-effect {
        mask-image: url(${BgSelector});
        mask-position: var(--x) var(--y);
        mask-repeat: no-repeat;

        -webkit-mask-image: url(${BgSelector});
        -webkit-mask-position: var(--x) var(--y);
        -webkit-mask-repeat: no-repeat;
    }
  `);

    return (
        <div
            // @ts-ignore
            style={{ speak: "none" }}
            role="presentation"
            tabIndex={-1}
            class={[
                "print:hidden relative isolate min-h-800px min-h-800px mix-blend-exclusion",
            ]}
        >
            <img
                alt=""
                aria-hidden="true"
                id="background-pattern"
                src={BgShades}
                height={800}
                width={1200}
                class={[
                    "max-w-initial absolute inset-0 z-3",
                    "dark:mix-blend-difference dark:invert",
                ]}
                loading="lazy"
            />

            <div class="absolute inset-0 z-4 mix-blend-multiply dark:mix-blend-overlay">
                <img
                    alt=""
                    aria-hidden="true"
                    ref={ref}
                    id="background-mouse-effect"
                    src={BgShades}
                    style={{
                        "--x": loc.value.x - 517 + "px",
                        "--y": loc.value.y - 517 + "px",
                    }}
                    height={800}
                    width={1200}
                    class={["max-w-initial"]}
                    loading="lazy"
                />
            </div>

            <div class="bg-white dark:bg-black absolute w-full h-full inset-0" />
        </div>
    );
});

const Scroll = component$(() => {
    const hide = useSignal(false);
    useOnWindow(
        "scroll",
        $(() => {
            hide.value = window.document.documentElement.scrollTop !== 0;
        }),
    );

    return (
        <div class={["fixed bottom-40px w-full flex justify-center pt-30px "]}>
            <ScrollIcon
                class={[
                    "w-40px h-40px fill-as-text stroke-as-text",

                    "animated animated-infinite animated-bounce animated-duration-1.75s",
                    "transition-transform,opacity",
                    hide.value
                        ? "op-0 animated-paused translate-y-15px"
                        : "animated-running",
                ]}
            />
        </div>
    );
});

const AnimatedLine = component$(() => {
    useStylesScoped$(`
  path {
    stroke-dasharray: 3223px;

    animation: rotate 1s linear infinite;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    
    animation-iteration-count: 1;
    animation-fill-mode: both;

    transform-origin: center;
  }

  @keyframes rotate {
    from {
      stroke-dashoffset: 3223px;
    }
  }
  `);

    useStylesScoped$(`

  @media (max-width: 1280px) {
    .content-spec {
      width: 95vw;
      margin: 2.5vw;
      left: 0;
      place-content:center;
    }
  }
  .content-spec > :global(*) {
    isolation: isolate;
    background: white;
    z-index: 10;
  }
  @media (prefers-color-scheme: dark) {
    .content-spec > :global(*) {
      background: black;
    }
  }
  `);

    return (
        <>
            <div class="flex justify-center translate-y--144px overflow-hidden">
                <div class="">
                    <svg
                        window:onScroll$={(_, target) => {
                            const y_t = target.getBoundingClientRect().y;
                            const y_w =
                                window.document.documentElement.getBoundingClientRect().y;
                            const y = y_t - y_w;

                            const top = window.document.documentElement.scrollTop;

                            const prog =
                                (top - y + target.clientHeight * 0.5) / target.clientHeight;

                            if (prog > 2.1) return;
                            (target as SVGElement).style.setProperty(
                                "--scroll",
                                String(prog - 0.3),
                            );
                        }}
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 2200"
                        preserveAspectRatio="xMidYMin meet"
                        width="1200"
                        height="2200"
                    >
                        <path
                            fill-opacity="0"
                            class="stroke-black dark:stroke-white stroke-as-text"
                            stroke-width="2"
                            d="m600 0c0 0 0 42 0 96 0 54-14.2 180.6-237.8 272-233.4 95.5-264.4 304.5-259.1 469.8 5.3 162.6 79.3 355.6 239 472.3 97.7 71.4 257.7 147.4 375.5 93.7 55.6-25.3 61.4-100.7 24.5-125.8-36.1-24.6-91.9-21.3-131.7 18-78 77.2-8.5 201.5-10.5 599.2-0.2 54.3 0.1 244.7 0.1 304.8"
                        />
                    </svg>
                    <div class="content-spec absolute w-1200px grid h-0 content-center items-center top-38%">
                        <Slot />
                    </div>
                </div>
            </div>
        </>
    );
});

const Line = component$(() => {
    // useStylesScoped$(`
    //   svg {
    //     position: absolute;
    //     width: 100%;
    //   }
    // `);

    return (
        <div class="flex justify-center overflow-hidden">
            <svg
                viewBox="0 0 1200 100"
                width="1200"
                class={["min-w-1200px max-w-1200px h-310px"]}
                preserveAspectRatio="none"
            >
                <path
                    d="m600 -15,v130"
                    fill-opacity="0"
                    class="stroke-black dark:stroke-white stroke-as-text"
                    stroke-width="2"
                />
            </svg>
        </div>
    );
});

const RotateAsYouGo = component$(() => {
    useOnWindow(
        "scroll",
        $(() => {
            document.body.style.setProperty(
                "--scroll",
                `${window.document.documentElement.scrollTop /
                (document.body.offsetHeight - window.innerHeight)
                }`,
            );
        }),
    );

    useStylesScoped$(`
    .rotate-as-you-go {
      animation: rotate 1s linear infinite;
      animation-play-state: paused;
      animation-delay: calc(var(--scroll) * -1s);
    
      animation-iteration-count: 1;
      animation-fill-mode: both;
  
      transform-origin: center;
  
    }
    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
    `);

    return (
        <div class="rotate-as-you-go">
            <Slot />
        </div>
    );
});
