import globalQuery from '@ws/types/src/graphql/queries/app/query-layout.graphql'
import fetchQuery from '@/utils/fetchQuery'
import { GlobalQuery } from '@ws/types/dist/graphql/query'

export default async function Heading() {
  const res: GlobalQuery = await fetchQuery({
    query: globalQuery,
    models: ['global']
  })

  if (!res.global?.data?.attributes) throw new Error('not enough data')

  const attr = res.global.data.attributes

  return (
    <>
      <title>{attr.defaultSeo?.title || 'Hi, My Name is Kenn'}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link
        rel="icon"
        href={attr.favicon?.data?.attributes?.url || '/favicon.jpg'}
      />
      <meta
        property="og:title"
        content={attr.defaultSeo?.title || 'Hi, My Name is Kenn'}
      />
      <meta
        property="og:description"
        content={
          attr.defaultSeo?.description ||
          'this is my personal portfolio, it was built with Typescript, NextJS, Tailwind and Strapi'
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.kenn.page" />
      {attr.defaultSeo?.image?.data?.attributes?.url && (
        <meta
          property="og:image"
          content={attr.defaultSeo.image.data.attributes.url}
        />
      )}
    </>
  )
}
