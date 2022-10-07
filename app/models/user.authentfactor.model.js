module.exports = (sequelize, Sequelize) => {
  const Authent_factor = sequelize.define("authent_factors", {
    type: {
      type: Sequelize.STRING
    },
    value: {
      type: Sequelize.STRING
    },
    digital_accountId: {
      type: Sequelize.INTEGER
    }
  });

  return Authent_factor;
};