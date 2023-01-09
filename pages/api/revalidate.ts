// GET https://<your-site.com>/api/revalidate
// authorization = "token; no bearer"
// body: { pathToValidate: string }
import type { NextApiRequest, NextApiResponse as Res } from 'next'

interface Req extends NextApiRequest {
  body: {
    pathToValidate: string
  }
}

export default async function handler(req: Req, res: Res) {
  // Check for secret to confirm this is a valid request
  if (req.headers.authorization !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(req.body.pathToValidate)
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
