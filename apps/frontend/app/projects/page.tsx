import React from 'react'
import Typo from '@/components/Typo'
import { ProjectsPageQuery } from '#gql-queries'
import ProjectPage from './query-page.graphql'
import fetchQuery from '@/utils/fetchQuery'
import Link from 'next/link'
import Button from '@/components/Button'
import ProjectSummary from '@/components/content/ProjectSummary'
import _c from 'classnames'

export default async function Page() {
  const res: ProjectsPageQuery = await fetchQuery({
    query: ProjectPage
  })

  if (!res?.projects?.data || !res?.projects?.meta?.pagination)
    throw new Error(`
      not enough data, 
      please publish/fill all single types, 
      or check if the schema is not up to date`)

  const {
    projects: {
      data: projects,
      meta: { pagination: projectsPagination }
    }
  } = res

  return (
    <>
      <Typo>
        <Link href={'/'}>↤ Go Home</Link>
      </Typo>
      <Typo.H2 className="text-center mb-8">All Projects</Typo.H2>
      <div className="grid md:grid-cols-2 gap-5 min-h-[100px]">
        {projects.map(project => {
          if (!project?.attributes || !project.id) return

          return (
            <ProjectSummary
              key={project.id}
              href={'/projects/' + project.id}
              data={project.attributes}
            />
          )
        })}

        {projectsPagination.pageCount > 1 && (
          <div className="col-span-2 my-5 place-content-center grid">
            <Button Elem={Link} href="/projects">
              view more
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
