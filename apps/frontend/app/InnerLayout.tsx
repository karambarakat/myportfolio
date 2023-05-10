import './tailwind.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
// pattern.width = 1200px
// pattern.hight = 800px
import pattern from '@/public/img/shades.png'
import React, { lazy, ReactNode, Suspense } from 'react'
import Separator from '@/components/Separator'
import Button from '@/components/Button'
import HoverEffect from '@/components/HoverEffect'
import Container from '@/components/Container'
import Typo from '@/components/Typo'
import { GlobalQuery } from '@ws/types/dist/graphql/query'
import toCustomMd from '@/utils/toCustomeMd'

interface Props {
  children: React.ReactNode
  global: // |
  NonNullable<
    NonNullable<NonNullable<GlobalQuery['global']>['data']>['attributes']
  >
}

function Noise() {
  return (
    <svg width="100%" height="100%">
      <filter id="pedroduarteisalegend">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        ></feTurbulence>
      </filter>
      <rect
        width="100%"
        height="100%"
        filter="url(#pedroduarteisalegend)"
      ></rect>
    </svg>
  )
}

function GradientBlur({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="isolate relative">
      <img
        className={`z-1 relative max-w-none w-[1200px] ${
          inverted ? 'mix-blend-difference' : ''
        }`}
        alt="background-pattern"
        loading="lazy"
        src={pattern.src}
      />
      <g
        className="z-2 absolute top-0"
        style={{ mixBlendMode: inverted ? 'overlay' : 'multiply' }}
      >
        <HoverEffect inverted={inverted} />
      </g>
      <div className="bg-white absolute top-0 w-full h-full"></div>
    </div>
  )
}

function Background({ children: content }: { children: ReactNode }) {
  return (
    <div className="max-h-screen overflow-visible">
      <Container className="relative">
        <Suspense fallback={<></>}>
          <div
            className={`print:hidden absolute pointer-events-none top-0 left-0 ${Container.shift_lg}`}
          >
            <GradientBlur />
          </div>
          <div className="print:hidden fixed pointer-events-none right-0 left-0 h-screen opacity-40">
            <Noise />
          </div>
        </Suspense>
        <div className="isolate">
          <div className="">{content}</div>
        </div>
      </Container>
    </div>
  )
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
