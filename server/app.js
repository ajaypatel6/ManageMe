const express = require("express"); // to start server
const mysql = require("mysql"); // for sql
var request = require("request"); // for request weather

const app = express();
const dotenv = require("dotenv"); // env for passwords
dotenv.config({ path: "./.env" });
const path = require("path");

const cors = require("cors"); // NEED
app.use(cors()); // allow cross platform
app.use(express.json()); //parsing all // FOR vals in form is JSON

// parse form data, middleware for forms
app.use(express.urlencoded({ extended: false }));

// validate emails
var validator = require("email-validator");

const weatherKey = "18eda1685298ff0be778b9f349d22244";

app.listen(3001, () => {
  console.log("running server on port 3001");
});

// connect to sql
const db = mysql.createConnection({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//not doing error check on db.
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("ManageMe database connected");
  }
});

app.get("/Registered", (req, res) => {
  res.send("<h1>Registration complete</h1>");
  res.render("Registered");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results,
      });
    }
  });
});

// send data into DB
// conisered a CONTROLLER .. you could put this isn a different file

// app.post("/register", (req, res) => {
//   const name = req.body.name; // only possible from express.json

//   const city = req.body.city;
//   const email = req.body.email;

//   const password = req.body.password;
//   const confirmPassword = req.body.passwordConfirm;

//   // const { name, email, city, password, confirmPassword } = req.body; THIS IS SHORT VERSION, destructured
//   if (password === confirmPassword) {
//     db.query(
//       "INSERT INTO users (name,email,password,city) VALUES (?,?,?,?)",
//       [name, email, password, city],
//       (err, result) => {
//         if (err) {
//           console.log(err);
//         }
//         if (result.length > 0) {
//           return res.render("register", {
//             message: "The email is in use already",
//           });
//         } else if (password !== passwordConfirm) {
//           return res.render("register", {
//             message: "Passwords not matching",
//           });
//         }
//       }
//     );
//   }

//   //1503

//   // res.send("registration submitted");
// });

app.post("/register", (req, res) => {
  //grab vals

  const name = req.body.name; // only possible from express.json
  const password = req.body.password;
  const city = req.body.city;
  const email = req.body.email;
  //sql
  if (name == "") {
    res.send("Enter name");
  }
  if (password == "") {
    res.send("Enter password");
  }
  if (city == "") {
    res.send("Enter City");
  }
  if (email == "") {
    res.send("Enter Email");
  }
  if (!validator.validate(email)) {
    res.send("Email not valid");
  }
  if (password.length < 8) {
    res.send("Password needs to be atleast 8 characters");
  }
  db.query(
    "INSERT INTO users (name,email,password,city) VALUES (?,?,?,?)",
    [name, email, password, city],
    (err, res) => {
      if (err) {
        console.log(err);
      }
    }
  );

  res.send("<h1>Registered</h1>");
  res.redirect("/Registered");
});

app.post("/login", (req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  //sql
  db.query(
    "SELECT * FROM users WHERE email = ? and password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log({ err: err });
      }

      if (result.length > 0) {
        // res.send({ message: "Logging" });

        res.send(result);

        // logged in
      } else {
        res.send({ message: "Incorrect username or password" });
      }
    }
  );
});

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
