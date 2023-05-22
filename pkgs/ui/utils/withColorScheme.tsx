import { Preview } from '@storybook/react'

type decoratorType = Preview['decorators'] extends Array<infer A> | undefined
  ? A
  : never

const withColorScheme: decoratorType = function decoratorF(Story, context) {
  const { scheme } = context.globals
  if (scheme === 'light')
    return (
      <div className="light">
        <Story />
      </div>
    )
  if (scheme === 'dark')
    return (
      <div className="dark">
        <Story />
      </div>
    )
  if (scheme === 'both')
    return (
      <div className="both">
        <Story />
      </div>
    )
  return (
    <div className="other">
      <Story />
    </div>
  )
}

export default withColorScheme

type globalType = Preview['globalTypes'] extends
  | Record<any, infer A>
  | undefined
  ? A
  : never

export const withColorSchemeType: globalType = {
  name: 'Scheme',
  description: 'Select light or dark theme',
  defaultValue: 'both',
  toolbar: {
    icon: 'mirror',
    items: ['light', 'dark', 'both'],
    dynamicTitle: true,
  },
}
