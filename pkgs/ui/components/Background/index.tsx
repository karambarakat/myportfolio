/// <reference path="../../node_modules/next/image-types/global.d.ts" />
'use client'
import { ReactNode } from 'react'
import __ from 'classnames'
import Container from '../Container'
import Illuminate_ from './Illuminate'
import bg from './assets/shades.png'
import selector from './assets/selector.png'

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

export default function Background({
  children: content,
  noise = true,
  Illuminate = (
    <Illuminate_ inverted={false} bg={bg.src} selector={selector.src} />
  ),
}: {
  children?: ReactNode
  noise?: boolean
  Illuminate?: React.ReactNode
}) {
  return (
    <div className="max-h-screen overflow-visible">
      <Container className="relative">
        <div
          className={__(
            'print:hidden absolute pointer-events-none top-0 left-0',
            Container.shift
          )}
        >
          {Illuminate}
        </div>

        {noise && (
          <div className="print:hidden fixed pointer-events-none right-0 left-0 h-screen opacity-40">
            <Noise />
          </div>
        )}
        <div className="isolate">
          <div>{content}</div>
        </div>
      </Container>
    </div>
  )
}
