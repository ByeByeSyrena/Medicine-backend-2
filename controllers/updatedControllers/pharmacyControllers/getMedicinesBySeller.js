const { ctrlWrapper } = require("../../../helpers");
const { newMedicine } = require("../../../models");

const getMedicinesBySeller = async (req, res) => {
  const { _id: seller } = req.pharmacy;

  const medicines = await newMedicine.find({ seller });
  res.json(medicines);
};

module.exports = {
  getMedicinesBySeller: ctrlWrapper(getMedicinesBySeller),
};
