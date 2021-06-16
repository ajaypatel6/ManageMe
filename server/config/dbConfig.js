// DONE
// use dotenv here?
const dotenv = require("dotenv"); // env for passwords
dotenv.config({ path: "./.env" });

module.exports = {
  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "12345678",
  // DB: "manageme",
  HOST: process.env.DATABASE_HOST,
  USER: process.env.DATABASE_USER,
  PASSWORD: process.env.DATABASE_PASSWORD,
  DB: process.env.DATABASE,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    aquire: 30000,
    idle: 10000,
  },
};
//   user: process.env.DATABASE_USER,
//   host: process.env.DATABASE_HOST,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE,
