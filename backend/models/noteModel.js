const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const noteBookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Pleses add Name"],
    },
    content: {
      type: String,
      required: [true, "Pleses add Name"],
    },
    creator: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    tags:{
      type: [String],
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const NoteBook = mongoose.model("NoteBook", noteBookSchema);

module.exports = NoteBook;
