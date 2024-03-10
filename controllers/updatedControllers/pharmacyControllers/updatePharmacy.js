const { ctrlWrapper, httpError } = require("../../../helpers");

const { newPharmacy } = require("../../../models");

const updatePharmacy = async (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;

  const result = await newPharmacy.findOneAndUpdate(
    { _id: id },
    { name, role },
    {
      new: true,
    }
  );
  if (result) {
    res.json(result);
  } else {
    httpError(404, "Not found");
  }
};

module.exports = { updatePharmacy: ctrlWrapper(updatePharmacy) };
