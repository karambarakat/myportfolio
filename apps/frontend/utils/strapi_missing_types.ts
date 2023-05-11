export type StrapiEventBodyTest = { event: 'trigger-test'; createdAt: string }
export type StrapiEventBodyMedia = {
  event: string // starts with media.
  createdAt: string
  media: unknown
}
export type StrapiEventBodyEntry = {
  event: string // starts with entry.
  createdAt: string
  model: string
  entry: unknown
}
