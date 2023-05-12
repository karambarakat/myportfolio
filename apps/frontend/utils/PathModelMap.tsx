type Path = {
  path: string
  models: string[]
  exact?: (e: { id: string }) => string
}

export default class PathModelMap<m extends string> {
  constructor(
    paths: {
      path: string
      models: m[]
      exact?: (e: { id: string }) => string
    }[]
  ) {
    this.paths = paths
  }
  paths: Path[]
  addPath(path: Path) {
    this.paths.push(path)
  }

  getPaths(model: m, entry?: { id: string }): string[] {
    return this.paths
      .filter(path => path.models.includes(model))
      .map(path => {
        if (!path.exact) return path.path

        // @ts-ignore
        return path.exact(entry)
      })
      .filter(e => e !== null) as string[] // important step in the getStrOrNull approach
  }
}

// for testing
// const pm = new PathModelMap([
//   { path: '/', models: ['project', 'global'] },
//   { path: '/projects', models: ['project'] },
//   {
//     path: '/projects/[id]',
//     models: ['project'],
//     exact: entry => '/project/' + entry.get('id')
//   },
//   { path: '/about', models: ['about'] }
// ])

// assert(pm.getPaths('project', { id: '123' }), ['projects', '/', 'projects/123'])
// assert(pm.getPaths('about'), ['about'])
// assert(pm.getPaths('global'), ['about'])

// utils

// see at the `opinionated` comment
type hell<
  s extends string,
  acc extends string = never
> = s extends `${infer uno}/${infer duo}` ? hell<duo, uno | acc> : acc | s

type hell2<s extends string> = s extends `[${infer uno}]` ? uno : never

type hell3<s extends string> = hell2<hell<s>>

type test = hell3<'projects/[pid]/sdf/[s]'>

const getStrOrNull = (obj: unknown, key: string) => {
  if (typeof obj !== 'object' || obj === null) return null

  if (!(key in obj)) return null

  // @ts-ignore
  const rt = obj[key]

  if (typeof rt !== 'string') return null

  return rt
}
