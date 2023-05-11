/**
 * if used inside server component "a feature of nextjs 13" the `markdown-it` module will not be shipped to the frontend
 */
import MarkdownIt from 'markdown-it'
import s from '@ws/ui/components/Button.module.scss'

const mdi = new MarkdownIt().use(md => {
  md.renderer.rules.link_open = function (tokens, idx, options, env, slf) {
    const token = tokens[idx]
    if (token.type !== 'link_open') {
      return slf.renderToken(tokens, idx, options)
    }

    tokens[idx].attrJoin('class', s.base)
    return slf.renderToken(tokens, idx, options)
  }
})

export default function toCustomMd(str: string) {
  return mdi.renderInline(str)
}
