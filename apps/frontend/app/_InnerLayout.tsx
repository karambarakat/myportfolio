import './tailwind.css'
import React, { ReactNode, Suspense } from 'react'
import Separator from '@ws/ui/components/Separator'
import Typo from '@ws/ui/components/Typo'
import { GlobalQuery } from '@ws/types/dist/graphql/query'
import toCustomMd from '@/utils/toCustomeMd'
import Background from '@ws/ui/components/Background/index'

interface Props {
  children: React.ReactNode
  global: // |
  NonNullable<
    NonNullable<NonNullable<GlobalQuery['global']>['data']>['attributes']
  >
}

export default function InnerLayout({ global, children }: Props) {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col justify-between">
      <Background>
        <div className="flex flex-col gap-8 min-h-screen">
          {children}
          <Separator />
          <Typo
            dangerouslySetInnerHTML={{ __html: toCustomMd(global.siteAbout) }}
            className="text-center !pb-8"
          />
          {/*
            Built with Typescript, NextJS, Tailwind and Strapi | view the source
            on <Button size="normal">Github</Button> 
          */}
        </div>
      </Background>
    </div>
  )
}
