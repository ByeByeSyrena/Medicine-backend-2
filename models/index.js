const { pharmacySchemas, Pharmacy, medicineSchema } = require("./storeModel");
const {
  // schemas,
  Order,
} = require("./orderModel");
const { User } = require("./userModel");
const { newPharmacy } = require("./pharmacyModel");

module.exports = {
  pharmacySchemas,
  Pharmacy,
  medicineSchema,
  // schemas,
  Order,
  User,
  newPharmacy,
};
