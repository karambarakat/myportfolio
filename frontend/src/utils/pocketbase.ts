import PocketBase from "pocketbase";
import * as v from "valibot";
import sanitize from "sanitize-html";
import {
    RequestEvent,
    server$,
} from "@builder.io/qwik-city";

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
    expand: v.any(),
});

const project_array_schema = v.array(project_schema);

export type Project = v.InferOutput<typeof project_schema>;

export const server_client = server$(async function() {
    let client = new PocketBase(import.meta.env.POCKETBASE_URL);
    let req = this as any as RequestEvent;
    let base_url = req?.env?.get("POCKETBASE_URL");
    let token = req?.env?.get("POCKETBASE_TOKEN");
    if (!base_url || !token) {
        throw new Error("var POCKETBASE_URL and P... should set");
    }
    client.baseURL = base_url;
    client.authStore.save(token);

    return client;
});

export const fetchProjects = server$(async function() {
    let client = await server_client();

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
});
