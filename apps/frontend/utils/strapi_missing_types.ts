export type strapi_webhook_body = {
  event: 'trigger-test' | `entry.${string}` | `media.${string}`
  createdAt: string
  media?: unknown // only present if event starts with media.
  model?: string // only present if event starts with entry.
  entry: unknown // only present if event starts with entry. ,probably {id: string}
}
