const { pharmacySchemas, Pharmacy, medicineSchema } = require("./storeModel");
const {
  // schemas,
  Order,
} = require("./orderModel");
const { User } = require("./userModel");
const { newPharmacy } = require("./pharmacyModel");
const { newMedicine } = require("./medicineModel");

module.exports = {
  pharmacySchemas,
  Pharmacy,
  medicineSchema,
  // schemas,
  Order,
  User,
  newPharmacy,
  newMedicine,
};
