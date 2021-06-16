// Imports, initialize modules and routes, listen for connections
const express = require("express"); // to start server
const bodyParser = require("body-parser");
const cors = require("cors"); // NEED

const app = express();

var corsOptions = {
  origin: "http://localhost:3001",
};

// this is the same as the authroutes, access-contrl-allow-headers, that is manually alter header
app.use(cors(corsOptions)); // allow cross platform

// parse reqs of content-type-application json, deprecated i guess?
app.use(bodyParser.json());

// parse form data, middleware for forms.. true/ false??
// this was body parser
app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const weatherKey = "18eda1685298ff0be778b9f349d22244";

// ------------------------------------------------------------------------------------------------------------
// creates tables? force:true will drop the table if it already exists..?
const db = require("./models");
const Role = db.role;
// will be back

//****************** */
//For production, just insert these rows manually and use sync() without parameters to avoid dropping data:
db.sequelize.sync();
//****************** */

// for first time
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop/Resync DB with {force: true}");
//   initial();
// });

//creates 3 new rows in database
function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
// ------------------------------------------------------------------------------------------------------------
// Routes

app.get("/", (req, res) => {
  res.json({ message: "Welcome " });
});

require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);
// ------------------------------------------------------------------------------------------------------------

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`running server on port ${PORT}`);
});

// OLD
// OLD
// OLD
// OLD
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// old rquires..?..
//not sure why app.use(express.json()) not there

// const mysql = require("mysql"); // for sql
// var request = require("request"); // for request weather

// const dotenv = require("dotenv"); // env for passwords
// // dotenv.config({ path: "./.env" });
// dotenv.config({ path: "./.env" });

// const path = require("path");

// app.use(express.json()); //parsing all // FOR vals in form is JSON

// //view engine?
// app.set("view engine", "jade");

// // validate emails
// var validator = require("email-validator");
// const { log } = require("console");
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// connect to sql
// const db = mysql.createConnection({
//   user: process.env.DATABASE_USER,
//   host: process.env.DATABASE_HOST,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE,
// });

// //not doing error check on db.
// db.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("ManageMe database connected");
//   }
// });

// app.get("/users", (req, res) => {
//   db.query("SELECT * FROM users", (err, results) => {
//     if (err) {
//       return res.send(err);
//     } else {
//       return res.json({
//         data: results,
//       });
//     }
//   });
// });

// // send data into DB
// // conisered a CONTROLLER .. you could put this isn a different file

// // app.post("/register", (req, res) => {
// //   const name = req.body.name; // only possible from express.json

// //   const city = req.body.city;
// //   const email = req.body.email;

// //   const password = req.body.password;
// //   const confirmPassword = req.body.passwordConfirm;

// //   // const { name, email, city, password, confirmPassword } = req.body; THIS IS SHORT VERSION, destructured
// //   if (password === confirmPassword) {
// //     db.query(
// //       "INSERT INTO users (name,email,password,city) VALUES (?,?,?,?)",
// //       [name, email, password, city],
// //       (err, result) => {
// //         if (err) {
// //           console.log(err);
// //         }
// //         if (result.length > 0) {
// //           return res.render("register", {
// //             message: "The email is in use already",
// //           });
// //         } else if (password !== passwordConfirm) {
// //           return res.render("register", {
// //             message: "Passwords not matching",
// //           });
// //         }
// //       }
// //     );
// //   }

// //   //1503

// //   // res.send("registration submitted");
// // });

// app.post("/register", (req, res) => {
//   //grab vals

//   const name = req.body.name; // only possible from express.json
//   const password = req.body.password;
//   const city = req.body.city;
//   const email = req.body.email;
//   //sql
//   if (name == "") {
//     res.send("Enter name");
//   }
//   if (password == "") {
//     res.send("Enter password");
//   }
//   if (city == "") {
//     res.send("Enter City");
//   }
//   if (email == "") {
//     res.send("Enter Email");
//   }
//   if (!validator.validate(email)) {
//     res.send("Email not valid");
//   }
//   if (password.length < 8) {
//     res.send("Password needs to be atleast 8 characters");
//   }

//   // // checking email?
//   db.query(
//     "INSERT INTO users (name,email,password,city) VALUES (?,?,?,?)",
//     [name, email, password, city],
//     (err, result) => {
//       if (err) {
//         console.log({ err: err });
//         res.send({ message: "Cant signup" });
//         // render message?
//       }

//       res.send({ message: "Signing" });

//       // logged in
//     }
//   );
//   //post
// });

// app.post("/login", (req, res) => {
//   const password = req.body.password;
//   const email = req.body.email;
//   //sql
//   db.query(
//     "SELECT * FROM users WHERE email = ? and password = ?",
//     [email, password],
//     (err, result) => {
//       if (err) {
//         console.log({ err: err });
//       }

//       if (result.length > 0) {
//         res.send({ message: "Logging" });

//         // res.send(result);

//         // logged in
//       } else {
//         res.send({ message: "Incorrect username or password" });
//       }
//     }
//   );
//   // post
// });

app.get("/getWeather", (req, res) => {
  const request = require("request");
  request(
    "http://api.weatherstack.com/current?access_key=18eda1685298ff0be778b9f349d22244&query=Hamilton",
    function (error, response, body) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the respons e status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
      //new stff
      var parsedBody = JSON.parse(body);
      var temp_c = parsedBody["current"]["temperature"];
      //   res.send(body);
      res.send({ temp_c }); // use {var} for specific?
    }
  );
});
