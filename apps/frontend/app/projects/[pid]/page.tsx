import React from 'react'
import fetchQuery from '@/utils/fetchQuery'
import Link from 'next/link'
import {
  GenProjectsQuery,
  ProjectPageQuery,
  ProjectPageQueryVariables
} from '@ws/types/dist/graphql/query'
import genProjectsGen from '@ws/types/src/graphql/queries/app/projects/[pid]/query-gen.graphql'
import projectSDL from '@ws/types/src/graphql/queries/app/projects/[pid]/query-page.graphql'
import { notFound } from 'next/navigation'
import noPreview from '@/public/section1/noPreview.svg'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import github from '@/public/github.svg'
import live from '@/public/live.svg'
import ProjectsDisplay from '@/components/content/ProjectsDisplay'
import ProjectSummary from '@/components/content/ProjectSummary'

import Typo from '@ws/ui/components/Typo'
import Image from 'next/image'
import Button from '@ws/ui/components/Button'
import Markdown from '@/components/Markdonw'

export async function generateStaticParams() {
  const res: GenProjectsQuery = await fetchQuery({
    query: genProjectsGen,
    models: ['project']
  })

  if (!res?.projects?.data || res?.projects?.data.some(e => !e.id))
    throw new Error(`
    not enough data, 
    please publish/fill all single types, 
    or check if the schema is not up to date`)

  return res.projects.data.map(node => {
    if (!node.id || !node.attributes?.title) throw new Error('')

    return { pid: node.id }
  })
}

export default async function Page({ params, searchParams }: any) {
  const pid = params.pid

  if (!pid) throw new Error('no params')

  const res: ProjectPageQuery = await fetchQuery({
    query: projectSDL,
    models: ['project'],
    var: { pid }
  })

  if (!res?.project?.data) {
    notFound()
  }

  if (!res?.project?.data?.attributes)
    throw new Error(`
      not enough data,
      please publish/fill all single types,
      or check if the schema is not up to date`)

  const project = res.project.data.attributes
  const projects = res.projects
  const img = res.project.data.attributes.displayPicture?.data?.attributes

  return (
    <>
      <Typo className="max-w-[600px] m-auto">
        <Link href={'/'}>↤ Go Home</Link>
      </Typo>
      <Typo.H1 className="text-center mb-8">{project.title}</Typo.H1>
      <div className="max-w-[600px] m-auto">
        <div className="aspect-w-4 aspect-h-3 shadow-xl rounded-xl overflow-hidden">
          {img ? (
            <Image
              className="!w-full !h-full !object-cover"
              alt={img.alternativeText || project.title}
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
        </div>
        <div className="max-w-[450px] m-auto">
          <div className="my-8"></div>
          <time dateTime={project.createdAt}>
            <Typo className="text-gray-400">
              {dayjs(project.createdAt).format('MMM D YYYY')}
              <span className="mx-2 text-black">•</span>
              Updated {dayjs(project.updatedAt).fromNow()}
            </Typo>
          </time>
          <Markdown>{project.content}</Markdown>
          {(project.github || project.live) && (
            <Typo.Lg>external links:</Typo.Lg>
          )}
          <div className="flex gap-3">
            {project.github && (
              <span>
                <Button
                  target={'_blank'}
                  size="normal"
                  href={project.github.href || '#'}
                  //
                >
                  <Image
                    src={github.src}
                    alt={'view in github'}
                    width={48}
                    height={48}
                  ></Image>
                </Button>
              </span>
            )}

            {project.live && (
              <span>
                <Button
                  target={'_blank'}
                  size="normal"
                  href={project.live.href || '#'}
                  //
                >
                  <Image
                    src={live.src}
                    alt={'view in github'}
                    width={48}
                    height={48}
                  ></Image>
                </Button>
              </span>
            )}
          </div>
        </div>
      </div>

      <Typo.H2 className="text-center my-8 mt-32">˅ More Projects ˅</Typo.H2>
      <ProjectsDisplay>
        {projects?.data.map(project => {
          if (!project?.attributes || !project.id) return
          return (
            <ProjectSummary
              key={project.id}
              href={'/projects/' + project.id}
              data={project.attributes}
            />
          )
        })}
      </ProjectsDisplay>
    </>
  )
}
