import __ from 'classnames'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({ typographer: true, linkify: true })

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  children?: string
}

export default function Markdown({
  // Elem = 'div',
  className,
  children,
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      dangerouslySetInnerHTML={{ __html: md.render(children || '') }}
      className={__('mb-12 prose', className)}
    />
  )
}
