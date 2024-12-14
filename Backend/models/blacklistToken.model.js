const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 1 day
  },
});

// Check if the model already exists before defining it
module.exports =
  mongoose.models.blacklistToken ||
  mongoose.model("blacklistToken", blacklistTokenSchema);
