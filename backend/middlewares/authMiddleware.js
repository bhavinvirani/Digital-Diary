const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const Errors = require("../errors/");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return next(
        Errors.UnauthorizedError("Not authorized, token not provided")
      );
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      if (!user) {
        return next(Errors.notFoundError("No user found with this id"));
      }
      req.user = user;
      next();
    } catch (err) {
      return next(
        Errors.UnauthorizedError("Not authorized to access this route", err.stack)
      );
    }
  }
};

module.exports = { protect };
