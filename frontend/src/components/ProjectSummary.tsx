import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";

import Github from "~/../public/github.svg?jsx";
import Live from "~/../public/live.svg?jsx";

import type { Project } from "~/api";
import DisplayImage from "./DisplayImage";

export default component$(function ({ data }: { data: Project }) {
  const nav = useNavigate();

  return (
    <div key={data.id}>
      <div
        role="link"
        onClick$={() => nav("/projects/" + data.slog)}
        class="cursor-pointer rounded-lg shadow-md overflow-hidden mb-2"
      >
        <DisplayImage src={data.displayPicture?.src} ratio={66} />
      </div>
      <Link href={"/projects/" + data.slog} class="typo-lg cursor-pointer">
        {data.title}
      </Link>
      <p class="typo-dim ">{data.summary}</p>
      <div>
        <div class="flex gap-2">
          {data.github && (
            <a target="_blank" href={data.github} class="a">
              <Github
                //@ts-ignore
                height="24"
                width="24"
                class="fill-as-a inline"
              />
            </a>
          )}
          {data.live && (
            <a target="_blank" href={data.live} class="a">
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