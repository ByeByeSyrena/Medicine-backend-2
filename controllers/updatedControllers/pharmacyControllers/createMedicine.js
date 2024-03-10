const { ctrlWrapper } = require("../../../helpers");

const { newMedicine } = require("../../../models");

const createMedicine = async (req, res) => {
  const { _id: seller } = req.pharmacy;
  const result = await newMedicine.create({ ...req.body, seller });
  res.status(201).json(result);
};

module.exports = {
  createMedicine: ctrlWrapper(createMedicine),
};
