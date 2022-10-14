module.exports = (sequelize, Sequelize) => {
  const Authent_factor = sequelize.define("authent_factors", {
    type: {
      type: Sequelize.STRING
    },
    value: {
      type: Sequelize.STRING
    },
    digitalAccountId: {
      type: Sequelize.INTEGER,
	  field: 'digital_accountId'
    }
  });

  return Authent_factor;
};