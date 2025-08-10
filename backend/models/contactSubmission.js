const mongoose = require("mongoose");

const contactSubmissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
    },

    subject: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "new",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ContactSubmission", contactSubmissionSchema);
