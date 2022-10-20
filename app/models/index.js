const configold = require("../config/dbpostgre.config.js");
const config = require('../config/config.js');


const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect,
    

    pool: {
      max: config.db.pool.max,
      min: config.db.pool.min,
      acquire: config.db.pool.acquire,
      idle: config.db.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.digital_account = require("../models/user.digitalaccount.model.js")(sequelize, Sequelize);
db.authent_factor = require("../models/user.authentfactor.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.customer_data = require("../models/customerdata.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});



db.user.hasOne(db.digital_account, { foreignKey: 'userId' });
db.digital_account.hasOne(db.authent_factor, { foreignKey: 'digital_accountId' });




db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
