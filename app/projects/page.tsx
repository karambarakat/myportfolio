import React from 'react'
import Typo from '@/components/Typo'
import { ProjectsPageQuery } from '#gql-queries'
import ProjectPage from './query-page.graphql'
import fetchQuery from '@/utils/fetchQuery'
import Link from 'next/link'
import Image from 'next/image'
import noPreview from '@/public/section1/noPreview.svg'
import Button from '@/components/Button'
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
      <Typo.H2 className="text-center mb-8">All Projects</Typo.H2>
      <div className="grid md:grid-cols-2 gap-5 min-h-[100px]">
        {projects.map(project => {
          if (!project.attributes || !project.id) return

          const img = project.attributes.displayPicture?.data?.attributes

          return (
            <div key={project.id}>
              <div className="aspect-w-4 aspect-h-3 shadow-xl  rounded-xl overflow-hidden cursor-pointer">
                <Link href={'/projects/' + project.id}>
                  {img ? (
                    <Image
                      className="!w-full !h-full !object-cover"
                      alt={img.alternativeText || project.attributes.title}
                      width={img.width || 12}
                      height={img.height || 12}
                      src={img.url}
                      style={{}}
                    />
                  ) : (
                    <img
                      className="!w-full !h-full p-8 bg-[#f1fafd] object-contain"
                      alt="no picture"
                      src={noPreview.src}
                    />
                  )}
                </Link>
              </div>
              <Link href={'/projects/' + project.id}>
                <Typo.Lg className="mt-5">{project.attributes.title}</Typo.Lg>
              </Link>
              <Typo>{project.attributes.summary}</Typo>
              <div className="flex gap-2" id="coa">
                {project.attributes.github && (
                  <span>
                    <Button
                      size="normal"
                      href={project.attributes.github.href || '#'}
                    >
                      view source
                    </Button>
                  </span>
                )}

                {project.attributes.live && (
                  <span>
                    <Button
                      size="normal"
                      href={project.attributes.live.href || '#'}
                    >
                      view live
                    </Button>
                  </span>
                )}
              </div>
            </div>
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
