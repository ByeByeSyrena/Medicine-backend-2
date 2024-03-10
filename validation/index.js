const {
  validateBodyPharmacy,
  createPharmacyDataValidator,
  updatePharmacyDataValidator,
} = require("./pharmacyValidation");

const {
  updateUserDataValidator,
  createUserDataValidator,
} = require("./userValidation");

const { validateBodyOrder } = require("./orderValidation");

module.exports = {
  validateBodyPharmacy,
  createPharmacyDataValidator,
  updatePharmacyDataValidator,
  validateBodyOrder,
  updateUserDataValidator,
  createUserDataValidator,
};
