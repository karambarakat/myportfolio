module.exports = ({ env }) => ({
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
  },
  upload: {
    config:
      // todo: not tested; need e2e tests
      env("NODE_ENV") === "production"
        ? {
            provider: "strapi-provider-upload-do",
            providerOptions: {
              // accessKeyId: env("DO_SPACE_ACCESS_KEY"),
              // secretAccessKey: env("DO_SPACE_SECRET_KEY"),
              // endpoint: env("DO_SPACE_ENDPOINT"),
              // params: {
              //   Bucket: env("DO_SPACE_BUCKET"),
              // },
              key: env("DO_SPACE_ACCESS_KEY"),
              secret: env("DO_SPACE_SECRET_KEY"),
              endpoint: env("DO_SPACE_ENDPOINT"),
              space: env("DO_SPACE_BUCKET"),
              directory: "production",
              cdn: env("DO_SPACE_CDN"),
            },
            actionOptions: {
              upload: {},
              uploadStream: {},
              delete: {},
            },
          }
        : {},
  },
});
