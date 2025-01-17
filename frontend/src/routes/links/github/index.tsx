import { component$, Slot } from "@builder.io/qwik";
import { RequestEvent } from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
    throw redirect(302, "https://github.com/karambarakat");
}

export const GithubAsA = component$(() => {
    return (<a
        href="https://github.com/karambarakat"
        class="a"
    >
        <Slot />
    </a>
    );
});

