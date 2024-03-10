const { Schema, model } = require("mongoose");
const handleMongooseError = require("../middlewares/handleMongooseError");
const { userRolesEnum } = require("../constants");

const userSchema = new Schema(
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
    // year: { type: Number },
    role: {
      type: String,
      enum: Object.values(userRolesEnum),
      default: userRolesEnum.USER,
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "newMedicine",
      },
    ],
    seller: {
      type: Schema.Types.ObjectId,
      ref: "newPharmacy",
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("User", userSchema);

module.exports = { User };
