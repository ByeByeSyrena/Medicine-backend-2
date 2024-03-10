const { ctrlWrapper, httpError } = require("../../../helpers");

const { newPharmacy } = require("../../../models");

const deletePharmacy = async (req, res) => {
  const { id } = req.params;

  const result = await newPharmacy.findOneAndDelete({ id });

  if (result) {
    res.json({
      message: "Pharmacy was deleted",
    });
  } else {
    httpError(404, "Not found");
  }
};

module.exports = { deletePharmacy: ctrlWrapper(deletePharmacy) };
