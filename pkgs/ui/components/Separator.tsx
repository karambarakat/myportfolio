import __ from 'classnames'
import styles from './Separator.module.css'

interface Props {
  size?: 'auto' | { width?: string | number; height?: string | number }
}

export default function Separator({ size = 'auto' }: Props) {
  return (
    <div
      style={size !== 'auto' ? size : {}}
      className={__(styles.base, size === 'auto' ? styles.auto : styles.noauto)}
    />
  )
}
