// this is auto generated file

export type FrontMatter = {
  title: string;
  updatedAt: string;
  createdAt: string;
  summary: string;
  skills?: string[];
  displayPicture?: string;
  github?: string;
  live?: string;
  slug: string;
};

import type { ProjectMetaFragment } from "~/gql/graphql";
export default [
  {
    title: "Full Stack Web App Made With React, Rust And Postgress",
    updatedAt: "2023-10-23T12:00:00.000Z",
    createdAt: "2023-10-23T12:00:00.000Z",
    summary: "full stack web app made with React, Rust and Postgress",
    skills: {
      data: [
        { attributes: { title: "React" } },
        { attributes: { title: "Rust" } },
        { attributes: { title: "Postgress" } },
      ],
    },
    github: "https://github.com/karambarakat/MoneyTracker",
    live: "https://tracker.karam.page",
    slug: "Tracker_Web_App",
  },
] satisfies ProjectMetaFragment[] as ProjectMetaFragment[];
