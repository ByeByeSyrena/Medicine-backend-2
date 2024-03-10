const Joi = require("joi");

const validateBodyOrder = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string()
    .required()
    .messages({ "any.required": "missing required email field" }),
  pnNumbers: Joi.array()
    .required()
    .messages({ "any.required": "missing required phone field" }),
  address: Joi.string()
    .required()
    .messages({ "any.required": "missing required address field" }),
  comments: Joi.string(),
  totalPrice: Joi.number()
    .required()
    .messages({ "any.required": "missing required totalPrice field" }),
  medicines: Joi.array()
    .required()
    .items(
      Joi.object({
        _id: Joi.string().required(),
        item: Joi.string().required(),
        quantity: Joi.string().required(),
        price: Joi.number().required(),
        amount: Joi.number().required(),
      })
    )
    .required(),
});

module.exports = {
  validateBodyOrder,
};
