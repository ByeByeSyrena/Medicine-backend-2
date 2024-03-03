const { ctrlWrapper, httpError } = require("../helpers");
const { Pharmacy } = require("../models");
const { ObjectId } = require("mongodb");

const getOneStore = async (req, res) => {
  const { id } = req.params;

  const pharmacy = await Pharmacy.findOne({ _id: id });

  if (!pharmacy) {
    httpError(404, "Not found");
  }

  const pharmacyWithIds = {
    ...pharmacy.toObject(),
    items: pharmacy.items.map((item) => ({
      _id: new ObjectId(),
      ...item.toObject(),
    })),
  };

  res.json(pharmacyWithIds);
};

module.exports = { getOneStore: ctrlWrapper(getOneStore) };
