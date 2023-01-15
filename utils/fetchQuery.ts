import { gql } from 'graphql-request'

export default async function fetchQuery(
  query: string,
  init?: Omit<RequestInit, 'method' | 'body'>
) {
  const res = await fetch(`${process.env.API}/graphql`, {
    cache: 'force-cache',
    ...(init || {}),
    headers: {
      ...(init || {}).headers,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    },
    method: 'POST',
    body: JSON.stringify({
      query: gql([query] as unknown as TemplateStringsArray)
    })
  })

  if (!res.ok) throw new Error(await res.text())

  return await res.json()
}
