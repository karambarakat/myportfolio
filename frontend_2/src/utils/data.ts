import { RequestEvent } from "@builder.io/qwik-city";
import PocketBase from "pocketbase";
import * as v from "valibot";
import utils from "util"

export const collection_schema = v.object({
    created: v.string(),
    updated: v.string(),
    collectionId: v.string(),
    collectionName: v.string(),
    id: v.string(),
});
export const skill_schema = v.object({ title: v.string(), });
export const project_schema = v.object({ title: v.string(), });

export const all_projects = v.array(v.intersect([
    collection_schema,
    project_schema,
    v.object({
        expand: v.object({
            skills: v.array(v.intersect([
                collection_schema, skill_schema
            ]))
        })
    })
]));

export const get_all_projects = async (req: RequestEvent) => {
    let base_url = req?.env?.get("POCKETBASE_URL");
    let token = req?.env?.get("POCKETBASE_TOKEN");
    if (!base_url || !token) {
        throw new Error("var POCKETBASE_URL and POCKETBASE_TOKEN should be set");
    }

    const pb = new PocketBase(base_url);
    pb.authStore.save(token, null);

    let ret;
    try {
        ret = await pb.collection("Project").getFullList({ expand: "skills" });
    } catch (e) {
        // kind of errors:
        // - (I think) network error
        // - all 4xx and (I think) 5xx errors
        console.error("client error", e);
        throw new Error("client error");
    }

    let res = v.safeParse(all_projects, ret);

    if (res.success === false) {
        console.error(
            "type unsafety error",
            utils.inspect(res, { showHidden: false, depth: null }),
        );
        throw new Error("type unsafety error");
    }

    return res.output;
}
