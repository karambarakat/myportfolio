import React from 'react'
import Typo from '@ws/ui/components/Typo'
import { ProjectsPageQuery } from '@ws/types/dist/graphql/query'
import fetchQuery from '@/utils/fetchQuery'
import Link from 'next/link'
import Button from '@ws/ui/components/Button'
import ProjectSummary from '@/components/content/ProjectSummary'
import _c from 'classnames'

import ProjectPage from '@ws/types/src/graphql/queries/app/projects/query-page.graphql'
import { notFound } from 'next/navigation'

export default async function Page() {
  const res: ProjectsPageQuery = await fetchQuery({
    query: ProjectPage,
    models: ['project']
  })
  console.log({ res })

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
            <Link href={'/projects'}>
              <Button>veiw more</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
