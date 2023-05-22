import React, { CSSProperties } from 'react'
import s from './Container.module.scss'
import _c from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
}

function Container({ children }: Props) {
  return <div className={s.base}>{children}</div>
}

Container.shift = s['shift']
Container.shift_style = (shift: number) => {
  return { ['--shift']: shift + 'px' } as CSSProperties
}
Container.negative_padding = s['negative_padding']

export default Container
