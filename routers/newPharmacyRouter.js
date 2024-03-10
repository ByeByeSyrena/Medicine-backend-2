const express = require("express");

const router = express.Router();

const {
  createPharmacy,
  getPharmacies,
  loginUser,
  updatePharmacy,
  deletePharmacy,
  loginPharmacy,
  currentPharmacy,
  logoutPharmacy,
} = require("../controllers");
const {
  validateFields,
  isValidId,
  checkPharmacyToken,
} = require("../middlewares");
const {
  createPharmacyDataValidator,
  updatePharmacyDataValidator,
} = require("../validation");

router.get("/", getPharmacies);

router.post(
  "/register",
  validateFields(createPharmacyDataValidator),
  createPharmacy
);
router.post(
  "/login",
  validateFields(createPharmacyDataValidator),
  loginPharmacy
);
router.patch(
  "/:id",
  isValidId,
  validateFields(updatePharmacyDataValidator),
  updatePharmacy
);

router.delete("/:id", isValidId, deletePharmacy);

router.get("/current", checkPharmacyToken, currentPharmacy);

router.post("/logout", checkPharmacyToken, logoutPharmacy);

module.exports = router;
