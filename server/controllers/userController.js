const db = require("../models");
const Meditation = db.meditation;
const User = db.user;


exports.saveMeditation = (req,res) => {
  Meditation.create({
      email:req.body.email,
      meditation_length: req.body.meditation_length,
  })
    .catch((err) => {
      res.status(500).send("not work");
    });  
}

// DONE
// DONT NEED *******?
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

