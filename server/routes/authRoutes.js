const { verifySignup } = require("../middleware/SignupVerify");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      // this allows browser to accept/send requests from another origin, (5000-3001.. etc)
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // probably change this path
  app.post(
    "api/auth/signup",
    [
      verifySignup.checkDuplicateUsernameOrEmail,
      verifySignup.checkRolesExisted,
    ],
    controller.signup
  );

  // probably change this
  app.post("/api/auth/signin", controller.signin);
};
