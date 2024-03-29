import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";

import Github from "~/../public/github.svg?jsx";
import Live from "~/../public/live.svg?jsx";

import DisplayImage from "./DisplayImage";
import type { ProjectMetaFragment } from "~/gql/graphql";

const ProjectSummary = component$(function ({
  data,
}: {
  data: ProjectMetaFragment;
}) {
  const nav = useNavigate();

  return (
    <div>
      <div
        role="link"
        onClick$={() => nav("/projects/" + data.slug)}
        class="cursor-pointer rounded-lg shadow-md overflow-hidden mb-2"
      >
        <DisplayImage
          src={data.displayPicture?.data?.attributes?.url}
          ratio={66}
        />
      </div>
      <Link href={"/projects/" + data.slug} class="typo-lg cursor-pointer">
        {data.title}
      </Link>
      <p class="typo-dim ">{data.summary}</p>
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

export default ProjectSummary;
