module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    country: {
      type: Sequelize.STRING
    },
    platform: {
      type: Sequelize.STRING
    },
    application: {
      type: Sequelize.STRING
    },
    appliField: {
      type: Sequelize.STRING
    },
    fieldValue: {
      type: Sequelize.STRING
    }
  });

  return Customer;
};
