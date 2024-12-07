const mongoos = require("mongoose");

const blacklistTokenSchema = new mongoos.Schema({
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

module.exports = mongoos.model("blacklistToken", blacklistTokenSchema);
