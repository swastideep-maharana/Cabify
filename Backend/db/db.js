const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT, {
      serverSelectionTimeoutMS: 30000, // Keeps the timeout setting
    })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Database connection error:", err);
    });
}

module.exports = connectToDb;
