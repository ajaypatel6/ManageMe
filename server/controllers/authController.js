// interesting, maybe to see which db? idk
const db = require("../models");

const config = require("../config/authConfig");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
//roles..

// ?
// yea wtf?
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
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    //
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Email not found" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password",
        });
      }

      // ?
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, //24 h
      });

      var authorities = [];
      // roles stuff

      ///
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
