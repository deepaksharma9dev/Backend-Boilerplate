import * as path from 'path'
import { Knex } from 'knex';

interface IknexConfig {
  [key: string]: Knex.Config;
}

const configs: IknexConfig = {
  development: {
    client: "pg",
    connection: {
     connectionString:  `postgres://${process.env.dbUser}:${process.env.dbPassword}@localhost:${process.env.dbHost}/${process.env.dbName}`
    },
    migrations: {
    tableName: "knex_migrations",
    extension: 'ts',
    directory:path.resolve('./db/migrations')
  }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      extension: 'ts',
      directory:'migrations'
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};


export default configs;