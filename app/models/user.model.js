module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
	authent_id: {
      type: Sequelize.STRING
    }
  });

  return User;
};
