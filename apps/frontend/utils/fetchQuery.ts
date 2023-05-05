import { gql } from 'graphql-request'

export default async function fetchQuery(
  arg: {
    query: string
    var?: unknown
  },
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
      query: gql([arg.query.trim()] as unknown as TemplateStringsArray),
      variables: arg.var
    })
  })

  if (!res.ok) throw new Error(await res.text())

  const data = (await res.json()).data

  if (!data) throw new Error('no data returned')

  return data
}
