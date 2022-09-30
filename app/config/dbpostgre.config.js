module.exports = {
  HOST: "ec2-54-228-125-183.eu-west-1.compute.amazonaws.com",
  USER: "xvxttkrnodwxyd",
  PASSWORD: "84c6ff46da6febf2f9cd62b7224d7759e3de4cf39c9c93ab1a478bff4560181b",
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
