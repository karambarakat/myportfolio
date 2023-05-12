'use server'
import { models } from '@/utils/strapi_integration'
// todo: not tested yet
// POST https://<your-site.com>/api/revalidate
// authorization = "bearer token"
// body: { model: string, entry: { id: string }, event: string, createdAt: string }
import { strapi_webhook_body } from '@/utils/strapi_missing_types'
import { revalidateTag } from 'next/cache'

import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (!auth) return new Response('no authorization token', { status: 401 })

  const token =
    typeof auth === 'string' &&
    auth.split(' ')[0] === 'Bearer' &&
    auth.split(' ')[1]

  if (!token) return new Response('bearer token is invalid', { status: 401 })

  if (token !== process.env.Strapi_Next_Webhook_Token)
    return new Response('not authorized', { status: 401 })

  const body = (await req.json()) as strapi_webhook_body

  if (!body.event.startsWith('entry.')) {
    return new Response('test success', { status: 522 })
  }

  // @ts-ignore
  const model = body.model as models

  if (!model || typeof model !== 'string') {
    throw new Error('model is not valid: ' + body)
  }

  console.log('models to be revalidated: ', model)
  revalidateTag('model:' + model)
  return new Response('success, validation for' + model)
}
