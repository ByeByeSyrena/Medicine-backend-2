const Joi = require("joi");
const { userRolesEnum, PSWRD_REGEX, EMAIL_REGEX } = require("../constants");

const createUserDataValidator = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({ "any.required": "missing required name field" }),
  // year: Joi.number().min(1990).max(new Date().getFullYear()),
  email: Joi.string()
    .email(EMAIL_REGEX)
    .required()
    .messages({ "any.required": "missing required email field" }),
  password: Joi.string()
    .regex(PSWRD_REGEX)
    .required()
    .messages({ "any.required": "missing required password field" }),
  role: Joi.string().valid(...Object.values(userRolesEnum)),
  favorites: Joi.array().items(Joi.string()),
});

const updateUserDataValidator = Joi.object({
  name: Joi.string().min(3).max(30),
  // email: Joi.string().email(EMAIL_REGEX),
  // password: Joi.string().regex(PSWRD_REGEX).required(),
  role: Joi.string().valid(...Object.values(userRolesEnum)),
  favorites: Joi.array().items(Joi.string()),
});

module.exports = { updateUserDataValidator, createUserDataValidator };
