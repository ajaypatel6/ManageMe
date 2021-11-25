//DONE
module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("tasks", {
      task_id: {
        type: Sequelize.INTEGER,
      },
      task_length: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      email: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      // user_id: {
      //   type: Sequelize.INTEGER,
      // },
    });
  
    return Task;
  };
  