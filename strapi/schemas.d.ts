import {
  CollectionTypeSchema,
  StringAttribute,
  RequiredAttribute,
  SetMinMaxLength,
  JSONAttribute,
  DefaultTo,
  RelationAttribute,
  DateTimeAttribute,
  PrivateAttribute,
  EmailAttribute,
  UniqueAttribute,
  PasswordAttribute,
  BooleanAttribute,
  EnumerationAttribute,
  BigIntegerAttribute,
  IntegerAttribute,
  DecimalAttribute,
  SetMinMax,
  SingleTypeSchema,
  SetPluginOptions,
  DynamicZoneAttribute,
  ComponentAttribute,
  MediaAttribute,
  RichTextAttribute,
  TextAttribute,
  ComponentSchema
} from '@strapi/strapi'

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: 'Permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    subject: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    properties: JSONAttribute & DefaultTo<{}>
    conditions: JSONAttribute & DefaultTo<[]>
    role: RelationAttribute<'admin::permission', 'manyToOne', 'admin::role'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::permission', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::permission', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: 'User'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    firstname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    username: StringAttribute
    email: EmailAttribute &
      RequiredAttribute &
      PrivateAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: StringAttribute & PrivateAttribute
    registrationToken: StringAttribute & PrivateAttribute
    isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    roles: RelationAttribute<'admin::user', 'manyToMany', 'admin::role'> & PrivateAttribute
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>
    preferedLanguage: StringAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: 'Role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    code: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute
    users: RelationAttribute<'admin::role', 'manyToMany', 'admin::user'>
    permissions: RelationAttribute<'admin::role', 'oneToMany', 'admin::permission'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: 'Api Token'
    singularName: 'api-token'
    pluralName: 'api-tokens'
    displayName: 'Api Token'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1
      }> &
      DefaultTo<''>
    type: EnumerationAttribute<['read-only', 'full-access', 'custom']> &
      RequiredAttribute &
      DefaultTo<'read-only'>
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    lastUsedAt: DateTimeAttribute
    permissions: RelationAttribute<'admin::api-token', 'oneToMany', 'admin::api-token-permission'>
    expiresAt: DateTimeAttribute
    lifespan: BigIntegerAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'admin::api-token', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
  info: {
    name: 'API Token Permission'
    description: ''
    singularName: 'api-token-permission'
    pluralName: 'api-token-permissions'
    displayName: 'API Token Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1
      }>
    token: RelationAttribute<'admin::api-token-permission', 'manyToOne', 'admin::api-token'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'admin::api-token-permission', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: 'file'
    pluralName: 'files'
    displayName: 'File'
    description: ''
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    alternativeText: StringAttribute
    caption: StringAttribute
    width: IntegerAttribute
    height: IntegerAttribute
    formats: JSONAttribute
    hash: StringAttribute & RequiredAttribute
    ext: StringAttribute
    mime: StringAttribute & RequiredAttribute
    size: DecimalAttribute & RequiredAttribute
    url: StringAttribute & RequiredAttribute
    previewUrl: StringAttribute
    provider: StringAttribute & RequiredAttribute
    provider_metadata: JSONAttribute
    related: RelationAttribute<'plugin::upload.file', 'morphToMany'>
    folder: RelationAttribute<'plugin::upload.file', 'manyToOne', 'plugin::upload.folder'> &
      PrivateAttribute
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::upload.file', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: 'folder'
    pluralName: 'folders'
    displayName: 'Folder'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute
    parent: RelationAttribute<'plugin::upload.folder', 'manyToOne', 'plugin::upload.folder'>
    children: RelationAttribute<'plugin::upload.folder', 'oneToMany', 'plugin::upload.folder'>
    files: RelationAttribute<'plugin::upload.folder', 'oneToMany', 'plugin::upload.file'>
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::upload.folder', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface PluginI18NLocale extends CollectionTypeSchema {
  info: {
    singularName: 'locale'
    pluralName: 'locales'
    collectionName: 'locales'
    displayName: 'Locale'
    description: ''
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      SetMinMax<{
        min: 1
        max: 50
      }>
    code: StringAttribute & UniqueAttribute
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::i18n.locale', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: 'permission'
    description: ''
    singularName: 'permission'
    pluralName: 'permissions'
    displayName: 'Permission'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    action: StringAttribute & RequiredAttribute
    role: RelationAttribute<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
  }
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: 'role'
    description: ''
    singularName: 'role'
    pluralName: 'roles'
    displayName: 'Role'
  }
  pluginOptions: {
    'content-manager': {
      visible: false
    }
    'content-type-builder': {
      visible: false
    }
  }
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 3
      }>
    description: StringAttribute
    type: StringAttribute & UniqueAttribute
    permissions: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >
    users: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::users-permissions.role', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: 'user'
    description: ''
    singularName: 'user'
    pluralName: 'users'
    displayName: 'User'
  }
  options: {
    draftAndPublish: false
    timestamps: true
  }
  attributes: {
    username: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 3
      }>
    email: EmailAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    provider: StringAttribute
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6
      }>
    resetPasswordToken: StringAttribute & PrivateAttribute
    confirmationToken: StringAttribute & PrivateAttribute
    confirmed: BooleanAttribute & DefaultTo<false>
    blocked: BooleanAttribute & DefaultTo<false>
    role: RelationAttribute<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'plugin::users-permissions.user', 'oneToOne', 'admin::user'> &
      PrivateAttribute
  }
}

