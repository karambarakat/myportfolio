import type { RequestEvent } from "@builder.io/qwik-city";
import { component$ , Slot} from "@builder.io/qwik";


export const onGet = async ({ redirect }: RequestEvent) => {
    throw redirect(302, "https://www.freelancer.com/u/KennethBarakat");
};

export const FreelancerAsA = component$(() => {
    return (
        <a
            href= "https://www.freelancer.com/u/KennethBarakat"
            class="a"
        >
            <Slot/>
        </a>
    );
});

