import __ from 'classnames'
import sytles from './Separator.module.css'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'auto' | { width?: string | number; height?: string | number }
}

export default function Separator({ size = 'auto' }: Props) {
  return (
    <div
      style={
        size === 'auto'
          ? { alignSelf: 'stretch' }
          : {
              display: 'grid',
              placeContent: 'center',
              placeItems: 'center',
              alignSelf: 'center',
              ...size
            }
      }
      className={__(sytles.base)}
    />
  )
}
