const { getAllMedicines } = require("./getAllMedicines");
const { getOneStore } = require("./getOneStore");
const { createOrder } = require("./createOrder");
const {
  createPharmacy,
} = require("./updatedControllers/pharmacyControllers/createPharmacy");
const {
  createMedicine,
} = require("./updatedControllers/pharmacyControllers/createMedicine");

const {
  getPharmacies,
} = require("./updatedControllers/pharmacyControllers/getPharmacies");

const {
  getMedicines,
} = require("./updatedControllers/pharmacyControllers/getMedicines");

const {
  getMedicinesBySeller,
} = require("./updatedControllers/pharmacyControllers/getMedicinesBySeller");

const {
  createUser,
} = require("./updatedControllers/userControllers/createUser");

const {
  loginPharmacy,
} = require("./updatedControllers/pharmacyControllers/loginPharmacy");

const {
  updatePharmacy,
} = require("./updatedControllers/pharmacyControllers/updatePharmacy");

const {
  updateMedicine,
} = require("./updatedControllers/pharmacyControllers/updateMedicine");
const {
  deleteMedicine,
} = require("./updatedControllers/pharmacyControllers/deleteMedicine");
const {
  deletePharmacy,
} = require("./updatedControllers/pharmacyControllers/deletePharmacy");
const {
  currentPharmacy,
} = require("./updatedControllers/pharmacyControllers/currentPharmacy");

const { loginUser } = require("./updatedControllers/userControllers/loginUser");
const {
  deleteUser,
} = require("./updatedControllers/userControllers/deleteUser");
const {
  deleteFavorite,
} = require("./updatedControllers/userControllers/deleteFavorite");
const {
  addFavorite,
} = require("./updatedControllers/userControllers/addFavorite");
const {
  updateUser,
} = require("./updatedControllers/userControllers/updateUser");
const {
  currentUser,
} = require("./updatedControllers/userControllers/currentUser");

module.exports = {
  createOrder,
  createPharmacy,
  createUser,
  createMedicine,
  getAllMedicines,
  getOneStore,
  getPharmacies,
  getMedicines,
  getMedicinesBySeller,
  loginUser,
  loginPharmacy,
  updateUser,
  updateMedicine,
  updatePharmacy,
  deleteFavorite,
  deleteMedicine,
  deletePharmacy,
  deleteUser,
  addFavorite,
  currentPharmacy,
  currentUser,
};
