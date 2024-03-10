const { ctrlWrapper, httpError } = require("../../../helpers");

const { newMedicine } = require("../../../models");

const updateMedicine = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { _id: seller } = req.user;

  const result = await newMedicine.findOneAndUpdate({ _id: id, seller }, body, {
    new: true,
  });
  if (result) {
    res.json(result);
  } else {
    httpError(404, "Not found");
  }
};

module.exports = { updateMedicine: ctrlWrapper(updateMedicine) };
