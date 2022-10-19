module.exports = (sequelize, Sequelize) => {
  const Customer_data = sequelize.define("customer_data", {
    provider: {
      type: Sequelize.STRING
    },
	authent_id_field: {
      type: Sequelize.STRING(25)
    },
    authent_id: {
      type: Sequelize.STRING(100)
    },
    object_type: {
      type: Sequelize.STRING(25)
    },
    object_value: {
      type: Sequelize.STRING(4000)
    }
  });

  return Customer_data;
};
