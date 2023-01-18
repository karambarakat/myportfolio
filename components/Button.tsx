import __ from 'classnames'
import { ReactComponentElement } from 'react'
import s from './Button.module.scss'
import typo from './Typo.module.scss'

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  size?: 'big' | 'normal'
  Elem?: any
}

export default function Button({
  Elem = 'a',
  size = 'big',
  className,
  ...rest
}: Props) {
  return (
    <Elem
      {...rest}
      className={__(
        s.base,
        {
          big: typo.lg,
          normal: ''
        }[size],
        className
      )}
    />
  )
}
