import { component$, Slot } from "@builder.io/qwik";
import { type RequestHandler } from "@builder.io/qwik-city";
import Loading from "~/components/Loading";
import { Footer, Illuminate } from "../index";

export const onGet: RequestHandler = async ({ cacheControl }) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.builder.io/docs/caching/
    cacheControl({
        // Always serve a cached response by default, up to a week stale
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        maxAge: 5,
    });
};

export default component$(() => {
    return (
        <div class="relative overflow-hidden">
            <div class="pointer-events-none absolute inset-0">
                <div class="container p-0! mx-auto">
                    <div class="container-shift-200px">
                        <Illuminate />
                    </div>
                </div>
            </div>

            <div class="isolate">
                <div class="min-h-screen flex flex-col justify-between">
                    <Loading />
                    <div class="flex-1 container">
                        <Slot />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
});
