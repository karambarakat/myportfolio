import { IndexPageQuery } from '#gql-queries'
import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import Typo from '../Typo'

import react from '@/public/section1/react.png'
import mongo from '@/public/section1/mongo.png'
import node from '@/public/section1/node.png'
import express from '@/public/section1/express.png'
import website from '@/public/section1/website.webp'
import Link from 'next/link'
import _c from 'classnames'
import { Enum_Componentfrontendcomponentsselectedprojectdetails_Subcomponent } from '#gql-schema'

type Data = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<IndexPageQuery['mypocketDisplay']>['data']
    >['attributes']
  >
>

type Projects = {
  data: NonNullable<
    NonNullable<NonNullable<NonNullable<IndexPageQuery['projects']>['data']>>
  >

  pagination: NonNullable<
    NonNullable<
      NonNullable<NonNullable<IndexPageQuery['projects']>['meta']>['pagination']
    >
  >
}

function Selected({ data, projects }: { data: Data; projects: Projects }) {
  return (
    <section>
      <Typo.H1 className="text-center mb-6">Selected Project</Typo.H1>
      <div className="child:mb-12 last-child:mb-0">
        {data.content &&
          data.content.map((each, index) => {
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
        {projects.data.map(project => {
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
        {projects.data.length < 2 && (
          <div
            className={_c(
              projects.data.length === 0 && 'col-span-2',
              'place-self-center justify-self-center'
            )}
          >
            More Projects Coming
          </div>
        )}
        {projects.pagination.pageCount > 1 && (
          <div className="col-span-2 my-5 place-content-center grid">
            <Button Elem={Link} href="/projects">
              view more
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

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

export default Selected
