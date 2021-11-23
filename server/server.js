// Imports, initialize modules and routes, listen for connections
const express = require("express"); // to start server
const bodyParser = require("body-parser");
const cors = require("cors"); // NEED

const app = express();

var corsOptions = {
  origin: "http://localhost:3001",
};

// this is the same as the authroutes, access-contrl-allow-headers, that is manually alter header
app.use(cors()); // allow cross platform
// app.use(cors(corsOptions)); // allow cross platform

// parse reqs of content-type-application json, deprecated i guess?
app.use(bodyParser.json());

// parse form data, middleware for forms.. true/ false??
// this was body parser
app.use(express.urlencoded({ extended: true }));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const weatherKey = "18eda1685298ff0be778b9f349d22244";

// ------------------------------------------------------------------------------------------------------------
// creates tables? force:true will drop the table if it already exists..?
const db = require("./models");
// will be back

//****************** */
//For production, just insert these rows manually and use sync() without parameters to avoid dropping data:

// what this
// NEED this
db.sequelize.sync();

//****************** */

// for first time
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop/Resync DB with {force: true}");
//   initial();
// });

// Routes

app.get("/", (req, res) => {
  res.json({ message: "Welcome " });
});

require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);
// ------------------------------------------------------------------------------------------------------------

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`running server on port ${PORT}`);
});
