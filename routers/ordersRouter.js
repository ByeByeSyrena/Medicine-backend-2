const express = require("express");

const router = express.Router();

const { createOrder } = require("../controllers");
const { validateFields } = require("../middlewares");
const { schemas } = require("../models");

router.post("/", validateFields(schemas.validateBodyOrder), createOrder);

module.exports = router;
