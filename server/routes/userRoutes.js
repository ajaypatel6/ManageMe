const { JwtAuth } = require("../middleware");
const controller = require("../controllers/userController");

// DONE
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //?
  app.get("/api/test/all", controller.allAccess);

  //
  app.get("api/test/user", [JwtAuth.verifyToken], controller.userBoard);

  //
  app.get("api/test/mod", [JwtAuth.verifyToken], controller.moderatorBoard);

  //
  app.get("api/test/admin", [JwtAuth.verifyToken], controller.adminBoard);
};
