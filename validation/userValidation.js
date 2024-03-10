const Joi = require("joi");
const { userRolesEnum, PSWRD_REGEX } = require("../constants");
const { EMAIL_REGEX } = require("../constants/regex");

const createUserDataValidator = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  // year: Joi.number().min(1990).max(new Date().getFullYear()),
  email: Joi.string().email(EMAIL_REGEX).required(),
  password: Joi.string().regex(PSWRD_REGEX).required(),
  role: Joi.string().valid(...Object.values(userRolesEnum)),
});

const updateUserDataValidator = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email(EMAIL_REGEX).required(),
  password: Joi.string().regex(PSWRD_REGEX).required(),
  role: Joi.string().valid(...Object.values(userRolesEnum)),
});

module.exports = { updateUserDataValidator, createUserDataValidator };
