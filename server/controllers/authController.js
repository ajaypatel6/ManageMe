// interesting, maybe to see which db? idk
const db = require("../models");

const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
//roles..

// ?
const Op = db.Sequelize.Op;

//
exports.signup = (req, res) => {
  // save user to db
  User.create({
    name: req.body.username,
    email: req.body.email,
    city: req.body.city,
    // salt and encrpy that passy!
    password: bcrypt.hashSync(req.body.password, 8),
  })
    //role stuff, with this user..
    // only message, nothing regarding roles as for nwo
    .then((user) => {
      res.send({ message: "User registration successful" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// will need roles and whatnot..
// sequelize will work nicely here
exports.signin = (req, res) => {
  // User.
};
