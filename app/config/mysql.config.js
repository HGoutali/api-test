module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "adminadmin2",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
