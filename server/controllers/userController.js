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
