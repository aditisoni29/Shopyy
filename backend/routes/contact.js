const express = require("express");
const router = express.Router();
const ContactSubmission = require("../models/ContactSubmission");
const wrapAsync = require("../utils/wrapAsync");
const { validateContact } = require("../middleware");

router.post(
  "/",
  validateContact,
  wrapAsync(async (req, res) => {
    const newSubmission = new ContactSubmission(req.body.contact);
    await newSubmission.save();
    res.status(201).json({
      message: "Thank you for your message! We will get back to you shortly.",
    });
  })
);

module.exports = router;
