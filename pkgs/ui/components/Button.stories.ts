import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button, Click Me',
    onClick: action('clicked'),
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Big: Story = {
  args: {
    size: 'big',
  },
}

export const Normal: Story = {
  args: {
    size: 'normal',
  },
}
