// GET https://<your-site.com>/api/revalidate
// authorization = "token; no bearer"
// body: { pathToValidate: string }
import PathModelMap from '@/utils/PathModelMap'
import {
  StrapiEventBodyEntry,
  StrapiEventBodyMedia,
  StrapiEventBodyTest
} from '@/utils/strapi_missing_types'
// import type { NextApiRequest as _NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

// this is just the API ID
// you can get a list by running `npm run strapi -- content-types:list | grep api::`
export type models =
  | 'project'
  // | 'skill'
  // | 'user'
  | 'about'
  | 'get-in-contact'
  | 'global'
  | 'hero-section'
  | 'mypocket-display'

const map = new PathModelMap([
  {
    path: '/',
    models: [
      'project',
      'get-in-contact',
      'global',
      'hero-section',
      'mypocket-display'
    ] satisfies models[]
  },
  {
    path: '/projects',
    models: ['project'] satisfies models[]
  },
  {
    path: '/projects/[pid]',
    models: ['project'] satisfies models[],
    exact: entry => '/project/' + entry.get('id')
  },
  { path: '/about', models: ['about'] satisfies models[] }
])

export async function GET(req: NextRequest) {
  return NextResponse.json({ toBeImplemented: true })
}

// export async function GET(req: NextRequest) {
//   // return NextResponse.json({ done: true })
//   if (!req.body) throw new Error('no body')

//   await getBearer(req).catch(e => {
//     return NextResponse.json({ invalid: true }) //.json({})
//     // res.status(401).json({ message: 'Invalid token' })
//   })

//   if (req.body.event === 'trigger-test') {
//     return NextResponse.json({ success: true })
//   }

//   if (req.body.event.startsWith('media.'))
//     return NextResponse.json({ media: true })

//   if (!req.body.event.startsWith('entry.')) {
//     return NextResponse.json({ notImplemented: true })
//   }

//   const body = req.body as StrapiEventBodyEntry

//   const paths = await Promise.all(
//     map.getPaths(body.model as models).map(path => {
//       console.log('to be revalidated:', path)
//       return path
//     })
//   )
//   // .map(path => res.revalidate(path))
//   // ).catch(() => res.status(500).send('not all path has been revalidated'))

//   return NextResponse.json({ paths })
// }

//
//
//
//
// helpers
// interface NextApiRequest extends NextRequest {
//   body: StrapiEventBodyTest | StrapiEventBodyMedia | StrapiEventBodyEntry
// }

// async function getBearer(req: NextRequest) {
//   const auth = req.headers.get('authorization')
//   if (!auth || !String(auth).startsWith('Bearer '))
//     throw new Error('header authorization must strat with Bearer')
//   const token = auth?.split(' ')[1]

//   if (token !== process.env.Strapi_Next_Webhook_Token)
//     throw new Error('token is invalid')
// }
