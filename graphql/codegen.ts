import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'graphql/schema.graphql',
  documents: ['app/**/*.graphql'],
  generates: {
    './graphql/schema.ts': {
      plugins: ['typescript', 'typescript-operations']
    }
  }
}

export default config
