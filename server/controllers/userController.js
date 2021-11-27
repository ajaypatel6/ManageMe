const db = require("../models");
const Meditation = db.meditation;
const User = db.user;
const Task = db.task;
const Note = db.note;

exports.saveMeditation = (req, res) => {
  Meditation.create({
    email: req.body.email,
    meditation_length: req.body.meditation_length,
  }).catch((err) => {
    res.status(500).send("not work");
  });
};

// not sure
exports.getMeditation = (req, res) => {
  Meditation.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then(() => {
      if (!email) {
        return res.status(404).send({ message: "meditation Not found." });
      }

      res.status(200).send({
        id: meditation.id,
        email: meditation.email,
        meditation_length: meditation_length,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// 
exports.saveTask = (req, res) => {
  Task.create({
    email: req.body.email,
    task_length: req.body.task_length,
    description: req.body.description,
  }).catch((err) => {
    res.status(500).send("not work");
  });
};

exports.saveNote = (req, res) => {
  // Save Note to Database
  Note.create({
    email: req.body.email,
    description: req.body.description,
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
};
