//DONE
module.exports = (sequelize, Sequelize) => {
    const Meditation = sequelize.define("meditations", {
      meditation_length: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
    //   city: {
    //     type: Sequelize.STRING,
    //   },
      // user_id: {
      //   type: Sequelize.INTEGER,
      // },
    });
  
    return Meditation;
  };
  