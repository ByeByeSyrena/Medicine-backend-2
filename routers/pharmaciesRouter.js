const express = require("express");

const router = express.Router();

const { getAllMedicines, getOneStore } = require("../controllers");
const { isValidId } = require("../middlewares");

router.get("/", getAllMedicines);
router.get("/:id", isValidId, getOneStore);

module.exports = router;
