const { ctrlWrapper, httpError } = require("../../../helpers");
const bcrypt = require("bcrypt");

const { newPharmacy } = require("../../../models");

const loginPharmacy = async (req, res) => {
  const { email, password } = req.body;

  const pharmacy = await newPharmacy.findOne({ email });
  if (!pharmacy) {
    httpError(401, "Email or password is wrong");
  }
  const isEquel = await bcrypt.compare(password, pharmacy.password);
  if (!isEquel) {
    httpError(401, "Email or password is wrong");
  }

  const result = await newPharmacy.findById(user._id);

  res.json(result);
};

module.exports = {
  loginPharmacy: ctrlWrapper(loginPharmacy),
};
