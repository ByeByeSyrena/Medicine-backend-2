const { ctrlWrapper } = require("../helpers");
const { Pharmacy } = require("../models");
const { ObjectId } = require("mongodb");

const getAllMedicines = async (req, res) => {
  const pharmacies = await Pharmacy.find();

  const medicinesWithIds = pharmacies.map((pharmacy) => ({
    ...pharmacy.toObject(),
    items: pharmacy.items.map((item) => ({
      _id: new ObjectId(),
      ...item.toObject(),
    })),
  }));

  res.json(medicinesWithIds);
};

module.exports = {
  getAllMedicines: ctrlWrapper(getAllMedicines),
};