export interface ApiAboutAbout extends SingleTypeSchema {
  info: {
    singularName: 'about'
    pluralName: 'abouts'
    displayName: 'about'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    blocks: DynamicZoneAttribute<
      ['shared.media', 'shared.quote', 'shared.rich-text', 'shared.slider']
    > &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::about.about', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::about.about', 'oneToOne', 'admin::user'> & PrivateAttribute
    localizations: RelationAttribute<'api::about.about', 'oneToMany', 'api::about.about'>
    locale: StringAttribute
  }
}

export interface ApiGetInContactGetInContact extends SingleTypeSchema {
  info: {
    singularName: 'get-in-contact'
    pluralName: 'get-in-contacts'
    displayName: 'getInContactSection'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    message: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    links: ComponentAttribute<'shared.button', true> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    frontendDisplay: EnumerationAttribute<
      ['linkedin', 'github', 'freelancer', 'email', 'phone', 'other']
    > &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }> &
      DefaultTo<'other'>
    frontendDisplayPicture: MediaAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::get-in-contact.get-in-contact', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::get-in-contact.get-in-contact', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::get-in-contact.get-in-contact',
      'oneToMany',
      'api::get-in-contact.get-in-contact'
    >
    locale: StringAttribute
  }
}

export interface ApiGlobalGlobal extends SingleTypeSchema {
  info: {
    singularName: 'global'
    pluralName: 'globals'
    displayName: 'global'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    siteName: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    favicon: MediaAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    siteAbout: RichTextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    defaultSeo: ComponentAttribute<'shared.seo'> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::global.global', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::global.global', 'oneToOne', 'admin::user'> & PrivateAttribute
    localizations: RelationAttribute<'api::global.global', 'oneToMany', 'api::global.global'>
    locale: StringAttribute
  }
}

export interface ApiHeroSectionHeroSection extends SingleTypeSchema {
  info: {
    singularName: 'hero-section'
    pluralName: 'hero-sections'
    displayName: 'heroSection'
  }
  options: {
    draftAndPublish: false
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    h1: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    h2: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    aboutMe: RichTextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    callToAction: ComponentAttribute<'shared.button', true> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    picture: MediaAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::hero-section.hero-section', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::hero-section.hero-section', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::hero-section.hero-section',
      'oneToMany',
      'api::hero-section.hero-section'
    >
    locale: StringAttribute
  }
}

export interface ApiMypocketDisplayMypocketDisplay extends SingleTypeSchema {
  info: {
    singularName: 'mypocket-display'
    pluralName: 'mypocket-displays'
    displayName: 'mypocketDisplaySection'
    description: ''
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    content: DynamicZoneAttribute<['frontend-components.selected-project-details']> &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<
      'api::mypocket-display.mypocket-display',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    updatedBy: RelationAttribute<
      'api::mypocket-display.mypocket-display',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute
    localizations: RelationAttribute<
      'api::mypocket-display.mypocket-display',
      'oneToMany',
      'api::mypocket-display.mypocket-display'
    >
    locale: StringAttribute
  }
}

export interface ApiProjectProject extends CollectionTypeSchema {
  info: {
    singularName: 'project'
    pluralName: 'projects'
    displayName: 'project'
  }
  options: {
    draftAndPublish: true
  }
  pluginOptions: {
    i18n: {
      localized: true
    }
  }
  attributes: {
    title: StringAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    content: RichTextAttribute &
      RequiredAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    displayPicture: MediaAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    summary: TextAttribute &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    github: ComponentAttribute<'shared.button'> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    live: ComponentAttribute<'shared.button'> &
      SetPluginOptions<{
        i18n: {
          localized: true
        }
      }>
    skills: RelationAttribute<'api::project.project', 'manyToMany', 'api::skill.skill'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    publishedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::project.project', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    updatedBy: RelationAttribute<'api::project.project', 'oneToOne', 'admin::user'> &
      PrivateAttribute
    localizations: RelationAttribute<'api::project.project', 'oneToMany', 'api::project.project'>
    locale: StringAttribute
  }
}

