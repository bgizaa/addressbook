require('dotenv').config();

const isProduction = process.env.NODE_ENV == 'production'

module.exports = {
    name: 'default',
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    seeds: ['dist/db/seeds/**/*.js'],
    factories: ['dist/db/factories/**/*.js'],
    migrations: ['dist/db/migrations/**/*.js'],
    entities: ['dist/**/*.entity.js'],
    //FIXME:
    // remember to disable  synchronize & enable migrationsRun  for prod
    synchronize: true,
    migrationsRun: false,
    dropSchema: false,
    cache: false,
    logging: false,
    // ssl: isProduction,//FIXME: 
    cli: {
        entitiesDir: 'src/db/entities',
        migrationsDir: 'src/db/migrations',
    },
};
