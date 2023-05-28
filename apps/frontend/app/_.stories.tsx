import Page from './error'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Page> = {
  title: 'frontend-app/index',
  component: Page,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

export const Normal = {} satisfies StoryObj<typeof Page>
