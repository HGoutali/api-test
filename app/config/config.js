// config.js
const env = 'test'; //process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
 app: {
   port: parseInt(process.env.DEV_APP_PORT) || 8080
 },
 db: {
  host: process.env.DEV_DB_HOST || 'localhost',
  port: parseInt(process.env.DEV_DB_PORT) || 5432,
  user: process.env.DEV_DB_USER || 'postgres',
  password: process.env.DEV_DB_PASSWORD || 'adminadmin2',
  name: process.env.DEV_DB_NAME || 'testdb',
  dialect: process.env.DEV_DB_DIALECT || 'postgres',
  pool: {
    max: parseInt(process.env.DEV_DB_max) || 5,
    min: parseInt(process.env.DEV_DB_min) || 0,
    acquire: parseInt(process.env.DEV_DB_acquire) || 30000,
    idle: parseInt(process.env.DEV_DB_idle) || 10000
  }
 }
};

const test = {
 app: {
   port: parseInt(process.env.DEV_APP_PORT) || 5000
 },
 db: {
  host: process.env.DEV_DB_HOST || 'ec2-34-252-35-249.eu-west-1.compute.amazonaws.com',
  port: parseInt(process.env.DEV_DB_PORT) || 5432,
  user: process.env.DEV_DB_USER || 'dsqksqybiecasp',
  password: process.env.DEV_DB_PASSWORD || '14dc3dd5a841f76e6698872cbb806030294d661af78b82440133d2417f1607fa',
  name: process.env.DEV_DB_NAME || 'dfc8nvqq60i3fb',
  dialect: process.env.DEV_DB_DIALECT || 'postgres',
  pool: {
    max: parseInt(process.env.DEV_DB_max) || 5,
    min: parseInt(process.env.DEV_DB_min) || 0,
    acquire: parseInt(process.env.DEV_DB_acquire) || 30000,
    idle: parseInt(process.env.DEV_DB_idle) || 10000
  }
 }
};

const config = {
 dev,
 test
};

module.exports = config[env];