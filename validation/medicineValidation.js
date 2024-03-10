const Joi = require("joi");

// OLD VALIDATION

const validateNewMedicine = Joi.object({
  item: Joi.string()
    .required()
    .messages({ "any.required": "missing required item field" }),
  quantity: Joi.string()
    .required()
    .messages({ "any.required": "missing required quantity field" }),
  price: Joi.string()
    .required()
    .messages({ "any.required": "missing required price field" }),

});


module.exports = { validateNewMedicine };

