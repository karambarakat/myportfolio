module.exports = ({ env }) => ({
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("DO_SPACE_ACCESS_KEY"),
        secretAccessKey: env("DO_SPACE_SECRET_KEY"),
        endpoint: env("DO_SPACE_ENDPOINT"),
        params: {
          Bucket: env("DO_SPACE_BUCKET"),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
