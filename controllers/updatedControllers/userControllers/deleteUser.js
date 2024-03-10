const { ctrlWrapper, httpError } = require("../../../helpers");

const { User } = require("../../../models");

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const result = await User.findOneAndDelete({ id });

  if (result) {
    res.json({
      message: "User was deleted",
    });
  } else {
    httpError(404, "Not found");
  }
};

module.exports = { deleteUser: ctrlWrapper(deleteUser) };
