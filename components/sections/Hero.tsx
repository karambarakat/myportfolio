import { IndexPageQuery } from '#gql-queries'
import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import personalImage from '@/public/personal/Perconal Image 248 rect.jpg'
import Typo from '../Typo'
import Markdown from '../Markdonw'

type Data = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<IndexPageQuery['heroSection']>['data']
    >['attributes']
  >
>

function Hero({ data }: { data: Data }) {
  return (
    <main className="pt-[200px] sm-height:pt-[25px]">
      <Typo.H1 className="text-center">{data.h1}</Typo.H1>
      <Typo.H2 className="text-center mb-8">{data.h2}</Typo.H2>
      <div className="flex gap-8 items-start">
        <Image
          className="sm-mx:hidden rounded-md shadow-2xl"
          alt="photo of me"
          src={data.picture?.data?.attributes?.url || personalImage}
          width={data.picture?.data?.attributes?.width || personalImage.width}
          height={
            data.picture?.data?.attributes?.height || personalImage.height
          }
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
