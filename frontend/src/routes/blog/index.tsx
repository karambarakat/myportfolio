import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { DocumentHead, Link, routeLoader$ } from "@builder.io/qwik-city";

export const posts = routeLoader$(async () => {
    // return await cms_client("post", "get_all", {
    //     pagination: {
    //         page_size: 100,
    //         page_shift: 1,
    //     },
    //     relations: {
    //         topics: {
    //             id: true, attributes: true
    //         }
    //     }
    // });
    return "hi";
});

export default component$(() => {
    // let data = posts();
    let rc = useResource$(async () => {
        return await cms_client("post", "get_all", {
            query: {
                pagination: {
                    page_size: 100,
                    page_shift: 1,
                },
            },
            relations: {
                topics: {
                    id: true, attributes: true
                }
            }
        });
    })

    return (
        <div class="my-2">
            <div class="my-2 flex gap-2">
                <span class="flex-1">My Blog</span>
                <Link href="/" class="a">home</Link>
                <Link class="a" href="https://github.com/karambarakat">github</Link>
            </div>
            <Resource value={rc} onResolved={
                (rc) => <div>{JSON.stringify(rc)}</div>
            } />


        </div>
    )
})

export const head: DocumentHead = {
    title: "Karam Barakat's Blog",
    links: [
        {
            href: "https://github.com/karambarakat",
            rel: "me"
        }
    ],
    meta: [
        {
            name: "description",
            content: "view all my blog posts",
        },
    ],
};

async function cms_client(endpoint: any, action: string, body: object) {
    const backend = import.meta.env.PUBLIC_MYCMS_BACKEND;
    const token = import.meta.env.PUBLIC_MYCMS_TOKEN;

    const response: any = await fetch(`${backend}/${endpoint}/${action}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Cookie": `token=Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
        .catch((err) => {
            console.error(err);
            return { fe_err: "fetch_failed", error: err }
        });

    if (response.fe_err) {
        throw response.fe_err
    }

    if (response.status !== 200) {
        let err = await response.text().catch((_: any) => {
            return { fe_err: "json_failed_to_parse", error: { status: response.status, } }
        }).then((e: any) => {
            return { fe_err: "non_200", error: { body: e, status: response.status } }
        });

        return err;
    }

    return response.json().catch((_: any) => {
        return { fe_err: "json_failed_to_parse", error: {} }
    });
}
