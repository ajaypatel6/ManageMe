// DONE
// where the controller goes to do stuff with db
// get the db config from configuration
const config = require("../config/dbConfig.js");

const Sequelize = require("sequelize");

//test
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  // operatorsAliases: false, // deprecated?

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.aquire,
    idle: config.pool.idle,
  },
});

sequelize.authenticate()
  .then(()=> console.log('conected'))
  .catch(err=>console.log('Err' + err))

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/userModel")(sequelize, Sequelize);
db.role = require("../models/roleModel")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.ROLES = ["user", "admin", "moderator"];
module.exports = db;
