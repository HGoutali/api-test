module.exports = (sequelize, Sequelize) => {
  const Digital_account = sequelize.define("digital_accounts", {
    authentId: {
      type: Sequelize.STRING,
	  field: 'authent_id'
    },
    provider: {
      type: Sequelize.STRING
    },
    platform: {
      type: Sequelize.STRING
    },
	countryCode: {
      type: Sequelize.STRING,
	  field: 'country_code'
    },
    userId: {
      type: Sequelize.INTEGER
    }
  });

  return Digital_account;
};