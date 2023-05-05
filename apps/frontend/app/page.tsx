import Separator from '@/components/Separator'
import Hero from '@/components/sections/Hero'
import Selected from '@/components/sections/2Selected'
import GetInContact from '@/components/sections/3GetInContact'

// only server side imports
import query from './query-page.graphql'
import fetchQuery from '@/utils/fetchQuery'
import { IndexPageQuery } from '#gql-queries'

export default async function Page() {
  const res: IndexPageQuery = await fetchQuery({ query })

  if (
    !res?.heroSection?.data?.attributes ||
    !res?.mypocketDisplay?.data?.attributes ||
    !res?.getInContact?.data?.attributes ||
    !res?.projects?.data ||
    !res?.projects?.meta?.pagination
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
  } = res

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
