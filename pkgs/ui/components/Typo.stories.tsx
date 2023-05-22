import type { Meta, StoryObj } from '@storybook/react'
import Typo from './Typo'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Typo> = {
  title: 'Typo',
  component: Typo,
  tags: ['autodocs'],
  args: { children: 'hello world' },
}

export default meta

export const All = {
  render: (args) => (
    <div className="grid gap-10">
      <Typo {...args} />
      <Typo.H1 {...args} />
      <Typo.H2 {...args} />
      <Typo.Lg {...args} />
    </div>
  ),
} satisfies StoryObj<typeof Typo>

export const Normal = {}

export const H1 = {
  name: 'h1',
  render: (args) => <Typo.H1 {...args} />,
} satisfies StoryObj<typeof Typo>

export const H2 = {
  name: 'h2',
  render: (args) => <Typo.H2 {...args} />,
} satisfies StoryObj<typeof Typo>

export const Lg = {
  name: 'lg',
  render: (args) => <Typo.Lg {...args} />,
} satisfies StoryObj<typeof Typo>
