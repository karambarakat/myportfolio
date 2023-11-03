import { component$ } from "@builder.io/qwik";
import PersonalImage from "../../public/Personal_Image.jpg";

import Github from "../../public/github.svg?jsx";
import Live from "../../public/live.svg?jsx";

import { BsLinkedin, BsGithub } from "@qwikest/icons/bootstrap";
import { SiFreelancer } from "@qwikest/icons/simpleicons";
import { TbMailFilled } from "@qwikest/icons/tablericons";

export const Hero = component$(function () {
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
});

// import { routeLoader$ } from "@builder.io/qwik-city";
// import data from "./projects/(page)/data";
// import { projectSummary } from "./projects";
// import type { ProjectMetaFragment } from "~/gql/graphql";
// import { from_slug } from "./projects/(page)/pictures";
// export const useProjects = routeLoader$(async () => {
//   const query = await projectSummary();
//   data.forEach((e) => {
//     const img = from_slug(e.slug);
//     if (img) {
//       e.displayPicture = {
//         data: {
//           attributes: {
//             url: img,
//           },
//         },
//       };
//     }
//   });
//   return [...query, ...data].filter(
//     // filter featured project
//     (e) => e?.slug !== "Tracker_Web_App",
//   ) as ProjectMetaFragment[];
// });

export const FeaturedProject = component$(function () {
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
});

export const MoreProjects = component$(() => {
  //   const projects = useProjects();

  return (
    <div>
      <h2 class="typo-h2 text-center">More Projects</h2>

      <div class="main-grid my-5">
        {/* {projects.value.map((pro) => {
          return <ProjectSummary key={pro.slug} data={pro} />;
        })} */}
      </div>
    </div>
  );
});

export const GetInContact = component$(function () {
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
});
