import type { Meta, StoryObj } from '@storybook/react'
import QuickMessage from './QuickMessage'
import { action } from '@storybook/addon-actions'
import { Provider, useAddAction } from '@/utils/actionMap'

const meta: Meta<typeof QuickMessage> = {
  title: 'QuickMessage',
  component: QuickMessage,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <Provider value={[]}>
          <Story />
        </Provider>
      )
    },
  ],
  tags: ['autodocs'],
  args: {},
}

export default meta
type Story = StoryObj<typeof QuickMessage>

export const Default: Story = {}

const uuid = '123'

export const Action: Story = {
  decorators: [
    (Story) => {
      // todo: this one is not working
      useAddAction({ id: uuid, display: 'reload', fn: () => action('reload') })
      return <Story />
    },
  ],
  args: {
    actions: [uuid],
  },
}

export const CustomCode: Story = {
  args: {
    code: '500',
    message: 'server error',
  },
}
