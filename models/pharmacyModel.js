const { Schema, model } = require("mongoose");
const { userRolesEnum } = require("../constants");
const handleMongooseError = require("../middlewares/handleMongooseError");

const newPharmacySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "User with this email already exists"],
    },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(userRolesEnum),
      default: userRolesEnum.ADMIN,
    },
  },
  { versionKey: false, timestamps: true }
);

newPharmacySchema.post("save", handleMongooseError);

const newPharmacy = model("newPharmacy", newPharmacySchema);

module.exports = { newPharmacy };
