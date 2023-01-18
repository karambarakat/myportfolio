import Separator from '@/components/Separator'
import Image from 'next/image'
import personalImage from '@/public/personal/Perconal Image 248 rect.jpg'
import Button from '@/components/Button'
import Typo from '@/components/Typo'
import _c from 'classnames'
import Link from 'next/link'

import react from '@/public/section1/react.png'
import mongo from '@/public/section1/mongo.png'
import node from '@/public/section1/node.png'
import express from '@/public/section1/express.png'
import website from '@/public/section1/website.webp'

// only server side imports
import query from './query.graphql'
import fetchQuery from '@/utils/fetchQuery'
import { IndexPageQuery } from '#gql-queries'
import { Enum_Componentfrontendcomponentsselectedprojectdetails_Subcomponent } from '#gql-schema'

function SubComponentOne({
  type
}: {
  type: Enum_Componentfrontendcomponentsselectedprojectdetails_Subcomponent
}) {
  return (
    <div className="!!border !!border-red-600">
      {(() => {
        switch (type) {
          case 'MERN_Stack':
            return (
              <div className="mb-12 text-white font-semibold grid grid-rows-2 gap-2 grid-flow-col child:rounded-md">
                <div className="!aspect-w-5 aspect-h-4 shadow-md bg-[#63d9f7]">
                  <div className="place-center gap-2">
                    <img
                      src={react.src}
                      className="h-[48px] w-[48px] rounded-full"
                      alt="react"
                    ></img>
                    <div>JavaScript</div>
                  </div>
                </div>
                <div className="!aspect-w-5 aspect-h-4 shadow-md bg-[#58aa50]">
                  <div className="place-center">
                    <img
                      src={mongo.src}
                      className="h-[48px] w-[48px] rounded-full"
                      alt="react"
                    ></img>
                    <div>MongoDb</div>
                  </div>
                </div>
                <div className="!aspect-w-5 aspect-h-4 shadow-md bg-red-800 relative top-12">
                  <div className="place-center">
                    <img
                      src={node.src}
                      className="h-[48px] w-[48px] rounded-full"
                      alt="react"
                    ></img>
                    <div>NodeJS</div>
                  </div>
                </div>
                <div className="!aspect-w-5 aspect-h-4 shadow-md bg-[#000] relative top-12">
                  <div className="place-center">
                    <img
                      src={express.src}
                      className="h-[48px] w-[48px] rounded-full"
                      alt="react"
                    ></img>
                    <div>ExpressJS</div>
                  </div>
                </div>
              </div>
            )
          case 'User_Experience_in_mind':
            return (
              <Image
                className="object-cover rounded-xl shadow-md"
                style={{ height: website.height * 1.3 }}
                src={website.src}
                width={website.width}
                height={website.height}
                alt="user-experience-illustration"
              ></Image>
            )
          case 'Good_Code_Quality':
            return <div>{type}</div>
          case 'Modern_UI':
            return <div>{type}</div>
          case 'Robust_DevOps':
            return <div>{type}</div>
          case 'Storybooks':
            return <div>{type}</div>
          default:
            return <div>{type}</div>
        }
      })()}
    </div>
  )
}

const obj: IndexPageQuery = {}

