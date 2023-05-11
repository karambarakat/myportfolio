import __ from 'classnames'
import s from './Typo.module.scss'
import type { ComponentPropsWithoutRef as elem } from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
}

function Typo({ children, className, ...rest }: Props & elem<'p'>) {
  return (
    <p {...rest} className={__(s.base, className)}>
      {children}
    </p>
  )
}

Typo.H1 = function H1({ children, className, ...rest }: Props & elem<'h1'>) {
  return (
    <h1 {...rest} className={__(s.h1, className)}>
      {children}
    </h1>
  )
}

Typo.H2 = function H2({ children, className, ...rest }: Props & elem<'h2'>) {
  return (
    <h2 {...rest} className={__(s.h2, className)}>
      {children}
    </h2>
  )
}

Typo.Lg = function Lg({ children, className, ...rest }: Props & elem<'p'>) {
  return (
    <p {...rest} className={__(s.lg, className)}>
      {children}
    </p>
  )
}

export default Typo
