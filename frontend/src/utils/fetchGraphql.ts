import type { PictureFragment } from "~/gql/graphql";

export default function fetchGraphql(body: {
  query: string;
  variables?: object;
}) {
  return fetch(import.meta.env.BACKEND + "/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(async (res) => {
      if (res.ok === false) {
        console.log("graphql error, not Ok", (await res.json()).errors);
        throw new Error("graphql error, not Ok");
      }

      return await res.json();
    })
    .catch((err) => {
      console.log("graphql error, fetch failed", err);
      throw new Error("graphql error, fetch failed");
    });
}

export const StrapiPicture = (url: PictureFragment | undefined | null) => {
  if (url?.data?.attributes?.url) {
    url.data.attributes.url = import.meta.env.BACKEND + url.data.attributes.url;
  }
};
