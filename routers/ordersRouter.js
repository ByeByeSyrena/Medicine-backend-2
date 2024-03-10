const express = require("express");

const router = express.Router();

const { createOrder } = require("../controllers");
const { validateFields } = require("../middlewares");
const { validateBodyOrder } = require("../validation");

router.post("/", validateFields(validateBodyOrder), createOrder);

module.exports = router;
