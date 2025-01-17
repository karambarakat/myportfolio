import { component$ , Slot} from "@builder.io/qwik";
import type { RequestEvent } from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
    throw redirect(302, "https://docs.google.com/document/d/183Y16BAD9LEBbe_eKvB0JbRpgaxE9xZ0VXy5f31Wews/");
};

export const ResumeAsA = component$(() => {
    return (
        <a
            href= "./links/resume"
            class="a"
        >
            <Slot/>
        </a>
    );
});
