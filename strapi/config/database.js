module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgresdb'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'db'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', '1234'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