export default async function Page() {
  const gqlData: IndexPageQuery = await fetchQuery({ query })

  if (!gqlData?.heroSection?.data?.attributes)
    throw new Error('not enough data')
  if (!gqlData?.mypocketDisplay?.data?.attributes)
    throw new Error('not enough data')
  if (!gqlData?.getInContact?.data?.attributes)
    throw new Error('not enough data')
  if (!gqlData?.projects?.data) throw new Error('not enough data')

  const {
    heroSection: {
      data: { attributes: heroSection }
    },
    mypocketDisplay: {
      data: { attributes: mypocketDisplay }
    },
    getInContact: {
      data: { attributes: getInContact }
    },
    projects: {
      data: projects,
      meta: { pagination: projectsPagination }
    }
  } = gqlData

  return (
    <>
      <main className="pt-[200px] sm-height:pt-[25px]">
        <Typo.H1 className="text-center">{heroSection.h1}</Typo.H1>
        <Typo.H2 className="text-center mb-8">{heroSection.h2}</Typo.H2>
        <div className="flex gap-8 items-start">
          <div className="sm-mx:text-center flex-1">
            {heroSection.aboutMe.split('\n').map((each, i) => (
              <Typo key={i}>{each}</Typo>
            ))}
            {heroSection.callToAction && (
              <div className="flex sm-mx:justify-center gap-8 mt-4">
                {heroSection.callToAction?.map(each => {
                  return each && <Button key={each.id}>{each.text}</Button>
                })}
              </div>
            )}
          </div>
          <Image
            className="sm-mx:hidden rounded-md shadow-2xl"
            alt="photo of me"
            src={heroSection.picture?.data?.attributes?.url || personalImage}
            width={
              heroSection.picture?.data?.attributes?.width ||
              personalImage.width
            }
            height={
              heroSection.picture?.data?.attributes?.height ||
              personalImage.height
            }
          />
        </div>
      </main>
      <Separator />
      <section>
        <Typo.H1 className="text-center mb-6">Selected Project</Typo.H1>
        <div className="child:mb-12 last-child:mb-0">
          {mypocketDisplay.content &&
            mypocketDisplay.content.map((each, index) => {
              if (!each || each.__typename === 'Error') {
                console.error('error rendering the dynamic zone')
                return
              }

              return (
                <div
                  className="grid grid-cols-2 gap-5 mb-5 items-center"
                  key={each.id}
                >
                  <div className={index % 2 ? 'order-1' : ''}>
                    <Typo.Lg>{each.heading}</Typo.Lg>
                    <Typo>{each.body}</Typo>
                    {each.callOfActions &&
                      each.callOfActions.map(coa => {
                        if (!coa) return
                        return (
                          <Button
                            key={coa.id || ''}
                            size="normal"
                            href={coa.href || '#'}
                          >
                            {coa.text || ''}
                          </Button>
                        )
                      })}
                  </div>
                  <div className="pointer-events-none selection:bg-transparent select-none">
                    <SubComponentOne type={each.subComponent}></SubComponentOne>
                  </div>
                </div>
              )
            })}
        </div>
        <Typo.H2 className="text-center my-6 mt-12">
          &#x21DF;&#x21DF; More Projects &#x21DF;&#x21DF;
        </Typo.H2>
        <div className="grid md:grid-cols-2 gap-5 min-h-[100px]">
          {projects.map(project => {
            if (!project || !project.attributes) return

            const img = project?.attributes?.displayPicture?.data?.attributes

            return (
              <div key={project.id}>
                <div className="aspect-w-4 aspect-h-3 shadow-xl  rounded-xl overflow-hidden cursor-pointer">
                  <Link href={'/projects/' + project.id}>
                    {img ? (
                      <Image
                        className="!w-full !h-full !object-cover"
                        alt={img.alternativeText || project.attributes.title}
                        width={img.width || 12}
                        height={img.height || 12}
                        src={img.url}
                        style={{}}
                      />
                    ) : (
                      <img
                        className="!w-full !h-full !object-cover"
                        alt="no picture"
                        src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbececded4a0184e7de84b_portfolio%203%20-%20wide.svg"
                      />
                    )}
                  </Link>
                </div>
                <Link href={'/projects/' + project.id}>
                  <Typo.Lg className="mt-5">{project.attributes.title}</Typo.Lg>
                </Link>
                <Typo>{project.attributes.summary}</Typo>
                <div className="flex gap-2" id="coa">
                  <span>
                    {project.attributes.github && (
                      <Button
                        size="normal"
                        href={project.attributes.github.href || '#'}
                      >
                        view source
                      </Button>
                    )}
                  </span>
                  <span>
                    {project.attributes.live && (
                      <Button
                        size="normal"
                        href={project.attributes.live.href || '#'}
                      >
                        view live
                      </Button>
                    )}
                  </span>
                </div>
              </div>
            )
          })}
          {projects.length < 2 && (
            <div
              className={_c(
                projects.length === 0 && 'col-span-2',
                'place-self-center justify-self-center'
              )}
            >
              More Projects Coming
            </div>
          )}
          {projectsPagination.pageCount > 1 && (
            <div className="col-span-2 my-5 place-content-center grid">
              <Button Elem={Link} href="/projects">
                view more
              </Button>
            </div>
          )}
        </div>
      </section>
      {getInContact && (
        <>
          <Separator />
          <section>
            <Typo.H1 className="text-center mb-6">Get in contact</Typo.H1>
            <Typo className="text-center">{getInContact.message}</Typo>
            <div className="pt-4 flex gap-4 justify-center items-center">
              <div className="flex gap-4 justify-center">
                <a
                  href={`tel:${
                    getInContact.links?.find(link => link?.text === 'phone')
                      ?.href || '6502969766'
                  }`}
                  className="cursor-pointer place-center border-black border-2 p-3 rounded-full"
                >
                  <Image
                    src={phone.src}
                    height={24 || phone.height}
                    width={24 || phone.width}
                    alt={'phone'}
                  />
                </a>
                <a
                  href={`mailto:${
                    getInContact.links?.find(link => link?.text === 'email')
                      ?.href || 'k99.barakat@gmail.com'
                  }`}
                  className="cursor-pointer place-center border-black border-2 p-3 rounded-full"
                >
                  <Image
                    src={mail.src}
                    height={mail.height}
                    width={mail.width}
                    alt={'mail'}
                  />
                </a>
              </div>
              {getInContact.links && (
                <>
                  <Separator size={{ height: 40 }} />
                  <div className="flex gap-4 justify-center">
                    {/* I have to figure out a way to extend button component in a way such as I have icon associated with it*/}
                    {[
                      {
                        text: 'Github',
                        href: 'https://github.com/karambarakat/myportfolio',
                        id: 1,
                        img: github
                      },
                      {
                        text: 'Freelancer',
                        href: 'https://www.freelancer.com/u/KennethBarakat',
                        id: 2,
                        img: freelancer
                      },
                      {
                        text: 'LinkedIn',
                        href: 'https://www.linkedin.com/in/kenn-barakat-775931262/',
                        id: 2,
                        img: linkedin
                      }
                    ].map(link => {
                      if (!link) return
                      // the following is the structure from Strapi button vomponent
                      // const {id, href?, text?, external, __typename?} = link
                      return (
                        <a
                          key={link.id}
                          href={link.href}
                          className="cursor-pointer place-center border-black border-2 p-3 rounded-full"
                        >
                          <Image
                            src={link.img.src}
                            height={24 || link.img.height}
                            width={24 || link.img.width}
                            alt={link.text}
                          />
                        </a>
                      )
                    })}
                  </div>
                </>
              )}
            </div>
          </section>
        </>
      )}
      <div className="flex-1"></div>
    </>
  )
}

import github from '@/public/section2/github.svg'
import freelancer from '@/public/section2/freelancer.svg'
import linkedin from '@/public/section2/linkedin.svg'

import phone from '@/public/section2/phone.svg'
import mail from '@/public/section2/mail.svg'
