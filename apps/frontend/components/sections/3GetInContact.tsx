import { IndexPageQuery } from '@ws/types/dist/graphql/query'
import Image from 'next/image'
import React from 'react'
import Separator from '@ws/ui/components/Separator'
import github from '@/public/section2/github.svg'
import freelancer from '@/public/section2/freelancer.svg'
import linkedin from '@/public/section2/linkedin.svg'

import phone from '@/public/section2/phone.svg'
import mail from '@/public/section2/mail.svg'
import Typo from '@ws/ui/components/Typo'

type Data = NonNullable<
  NonNullable<NonNullable<IndexPageQuery['getInContact']>['data']>['attributes']
>

function GetInContact({ data }: { data: Data }) {
  return (
    <section>
      <Typo.H1 className="text-center mb-6">Get in contact</Typo.H1>
      <Typo className="text-center">{data.message}</Typo>
      <div className="pt-4 flex gap-4 justify-center items-center">
        <div className="flex gap-4 justify-center">
          <a
            href={`tel:${
              data.links?.find(link => link?.text === 'phone')?.href ||
              '6502969766'
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
              data.links?.find(link => link?.text === 'email')?.href ||
              'k99.barakat@gmail.com'
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
        {data.links && (
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
  )
}

export default GetInContact
