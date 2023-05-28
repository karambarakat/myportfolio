import type { StorybookConfig } from '@storybook/nextjs'
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../apps/frontend/app/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../apps/frontend/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    // I think this line is what allow storybook to read tailwind (postcss loader) directives
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}

export default config
