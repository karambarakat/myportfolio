import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import PersonalImage from "../../public/Personal_Image.jpg";

import Github from "../../public/github.svg?jsx";
import Live from "../../public/live.svg?jsx";

import { BsLinkedin, BsGithub } from "@qwikest/icons/bootstrap";
import { SiFreelancer } from "@qwikest/icons/simpleicons";
import { TbMailFilled } from "@qwikest/icons/tablericons";
import ProjectSummary from "~/components/ProjectSummary";
import data from "./projects/(page)/data";
import { projectCast } from "~/utils/frontMatter";
import { projectSummary } from "./projects";
import type { ProjectMetaFragment } from "~/gql/graphql";

export const useProjects = routeLoader$(async () => {
  const query = await projectSummary();

  return [
    ...query,
    ...data.map((e) => projectCast(e)),
  ] as ProjectMetaFragment[];
});

export default component$(() => {
  return (
    <>
      <Hero />
      <div class="separator my-8" />
      <FeaturedProject />
      <div class="separator my-8" />
      <MoreProjects />
      <div class="separator my-8" />
      <GetInContact />
    </>
  );
});

function Hero() {
  return (
    <div class="pt-200px height:pt-25px">
      <div class="text-center">
        <h1 class="typo-h1">Hi 👋, My Name is Karam</h1>
        <h2 class="typo-h2 mb-8">I'm web developer based in the bay area</h2>
      </div>
      <div class="flex gap-8 items-start">
        <img
          class="hidden sm:block rounded-3"
          alt="image of me"
          src={PersonalImage}
          height={330}
          width={248}
        />
        <div class="text-center sm:text-start children:mb-2">
          <p>
            Hi I’m Karam, I’m a self-taught web developer and I love building
            elegant products and websites using code and state-of-art
            technologies…
          </p>
          <p>
            I’m new to the US, I have experience working freelancing, now I
            can’t wait to have my first job in the Silicon Valley!
          </p>
          <p>
            I’m geared toward hard-work and growth, I enjoy learning and
            improving my work further and further.
          </p>
          <div class="flex gap-4">
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
}

function FeaturedProject() {
  return (
    <div>
      <h2 class="typo-h2 text-center">Featured Project</h2>
      <div class="children:mb-5">
        <p class="typo-lg">
          I made this project to learn more about web development and learn
          about maintaining a large project with many moving parts.
        </p>
        <div class="flex gap-4">
          <a class="a" href="https://github.com/karambarakat/MoneyTracker">
            <Github
              //@ts-ignore
              height="24"
              width="24"
              class="fill-as-a inline"
            />{" "}
            View Code
          </a>
          <a class="a" href="https://tracker.karam.page">
            <Live //@ts-ignore
              height="24"
              width="24"
              class="fill-as-a inline"
            />{" "}
            Live Demo
          </a>
        </div>
        <div>
          {[
            "React and Vite frontend ",
            "Rust backend ",
            "Postgres database",
            "Storybook isolated components",
            "Chromatic visual testing ",
            "Unit testing with Jest",
            "Playwright Integration test ",
            "Monorepo with Turbo",
            "CI/CD with Github Actions ",
            "Automatic deployment ",
            "JWT Authentication",
            "GraphQL API",
          ].map((item) => {
            return (
              <div class="typo-lg" key={item}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const MoreProjects = component$(() => {
  const projects = useProjects();

  return (
    <div>
      <h2 class="typo-h2 text-center">More Projects</h2>

      <div class="grid grid-cols-2 gap-4 my-5">
        {projects.value.map((pro) => {
          return <ProjectSummary key={pro.slug} data={pro} />;
        })}
      </div>
    </div>
  );
});

function GetInContact() {
  return (
    <div>
      <h2 class="typo-h2 text-center">Get in Contact</h2>
      <p class="text-center">
        I'm currently looking for jobs, you can say hi any time
      </p>
      <div class="flex gap-4 justify-center mt-8">
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
}

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
