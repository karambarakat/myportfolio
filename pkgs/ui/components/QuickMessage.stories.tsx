import type { Meta, StoryObj } from '@storybook/react'
import QuickMessage from './QuickMessage'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof QuickMessage> = {
  title: 'QuickMessage',
  component: QuickMessage,
  parameters: {
    layout: 'centered',
  },
  args: {},
}

export default meta
type Story = StoryObj<typeof QuickMessage>

export const Default: Story = {}

export const Action: Story = {
  args: {
    actions: [
      {
        display: 'load',
        fn: () => {
          action('action clicked: load')
        },
      },
      {
        display: 'exit',
        fn: () => {
          action('action clicked: exit')
        },
      },
    ],
  },
}

export const CustomCode: Story = {
  args: {
    code: '500',
    message: 'server error',
  },
}
