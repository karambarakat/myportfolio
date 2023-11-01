const path = require("path");

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT");

  if (!client || !(client === "sqlite" || client === "postgres"))
    throw new Error("DATABASE_CLIENT is not defined, or is invalid");

  const connections = {
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
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
