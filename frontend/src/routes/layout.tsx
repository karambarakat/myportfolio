import { component$, Slot } from "@builder.io/qwik";
import { useLocation, type RequestHandler } from "@builder.io/qwik-city";
import Background from "~/components/Background";

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
    <Background>
      <div class="min-h-screen flex flex-col justify-between">
        <Loading />
        <div class="flex-1 container">
          <Slot />
        </div>

        <span class="separator mt-8" />

        <div class="text-center py-4">
          Built with Typescript, Qwik, UnoCss and Strapi | checkout the code on{" "}
          <a class="a" href="https://github.com/karambarakat/myportfolio">
            Github
          </a>
        </div>
      </div>
    </Background>
  );
});

const Loading = component$(function () {
  const location = useLocation();

  return (
    <div class="">
      <div class="text-3xl font-bold">
        {location.isNavigating && "Loading..."}
      </div>
    </div>
  );
});
