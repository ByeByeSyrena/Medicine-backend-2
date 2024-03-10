const Joi = require("joi");
const { userRolesEnum, PSWRD_REGEX, EMAIL_REGEX } = require("../constants");

const createPharmacyDataValidator = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .email(EMAIL_REGEX)
    .required()
    .messages({ "any.required": "missing required email field" }),
  password: Joi.string()
    .regex(PSWRD_REGEX)
    .required()
    .messages({ "any.required": "missing required password field" }),
  role: Joi.string().valid(...Object.values(userRolesEnum)),
});

const updatePharmacyDataValidator = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  // email: Joi.string().email(),
  // password: Joi.string().regex(PSWRD_REGEX).required(),
  role: Joi.string().valid(...Object.values(userRolesEnum)),
});

module.exports = {
  createPharmacyDataValidator,
  updatePharmacyDataValidator,
};
