const User = require("../models/userModel");
const Errors = require("../errors/");
const sendMail = require("../utils/nodeMailer");

const authUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(Errors.validationError("All filds are required"));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(Errors.notFoundError("User not Found with this email"));
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(Errors.UnauthorizedError("Invalid Credantials"));
    }

    if (user && isMatch) {
      // console.log(user)
      sendToken(user, 200, req, res);
    }
  } catch (err) {
    next(Errors.serverError("Faild to Login user", err.stack));
  }
}

const registerUser = async (req, res, next) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    next(Errors.validationError("All filds are required"));
    return;
  }

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      next(Errors.invalidRequestError("User Allredy Exists"));
    }
    const user = await User.create({
      name,
      email,
      password,
      pic,
    });

    if (user) {
      sendToken(user, 201, req, res);
      await sendMail(user.email);
    }
  } catch (err) {
    next(Errors.serverError("Faild to create user", err.stack));
  }
};

/* 
  path: /api/user/?search=bhavin
*/
const allUsers = async (req, res, next) => {
  const keyWord = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  try {
    const users = await User.find(keyWord).find({ _id: { $ne: req.user._id } });
    if (users) {
      res.send(users);
    }
  } catch (err) {
    next(Errors.serverError("Faild to fatch users", err.stack));
  }
};
const updateUser = async (req, res, next) => {
  
};

const sendToken = (user, statusCode, req, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({token, user });
};

module.exports = { authUser, registerUser, allUsers, updateUser };
