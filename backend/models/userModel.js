const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require('validator');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pleses add Name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please Add Email"],
      lowercase: true,
      validate: (value) => {
        return validator.isEmail(value)
      }
      
    },
    password: {
      type: String,
      minlength: 3,
      required: [true, "Please Add Password"],
      select: false,
    },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    books: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "NoteBook"
    },
    points: {
        type: Number,
        default: 0
    },
    streaks: {
        type: Number,
        default: 0
    }
  },
  {  timestamps: true }

);

// decrypt
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  let rounds = process.env.NODE_ENV == "dev" ? 1 : 10;
  const salt = await bcrypt.genSalt(rounds);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Sign JWT Token
userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id, email: this.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
