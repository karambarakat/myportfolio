// @ts-nocheck
import {
  ComponentFrontendComponentsSelectedProjectDetails,
  Exact
} from './schema'
export type FileAllAttributesFragment = {
  __typename?: 'UploadFile'
  caption?: string | null
  createdAt?: any | null
  ext?: string | null
  formats?: any | null
  hash: string
  height?: number | null
  width?: number | null
  mime: string
  name: string
  previewUrl?: string | null
  provider: string
  provider_metadata?: any | null
  size: number
  updatedAt?: any | null
  url: string
  alternativeText?: string | null
  related?: Array<
    | { __typename: 'About' }
    | { __typename: 'ComponentFrontendComponentsSelectedProjectDetails' }
    | { __typename: 'ComponentSharedButton' }
    | { __typename: 'ComponentSharedMedia' }
    | { __typename: 'ComponentSharedQuote' }
    | { __typename: 'ComponentSharedRichText' }
    | { __typename: 'ComponentSharedSeo' }
    | { __typename: 'ComponentSharedSlider' }
    | { __typename: 'GetInContact' }
    | { __typename: 'Global' }
    | { __typename: 'HeroSection' }
    | { __typename: 'I18NLocale' }
    | { __typename: 'MypocketDisplay' }
    | { __typename: 'Project' }
    | { __typename: 'Skill' }
    | { __typename: 'UploadFile' }
    | { __typename: 'UploadFolder' }
    | { __typename: 'UsersPermissionsPermission' }
    | { __typename: 'UsersPermissionsRole' }
    | { __typename: 'UsersPermissionsUser' }
    | null
  > | null
}

export type GlobalQueryVariables = Exact<{ [key: string]: never }>

export type GlobalQuery = {
  __typename?: 'Query'
  global?: {
    __typename?: 'GlobalEntityResponse'
    data?: {
      __typename?: 'GlobalEntity'
      attributes?: {
        __typename?: 'Global'
        siteName: string
        siteAbout: string
        defaultSeo?: {
          __typename?: 'ComponentSharedSeo'
          id: string
          metaDescription: string
          metaTitle: string
          shareImage?: {
            __typename?: 'UploadFileEntityResponse'
            data?: {
              __typename?: 'UploadFileEntity'
              attributes?: {
                __typename?: 'UploadFile'
                caption?: string | null
                createdAt?: any | null
                ext?: string | null
                formats?: any | null
                hash: string
                height?: number | null
                width?: number | null
                mime: string
                name: string
                previewUrl?: string | null
                provider: string
                provider_metadata?: any | null
                size: number
                updatedAt?: any | null
                url: string
                alternativeText?: string | null
                related?: Array<
                  | { __typename: 'About' }
                  | {
                      __typename: 'ComponentFrontendComponentsSelectedProjectDetails'
                    }
                  | { __typename: 'ComponentSharedButton' }
                  | { __typename: 'ComponentSharedMedia' }
                  | { __typename: 'ComponentSharedQuote' }
                  | { __typename: 'ComponentSharedRichText' }
                  | { __typename: 'ComponentSharedSeo' }
                  | { __typename: 'ComponentSharedSlider' }
                  | { __typename: 'GetInContact' }
                  | { __typename: 'Global' }
                  | { __typename: 'HeroSection' }
                  | { __typename: 'I18NLocale' }
                  | { __typename: 'MypocketDisplay' }
                  | { __typename: 'Project' }
                  | { __typename: 'Skill' }
                  | { __typename: 'UploadFile' }
                  | { __typename: 'UploadFolder' }
                  | { __typename: 'UsersPermissionsPermission' }
                  | { __typename: 'UsersPermissionsRole' }
                  | { __typename: 'UsersPermissionsUser' }
                  | null
                > | null
              } | null
            } | null
          } | null
        } | null
        favicon?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              caption?: string | null
              createdAt?: any | null
              ext?: string | null
              formats?: any | null
              hash: string
              height?: number | null
              width?: number | null
              mime: string
              name: string
              previewUrl?: string | null
              provider: string
              provider_metadata?: any | null
              size: number
              updatedAt?: any | null
              url: string
              alternativeText?: string | null
              related?: Array<
                | { __typename: 'About' }
                | {
                    __typename: 'ComponentFrontendComponentsSelectedProjectDetails'
                  }
                | { __typename: 'ComponentSharedButton' }
                | { __typename: 'ComponentSharedMedia' }
                | { __typename: 'ComponentSharedQuote' }
                | { __typename: 'ComponentSharedRichText' }
                | { __typename: 'ComponentSharedSeo' }
                | { __typename: 'ComponentSharedSlider' }
                | { __typename: 'GetInContact' }
                | { __typename: 'Global' }
                | { __typename: 'HeroSection' }
                | { __typename: 'I18NLocale' }
                | { __typename: 'MypocketDisplay' }
                | { __typename: 'Project' }
                | { __typename: 'Skill' }
                | { __typename: 'UploadFile' }
                | { __typename: 'UploadFolder' }
                | { __typename: 'UsersPermissionsPermission' }
                | { __typename: 'UsersPermissionsRole' }
                | { __typename: 'UsersPermissionsUser' }
                | null
              > | null
            } | null
          } | null
        } | null
      } | null
    } | null
  } | null
}

export type ComponentAFragment = {
  __typename?: 'ComponentFrontendComponentsSelectedProjectDetails'
  id: string
  heading: string
  body: string
  subComponent: Enum_Componentfrontendcomponentsselectedprojectdetails_Subcomponent
  callOfActions?: Array<{
    __typename?: 'ComponentSharedButton'
    id: string
    text?: string | null
    href?: string | null
    external: boolean
  } | null> | null
}

