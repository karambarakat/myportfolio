// this is part of `build:strapi` command in `package.json`; see `manual.md` for more info

import { request, gql } from 'graphql-request'
import { writeFileSync } from 'fs'

const IntrospectionQuery = gql`
  #graphql

  query IntrospectionQuery {
    __schema {
      queryType {
        name
      }
      mutationType {
        name
      }
      subscriptionType {
        name
      }
      types {
        ...FullType
      }
      directives {
        name
        description
        args {
          ...InputValue
        }
        locations
      }
    }
  }
  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  fragment InputValue on __InputValue {
    name
    description
    type {
      ...TypeRef
    }
    defaultValue
  }
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
        }
      }
    }
  }
`

export default async function fetch_strapi_schema_into_json_file() {
  const schema = await request(
    'http://0.0.0.0:1337/graphql',
    IntrospectionQuery
  )

  const schema_str = JSON.stringify(schema, null, 2)

  writeFileSync('./src/graphql/schemas/strapi.json', schema_str)
}

fetch_strapi_schema_into_json_file()