export interface ApiSkillSkill extends CollectionTypeSchema {
  info: {
    singularName: 'skill'
    pluralName: 'skills'
    displayName: 'skill'
  }
  options: {
    draftAndPublish: false
  }
  attributes: {
    name: StringAttribute & RequiredAttribute
    projects: RelationAttribute<'api::skill.skill', 'manyToMany', 'api::project.project'>
    createdAt: DateTimeAttribute
    updatedAt: DateTimeAttribute
    createdBy: RelationAttribute<'api::skill.skill', 'oneToOne', 'admin::user'> & PrivateAttribute
    updatedBy: RelationAttribute<'api::skill.skill', 'oneToOne', 'admin::user'> & PrivateAttribute
  }
}

export interface FrontendComponentsSelectedProjectDetails extends ComponentSchema {
  info: {
    displayName: 'selected-project-details'
  }
  attributes: {
    heading: StringAttribute & RequiredAttribute
    body: TextAttribute & RequiredAttribute
    callOfActions: ComponentAttribute<'shared.button', true>
    subComponent: EnumerationAttribute<
      [
        'MERN Stack',
        'User Experience in mind',
        'Modern UI',
        'Good Code Quality',
        'Storybooks',
        'Robust DevOps'
      ]
    > &
      RequiredAttribute
  }
}

export interface SharedButton extends ComponentSchema {
  info: {
    displayName: 'button'
  }
  attributes: {
    text: StringAttribute
    href: StringAttribute & DefaultTo<'#'>
    external: BooleanAttribute & RequiredAttribute & DefaultTo<false>
  }
}

export interface SharedMedia extends ComponentSchema {
  info: {
    displayName: 'Media'
    icon: 'file-video'
  }
  attributes: {
    file: MediaAttribute
  }
}

export interface SharedQuote extends ComponentSchema {
  info: {
    displayName: 'Quote'
    icon: 'indent'
  }
  attributes: {
    title: StringAttribute
    body: TextAttribute
  }
}

export interface SharedRichText extends ComponentSchema {
  info: {
    displayName: 'Rich text'
    icon: 'align-justify'
    description: ''
  }
  attributes: {
    body: RichTextAttribute
  }
}

export interface SharedSeo extends ComponentSchema {
  info: {
    name: 'Seo'
    icon: 'allergies'
    displayName: 'Seo'
    description: ''
  }
  attributes: {
    metaTitle: StringAttribute & RequiredAttribute
    metaDescription: TextAttribute & RequiredAttribute
    shareImage: MediaAttribute
  }
}

export interface SharedSlider extends ComponentSchema {
  info: {
    displayName: 'Slider'
    icon: 'address-book'
    description: ''
  }
  attributes: {
    files: MediaAttribute
  }
}

declare global {
  namespace Strapi {
    interface Schemas {
      'admin::permission': AdminPermission
      'admin::user': AdminUser
      'admin::role': AdminRole
      'admin::api-token': AdminApiToken
      'admin::api-token-permission': AdminApiTokenPermission
      'plugin::upload.file': PluginUploadFile
      'plugin::upload.folder': PluginUploadFolder
      'plugin::i18n.locale': PluginI18NLocale
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission
      'plugin::users-permissions.role': PluginUsersPermissionsRole
      'plugin::users-permissions.user': PluginUsersPermissionsUser
      'api::about.about': ApiAboutAbout
      'api::get-in-contact.get-in-contact': ApiGetInContactGetInContact
      'api::global.global': ApiGlobalGlobal
      'api::hero-section.hero-section': ApiHeroSectionHeroSection
      'api::mypocket-display.mypocket-display': ApiMypocketDisplayMypocketDisplay
      'api::project.project': ApiProjectProject
      'api::skill.skill': ApiSkillSkill
      'frontend-components.selected-project-details': FrontendComponentsSelectedProjectDetails
      'shared.button': SharedButton
      'shared.media': SharedMedia
      'shared.quote': SharedQuote
      'shared.rich-text': SharedRichText
      'shared.seo': SharedSeo
      'shared.slider': SharedSlider
    }
  }
}
