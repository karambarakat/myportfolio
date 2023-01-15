import __ from 'classnames'
import s from './Typo.module.scss'

interface Props<E> extends React.DetailedHTMLProps<React.HTMLAttributes<E>, E> {
  children?: React.ReactNode
  className?: string
}

function Typo({ children, className, ...rest }: Props<HTMLParagraphElement>) {
  return (
    <p {...rest} className={__(s.base, className)}>
      {children}
    </p>
  )
}

Typo.H1 = function ({ children, className, ...rest }: Props<HTMLParagraphElement>) {
  return (
    <h1 {...rest} className={__(s.h1, className)}>
      {children}
    </h1>
  )
}

Typo.H2 = function ({ children, className, ...rest }: Props<HTMLParagraphElement>) {
  return (
    <h2 {...rest} className={__(s.h2, className)}>
      {children}
    </h2>
  )
}

Typo.Lg = function ({ children, className, ...rest }: Props<HTMLParagraphElement>) {
  return (
    <p {...rest} className={__(s.lg, className)}>
      {children}
    </p>
  )
}

export default Typo
