const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // We can add fields like 'firstName' or 'lastName' here later
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
