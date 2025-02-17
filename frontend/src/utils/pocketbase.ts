import PocketBase from "pocketbase";
import * as v from "valibot";
import sanitize from "sanitize-html";

export const client = new PocketBase(import.meta.env.POCKETBASE_URL);

const skill_schema = v.object({
    id: v.string(),
    title: v.string(),
});

const project_schema = v.object({
    collectionId: v.string(),
    collectionName: v.string(),
    id: v.string(),
    content: v.string(),
    title: v.string(),
    summary: v.string(),
    github: v.optional(v.string()),
    live: v.optional(v.string()),
    display_picture: v.optional(v.string()),
    slug: v.string(),
    created: v.string(),
    updated: v.string(),
    expand: v.object({
        skills: v.array(skill_schema),
    }),
});

const project_array_schema = v.array(project_schema);

export type Project = v.InferOutput<typeof project_schema>;

export const server_client = (input: { base_url: string, token: string }) => {
    let client = new PocketBase();

    client.baseURL = input.base_url;
    client.authStore.save(input.token);

    return client;
}

export const fetchProject = async (client: PocketBase, id: string) => {
    let ret = await client
        .collection("Project")
        .getFirstListItem(`slug = "${id}"`,
            {
                expand: "skills",
            });

    let res = v.safeParse(project_schema, ret);

    if (res.success === false) {
        console.log("fetchProjects", ret);
        console.error("inconsistent data", res);
        return null;
    }

    res.output.content = sanitize(res.output.content);
    res.output.summary = sanitize(res.output.summary);

    return res.output;
}
export const fetchProjects = async (client: PocketBase) => {
    let ret = await client
        .collection("Project")
        .getFullList({
            expand: "skills",
        } as any);

    let res = v.safeParse(project_array_schema, ret);

    if (res.success === false) {
        console.log("fetchProjects", ret);
        console.error("inconsistent data", res);
        return null;
    }

    for (let each of res.output) {
        each.content = sanitize(each.content);
        each.summary = sanitize(each.summary);
    }

    return res.output;
}
