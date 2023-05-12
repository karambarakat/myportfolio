import React from 'react'
import HoverEffect from '@ws/ui/components/HoverEffect'
import selector from '@/public/img/selector.png'
import pattern from '@/public/img/shades.png'

function Hover1({ inverted = false }: { inverted?: boolean }) {
  return (
    <HoverEffect inverted={inverted} bg={pattern.src} selector={selector.src} />
  )
}

export default Hover1
