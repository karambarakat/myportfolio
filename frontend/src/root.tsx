import { component$ } from "@builder.io/qwik";
import {
    QwikCityProvider,
    RequestEvent,
    routeLoader$,
    RouterOutlet,
    server$,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import sanitize from "sanitize-html";
import "tailwindcss-preflight/preflight.css";
import "virtual:uno.css";
import PocketBase from "pocketbase";
import { RecordModel } from "pocketbase";

export const client = new PocketBase(import.meta.env.POCKETBASE_URL);

export type Project = {
    collectionId: string,
    id: string,
    content: string,
    title: string,
    summary: string,
    github?: string,
    live?: string,
    display_picture?: string,
    slug: string,
    created: string,
    update: string,
    expand: {
        skills: Array<{ id: string, title: string }>,
    }
}

export const server_client = server$(async function() {
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
    let req = this as any as RequestEvent;
    let base_url = req?.env?.get("POCKETBASE_URL");
    let token = req?.env?.get("POCKETBASE_TOKEN");
    if (!base_url || !token) {
        throw new Error("var POCKETBASE_URL and P... should set");
    }
    client.baseURL = base_url;
    client.authStore.save(token);



    let ret: Project[] = await client
        .collection("Project")
        .getFullList({
            expand: ["skills"],
        } as any);

    for (let res of ret) {
        res.content = sanitize(res.content);
        res.summary = sanitize(res.summary);
    }

    return ret;
});

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Don't remove the `<head>` and `<body>` elements.
     */

    return (
        <QwikCityProvider>
            <head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <RouterHead />
            </head>
            <body lang="en" class="base font-sans">
                <RouterOutlet />
                <ServiceWorkerRegister />
            </body>
        </QwikCityProvider>
    );
});
