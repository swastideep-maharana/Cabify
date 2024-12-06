// const mongoose = require("mongoose");
// function connectToDb() {
//   mongoose
//     .connect(process.env.DB_CONNECT)
//     .then(() => {
//       console.log("Connected to DB");
//     })
//     .catch((err) => console.log(err));
// }
// module.exports = connectToDb;

const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to DB:", error.message);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connectToDb;
