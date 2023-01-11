import Separator from '@/components/Separator'
import Image from 'next/image'
import personalImage from '@/public/personal/Perconal Image 248 rect.jpg'
import Button from '@/components/Button'

export default function Page() {
  return (
    <>
      <main className="pt-[200px] sm-height:pt-[25px]">
        <h1 className="text-center text-7xl pb-3">Hi, My Name is Kenn</h1>
        <h2 className="text-center font-light text-4xl pb-12">
          I’m Frontend developer based in the bay area
        </h2>
        <div className="flex gap-8 items-start">
          <div className="sm-mx:text-center">
            <p className="pb-3 text-lg">
              I love building user-friendly and minimalistic web apps with
              state-of-the-art technologies.
            </p>
            <p className="pb-3 text-lg">
              I'm a self-taught Javascript front-end developer with general
              knowledge in backend and DevOps.
            </p>
            <p className="pb-3 text-lg">
              I spent the last year teaching myself, building my portfolio and
              working on freelancing projects.
            </p>
            <p className="pb-3 text-lg">
              I value hard work and dedication. Although I taught myself skills
              in backend and devOps, I found myself devoted to mastering and
              expanding my skill set in front-end development.
            </p>
            <div className="flex sm-mx:justify-center gap-8 mt-4">
              <Button>View Github</Button>
              <Button>View CV</Button>
            </div>
          </div>
          <Image
            className="sm-mx:hidden rounded-md shadow-2xl"
            alt="photo of me"
            src={personalImage}
          />
        </div>
      </main>
      <Separator />
      <section>
        <h1 className="text-center text-7xl pb-3">Selected Project</h1>
      </section>
      <Separator />
      <section>
        <h1 className="text-center text-7xl pb-3">More Projects</h1>
      </section>
      <Separator />
      <section>
        <h1 className="text-center text-7xl pb-3">Get in contact</h1>
      </section>
    </>
  )
}
