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
            provider: "aws-s3",
            providerOptions: {
              accessKeyId: env("AWS_ACCESS_KEY_ID"),
              secretAccessKey: env("AWS_ACCESS_SECRET"),
              region: env("AWS_REGION"),
              params: {
                Bucket: env("AWS_BUCKET"),
              },
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
