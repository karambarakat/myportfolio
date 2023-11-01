import Github from "~/../public/github.svg?jsx";
import Live from "~/../public/live.svg?jsx";

import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MoChevronRight } from "@qwikest/icons/monoicons";
import DisplayImage from "../DisplayImage";
import { DateTime } from "luxon";
import type { ProjectMetaFragment } from "~/gql/graphql";

export const CommonLayout = component$(
  ({ project }: { project: ProjectMetaFragment }) => {
    console.log(project.displayPicture?.data?.attributes?.url);
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
          <DisplayImage src={project.displayPicture?.data?.attributes?.url} />
        </div>
        <h1 class="typo-h2 pb-0">{project.title}</h1>
        <p class="typo-dim">
          created at{" "}
          <time>
            {DateTime.fromISO(project.createdAt).toFormat("LLL dd yyyy")}
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
