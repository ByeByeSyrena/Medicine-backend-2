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
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("Order", orderSchema);

module.exports = {
  Order,
};
