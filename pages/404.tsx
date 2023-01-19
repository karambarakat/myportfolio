import { GlobalQuery } from '#gql-queries'
import InnerLayout from '@/app/InnerLayout'
import QuickMessage from '@/components/QuickMessage'
import fetchQuery from '@/utils/fetchQuery'
import globalQuery from '@/app/query-global.graphql'
import Link from 'next/link'
import toCustomMd from '@/utils/toCustomeMd'
import { gql } from 'graphql-request'

interface Props {
  global: NonNullable<
    NonNullable<NonNullable<GlobalQuery['global']>['data']>['attributes']
  >
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const res = await fetch(`${process.env.API}/graphql`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`
    },
    method: 'POST',
    body: JSON.stringify({
      query: gql([globalQuery.trim()] as unknown as TemplateStringsArray)
    })
  })

  if (!res.ok) throw new Error(await res.text())

  const data = (await res.json()).data

  if (!data) throw new Error('no data returned')

  if (!data.global?.data?.attributes) throw new Error('not enough data')

  return {
    props: { global: data.global.data.attributes } // will be passed to the page component as props
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
