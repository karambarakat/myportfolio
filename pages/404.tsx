import { GlobalQuery } from '#gql-queries'
import InnerLayout from '@/app/InnerLayout'
import QuickMessage from '@/components/QuickMessage'
import fetchQuery from '@/utils/fetchQuery'
import globalQuery from '@/app/query-layout.graphql'
import Link from 'next/link'

interface Props {
  global: NonNullable<
    NonNullable<NonNullable<GlobalQuery['global']>['data']>['attributes']
  >
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const res: GlobalQuery = await fetchQuery({
    query: globalQuery
  })

  if (!res.global?.data?.attributes) throw new Error('not enough data')

  return {
    props: { global: res.global.data.attributes } // will be passed to the page component as props
  }
}

export default function E404({ global }: Props) {
  return (
    <>
      <InnerLayout global={global}>
        <QuickMessage
          code="404"
          message="This page could not be found."
          action={
            <Link className="mt-6" href="/">
              go home
            </Link>
          }
        />
      </InnerLayout>
    </>
  )
}
