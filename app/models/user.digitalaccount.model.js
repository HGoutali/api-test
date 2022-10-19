module.exports = (sequelize, Sequelize) => {
  const Digital_account = sequelize.define("digital_accounts", {
    authentId: {
      type: Sequelize.STRING(100),
	  field: 'authent_id'
    },
	authentIdField: {
      type: Sequelize.STRING(25),
	  field: 'authent_id_field'
    },
    provider: {
      type: Sequelize.STRING(25)
    },
    platform: {
      type: Sequelize.STRING(25)
    },
	countryCode: {
      type: Sequelize.STRING(2),
	  field: 'country_code'
    },
    userId: {
      type: Sequelize.INTEGER
    }
  });

  return Digital_account;
};