const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

// might be wrong
checkDuplicateUsernameOrEmail = (req, res, next) => {
  //Username check
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Username is taken",
      });
      return;
    }

    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: "Email is taken",
        });
        return;
      }
      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role DNE = " + req.body.roles[i],
        });
        return;
      }
    }
  }
  // next placement
  next();
};

const verifySignup = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted,
};
