const express = require("express");

const router = express.Router();

const {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  currentUser,
  logoutUser,
} = require("../controllers");
const { validateFields, isValidId, checkUserToken } = require("../middlewares");
const {
  createUserDataValidator,
  updateUserDataValidator,
} = require("../validation/userValidation");

router.post("/register", validateFields(createUserDataValidator), createUser);
router.post("/login", validateFields(createUserDataValidator), loginUser);
router.patch(
  "/:id",
  isValidId,
  validateFields(updateUserDataValidator),
  updateUser
);
router.delete("/:id", isValidId, deleteUser);

router.post("/logout", checkUserToken, logoutUser);

router.get("/current", checkUserToken, currentUser);

module.exports = router;
