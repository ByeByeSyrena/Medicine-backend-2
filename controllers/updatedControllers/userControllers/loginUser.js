const { ctrlWrapper, httpError } = require("../../../helpers");
const bcrypt = require("bcrypt");

const { User } = require("../../../models");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    httpError(401, "Email or password is wrong");
  }
  const isEquel = await bcrypt.compare(password, user.password);
  if (!isEquel) {
    httpError(401, "Email or password is wrong");
  }

  const result = await User.findById(user.id);

  res.json(result);
};

module.exports = {
  loginUser: ctrlWrapper(loginUser),
};
