import path from "path";

export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "postgres"); // default to postgres

  const connections = {
    postgres: {
      connection: {
        host: env("PGHOST", "localhost"),
        port: env.int("PGPORT", 5432),
        database: env("PGDATABASE", "strapi"),
        user: env("PGUSER", "strapi"),
        password: env("PGPASSWORD", "strapi"),
        ssl: { rejectUnauthorized: env.bool("PG_SSL", true) },
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
