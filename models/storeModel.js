const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleMongooseError = require("../middlewares/handleMongooseError");

const medicineSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const pharmacySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    items: {
      type: [medicineSchema],
      required: true,
    },
  },
  { versionKey: false }
);

pharmacySchema.post("save", handleMongooseError);

const validateBodyPharmacy = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),
  items: Joi.array()
    .items(
      Joi.object({
        item: Joi.string().required(),
        quantity: Joi.string().required(),
        price: Joi.string().required(),
      })
    )
    .required(),
});

const pharmacySchemas = {
  validateBodyPharmacy,
};

const Pharmacy = model("Pharmacy", pharmacySchema);

module.exports = { pharmacySchemas, Pharmacy, medicineSchema };
