const { ctrlWrapper } = require("../helpers");
const { Pharmacy } = require("../models");

const getAllMedicines = async (req, res) => {
  const medicines = await Pharmacy.find();
  res.json(medicines);
};

module.exports = {
  getAllMedicines: ctrlWrapper(getAllMedicines),
};
