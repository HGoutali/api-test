module.exports = (sequelize, Sequelize) => {
  const CustomerData = sequelize.define("customerData", {
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

  return CustomerData;
};
