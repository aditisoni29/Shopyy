const Joi = require("joi");

module.exports.userSchema = Joi.object({
  user: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    password: Joi.string().required(),
  }).required(),
});

module.exports.contactSchema = Joi.object({
  contact: Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    phone: Joi.string().allow("").optional(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
  }).required(),
});
