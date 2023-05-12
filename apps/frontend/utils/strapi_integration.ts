// this is just the API ID, and it is used (as camelCase, either plural or singular ) in graphql queries
// you can get a list by running `npm run strapi -- content-types:list | grep api::`
export type models =
  | 'project'
  | 'skill'
  | 'user'
  | 'about'
  | 'get-in-contact'
  | 'global'
  | 'hero-section'
  | 'mypocket-display'
