import { IndexPageQuery } from '@ws/types/dist/graphql/query'
import Image from 'next/image'
import React from 'react'
import Button from '@ws/ui/components/Button'
import Typo from '@ws/ui/components/Typo'

import react from '@/public/section1/react.png'
import mongo from '@/public/section1/mongo.png'
import node from '@/public/section1/node.png'
import express from '@/public/section1/express.png'
import _c from 'classnames'
import { Enum_Componentkennpageselectedprojectdetails_Type } from '@ws/types/dist/graphql/schema'

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
                className={_c(
                  'grid sm-mx:text-center gap-5 mb-5 child:sm-mx:mb-8 last:sm-mx:mb-0',
                  'items-center justify-items-center',
                  index % 2
                    ? 'sm:grid-areas-[right_left]'
                    : 'sm:grid-areas-[left_right]',
                  'sm:grid-cols-2 child:grid-in-[auto]'
                )}
                key={each.id}
              >
                <div className="sm:!grid-in-[left]">
                  <Typo.Lg>{each.heading}</Typo.Lg>
                  <Typo>{each.body}</Typo>
                  {each.callOfAction && (
                    <div className="flex sm-mx:justify-center gap-2">
                      {each.callOfAction.map(coa => {
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
                  )}
                </div>
                <div className="sm:!grid-in-[right] pointer-events-none selection:bg-transparent select-none max-w-[340px]">
                  <SubComponentOne type={each.type}></SubComponentOne>
                </div>
              </div>
            )
          })}
      </div>
      <Typo.H2 className="text-center my-8 mt-32">˅ More Projects ˅</Typo.H2>
      <ProjectsDisplay>
        {projects.data.map(project => {
          if (!project?.attributes || !project.id) return
          return (
            <ProjectSummary
              key={project.id}
              href={'/projects/' + project.id}
              data={project.attributes}
            />
          )
        })}
        <ProjectsDisplay.IfMore length={projects.data.length} />
        <ProjectsDisplay.ViewAll pageCount={projects.pagination.pageCount} />
      </ProjectsDisplay>
    </section>
  )
}

function SubComponentOne({
  type
}: {
  type: Enum_Componentkennpageselectedprojectdetails_Type
}) {
  return (
    <div className="!!border !!border-red-600">
      {(() => {
        switch (type) {
          case 'MERN_Stack':
            return (
              <div className="mb-12 text-white font-semibold grid grid-rows-2 gap-2 grid-flow-col child:rounded-md  w-[340px]">
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
                className="object-cover"
                src={ux.src}
                width={ux.width}
                height={ux.height}
                alt="user-experience-illustration"
              ></Image>
            )
          case 'Storybooks':
            return (
              <Image
                className="object-cover"
                src={storyBook.src}
                width={storyBook.width}
                height={storyBook.height}
                alt="Storybooks"
              ></Image>
            )
          case 'Good_Code_Quality':
            return (
              <Image
                className="object-cover"
                src={code.src}
                width={code.width}
                height={code.height}
                alt="Good_Code_Quality"
              ></Image>
            )
          case 'Modern_UI':
            return (
              <Image
                className="object-cover"
                src={ui.src}
                width={ui.width}
                height={ui.height}
                alt="Modern_UI"
              ></Image>
            )
          case 'Robust_DevOps':
            return (
              <Image
                className="object-cover"
                src={devOps.src}
                width={devOps.width}
                height={devOps.height}
                alt="Robust_DevOps"
              ></Image>
            )
          default:
            return (
              <Image
                className="object-cover"
                src={def.src}
                width={def.width}
                height={def.height}
                alt="Robust_DevOps"
              ></Image>
            )
        }
      })()}
    </div>
  )
}

import storyBook from '@/public/section1/undraw6Storybooks.svg'
import code from '@/public/section1/undraw3Code.svg'
import ui from '@/public/section1/undraw4UI.svg'
import ux from '@/public/section1/undraw_ux.svg'
import devOps from '@/public/section1/undraw5devops.svg'
import def from '@/public/section1/undraw_default.svg'
import ProjectSummary from '../content/ProjectSummary'
import ProjectsDisplay from '../content/ProjectsDisplay'

export default Selected
