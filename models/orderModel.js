const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleMongooseError = require("../middlewares/handleMongooseError");

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    pnNumbers: {
      type: [String],
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    medicines: [
      {
        _id: {
          type: String,
          required: true,
        },
        item: {
          type: String,
          required: true,
        },
        quantity: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { versionKey: false }
);

orderSchema.post("save", handleMongooseError);

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

const schemas = {
  validateBodyOrder,
};

const Order = model("Order", orderSchema);

module.exports = { schemas, Order };
