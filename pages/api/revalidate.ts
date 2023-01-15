// GET https://<your-site.com>/api/revalidate
// authorization = "token; no bearer"
// body: { pathToValidate: string }
import type { NextApiRequest, NextApiResponse as Res } from 'next'

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
    path: '/project',
    model: ['project'],
    exact: entry => '/project/' + (entry as any as { id: string }).id
  },
  { path: '/about', model: ['about'] }
]

type StrapiEventBodyTest = { event: 'trigger-test'; createdAt: string }
type StrapiEventBodyMedia = {
  event: string // starts with media.
  createdAt: string
  media: unknown
}
type StrapiEventBodyEntry = {
  event: string // starts with entry.
  createdAt: string
  model: availableModels
  entry: unknown
}
type Paths = {
  path: string
  model: availableModels[]
  exact?: (entry: StrapiEventBodyEntry['entry']) => string
}[]
interface Req extends NextApiRequest {
  body: StrapiEventBodyTest | StrapiEventBodyMedia | StrapiEventBodyEntry
}

export default async function handler(req: Req, res: Res) {
  const token = req.headers.authorization.split(' ')[1]
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
