const Joi = require("joi");
const { userRolesEnum, PSWRD_REGEX } = require("../constants");
const { EMAIL_REGEX } = require("../constants/regex");

const createPharmacyDataValidator = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email(EMAIL_REGEX).required(),
  password: Joi.string().regex(PSWRD_REGEX).required(),
  role: Joi.string().valid(...Object.values(userRolesEnum)),
});

const updatePharmacyDataValidator = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(PSWRD_REGEX).required(),
  role: Joi.string().valid(...Object.values(userRolesEnum)),
});

module.exports = {
  createPharmacyDataValidator,
  updatePharmacyDataValidator,
};
