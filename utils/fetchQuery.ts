import { gql } from 'graphql-request'

export default async function fetchQuery(
  { query, variables }: { query: string; variables?: Record<string, any> },
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
      query: gql([query.trim()] as unknown as TemplateStringsArray),
      variables
    })
  })

  if (!res.ok) throw new Error(await res.text())

  const data = (await res.json()).data

  if (!data) throw new Error('no data returned')

  return data
}
