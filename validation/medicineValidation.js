const Joi = require("joi");

// OLD VALIDATION

const validateMedicine = Joi.object({
  item: Joi.string().required(),
  quantity: Joi.string().required(),
  price: Joi.string().required(),
});
