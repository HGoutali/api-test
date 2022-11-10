module.exports = (sequelize, Sequelize) => {
  const Digital_account = sequelize.define("digital_accounts", {
    authentIdValue: {
      type: Sequelize.STRING(100),
	  field: 'authent_id'
    },
	authentIdType: {
      type: Sequelize.STRING(25),
	  field: 'authent_id_field'
    },
    provider: {
      type: Sequelize.STRING(25)
    },
    platformCode: {
      type: Sequelize.STRING(25),
	  field: 'platform'
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