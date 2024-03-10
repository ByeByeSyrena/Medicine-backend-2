const express = require("express");

const router = express.Router();

const { createUser } = require("../controllers");
const { validateFields } = require("../middlewares");
const { createUserDataValidator } = require("../validation/userValidation");

router.post("/", validateFields(createUserDataValidator), createUser);

module.exports = router;
