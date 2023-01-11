import './tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import pattern from '@/public/img/shades.png'
import { ReactNode } from 'react'
import Separator from '@/components/Separator'
import Button from '@/components/Button'

interface Props {
  children: React.ReactNode
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
    <div
      // this isolate is to create a stacking context
      // so mix-blend-difference of the img tag apply on the div.bg-white
      // otherwise it will be applied within some stacking context created outside
      // the boundary of this component
      className="isolate relative"
    >
      <img
        // z-1 in relative to the white background div below
        // in dark mode this tag will blend-difference with the white div below (i.e. invert colors)
        className={`z-1 relative max-w-none w-[1200px] ${
          inverted ? 'mix-blend-difference' : ''
        }`}
        // in addition this image doesn't scale with its container
        alt="background-pattern"
        loading="lazy"
        // pattern.width = 1200px
        // pattern.hight = 800px
        src={pattern.src}
      />
      <div className="bg-white absolute top-0 w-full h-full"></div>
    </div>
  )
}

function Background({ children: content }: { children: ReactNode }) {
  return (
    <div className="relative w-[800px] max-w-[100vw] mx-auto px-[25px] md:px-[50px]">
      <div className="print:hidden absolute pointer-events-none top-0 left-0 ml-[-200px] w-[1200px]">
        <GradientBlur />
      </div>
      <div className="print:hidden fixed pointer-events-none right-0 left-0 h-screen opacity-40">
        <Noise />
      </div>
      <div className="isolate">
        <div className="flex justify-center">{content}</div>
      </div>
    </div>
  )
}

export function InnerLayout({ children }: Props) {
  return (
    <div className="overflow-x-hidden min-h-screen flex flex-col justify-between">
      <Background>
        <div className="flex flex-col gap-8 min-h-screen">
          {children}
          <Separator />
          <p className="text-center text-lg pb-8">
            Built with Typescript, NextJS and Tailwind | view the source on{' '}
            <Button size="normal">Github</Button>
          </p>
        </div>
      </Background>
    </div>
  )
}

export default function Layout({ children }: Props) {
  return (
    <html>
      <head />
      <body>
        <InnerLayout>
          <div className="flex-1"></div>
          {children}
        </InnerLayout>
      </body>
    </html>
  )
}
