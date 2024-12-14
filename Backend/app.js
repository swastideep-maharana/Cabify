const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db");
const userRouts = require("./routes/user.routes");
const captainRouts = require("./routes/captain.routes");
const mapsRouts = require("./routes/maps.routes");
const rideRouts = require("./routes/ride.routes");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello1 World!");
});

app.use("/users", userRouts);
app.use("/captains", captainRouts);
app.use("/maps", mapsRouts);
app.use("/rides", rideRouts);

module.exports = app;
