const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
  },
  message: {
    type: String,
    required: true,
    maxLength: 150,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating a collection
const User = mongoose.model("User", userSchema);

module.exports = User;
