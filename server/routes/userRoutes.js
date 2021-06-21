// DONE
const { authJwt } = require("../middleware");
const controller = require("../controllers/userController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/getWeather", (req, res) => {
    const request = require("request");
    const city = "";

    request(
      "http://api.weatherstack.com/current?access_key=18eda1685298ff0be778b9f349d22244&query=Mumbai",
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

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
