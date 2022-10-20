// config.js
//require('dotenv').config();

const env = 'test'; //process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
 app: {
   port: parseInt(process.env.PORT) || 8080
 },
 db: {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  name: process.env.DB_NAME || 'testdb',
  dialect: process.env.DB_DIALECT || 'postgres',
  pool: {
    max: parseInt(process.env.DB_max) || 5,
    min: parseInt(process.env.DB_min) || 0,
    acquire: parseInt(process.env.DB_acquire) || 30000,
    idle: parseInt(process.env.DB_idle) || 10000
  }
 }
};

const test = {
 app: {
   port: parseInt(process.env.PORT) || 5000
 },
 db: {
  host: process.env.DB_HOST || 'ec2-34-252-35-249.eu-west-1.compute.amazonaws.com',
  port: parseInt(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  name: process.env.DB_NAME || 'dfc8nvqq60i3fb',
  dialect: process.env.DB_DIALECT || 'postgres',
  pool: {
    max: parseInt(process.env.DB_max) || 5,
    min: parseInt(process.env.DB_min) || 0,
    acquire: parseInt(process.env.DB_acquire) || 30000,
    idle: parseInt(process.env.DB_idle) || 10000
  }
 }
};

const config = {
 dev,
 test
};

module.exports = config[env];