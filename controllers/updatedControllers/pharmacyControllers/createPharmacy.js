const bcrypt = require("bcrypt");

const { ctrlWrapper } = require("../../../helpers");

const { newPharmacy } = require("../../../models");

const createPharmacy = async (req, res) => {
  const { email, password, name, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  if (await newPharmacy.exists({ email })) {
    httpError(409, "Email in use");
    return;
  }

  if (await newPharmacy.exists({ name })) {
    httpError(409, "Name in use");
    return;
  }

  const result = await newPharmacy.create({
    name,
    email,
    password: hashedPassword,
    role,
  });
  res.status(201).json(result);
};

module.exports = {
  createPharmacy: ctrlWrapper(createPharmacy),
};
