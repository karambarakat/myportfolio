import __ from 'classnames'
import s from './Button.module.scss'
import typo from './Typo.module.scss'

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: 'big' | 'normal'
}

export default function Button({ size = 'big', className, ...rest }: Props) {
  return (
    <button
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
