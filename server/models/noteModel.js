//DONE
module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("notes", {
      description: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.STRING,
      },
      // remove category for now
      // category: {
      //   type: Sequelize.STRING,
      // },
      // user_id: {
      //   type: Sequelize.INTEGER,
      // },
    });
  
    return Note;
  };
  