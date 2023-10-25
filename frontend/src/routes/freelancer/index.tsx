import type { RequestEvent } from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(302, "https://www.freelancer.com/u/KennethBarakat");
};
