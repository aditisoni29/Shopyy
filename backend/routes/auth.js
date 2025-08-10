const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/User");
const { validateUser } = require("../middleware");

router.post(
  "/signup",
  validateUser,
  wrapAsync(async (req, res, next) => {
    const { email, password, firstName, lastName, phone } = req.body.user;
    const newUser = new User({
      email,
      username: email,
      firstName,
      lastName,
      phone,
    });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      res.status(201).json({
        message: "User registered and logged in successfully!",
        user: registeredUser,
      });
    });
  })
);

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ message: "Login successful!", user: req.user });
});

router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({ message: "Logout successful!" });
  });
});

module.exports = router;
