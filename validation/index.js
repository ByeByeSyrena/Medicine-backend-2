const {
  validateBodyPharmacy,
  createPharmacyDataValidator,
  updatePharmacyDataValidator,
} = require("./pharmacyValidation");

const {
  updateUserDataValidator,
  createUserDataValidator,
} = require("./userValidation");

const { validateNewMedicine } = require("./medicineValidation");

const { validateBodyOrder } = require("./orderValidation");

module.exports = {
  validateBodyPharmacy,
  createPharmacyDataValidator,
  updatePharmacyDataValidator,
  validateBodyOrder,
  updateUserDataValidator,
  createUserDataValidator,
  validateNewMedicine,
};
