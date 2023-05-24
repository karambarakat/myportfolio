import { IndexPageQuery } from '@ws/types/dist/graphql/query'
import ImageCMS from '../Image-CMS'
import React from 'react'
import Button from '@ws/ui/components/Button'
import personalImage from '@/public/personal/Perconal Image 248 rect.jpg'
import Typo from '@ws/ui/components/Typo'
import Markdown from '../Markdonw'

type Data = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<IndexPageQuery['heroSection']>['data']
    >['attributes']
  >
>

function Hero({ data }: { data: Data }) {
  if (
    !data.picture.data?.attributes?.url ||
    !data.picture.data?.attributes?.width ||
    !data.picture.data?.attributes?.height
  )
    throw new Error('missing data: hero section / picture')

  return (
    <main className="pt-[200px] sm-height:pt-[25px]">
      <Typo.H1 className="text-center">{data.h1}</Typo.H1>
      <Typo.H2 className="text-center mb-8">{data.h2}</Typo.H2>
      <div className="flex gap-8 items-start">
        <ImageCMS
          className="sm-mx:hidden rounded-md shadow-2xl"
          alt="photo of me"
          src={data.picture?.data?.attributes?.url}
          width={data.picture?.data?.attributes?.width}
          height={data.picture?.data?.attributes?.height}
        />
        <div className="sm-mx:text-center flex-1">
          <Markdown>{data.aboutMe}</Markdown>

          {data.callToAction && (
            <div className="flex sm-mx:justify-center gap-8 mt-4">
              {data.callToAction?.map(each => {
                return (
                  each && (
                    <Button key={each.id} href={each.href || '#'}>
                      {each.text}
                    </Button>
                  )
                )
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Hero