export type IndexPageQueryVariables = Exact<{ [key: string]: never }>

export type IndexPageQuery = {
  __typename?: 'Query'
  heroSection?: {
    __typename?: 'HeroSectionEntityResponse'
    data?: {
      __typename?: 'HeroSectionEntity'
      attributes?: {
        __typename?: 'HeroSection'
        h1: string
        h2: string
        aboutMe: string
        callToAction?: Array<{
          __typename?: 'ComponentSharedButton'
          id: string
          text?: string | null
          href?: string | null
          external: boolean
        } | null> | null
        picture: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              caption?: string | null
              createdAt?: any | null
              ext?: string | null
              formats?: any | null
              hash: string
              height?: number | null
              width?: number | null
              mime: string
              name: string
              previewUrl?: string | null
              provider: string
              provider_metadata?: any | null
              size: number
              updatedAt?: any | null
              url: string
              alternativeText?: string | null
              related?: Array<
                | { __typename: 'About' }
                | {
                    __typename: 'ComponentFrontendComponentsSelectedProjectDetails'
                  }
                | { __typename: 'ComponentSharedButton' }
                | { __typename: 'ComponentSharedMedia' }
                | { __typename: 'ComponentSharedQuote' }
                | { __typename: 'ComponentSharedRichText' }
                | { __typename: 'ComponentSharedSeo' }
                | { __typename: 'ComponentSharedSlider' }
                | { __typename: 'GetInContact' }
                | { __typename: 'Global' }
                | { __typename: 'HeroSection' }
                | { __typename: 'I18NLocale' }
                | { __typename: 'MypocketDisplay' }
                | { __typename: 'Project' }
                | { __typename: 'Skill' }
                | { __typename: 'UploadFile' }
                | { __typename: 'UploadFolder' }
                | { __typename: 'UsersPermissionsPermission' }
                | { __typename: 'UsersPermissionsRole' }
                | { __typename: 'UsersPermissionsUser' }
                | null
              > | null
            } | null
          } | null
        }
      } | null
    } | null
  } | null
  mypocketDisplay?: {
    __typename?: 'MypocketDisplayEntityResponse'
    data?: {
      __typename?: 'MypocketDisplayEntity'
      attributes?: {
        __typename?: 'MypocketDisplay'
        content: Array<
          | {
              __typename: 'ComponentFrontendComponentsSelectedProjectDetails'
              id: string
              heading: string
              body: string
              subComponent: Enum_Componentfrontendcomponentsselectedprojectdetails_Subcomponent
              callOfActions?: Array<{
                __typename?: 'ComponentSharedButton'
                id: string
                text?: string | null
                href?: string | null
                external: boolean
              } | null> | null
            }
          | { __typename: 'Error' }
          | null
        >
      } | null
    } | null
  } | null
  getInContact?: {
    __typename?: 'GetInContactEntityResponse'
    data?: {
      __typename?: 'GetInContactEntity'
      attributes?: {
        __typename?: 'GetInContact'
        message: string
        links?: Array<{
          __typename?: 'ComponentSharedButton'
          id: string
          href?: string | null
          text?: string | null
          external: boolean
        } | null> | null
      } | null
    } | null
  } | null
  projects?: {
    __typename?: 'ProjectEntityResponseCollection'
    data: Array<{
      __typename?: 'ProjectEntity'
      id?: string | null
      attributes?: {
        __typename?: 'Project'
        title: string
        summary?: string | null
        displayPicture?: {
          __typename?: 'UploadFileEntityResponse'
          data?: {
            __typename?: 'UploadFileEntity'
            attributes?: {
              __typename?: 'UploadFile'
              caption?: string | null
              createdAt?: any | null
              ext?: string | null
              formats?: any | null
              hash: string
              height?: number | null
              width?: number | null
              mime: string
              name: string
              previewUrl?: string | null
              provider: string
              provider_metadata?: any | null
              size: number
              updatedAt?: any | null
              url: string
              alternativeText?: string | null
              related?: Array<
                | { __typename: 'About' }
                | {
                    __typename: 'ComponentFrontendComponentsSelectedProjectDetails'
                  }
                | { __typename: 'ComponentSharedButton' }
                | { __typename: 'ComponentSharedMedia' }
                | { __typename: 'ComponentSharedQuote' }
                | { __typename: 'ComponentSharedRichText' }
                | { __typename: 'ComponentSharedSeo' }
                | { __typename: 'ComponentSharedSlider' }
                | { __typename: 'GetInContact' }
                | { __typename: 'Global' }
                | { __typename: 'HeroSection' }
                | { __typename: 'I18NLocale' }
                | { __typename: 'MypocketDisplay' }
                | { __typename: 'Project' }
                | { __typename: 'Skill' }
                | { __typename: 'UploadFile' }
                | { __typename: 'UploadFolder' }
                | { __typename: 'UsersPermissionsPermission' }
                | { __typename: 'UsersPermissionsRole' }
                | { __typename: 'UsersPermissionsUser' }
                | null
              > | null
            } | null
          } | null
        } | null
        github?: {
          __typename?: 'ComponentSharedButton'
          text?: string | null
          href?: string | null
        } | null
        live?: {
          __typename?: 'ComponentSharedButton'
          text?: string | null
          href?: string | null
        } | null
        skills?: {
          __typename?: 'SkillRelationResponseCollection'
          data: Array<{
            __typename?: 'SkillEntity'
            attributes?: { __typename?: 'Skill'; name: string } | null
          }>
        } | null
      } | null
    }>
    meta: {
      __typename?: 'ResponseCollectionMeta'
      pagination: {
        __typename?: 'Pagination'
        page: number
        pageCount: number
        pageSize: number
        total: number
      }
    }
  } | null
}
