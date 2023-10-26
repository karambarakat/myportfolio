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
  }).then((res) => res.json());
}
