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
    title: "GSAP Landing Page",
    updatedAt: "2023-10-23T12:00:00.000Z",
    createdAt: "2023-10-23T12:00:00.000Z",
    summary: "modern landing page animated with GSAP",
    skills: {
      data: [
        { attributes: { title: "GSAP" } },
        { attributes: { title: "React" } },
        { attributes: { title: "TypeScript" } },
      ],
    },
    github: "https://github.com/karambarakat/gsap-web",
    live: "https://gsap-web.vercel.app/",
    slug: "GSAP_Landing_Page",
  },
  {
    title: "Gulp Handlebars Express",
    updatedAt: "2023-10-23T12:00:00.000Z",
    createdAt: "2023-10-23T12:00:00.000Z",
    summary: "toy app made with basic web technologies",
    skills: {
      data: [
        { attributes: { title: "Gulp" } },
        { attributes: { title: "Handlebars" } },
        { attributes: { title: "Express" } },
      ],
    },
    github: "https://github.com/karambarakat/Gulp-Handlebars-Express-Stack",
    slug: "Gulp_Handlebars_Express",
  },
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
  {
    title: "Google Lighthouse Performance",
    updatedAt: "2023-10-23T12:00:00.000Z",
    createdAt: "2023-10-23T12:00:00.000Z",
    summary: "google lighthouse report of my portfolio",
    skills: {
      data: [
        { attributes: { title: "Google Lighthouse" } },
        { attributes: { title: "Perfomance" } },
        { attributes: { title: "SEO" } },
      ],
    },
    slug: "Web_Metric_And_Vital",
  },
] satisfies ProjectMetaFragment[] as ProjectMetaFragment[];
