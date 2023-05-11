// GET https://<your-site.com>/api/revalidate
// authorization = "token; no bearer"
// body: { pathToValidate: string }
import {
  StrapiEventBodyEntry as _StrapiEventBodyEntry,
  StrapiEventBodyMedia,
  StrapiEventBodyTest
} from '@/utils/strapi_missing_types'
import type { NextApiRequest as _NextApiRequest, NextApiResponse } from 'next'

const paths: Paths = [
  {
    path: '/',
    model: [
      'project',
      'get-in-contact',
      'global',
      'hero-section',
      'mypocket-display'
    ]
  },
  {
    path: '/projects',
    model: ['project']
  },
  {
    path: '/projects/[pid]',
    model: ['project'],
    exact: entry => '/project/' + (entry as any as { id: string }).id
  },
  { path: '/about', model: ['about'] }
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const auth = req.headers.authorization
  if (!auth || !String(auth).startsWith('Bearer '))
    throw new Error('header authorization must strat with Bearer')
  const token = auth?.split(' ')[1]

  if (token !== process.env.REVALIDATION_TOKEN)
    return res.status(401).json({ message: 'Invalid token' })

  if (req.body.event === 'trigger-test') return res.send('success')

  if (req.body.event.startsWith('entry.')) {
    const body = req.body as StrapiEventBodyEntry

    await Promise.all(
      paths
        .filter(path => path.model.includes(body.model))
        .map(path => (path.exact ? path.exact(body.entry) : path.path))
        .map(path => {
          console.log('to be revalidated:', path)
          return path
        })
        .map(path => res.revalidate(path))
    ).catch(() => res.status(500).send('not all path has been revalidated'))
  }

  if (req.body.event.startsWith('media.')) return res.send('media')
}

//
//
//
//
// helpers
interface NextApiRequest extends _NextApiRequest {
  body: StrapiEventBodyTest | StrapiEventBodyMedia | StrapiEventBodyEntry
}

// this is just the API ID
// you can get a list by running `npm run strapi -- content-types:list | grep api::`
export type availableModels =
  | 'project'
  | 'skill'
  | 'user'
  | 'about'
  | 'get-in-contact'
  | 'global'
  | 'hero-section'
  | 'mypocket-display'

type StrapiEventBodyEntry = Omit<_StrapiEventBodyEntry, 'model'> & {
  model: availableModels
}

type Paths = {
  path: string
  model: availableModels[]
  exact?: (entry: StrapiEventBodyEntry['entry']) => string
}[]
