import path from "path";

export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  const connections = {
    postgres: {
      connection: {
        ...(env("DATABASE_URL")
          ? { connectionString: env("DATABASE_URL") }
          : {
              host: env("DATABASE_HOST", "localhost"),
              port: env.int("DATABASE_PORT", 5432),
              database: env("DATABASE_NAME", "strapi"),
              user: env("DATABASE_USERNAME", "strapi"),
              password: env("DATABASE_PASSWORD", "strapi"),
            }),
        ssl: {
          rejectUnauthorized: false,
        },
        schema: env("DATABASE_SCHEMA", "public"),
      },
      pool: {
        min: env.int("DATABASE_POOL_MIN", 2),
        max: env.int("DATABASE_POOL_MAX", 10),
      },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
