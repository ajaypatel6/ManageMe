//DONE
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    // user_id: {
    //   type: Sequelize.INTEGER,
    // },
  });

  return User;
};
