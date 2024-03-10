const express = require("express");

const router = express.Router();

const { createPharmacy } = require("../controllers");
const { validateFields } = require("../middlewares");
const { createPharmacyDataValidator } = require("../validation");

router.post("/", validateFields(createPharmacyDataValidator), createPharmacy);

module.exports = router;
