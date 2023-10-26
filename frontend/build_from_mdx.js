// @ts-check
// look for all files named index.mdx in src/routes/projects/(page)
// and read the frontmatter (yaml) and converted to json
// and save that file to src/routes/projects/(page)/index.json

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const glob = require("glob");
const prettier = require("prettier");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const globPromise = promisify(glob);

const ROOT = path.join(__dirname, ".");
const PROJECTS_DIR = path.join(ROOT, "src/routes/projects/(page)");
const PROJECTS_INDEX_FILE = path.join(PROJECTS_DIR, "data.ts");

const mdxFiles = glob.sync(`${PROJECTS_DIR}/**/*.mdx`);

const yup = require("yup");
const schema = yup.object().shape({
  title: yup.string().required(),
  updatedAt: yup.date().required(),
  createdAt: yup.date().required(),
  summary: yup.string().required(),
  skills: yup.array().of(yup.string()),
  github: yup.string(),
  displayPicture: yup.string(),
  live: yup.string(),
  slug: yup.string().required(),
});

const type = `
export type FrontMatter = {
  title: string
  updatedAt: string
  createdAt: string
  summary: string
  skills?: string[]
  displayPicture?: string
  github?: string
  live?: string
  slug: string
}
`;

const caseToSnake = (str) => {
  return str.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`);
};

function ValidateData(data, location) {
  if (!data.project) {
    throw new Error("Project data is missing in " + location);
  }

  // add slug
  const slug = location.split("/").slice(-2)[0];
  data.project.slug = caseToSnake(slug);

  // validate data
  try {
    schema.validateSync(data.project);
  } catch (e) {
    throw new Error("Project data is invalid in " + location + "\n" + e);
  }

  return data.project;
}

async function main() {
  const projects = [];

  for (const file of mdxFiles) {
    const mdxSource = await readFile(file, "utf8");
    const { data } = matter(mdxSource);

    const project = ValidateData(data, file);

    projects.push(project);
  }

  const projectsIndex = JSON.stringify(projects);

  // convert to typescript file with `as never` and "// this is auto generated file"
  const dataFile = `// this is auto generated file
  ${type}
export default ${projectsIndex} as FrontMatter[];
`;

  const projectIndexFormate = prettier.format(dataFile, {
    parser: "typescript",
  });

  // const projectIndexFormate = prettier.format(projectsIndex, {
  //   parser: "",
  // });

  await writeFile(PROJECTS_INDEX_FILE, await projectIndexFormate);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
