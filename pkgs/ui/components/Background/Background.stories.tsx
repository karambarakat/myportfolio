import type { Meta, StoryObj } from '@storybook/react'
import Illuminate from '../Background/Illuminate'
import Background_ from './index'
import bg from './assets/shades.png'

const meta: Meta<typeof Illuminate> = {
  title: 'Background-effects',
  component: Illuminate,
  tags: ['autodocs'],
  args: {
    bg: bg.src,
  },
}

export default meta
type Story = StoryObj<typeof Illuminate>

export const Hover: Story = {}

export const Background: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => {
    return (
      <Background_ {...args}>
        <div className="child:text-3xl grid gap-10 pt-10">
          <p>
            Occaecat nulla do elit ipsum eiusmod qui. Cillum irure laborum
            reprehenderit do cupidatat. Laborum excepteur adipisicing fugiat
            labore exercitation velit pariatur. Consequat eiusmod elit duis
            consequat labore exercitation irure veniam eiusmod dolore tempor
            magna adipisicing do. Elit occaecat nulla nostrud nisi esse id et
            laborum.
          </p>
          <p>
            Officia esse esse qui sit consectetur aliqua id voluptate elit
            consequat dolore irure eiusmod adipisicing. Mollit ex id ut anim
            esse proident reprehenderit cillum aute aliquip sunt. Non magna
            magna elit anim ea et ad in ad culpa elit aliqua non commodo.
            Deserunt sunt aliquip dolor fugiat aute ea sunt qui et consectetur
            do ea. Fugiat veniam aliquip voluptate ad ullamco irure irure
            cupidatat minim officia. Excepteur ut eiusmod excepteur commodo est
            eiusmod tempor aliquip. Pariatur commodo dolore culpa in nostrud
            anim adipisicing.
          </p>
          <p>
            Deserunt minim pariatur dolor sit consectetur tempor ad et sint anim
            occaecat velit nulla aliquip. Sit veniam anim veniam magna aliqua.
            Consequat laboris commodo consectetur esse eu.
          </p>
        </div>
      </Background_>
    )
  },
}
