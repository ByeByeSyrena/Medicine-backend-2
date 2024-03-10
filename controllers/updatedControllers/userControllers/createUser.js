const bcrypt = require("bcrypt");

const { ctrlWrapper, httpError } = require("../../../helpers");

const { User } = require("../../../models");

const createUser = async (req, res) => {
  const { email, password, name, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  if (await User.exists({ email })) {
    httpError(409, "Email in use");
    return;
  }

  const result = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  res.status(201).json(result);
};

module.exports = {
  createUser: ctrlWrapper(createUser),
};
