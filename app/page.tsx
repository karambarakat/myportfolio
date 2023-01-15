import Separator from '@/components/Separator'
import Image from 'next/image'
import personalImage from '@/public/personal/Perconal Image 248 rect.jpg'
import Button from '@/components/Button'
import Typo from '@/components/Typo'

function ComponentOne() {
  return <div className="bg-black h-64">d</div>
}

export default function Page() {
  return (
    <>
      <main className="pt-[200px] sm-height:pt-[25px]">
        <Typo.H1 className="text-center">Hi, My Name is Kenn</Typo.H1>
        <Typo.H2 className="text-center mb-8">I’m Frontend developer based in the bay area</Typo.H2>
        <div className="flex gap-8 items-start">
          <div className="sm-mx:text-center">
            <Typo>
              I love building user-friendly and minimalistic web apps with state-of-the-art
              technologies.
            </Typo>
            <Typo>
              I'm a self-taught Javascript front-end developer with general knowledge in backend and
              DevOps.
            </Typo>
            <Typo>
              I spent the last year teaching myself, building my portfolio and working on
              freelancing projects.
            </Typo>
            <Typo>
              I value a growth mindset and consistent hard-work. I&rsquo;m always looking on how I
              can improve or learn new skills. In addition, I&rsquo;m dedicated to putting in
              consistent hard-work to reach my full potential in my career in the next 10 years.
            </Typo>
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
        <Typo.H1 className="text-center mb-6">Selected Project</Typo.H1>
        <div className="child:mb-12 last-child:mb-0">
          <div className="grid grid-cols-2 gap-5 mb-5 items-center">
            <ComponentOne></ComponentOne>
            <div>
              <Typo.Lg>MERN Stack</Typo.Lg>
              <Typo>
                Fully functional React, Express, MongoDB and NodeJS web application. This is a
                simple-to-use CRUD application.
              </Typo>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mb-5 items-center">
            <div>
              <Typo.Lg>User Experience in mind</Typo.Lg>
              <Typo>
                Achieved a good google Lighthouse report, build with all web vitals and UX basics in
                mind.
              </Typo>
            </div>
            <ComponentOne></ComponentOne>
          </div>
          <div className="grid grid-cols-2 gap-5 mb-5 items-center">
            <ComponentOne />
            <div>
              <Typo.Lg>Modern UI</Typo.Lg>
              <Typo>
                Built using TailwindCSS for flexible styling + CSSModule and PostCSS to build
                different complex components.
              </Typo>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mb-5 items-center">
            <div>
              <Typo.Lg>Good Code Quality</Typo.Lg>
              <Typo>
                I used Typescript to ensure robust code and common backend/frontend interfaces, with
                test-driven development using JestJS to unit test my application. TSDoc for API
                reference and code readability.
              </Typo>
            </div>

            <ComponentOne />
          </div>
          <div className="grid grid-cols-2 gap-5 mb-5 items-center">
            <ComponentOne />
            <div>
              <Typo.Lg>Storybooks</Typo.Lg>
              <Typo>
                Beside TSDoc for documenting my code I provided storybooks for visualizing my app.
              </Typo>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mb-5 items-center">
            <div>
              <Typo.Lg>Robust DevOps</Typo.Lg>
              <Typo>
                Dockerized application, used Terraform to manage different cloud infrastructure, and
                Github Actions to automate workflows on pushes.
              </Typo>
            </div>
            <ComponentOne />
          </div>
        </div>
        <Typo.H2 className="text-center my-6">
          &#x21DF;&#x21DF; More Projects &#x21DF;&#x21DF;
        </Typo.H2>
        <div className="grid grid-cols-2 gap-5">
          {[
            {
              title: 'hi',
              img: 'https://stapi-portfolio-bucket-only-owner.s3.us-west-1.amazonaws.com/Perconal_Image_512_a48b652daa.jpg?updated_at=2023-01-14T22:39:43.903Z',
              link: '#',
              github: '#'
            }
          ].map((card, i, l) => {
            const extra = l.length < 2 && <div>more coming</div>
            const extra2 = l.length > 0 && <div className="col-span-2">vaiw all</div>

            return (
              <>
                <div>
                  {/* <Image src={card.img} alt={card.title}></Image> */}
                  <Typo.Lg>{card.title}</Typo.Lg>
                </div>
                {extra}
                {extra2}
              </>
            )
          })}
        </div>
      </section>
      <Separator />
      <section>
        <Typo.H1 className="text-center mb-6">Get in contact</Typo.H1>
      </section>
      <div className="flex-1"></div>
    </>
  )
}
