import type { Meta, StoryObj } from '@storybook/react'
import Container from './Container'
import Typo from './Typo.module.scss'

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
  tags: ['autodocs'],
  args: {
    children: (
      <div className="child:text-3xl grid gap-10 pt-10">
        <p>
          Occaecat nulla do elit ipsum eiusmod qui. Cillum irure laborum
          reprehenderit do cupidatat. Laborum excepteur adipisicing fugiat
          labore exercitation velit pariatur. Consequat eiusmod elit duis
          consequat labore exercitation irure veniam eiusmod dolore tempor magna
          adipisicing do. Elit occaecat nulla nostrud nisi esse id et laborum.
        </p>
        <p>
          Officia esse esse qui sit consectetur aliqua id voluptate elit
          consequat dolore irure eiusmod adipisicing. Mollit ex id ut anim esse
          proident reprehenderit cillum aute aliquip sunt. Non magna magna elit
          anim ea et ad in ad culpa elit aliqua non commodo. Deserunt sunt
          aliquip dolor fugiat aute ea sunt qui et consectetur do ea. Fugiat
          veniam aliquip voluptate ad ullamco irure irure cupidatat minim
          officia. Excepteur ut eiusmod excepteur commodo est eiusmod tempor
          aliquip. Pariatur commodo dolore culpa in nostrud anim adipisicing.
        </p>
        <p>
          Deserunt minim pariatur dolor sit consectetur tempor ad et sint anim
          occaecat velit nulla aliquip. Sit veniam anim veniam magna aliqua.
          Consequat laboris commodo consectetur esse eu.
        </p>
      </div>
    ),
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {}

export const margin: Story = {
  args: {
    children: (
      <div className="child:text-3xl grid gap-10 pt-10">
        <p>
          Occaecat nulla do elit ipsum eiusmod qui. Cillum irure laborum
          reprehenderit do cupidatat. Laborum excepteur adipisicing fugiat
          labore exercitation velit pariatur. Consequat eiusmod elit duis
          consequat labore exercitation irure veniam eiusmod dolore tempor magna
          adipisicing do. Elit occaecat nulla nostrud nisi esse id et laborum.
        </p>
        <p className={Container.shift} style={{ ...Container.shift_style(30) }}>
          <h1 className={Typo.h1}>shift 10px</h1>
          Officia esse esse qui sit consectetur aliqua id voluptate elit
          consequat dolore irure eiusmod adipisicing. Mollit ex id ut anim esse
          proident reprehenderit cillum aute aliquip sunt. Non magna magna elit
          anim ea et ad in ad culpa elit aliqua non commodo. Deserunt sunt
          aliquip dolor fugiat aute ea sunt qui et consectetur do ea. Fugiat
          veniam aliquip voluptate ad ullamco irure irure cupidatat minim
          officia. Excepteur ut eiusmod excepteur commodo est eiusmod tempor
          aliquip. Pariatur commodo dolore culpa in nostrud anim adipisicing.
        </p>
        <p className={Container.negative_padding}>
          <h1 className={Typo.h1}>no padding</h1>
          Deserunt minim pariatur dolor sit consectetur tempor ad et sint anim
          occaecat velit nulla aliquip. Sit veniam anim veniam magna aliqua.
          Consequat laboris commodo consectetur esse eu.
        </p>
      </div>
    ),
  },
}
