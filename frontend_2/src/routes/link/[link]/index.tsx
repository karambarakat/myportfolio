
import { RequestEvent } from "@builder.io/qwik-city";
import { links } from "~/components/links";
import * as cc from "change-case";
import { Slot, component$ } from "@builder.io/qwik";

export const onGet = async ({ redirect, params }: RequestEvent) => {
    const link = cc.snakeCase(params.link);
    let found = links.find((search) => cc.snakeCase(search.text) === link);

    if (!found) {
        throw redirect(302, "/link");
    }

    throw redirect(302, found.href);
};

type IdOf<T> = T extends Array<{ text: infer I }> ? I : never;

export const LinkAsA = component$((props: { name: IdOf<typeof links> }) => {
    let found = links.find((search) => search.text === props.name);
    if (!found) throw new Error("link is not found");
    return (
        <a href={found.href} class="a" >
            <Slot />
        </a>
    );
})

