const express = require("express");

const router = express.Router();

const {
  createMedicine,
  getMedicines,
  getMedicinesBySeller,
  updateMedicine,
  deleteMedicine,
} = require("../controllers");
const { validateFields, isValidId } = require("../middlewares");
const { validateNewMedicine } = require("../validation");

router.get("/", getMedicines);

router.get("/:id", isValidId, getMedicinesBySeller);

router.post("/", validateFields(validateNewMedicine), createMedicine);

router.patch(
  "/:id",
  isValidId,
  validateFields(validateNewMedicine),
  updateMedicine
);

router.delete("/:id", isValidId, deleteMedicine);

module.exports = router;
