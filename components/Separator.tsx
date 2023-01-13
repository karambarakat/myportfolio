import __ from 'classnames'
import sytles from './Separator.module.css'

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: 'auto' | { width?: string; height?: string }
}

export default function Separator({ size = 'auto' }: Props) {
  return (
    <div style={size === 'auto' ? { alignSelf: 'initial' } : size} className={__(sytles.base)} />
  )
}
