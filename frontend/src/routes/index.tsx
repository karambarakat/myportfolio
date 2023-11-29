import {
  Slot,
  component$,
  useId,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Scroll from "./landing_page_components/Scroll";
import FollowLine, { Line } from "./landing_page_components/FollowLine";
import { Illuminate } from "~/components/Background";
import Footer from "./Footer";

import Github from "~/../public/github.svg?jsx";
import Live from "~/../public/live.svg?jsx";

export default component$(() => {
  return (
    <div>
      <Hero />
    </div>
  );
});

const Hero = component$(() => {
  return (
    <div class="relative">
      <div class="absolute w-full overflow-x-hidden">
        <div class="grid place-content-center w-screen h-screen overflow-hidden">
          <div class="min-w-1200px min-h-800px mt--20vh">
            <Illuminate />
          </div>
        </div>
      </div>
      <ScrollUp>
        <div class="h-screen p-2 text-center grid place-items-center place-content-center relative">
          <h1 class="typo-h1">Hi 👋, My Name is Karam</h1>
          <h2 class="typo-h2 mb-8">I'm web developer based in the bay area</h2>
        </div>
      </ScrollUp>

      {/* <div class="svg">
        <Line />
      </div> */}
      <FollowLine>
        <MidMessage />
      </FollowLine>

      <Scroll />
      <CenterTitle>
        <div class="text-center grid place-items-center">
          <h2 class="text-16">Featured Project</h2>
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
      </CenterTitle>

      <MoreProjects />
      <GetInContact />
      <Footer />
    </div>
  );
});

const MidMessage = component$(() => {
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
        <div class="children:mb-2 w-500px text-6 max-w-screen">
          <p>
            Hi I’m Karam, I’m a self-taught web developer and I love building
            elegant websites using state-of-art technologies.
          </p>
          <p>
            I'm looking for job opportunities in the bay area, if you're
            interested in hiring hit me up.
          </p>
          <div class="flex flex-col gap-x-2">
            <a
              href="https://docs.google.com/document/d/183Y16BAD9LEBbe_eKvB0JbRpgaxE9xZ0VXy5f31Wews/"
              class="a"
            >
              View my Resume
            </a>{" "}
            <a href="https://github.com/karambarakat" class="a">
              View my Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CenterTitle = component$(() => {
  const id = useId();

  useVisibleTask$(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: true,
          start: "top 77%",
          trigger: `#${id}`,
          end: "+=100%",
        },
      });
      tl.fromTo(
        `#${id} .svg-container svg`,
        {
          height: "0vh",
          ease: "power4.out",
        },
        {
          top: "-33vh",
          height: "133vh",
        },
      );
      // gsap.timeline({
      //   scrollTrigger: {
      //     scrub: true,
      //     pin: true,
      //     start: "top 30%",
      //     trigger: `#${id}`,
      //     end: "+=100%",
      //   },
      // });
    },
    { strategy: "document-ready" },
  );

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
      <div class="bg">
        {/* <div class="svg-container">
          <Line />
        </div> */}
        <div class="grid justify-center base p-5 rounded-xl">
          <span>
            <Slot />
          </span>
        </div>
      </div>
    </div>
  );
});

const ScrollUp = component$(() => {
  // for the sake of simplicity, this components works only for
  // elements that are at the top of the page
  useStylesScoped$(`
    .slide-up-on-scroll {
      transition: transform 0.2s ease-out;
      transform: translateY(calc(var(--scroll) * -100%));
    }
    `);

  return (
    <div
      class="slide-up-on-scroll"
      window:onScroll$={(_, target) => {
        const val =
          window.document.documentElement.scrollTop / window.innerHeight;
        if (val > 0.5) return;
        target.style.setProperty("--scroll", `${val}`);
      }}
    >
      <Slot />
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

import { BsLinkedin, BsGithub } from "@qwikest/icons/bootstrap";
import { SiFreelancer } from "@qwikest/icons/simpleicons";
import { TbMailFilled } from "@qwikest/icons/tablericons";

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
              class="cursor-pointer "
              target="_blank"
              key={item.text}
            >
              <div>
                <item.Img class="text-4xl fill-as-a a" alt={item.text} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
});

import { routeLoader$ } from "@builder.io/qwik-city";
import data from "./projects/(page)/data";
import { projectSummary } from "./projects";
import type { ProjectMetaFragment } from "~/gql/graphql";
import { from_slug } from "./projects/(page)/pictures";
import ProjectSummary from "~/components/ProjectSummary";
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
  return [...query, ...data].filter(
    // filter featured project
    (e) => e?.slug !== "Tracker_Web_App",
  ) as ProjectMetaFragment[];
});
export const MoreProjects = component$(() => {
  const projects = useProjects();

  return (
    <div>
      <h2 class="text-center text-16">More Projects</h2>

      <div class="main-grid my-5 w-1200px m-auto max-w-90vw py-10">
        {projects.value.map((pro) => {
          return <ProjectSummary key={pro.slug} data={pro} />;
        })}
      </div>
    </div>
  );
});
