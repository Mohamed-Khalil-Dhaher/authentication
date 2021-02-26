const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  bio: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("myInfo", signUpTemplate);
