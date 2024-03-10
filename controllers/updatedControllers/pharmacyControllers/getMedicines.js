const { ctrlWrapper } = require("../../../helpers");
const { newMedicine } = require("../../../models");

const getMedicines = async (req, res) => {
  const medicines = await newMedicine.find();
  res.json(medicines);
};

module.exports = {
  getMedicines: ctrlWrapper(getMedicines),
};
