const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const uri = process.env.MONGO_URI; // Retrieve the MongoDB URI
    if (!uri) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }

    // Connect to MongoDB (no need to specify options like useNewUrlParser and useUnifiedTopology)
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully.");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the process with an error code
  }
};

module.exports = connectToDb;
