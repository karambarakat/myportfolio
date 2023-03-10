import InnerLayout from './InnerLayout'
import globalQuery from './query-layout.graphql'
import fetchQuery from '@/utils/fetchQuery'
import { GlobalQuery } from '#gql-queries'
import toCustomMd from '@/utils/toCustomeMd'

interface Props {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  const res: GlobalQuery = await fetchQuery({
    query: globalQuery
  })

  if (!res.global?.data?.attributes) throw new Error('not enough data')

  return (
    <html>
      <head />
      <body>
        <InnerLayout global={res.global.data.attributes}>
          {children}
        </InnerLayout>
      </body>
    </html>
  )
}
