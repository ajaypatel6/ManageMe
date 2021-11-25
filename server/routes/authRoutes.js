// DONE
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/authController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // these can be whatever name, will probably update to simpler
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  
  app.get("/api/auth/test", function (req, res, next) {
    // var city = req.params.city;
    // console.log("The city: " + city);
    res.send("this is test");
  });
  
};
