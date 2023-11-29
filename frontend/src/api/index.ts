import GsapImage from "~/../public/portfolio_item_1.png";
import GulpImage from "~/../public/portfolio_item_2.webp";

export interface Project {
  id: string;
  title: string;
  slug: string;
  updatedAt: string;
  publishedAt: string;
  content: string;
  summary: string;
  skills: string[];
  github?: string;
  live?: string;
  displayPicture?: {
    src: string;
    type: string;
  };
}

export const projectsApi = () =>
  [
    {
      id: "1",
      title: "GSAP Landing Page",
      slug: "GSAP_Landing_Page",
      updatedAt: "2023-10-23T12:00:00+00:00",
      publishedAt: "2023-10-23T12:00:00+00:00",
      content: ` 
The "GSAP Landing Page" project is a contemporary web development endeavor that focuses on creating an engaging and visually appealing landing page through the use of the GreenSock Animation Platform, or GSAP. This project aims to showcase the power and versatility of GSAP in animating web elements to enhance user experience.

GSAP, known for its robust animation capabilities, plays a central role in this project. It is used to create dynamic and captivating animations that bring the landing page to life. This includes smooth transitions, eye-catching visuals, and interactive elements that draw the user's attention and make for a memorable browsing experience.

The landing page, designed with a modern and sleek aesthetic, serves as an ideal canvas to demonstrate the potential of GSAP. The animations applied to text, images, and other elements on the page add an element of interactivity and professionalism, leaving a lasting impression on visitors.

In essence, the "GSAP Landing Page" project is a creative showcase of how GSAP can be harnessed to build an animated, user-friendly landing page that stands out in the competitive world of web design. It's a testament to the power of modern web animation technologies in making web content more engaging and captivating.
`,
      summary: "modern landing page animated with GSAP",
      skills: ["GSAP", "React", "TypeScript"],
      github: "https://github.com/karambarakat/gsap-web",
      live: "https://gsap-web.vercel.app/",
      displayPicture: { src: GsapImage, type: "image/png" },
    },
    {
      id: "3",
      title: "Gulp-Handlebars-Express",
      slug: "Gulp_Handlebars_Express",
      updatedAt: "2023-10-23T12:00:00+00:00",
      publishedAt: "2023-10-23T12:00:00+00:00",
      content: `
The "Gulp-Handlebars-Express" project is a toy application that showcases the use of fundamental web technologies to create a simple yet functional web application. This project leverages three core components: Gulp, Handlebars, and Express, to demonstrate how these tools can work together harmoniously.

Gulp is used as the build system to automate various tasks such as compiling stylesheets, bundling JavaScript, and optimizing assets. This streamlines the development process and ensures that the application's resources are optimized for production.

Handlebars, a lightweight templating engine, is employed for rendering dynamic content. It allows for the creation of reusable templates and simplifies the process of displaying data on the web pages. This ensures a clean and maintainable separation of the application's logic and presentation.

Express, a popular Node.js web application framework, serves as the backend for the project. It handles routing, API endpoints, and other server-related tasks. This creates a full-stack application where Gulp takes care of the front-end, while Express manages the server-side functionality.

Overall, "Gulp-Handlebars-Express" is a basic web application that illustrates the synergy between these technologies, making it an excellent starting point for those looking to understand the foundations of web development.      
      `,
      summary: "toy app made with basic web technologies",
      skills: ["Gulp", "Handlebars", "Express"],
      github: "https://github.com/karambarakat/Gulp-Handlebars-Express-Stack",
      displayPicture: { src: GulpImage, type: "image/webp" },
    },
  ] as Project[];

// this may seems silly but
// it is important to call this function from the frontend (not just using GulpImage and GsapImage from the RouterLoader$)
// so the qwik ship these pictures to the frontend
export const FE = (src: string) => {
  return { [GulpImage]: GulpImage, [GsapImage]: GsapImage }[src];
};
