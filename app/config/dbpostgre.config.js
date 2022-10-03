module.exports = {
  HOST: "ec2-54-228-125-183.eu-west-1.compute.amazonaws.com",
  USER: "xvxttkrnodwxyd",
  PASSWORD: "14dc3dd5a841f76e6698872cbb806030294d661af78b82440133d2417f1607fa",
  DB: "d3e5upumbpjia0",
  dialect: "postgres",
  port:5432, 
  dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        }
     },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
