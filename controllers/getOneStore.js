const { ctrlWrapper, httpError } = require("../helpers");

const { Pharmacy } = require("../models");

const getOneStore = async (req, res) => {
  const { id } = req.params;

  const pharmacy = await Pharmacy.findOne({ _id: id });

  if (!pharmacy) {
    httpError(404, "Not found");
  }

  res.json(pharmacy);
};

module.exports = { getOneStore: ctrlWrapper(getOneStore) };
