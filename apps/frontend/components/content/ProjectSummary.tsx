import {
  ComponentUiButton,
  Project,
  UploadFile
} from '@ws/types/dist/graphql/schema'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '@ws/ui/components/Button'
import Typo from '@ws/ui/components/Typo'
import noPreview from '@/public/section1/noPreview.svg'

interface Props {
  data: {
    title: Project['title']
    summary?: Project['summary']
    live?: { href?: ComponentUiButton['href'] } | null
    github?: { href?: ComponentUiButton['href'] } | null
    displayPicture?: {
      data?: {
        attributes?: Partial<
          Pick<UploadFile, 'alternativeText' | 'width' | 'height' | 'url'>
        > | null
      } | null
    } | null
    skills?: Project['skills']
  }
  href: string
}

function ProjectSummary({ data, href }: Props) {
  const img = data?.displayPicture?.data?.attributes

  return (
    <div>
      <div className="aspect-w-4 aspect-h-3 shadow-xl  rounded-xl overflow-hidden cursor-pointer">
        <Link href={href}>
          {img ? (
            <Image
              className="!w-full !h-full !object-cover"
              alt={img.alternativeText || data.title}
              width={img.width || 12}
              height={img.height || 12}
              src={img.url || '#'}
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
      <Link href={href}>
        <Typo.Lg className="mt-5">{data.title}</Typo.Lg>
      </Link>
      <Typo>{data.summary}</Typo>
      <div className="flex gap-2 " id="coa">
        {data.github && (
          <span>
            <Button
              target={'_blank'}
              size="normal"
              href={data.github.href || '#'}
              //
            >
              <Image
                src={github.src}
                alt={'view in github'}
                width={24}
                height={24}
              ></Image>
            </Button>
          </span>
        )}

        {data.live && (
          <span>
            <Button
              target={'_blank'}
              size="normal"
              href={data.live.href || '#'}
              //
            >
              <Image
                src={live.src}
                alt={'view in github'}
                width={24}
                height={24}
              ></Image>
            </Button>
          </span>
        )}
      </div>
    </div>
  )
}

import github from '@/public/github.svg'
import live from '@/public/live.svg'

export default ProjectSummary
