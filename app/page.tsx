import Image from 'next/image'
import pattern from '@/public/img/shades.png'
import { ReactNode } from 'react'

function Noise() {
  return (
    <svg width="100%" height="100%">
      <filter id="pedroduarteisalegend">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        ></feTurbulence>
      </filter>
      <rect
        width="100%"
        height="100%"
        filter="url(#pedroduarteisalegend)"
      ></rect>
    </svg>
  )
}

function GradientBlur({ inverted = false }: { inverted?: boolean }) {
  return (
    <div
      // this isolate is to create a stacking context
      // so mix-blend-difference of the img tag apply on the div.bg-white
      // otherwise it will be applied within some stacking context created outside
      // the boundary of this component
      className="isolate relative"
    >
      <img
        // z-1 in relative to the white background div below
        // in dark mode this tag will blend-difference with the white div below (i.e. invert colors)
        className={`z-1 relative max-w-none w-[1200px] ${
          inverted ? 'mix-blend-difference' : ''
        }`}
        // in addition this image doesn't scale with its container
        alt="background-pattern"
        loading="lazy"
        src={pattern.src}
      />
      <div className="bg-white absolute top-0 w-full h-full"></div>
    </div>
  )
}

function Background({ children: content }: { children: ReactNode }) {
  return (
    <div className="relative w-[800px] m-auto">
      <div className="absolute top-0 left-0 ml-[-200px] w-[1200px]">
        {/* <Noise /> */}
        <GradientBlur />
      </div>
      <div className="isolate">{content}</div>
    </div>
  )
}

export default function Page() {
  return (
    <Background>
      <main className="grid grid-cols-3 gap-y-8">
        <h1 className="text-center">Hi, My Name is Kenn</h1>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>{' '}
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>{' '}
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>{' '}
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>{' '}
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>{' '}
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>{' '}
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
        <p>
          about me: Deserunt duis aute occaecat amet incididunt aute culpa quis
          magna ex ullamco. Consequat ad laboris proident sit amet exercitation
          deserunt deserunt. Ipsum eu eiusmod amet magna elit ad. Magna ullamco
          aliqua nostrud elit nostrud magna est incididunt. Eiusmod ut cupidatat
          do cillum commodo. Laborum laboris duis esse nisi dolor voluptate
          officia quis velit cillum anim.
        </p>
      </main>
    </Background>
  )
}
