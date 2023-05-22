/// <reference types="next" />
import __ from 'classnames'
import { ReactComponentElement } from 'react'
import s from './Button.module.scss'
import typo from './Typo.module.scss'

interface Props extends React.ComponentPropsWithoutRef<'a'> {
  size?: 'big' | 'normal'
}

export default function Button({ size = 'big', className, ...rest }: Props) {
  return (
    <a
      {...rest}
      className={__(
        s.base,
        {
          big: typo.lg,
          normal: '',
        }[size],
        className
      )}
    />
  )
}
