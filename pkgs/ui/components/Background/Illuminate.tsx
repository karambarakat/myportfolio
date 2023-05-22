import defaultSelector from './assets/selector.png'
import __ from 'classnames'
import s from './Background.module.scss'
import { useEffect, useRef, useState } from 'react'
import Container from '../Container'

function HoverEffect({
  inverted = false,
  bg,
  selector,
}: {
  inverted?: boolean
  bg: string
  selector: string
}) {
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
        ['--src']: `url(${selector})`,
        ['--x']: `${x - 517}px`,
        ['--y']: `${y - 517}px`,
      }}
      className={__(s['hover-effect'], inverted ? 'mix-blend-overlay' : '')}
      src={bg}
    />
  )
}

export default function Illuminate({
  inverted = false,
  bg,
  selector = defaultSelector.src,
}: {
  inverted?: boolean
  bg: string
  selector?: string
}) {
  return (
    <div className={s.illuminate}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={__(
          s['illuminate-layer-1'],
          inverted && s['illuminate-layer-1-inverted']
        )}
        alt="background-pattern"
        loading="lazy"
        src={bg}
      />
      <div
        className={__(
          s['illuminate-layer-2'],
          inverted && s['illuminate-layer-2-inverted']
        )}
      >
        <HoverEffect inverted={inverted} bg={bg} selector={selector} />
      </div>
      <div className={s['illuminate-layer-3']}></div>
    </div>
  )
}
