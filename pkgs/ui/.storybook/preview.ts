import type { Preview } from '@storybook/react'
import '../tailwind/styles.css'
import WithColorSchema, { withColorSchemeType } from '../utils/withColorScheme'

const preview: Preview = {
  decorators: [WithColorSchema],
  globalTypes: {
    scheme: withColorSchemeType,
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    parameter: {
      docs: {
        controls: { exclude: ['children'] },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
