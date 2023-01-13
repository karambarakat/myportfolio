import React from 'react'
import s from './Container.module.scss'
import _c from 'classnames'

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

function Container({ children, className, ...rest }: Props) {
  return <div className={_c(s.base, className)}>{children}</div>
}

Container.shift_lg = s['shift-200']
Container.negative_margin = s['negative_margin']

Container.shiftStyle = (shift: number) => {
  return { marginLeft: -shift, width: 800 + -2 * shift }
}

Container.Shift = function ({ children, shift }: { children: React.ReactNode; shift: number }) {
  return <div style={Container.shiftStyle(shift)}>{children}</div>
}

export default Container
