// use dotenv here?

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "12345678",
  DB: "manageme",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000,
  },
};
