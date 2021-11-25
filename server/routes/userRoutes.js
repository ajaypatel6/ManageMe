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

  // app.get("/api/test/all", controller.allAccess);

  app.get("/city", function (req, res, next) {
    // var city = req.params.city;
    // console.log("The city: " + city);
    res.send("this is city");
  });

  // working
  app.get("/account/:city", function (req, res) {
    res.send("Request on city " + req.params.city);
  });

  // how to get city of user.

  app.get("/account/:city", function (req, res) {
    res.send("Request on city " + req.params.city);
  });

  // works when you type the city
  // read city from user, then send to this route to use

  // // get the weather out
  // app.get("/getWeather/:city", (req, res) => {
  //   const request = require("request");
  //   // console.log(req.params.city);
  //   // const city = "";
  //   console.log(req.params.city);
  //   console.log("yo");
  //   const API_URL =
  //     "http://api.weatherstack.com/current?access_key=18eda1685298ff0be778b9f349d22244&query=" +
  //     req.params.city;

  //   request(
  //     // "http://api.weatherstack.com/current?access_key=18eda1685298ff0be778b9f349d22244&query=Hamilton",
  //     API_URL,
  //     function (error, response, body) {
  //       //ERROR check
  //       console.error("error:", error); // Print the error if one occurred
  //       console.log("statusCode:", response && response.statusCode); // Print the respons e status code if a response was received
  //       console.log("body:", body); // Print the HTML for the Google homepage.
  //       //new stff
  //       var parsedBody = JSON.parse(body);
  //       //wait this works?
        
  //       // NEED new api
  //       // var temp_c = parsedBody["current"]["temperature"];

  //       //where is the TEMPERATUER!!!!!!!!!!!!!!!!!!!!!!!!!!
  //       // var temp_c = 20;

  //       //   res.send(body);
  //       res.send({ temp_c }); // use {var} for specific?
  //     }
  //     // NEED ERROR CHECK
  //   );
  // });

  app.post("/api/meditation/getMeditation", async (req,res)=>{
    [
      // verification
    ],
    res.status(500).send("ERROR_SERVER"); // send something to client
    controller.getMeditation;
    next();
  })


};
