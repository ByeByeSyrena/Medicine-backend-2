const { ctrlWrapper, httpError } = require("../../../helpers");

const { newMedicine } = require("../../../models");

const deleteMedicine = async (req, res) => {
  const { _id: seller } = req.user;
  const { id } = req.params;

  const result = await newMedicine.findOneAndDelete({ _id: id, seller });

  if (result) {
    res.json({
      message: "Medicine was deleted",
    });
  } else {
    httpError(404, "Not found");
  }
};

module.exports = { deleteMedicine: ctrlWrapper(deleteMedicine) };
