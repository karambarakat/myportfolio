import __ from 'classnames'
import s from './Button.module.scss'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'big' | 'normal'
}

export default function Button({ size = 'big', className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={__(
        s.base,
        {
          big: s.size_big,
          normal: s.size_normal,
        }[size],
        className
      )}
    />
  )
}
