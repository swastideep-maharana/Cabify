const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blackListToken.model");
const captainModel = require("../models/captain.model");

const verifyToken = async (token) => {
  if (!token) {
    throw new Error("TokenMissing");
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token });
  if (isBlacklisted) {
    throw new Error("TokenBlacklisted");
  }

  return jwt.verify(token, process.env.JWT_SECRET);
};

const handleUnauthorized = (res, message) => {
  return res.status(401).json({ message });
};

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  try {
    const decoded = await verifyToken(token);
    const user = await userModel.findById(decoded._id);

    if (!user) {
      return handleUnauthorized(res, "Unauthorized");
    }

    req.user = user;
    next();
  } catch (err) {
    if (err.message === "TokenMissing" || err.message === "TokenBlacklisted") {
      return handleUnauthorized(res, "Unauthorized");
    }
    return handleUnauthorized(res, "Invalid Token");
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  try {
    const decoded = await verifyToken(token);
    const captain = await captainModel.findById(decoded._id);

    if (!captain) {
      return handleUnauthorized(res, "Unauthorized");
    }

    req.captain = captain;
    next();
  } catch (err) {
    if (err.message === "TokenMissing" || err.message === "TokenBlacklisted") {
      return handleUnauthorized(res, "Unauthorized");
    }
    return handleUnauthorized(res, "Invalid Token");
  }
};
