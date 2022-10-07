module.exports = (sequelize, Sequelize) => {
  const Customer_data = sequelize.define("customer_data", {
    platform: {
      type: Sequelize.STRING
    },
    object_id: {
      type: Sequelize.STRING
    },
    object_type: {
      type: Sequelize.STRING
    },
    object_value: {
      type: Sequelize.STRING
    }
  });

  return Customer_data;
};
