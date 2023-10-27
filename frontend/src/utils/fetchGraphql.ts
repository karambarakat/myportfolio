import type { PictureFragment } from "~/gql/graphql";

export default function fetchGraphql(body: {
  query: string;
  variables?: object;
}) {
  return fetch("http://localhost:1337/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (res) => {
    if (res.ok === false) {
      console.log("graphql error", (await res.json()).errors);
      throw new Error("graphql error");
    }

    return await res.json();
  });
}

export const StrapiPicture = (url: PictureFragment | undefined | null) => {
  if (url?.data?.attributes?.url) {
    url.data.attributes.url = "http://localhost:1337" + url.data.attributes.url;
  }
};
