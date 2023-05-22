import InnerLayout from './_InnerLayout'
import globalQuery from '@ws/types/src/graphql/queries/app/query-layout.graphql'
import fetchQuery from '@/utils/fetchQuery'
import { GlobalQuery } from '@ws/types/dist/graphql/query'
import toCustomMd from '@/utils/toCustomeMd'
import { Provider } from '@ws/ui/utils/actionMap'

interface Props {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  const res: GlobalQuery = await fetchQuery({
    query: globalQuery,
    models: ['global']
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
