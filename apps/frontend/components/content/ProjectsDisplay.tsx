import React from 'react'
import { ReactNode } from 'react'
import Link from 'next/link'
import Button from '@ws/ui/components/Button'
import _c from 'classnames'

function ProjectsDisplay({ children }: { children: ReactNode }) {
  return (
    <div className="flex child:w-[350px] justify-center gap-5 min-h-[100px]">
      {children}
    </div>
  )
}

ProjectsDisplay.IfMore = function IfMore({ length }: { length: number }) {
  return length < 2 ? (
    <div
      className={_c(
        length === 0 && 'col-span-2',
        'place-self-center justify-self-center'
      )}
    >
      More Projects Coming
    </div>
  ) : (
    <></>
  )
}

ProjectsDisplay.ViewAll = function ViewAll({
  pageCount
}: {
  pageCount: number
}) {
  return pageCount > 1 ? (
    <div className="col-span-2 my-5 place-content-center grid">
      <Link href="/projects">
        <Button>view more</Button>
      </Link>
    </div>
  ) : (
    <></>
  )
}

export default ProjectsDisplay
