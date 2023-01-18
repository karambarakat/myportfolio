import Separator from '@/components/Separator'
import Image from 'next/image'
import Button from '@/components/Button'
import Typo from '@/components/Typo'
import _c from 'classnames'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import Selected from '@/components/sections/2Selected'
import GetInContact from '@/components/sections/3GetInContact'

// only server side imports
import query from './query.graphql'
import fetchQuery from '@/utils/fetchQuery'
import { IndexPageQuery } from '#gql-queries'

const obj: IndexPageQuery = {}

export default async function Page() {
  const gqlData: IndexPageQuery = await fetchQuery({ query })

  if (
    !gqlData?.heroSection?.data?.attributes ||
    !gqlData?.mypocketDisplay?.data?.attributes ||
    !gqlData?.getInContact?.data?.attributes ||
    !gqlData?.projects?.data ||
    !gqlData?.projects?.meta?.pagination
  )
    throw new Error(`
      not enough data, 
      please publish/fill all single types, 
      or check if the schema is not up to date`)

  const {
    heroSection: {
      data: { attributes: heroSection }
    },
    mypocketDisplay: {
      data: { attributes: mypocketDisplay }
    },
    getInContact: {
      data: { attributes: getInContact }
    },
    projects: {
      data: projects,
      meta: { pagination: projectsPagination }
    }
  } = gqlData

  return (
    <>
      <Hero data={heroSection} />
      <Separator />
      <Selected
        data={mypocketDisplay}
        projects={{ data: projects, pagination: projectsPagination }}
      />
      <Separator />
      <GetInContact data={getInContact} />
      <div className="flex-1"></div>
    </>
  )
}
