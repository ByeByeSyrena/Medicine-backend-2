const { Schema, model } = require("mongoose");
const Joi = require("joi");
const handleMongooseError = require("../middlewares/handleMongooseError");

const newMedicineSchema = new Schema(
  {
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
    seller: {
      type: Schema.Types.ObjectId,
      ref: "newPharmacy",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

newMedicineSchema.post("save", handleMongooseError);

const newMedicine = model("newMedicine", newMedicineSchema);

module.exports = { newMedicine };
