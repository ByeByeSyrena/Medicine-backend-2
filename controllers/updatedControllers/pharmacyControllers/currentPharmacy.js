const { ctrlWrapper } = require("../../../helpers");

const currentPharmacy = (req, res) => {
  const { email, role } = req.user;

  res.json({ email, role });
};

module.exports = { currentPharmacy: ctrlWrapper(currentPharmacy) };
