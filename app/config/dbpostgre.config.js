module.exports = {
  HOST: "ec2-34-252-35-249.eu-west-1.compute.amazonaws.com",
  USER: "dsqksqybiecasp",
  PASSWORD: "14dc3dd5a841f76e6698872cbb806030294d661af78b82440133d2417f1607fa",
  DB: "dfc8nvqq60i3fb",
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


.\pg_dump dfc8nvqq60i3fb > C:\dev\donnees\postgre\heloku_sauvegarde.sql