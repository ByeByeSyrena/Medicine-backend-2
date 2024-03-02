const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleMongooseError = require("../middlewares/handleMongooseError");

const { medicineSchema } = require("./storeModel");

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
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    medicines: {
      type: [medicineSchema],
      required: true,
    },
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
  phone: Joi.string()
    .required()
    .messages({ "any.required": "missing required phone field" }),
  address: Joi.string()
    .required()
    .messages({ "any.required": "missing required address field" }),
  totalPrice: Joi.number()
    .required()
    .messages({ "any.required": "missing required totalPrice field" }),
  medicines: Joi.array()
    .items(
      Joi.object({
        item: Joi.string().required(),
        quantity: Joi.string().required(),
        price: Joi.string().required(),
      })
    )
    .required(),
});

const schemas = {
  validateBodyOrder,
};

const Order = model("Order", orderSchema);

module.exports = { schemas, Order };
