const { ctrlWrapper } = require("../../../helpers");
const { newPharmacy } = require("../../../models");

const getPharmacies = async (req, res) => {
  const pharmacies = await newPharmacy.find();
  res.json(pharmacies);
};

module.exports = {
  getPharmacies: ctrlWrapper(getPharmacies),
};
