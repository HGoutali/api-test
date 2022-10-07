module.exports = (sequelize, Sequelize) => {
  const Digital_account = sequelize.define("digital_accounts", {
    authent_id: {
      type: Sequelize.STRING
    },
    provider: {
      type: Sequelize.STRING
    },
    platform: {
      type: Sequelize.STRING
    },
	country_code: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER
    }
  });

  return Digital_account;
};