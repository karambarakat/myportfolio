'use client'
import selector from '@/public/img/selector.png'
import pattern from '@/public/img/shades.png'
import s from './HoverEffect.module.scss'
import { useEffect, useRef, useState } from 'react'

export default function Compt({ inverted = false }: { inverted?: boolean }) {
  // const { x, y, ref } = useMouse()
  const [{ x, y }, setCoor] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLImageElement | undefined>()
  useEffect(() => {
    // todo: improve at https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
    // @ts-ignore
    function mouseMove(event) {
      // @ts-ignore
      const { x, y } = ref?.current?.getBoundingClientRect()
      setCoor({ x: event.clientX - x, y: event.clientY - y })
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', mouseMove)
    }

    return () => window.removeEventListener('mousemove', mouseMove)
  })

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt="background image"
      // @ts-ignore
      ref={ref}
      style={{
        // @ts-ignore
        ['--src']: `url(${selector.src})`,
        ['--x']: `${x - 517}px`,
        ['--y']: `${y - 517}px`
      }}
      className={`${inverted ? 'mix-blend-overlay' : ''} ${s.base}`}
      src={pattern.src}
    />
  )
}
