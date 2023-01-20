import React from 'react'
import fetchQuery from '@/utils/fetchQuery'
import {
  GenProjectsQuery,
  ProjectPageQuery,
  ProjectPageQueryVariables
} from '#gql-queries'
import genProjectsSDL from './query-gen.graphql'
import projectSDL from './query-page.graphql'
import { notFound } from 'next/navigation'
import noPreview from '@/public/section1/noPreview.svg'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import Typo from '@/components/Typo'
import Image from 'next/image'
import Button from '@/components/Button'

export async function generateStaticParams() {
  const res: GenProjectsQuery = await fetchQuery({
    query: genProjectsSDL
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
  const img = res.project.data.attributes.displayPicture?.data?.attributes

  return (
    <div>
      <Typo.H1 className="text-center mb-8">{project.title}</Typo.H1>
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
      <div className="my-8"></div>
      <time dateTime={project.createdAt}>
        <Typo className="text-gray-400">
          {dayjs(project.createdAt).format('MMM D YYYY')}
          <span className="mx-2 text-black">•</span>
          Updated {dayjs(project.updatedAt).fromNow()}
        </Typo>
      </time>
      {project.content}
      {project.github && (
        <div className="my-2">
          <Button href={project.github.href || '#'}>view source</Button>
        </div>
      )}

      {project.live && (
        <div className="my-2">
          <Button href={project.live.href || '#'}>view live</Button>
        </div>
      )}
    </div>
  )
}
