const { ctrlWrapper } = require("../../../helpers");

const { newPharmacy } = require("../../../models");

const logoutPharmacy = async (req, res) => {
  const pharmacyId = req.pharmacy._id;

  await newPharmacy.findByIdAndUpdate(pharmacyId, { token: "" });

  res.sendStatus(204);
};

module.exports = { logoutPharmacy: ctrlWrapper(logoutPharmacy) };
