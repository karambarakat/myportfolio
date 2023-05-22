import type { Meta, StoryObj } from '@storybook/react'
import Separator from './Separator'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Separator> = {
  title: 'Separator',
  component: Separator,
  tags: ['autodocs'],
  args: {},
}

export default meta

export const Default = {
  decorators: [
    (Story) => {
      return (
        <>
          <p>PEiusmod sint incididunt voluptate occaecat.</p>
          <Story />
          <p>Mollit sint id officia occaecat velit non nulla enim id.</p>
        </>
      )
    },
  ],
} satisfies StoryObj<typeof Separator>

const mapping = { auto: 'auto', nonAuto: { width: '450px', height: '2px' } }
export const NonAuto = {
  decorators: [Default.decorators?.[0]],
  args: { size: { width: '450px', height: '2px' } },
  argTypes: {
    size: {
      options: ['auto', 'nonAuto'],
      mapping: { auto: 'auto', nonAuto: { width: '450px', height: '2px' } },
      control: {
        type: 'radio',
        labels: {
          auto: 'auto',
          nonAuto: 'non-auto (width: 450px, height: 2px)',
        },
      },
    },
  },
} satisfies StoryObj<typeof Separator>

export const Horizontal = {
  decorators: [
    Default.decorators?.[0],
    (Story) => <div className="flex gap-4">{Story()}</div>,
  ],
} satisfies StoryObj<typeof Separator>
