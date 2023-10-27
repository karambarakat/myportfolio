/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment ProjectEntity on ProjectEntity {\n    id\n    attributes {\n      content\n      title summary github live \n      displayPicture { data { attributes { url width height } } } \n      skills { data { attributes { title } } } \n      createdAt updatedAt slug\n    }\n  }\n": types.ProjectEntityFragmentDoc,
    "\n  fragment Project on Project {\n    content\n    title summary github live \n    displayPicture { data { attributes { url width height } } } \n    skills { data { attributes { title } } } \n    createdAt updatedAt slug\n  }\n": types.ProjectFragmentDoc,
    "\n  fragment ProjectMeta on Project {\n    title summary github live \n    displayPicture { data { attributes { url width height } } } \n    skills { data { attributes { title } } } \n    createdAt updatedAt slug\n  }\n": types.ProjectMetaFragmentDoc,
    "\n  fragment picture on UploadFileEntityResponse{\n    data{\n      attributes {\n        url width height\n      }\n    }\n  }\n": types.PictureFragmentDoc,
    "\n  fragment Pagination on Pagination {\n    total\n    page\n    pageSize\n    pageCount\n  }\n": types.PaginationFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectEntity on ProjectEntity {\n    id\n    attributes {\n      content\n      title summary github live \n      displayPicture { data { attributes { url width height } } } \n      skills { data { attributes { title } } } \n      createdAt updatedAt slug\n    }\n  }\n"): (typeof documents)["\n  fragment ProjectEntity on ProjectEntity {\n    id\n    attributes {\n      content\n      title summary github live \n      displayPicture { data { attributes { url width height } } } \n      skills { data { attributes { title } } } \n      createdAt updatedAt slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Project on Project {\n    content\n    title summary github live \n    displayPicture { data { attributes { url width height } } } \n    skills { data { attributes { title } } } \n    createdAt updatedAt slug\n  }\n"): (typeof documents)["\n  fragment Project on Project {\n    content\n    title summary github live \n    displayPicture { data { attributes { url width height } } } \n    skills { data { attributes { title } } } \n    createdAt updatedAt slug\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectMeta on Project {\n    title summary github live \n    displayPicture { data { attributes { url width height } } } \n    skills { data { attributes { title } } } \n    createdAt updatedAt slug\n  }\n"): (typeof documents)["\n  fragment ProjectMeta on Project {\n    title summary github live \n    displayPicture { data { attributes { url width height } } } \n    skills { data { attributes { title } } } \n    createdAt updatedAt slug\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment picture on UploadFileEntityResponse{\n    data{\n      attributes {\n        url width height\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment picture on UploadFileEntityResponse{\n    data{\n      attributes {\n        url width height\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Pagination on Pagination {\n    total\n    page\n    pageSize\n    pageCount\n  }\n"): (typeof documents)["\n  fragment Pagination on Pagination {\n    total\n    page\n    pageSize\n    pageCount\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;