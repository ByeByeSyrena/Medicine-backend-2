const { getAllMedicines } = require("./getAllMedicines");
const { getOneStore } = require("./getOneStore");
const { createOrder } = require("./createOrder");
const {
  createPharmacy,
} = require("./updatedControllers/pharmacyControllers/createPharmacy");

const {
  createUser,
} = require("./updatedControllers/userControllers/createUser");

module.exports = {
  getAllMedicines,
  getOneStore,
  createOrder,
  createPharmacy,
  createUser,
};
